import { readFile } from "node:fs/promises";
import {
  TOOL_DEFINITIONS,
  createToolHandlers,
  executeTool,
  type Scratchpad,
} from "./tools.js";
import type {
  ChatClient,
  ChatMessage,
  RunEvent,
  TranscriptMessage,
} from "./types.js";
import { formatTranscriptForPrompt } from "./llm.js";

const DEFAULT_MAX_TOOL_ROUNDS = 5;

export type RunAgentTurnOptions = {
  name: string;
  skillPath?: string;
  skillMarkdown?: string;
  goal: string;
  transcript: TranscriptMessage[];
  scratchpad: Scratchpad;
  chat: ChatClient;
  model: string;
  maxToolRounds?: number;
};

export async function runAgentTurn(
  opts: RunAgentTurnOptions,
): Promise<{ events: RunEvent[]; message: string }> {
  const maxToolRounds = opts.maxToolRounds ?? DEFAULT_MAX_TOOL_ROUNDS;
  const events: RunEvent[] = [{ type: "agent_start", agent: opts.name }];
  const skill =
    opts.skillMarkdown ??
    (opts.skillPath
      ? await readFile(opts.skillPath, "utf8")
      : (() => {
          throw new Error(`Agent ${opts.name}: skillPath or skillMarkdown required`);
        })());
  const handlers = createToolHandlers(opts.scratchpad);

  const messages: ChatMessage[] = [
    {
      role: "system",
      content: `${skill.trim()}\n\nYou are participating in a multi-agent run. Use tools when they help. When finished, reply with your final answer as plain text (no tool calls).`,
    },
    {
      role: "user",
      content: `Goal:\n${opts.goal}\n\nShared transcript so far:\n${formatTranscriptForPrompt(opts.transcript)}\n\nTake your turn as ${opts.name}.`,
    },
  ];

  for (let round = 0; round <= maxToolRounds; round++) {
    const completion = await opts.chat.complete({
      model: opts.model,
      messages,
      tools: TOOL_DEFINITIONS,
    });
    const msg = completion.choices[0]?.message;
    if (!msg) {
      throw new Error(`Agent ${opts.name}: empty completion from model`);
    }

    const toolCalls = msg.tool_calls ?? [];
    if (toolCalls.length === 0) {
      const content = (msg.content ?? "").trim();
      if (!content) {
        throw new Error(`Agent ${opts.name}: empty final message`);
      }
      events.push({
        type: "agent_message",
        agent: opts.name,
        content,
      });
      return { events, message: content };
    }

    if (round === maxToolRounds) {
      throw new Error(
        `Agent ${opts.name}: exceeded tool round cap (${maxToolRounds})`,
      );
    }

    messages.push({
      role: "assistant",
      content: msg.content,
      tool_calls: toolCalls,
    });

    for (const call of toolCalls) {
      let args: Record<string, unknown> = {};
      try {
        args = JSON.parse(call.function.arguments || "{}") as Record<
          string,
          unknown
        >;
      } catch {
        args = {};
      }
      events.push({
        type: "tool_call",
        agent: opts.name,
        name: call.function.name,
        args,
      });
      const result = await executeTool(call.function.name, args, handlers);
      events.push({
        type: "tool_result",
        agent: opts.name,
        name: call.function.name,
        result,
      });
      messages.push({
        role: "tool",
        tool_call_id: call.id,
        content: result,
      });
    }
  }

  throw new Error(`Agent ${opts.name}: exceeded tool round cap (${maxToolRounds})`);
}
