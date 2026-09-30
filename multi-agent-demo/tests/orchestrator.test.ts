import { describe, it, expect } from "vitest";
import { runOrchestration } from "../src/orchestrator.js";
import type { ChatClient, ChatCompletionLike } from "../src/types.js";

function textReply(content: string): ChatCompletionLike {
  return {
    choices: [{ message: { role: "assistant", content } }],
  };
}

describe("runOrchestration", () => {
  it("runs research agents in order", async () => {
    const names: string[] = [];
    const chat: ChatClient = {
      async complete({ messages }) {
        const user = messages.find((m) => m.role === "user")?.content ?? "";
        const match = /Take your turn as ([^.]+)\./.exec(String(user));
        if (match) names.push(match[1]);
        return textReply(`Reply from ${match?.[1] ?? "unknown"}`);
      },
    };

    const result = await runOrchestration({
      mode: "research",
      goal: "Explain RAG vs fine-tuning briefly",
      chat,
      model: "gpt-4o-mini",
    });

    expect(result.status).toBe("ok");
    expect(names).toEqual(["Researcher", "Synthesizer", "Critic"]);
    expect(result.transcript.map((t) => t.agent)).toEqual([
      "Researcher",
      "Synthesizer",
      "Critic",
    ]);
  });

  it("runs open-ended debate then moderator", async () => {
    const chat: ChatClient = {
      async complete() {
        return textReply("ok");
      },
    };

    const result = await runOrchestration({
      mode: "open-ended",
      goal: "Should we build X?",
      roles: ["Optimist", "Skeptic"],
      chat,
      model: "gpt-4o-mini",
    });

    expect(result.status).toBe("ok");
    expect(result.transcript.map((t) => t.agent)).toEqual([
      "Optimist (round 1)",
      "Skeptic (round 1)",
      "Optimist (round 2)",
      "Skeptic (round 2)",
      "Moderator",
    ]);
  });
});
