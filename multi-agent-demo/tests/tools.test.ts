import { describe, it, expect } from "vitest";
import {
  Scratchpad,
  evalCalculator,
  executeTool,
  createToolHandlers,
} from "../src/tools.js";

describe("evalCalculator", () => {
  it("adds and multiplies with precedence", () => {
    expect(evalCalculator("2 + 3 * 4")).toBe("14");
  });

  it("rejects unsafe input", () => {
    expect(() => evalCalculator("process.exit(1)")).toThrow();
  });
});

describe("Scratchpad", () => {
  it("writes and reads notes", async () => {
    const pad = new Scratchpad();
    const handlers = createToolHandlers(pad);
    await executeTool(
      "scratchpad_write",
      { name: "facts", content: "hello" },
      handlers,
    );
    const out = await executeTool(
      "scratchpad_read",
      { name: "facts" },
      handlers,
    );
    expect(out).toContain("hello");
  });
});
