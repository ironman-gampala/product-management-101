import { randomUUID } from "node:crypto";
import { runAgentTurn } from "./agent.js";
import { buildOpenEndedRoleSkill, getModeConfig } from "./modes.js";
import { Scratchpad } from "./tools.js";
import type {
  ChatClient,
  ModeId,
  RunEvent,
  RunResult,
  TranscriptMessage,
} from "./types.js";

export type OrchestrationInput = {
  mode: ModeId;
  goal: string;
  roles?: string[];
  chat: ChatClient;
  model: string;
  id?: string;
};

export async function runOrchestration(
  input: OrchestrationInput,
): Promise<RunResult> {
  const id = input.id ?? randomUUID();
  const events: RunEvent[] = [];
  const transcript: TranscriptMessage[] = [];
  const scratchpad = new Scratchpad();

  try {
    const config = getModeConfig(input.mode, input.roles);

    if (config.kind === "pipeline") {
      for (const agent of config.agents) {
        const turn = await runAgentTurn({
          name: agent.name,
          skillPath: agent.skillPath,
          goal: input.goal,
          transcript,
          scratchpad,
          chat: input.chat,
          model: input.model,
        });
        events.push(...turn.events);
        transcript.push({ agent: agent.name, content: turn.message });
      }
    } else {
      for (let round = 1; round <= config.rounds; round++) {
        for (const agent of config.agents) {
          const turn = await runAgentTurn({
            name: `${agent.name} (round ${round})`,
            skillMarkdown: buildOpenEndedRoleSkill(agent.name),
            goal: `${input.goal}\n\n(Debate round ${round} of ${config.rounds})`,
            transcript,
            scratchpad,
            chat: input.chat,
            model: input.model,
          });
          events.push(...turn.events);
          transcript.push({
            agent: `${agent.name} (round ${round})`,
            content: turn.message,
          });
        }
      }
      const mod = await runAgentTurn({
        name: config.moderator.name,
        skillPath: config.moderator.skillPath,
        goal: input.goal,
        transcript,
        scratchpad,
        chat: input.chat,
        model: input.model,
      });
      events.push(...mod.events);
      transcript.push({
        agent: config.moderator.name,
        content: mod.message,
      });
    }

    return {
      id,
      status: "ok",
      mode: input.mode,
      goal: input.goal,
      events,
      transcript,
    };
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    events.push({ type: "error", message });
    return {
      id,
      status: "error",
      mode: input.mode,
      goal: input.goal,
      events,
      transcript,
      error: message,
    };
  }
}
