import { describe, it, expect } from "vitest";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { runAgentTurn } from "../src/agent.js";
import { Scratchpad } from "../src/tools.js";
import type { ChatClient, ChatCompletionLike } from "../src/types.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const skillPath = path.join(root, "skills/researcher/SKILL.md");

function mockChat(sequence: ChatCompletionLike[]): ChatClient {
  let i = 0;
  return {
    async complete() {
      const next = sequence[i++];
      if (!next) throw new Error("Unexpected extra chat.complete call");
      return next;
    },
  };
}

describe("runAgentTurn", () => {
  it("runs a tool then returns a final message", async () => {
    const chat = mockChat([
      {
        choices: [
          {
            message: {
              role: "assistant",
              content: null,
              tool_calls: [
                {
                  id: "call_1",
                  type: "function",
                  function: {
                    name: "calculator",
                    arguments: JSON.stringify({ expression: "2 + 2" }),
                  },
                },
              ],
            },
          },
        ],
      },
      {
        choices: [
          {
            message: {
              role: "assistant",
              content: "The sum is 4.",
            },
          },
        ],
      },
    ]);

    const { events, message } = await runAgentTurn({
      name: "Researcher",
      skillPath,
      goal: "Compute 2+2",
      transcript: [],
      scratchpad: new Scratchpad(),
      chat,
      model: "gpt-4o-mini",
    });

    expect(message).toBe("The sum is 4.");
    expect(events.some((e) => e.type === "tool_call")).toBe(true);
    expect(events.some((e) => e.type === "tool_result")).toBe(true);
    expect(events.some((e) => e.type === "agent_message")).toBe(true);
  });

  it("fails when tool round cap is exceeded", async () => {
    const toolOnly: ChatCompletionLike = {
      choices: [
        {
          message: {
            role: "assistant",
            content: null,
            tool_calls: [
              {
                id: "call_x",
                type: "function",
                function: {
                  name: "calculator",
                  arguments: JSON.stringify({ expression: "1+1" }),
                },
              },
            ],
          },
        },
      ],
    };
    const chat = mockChat([
      toolOnly,
      toolOnly,
      toolOnly,
      toolOnly,
      toolOnly,
      toolOnly,
    ]);

    await expect(
      runAgentTurn({
        name: "Researcher",
        skillPath,
        goal: "loop",
        transcript: [],
        scratchpad: new Scratchpad(),
        chat,
        model: "gpt-4o-mini",
        maxToolRounds: 5,
      }),
    ).rejects.toThrow(/tool round cap/);
  });
});
