export class Scratchpad {
  private notes = new Map<string, string>();

  write(name: string, content: string): void {
    this.notes.set(name, content);
  }

  read(name?: string): string {
    if (name) {
      const value = this.notes.get(name);
      if (value === undefined) return `No note named "${name}".`;
      return value;
    }
    if (this.notes.size === 0) return "Scratchpad is empty.";
    return [...this.notes.entries()]
      .map(([k, v]) => `## ${k}\n${v}`)
      .join("\n\n");
  }
}

const SAFE_EXPR = /^[0-9+\-*/().\s]+$/;

export function evalCalculator(expression: string): string {
  const expr = expression.trim();
  if (!expr) throw new Error("Empty expression");
  if (!SAFE_EXPR.test(expr)) {
    throw new Error("Calculator only allows numbers and + - * / ( )");
  }
  // eslint-disable-next-line no-new-func
  const value = Function(`"use strict"; return (${expr});`)();
  if (typeof value !== "number" || !Number.isFinite(value)) {
    throw new Error("Expression did not evaluate to a finite number");
  }
  return String(value);
}

const FETCH_TIMEOUT_MS = 8_000;
const FETCH_MAX_BYTES = 50_000;

export async function fetchUrl(url: string): Promise<string> {
  let parsed: URL;
  try {
    parsed = new URL(url);
  } catch {
    return "Error: invalid URL";
  }
  if (parsed.protocol !== "http:" && parsed.protocol !== "https:") {
    return "Error: only http/https URLs are allowed";
  }

  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), FETCH_TIMEOUT_MS);
  try {
    const res = await fetch(parsed.toString(), {
      signal: controller.signal,
      headers: { "user-agent": "multi-agent-demo/1.0" },
      redirect: "follow",
    });
    const buf = await res.arrayBuffer();
    const slice = buf.byteLength > FETCH_MAX_BYTES ? buf.slice(0, FETCH_MAX_BYTES) : buf;
    const text = new TextDecoder("utf-8", { fatal: false }).decode(slice);
    const truncated =
      buf.byteLength > FETCH_MAX_BYTES
        ? `\n\n[truncated to ${FETCH_MAX_BYTES} bytes]`
        : "";
    return `HTTP ${res.status}\n${text}${truncated}`;
  } catch (err) {
    const message = err instanceof Error ? err.message : String(err);
    return `Error fetching URL: ${message}`;
  } finally {
    clearTimeout(timer);
  }
}

export type ToolHandlers = {
  scratchpad_write: (args: { name: string; content: string }) => Promise<string>;
  scratchpad_read: (args: { name?: string }) => Promise<string>;
  fetch_url: (args: { url: string }) => Promise<string>;
  calculator: (args: { expression: string }) => Promise<string>;
};

export function createToolHandlers(scratchpad: Scratchpad): ToolHandlers {
  return {
    async scratchpad_write(args) {
      if (!args?.name || typeof args.content !== "string") {
        return "Error: name and content are required";
      }
      scratchpad.write(String(args.name), args.content);
      return `Wrote note "${args.name}" (${args.content.length} chars).`;
    },
    async scratchpad_read(args) {
      return scratchpad.read(args?.name ? String(args.name) : undefined);
    },
    async fetch_url(args) {
      if (!args?.url) return "Error: url is required";
      return fetchUrl(String(args.url));
    },
    async calculator(args) {
      try {
        return evalCalculator(String(args?.expression ?? ""));
      } catch (err) {
        return `Error: ${err instanceof Error ? err.message : String(err)}`;
      }
    },
  };
}

export async function executeTool(
  name: string,
  args: Record<string, unknown>,
  handlers: ToolHandlers,
): Promise<string> {
  switch (name) {
    case "scratchpad_write":
      return handlers.scratchpad_write(
        args as { name: string; content: string },
      );
    case "scratchpad_read":
      return handlers.scratchpad_read(args as { name?: string });
    case "fetch_url":
      return handlers.fetch_url(args as { url: string });
    case "calculator":
      return handlers.calculator(args as { expression: string });
    default:
      return `Error: unknown tool "${name}"`;
  }
}

export const TOOL_DEFINITIONS = [
  {
    type: "function" as const,
    function: {
      name: "scratchpad_write",
      description:
        "Write a named note to the shared scratchpad so other agents can read it later.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Note name / key" },
          content: { type: "string", description: "Note body" },
        },
        required: ["name", "content"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "scratchpad_read",
      description:
        "Read a note from the shared scratchpad. Omit name to list all notes.",
      parameters: {
        type: "object",
        properties: {
          name: { type: "string", description: "Optional note name" },
        },
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "fetch_url",
      description:
        "Fetch a public http(s) URL and return text (size-limited). Use for primary sources when the goal includes a URL.",
      parameters: {
        type: "object",
        properties: {
          url: { type: "string", description: "Absolute URL" },
        },
        required: ["url"],
      },
    },
  },
  {
    type: "function" as const,
    function: {
      name: "calculator",
      description: "Evaluate a simple arithmetic expression with + - * / and parentheses.",
      parameters: {
        type: "object",
        properties: {
          expression: { type: "string", description: "e.g. 2 + 3 * 4" },
        },
        required: ["expression"],
      },
    },
  },
];
