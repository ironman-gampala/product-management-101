export type ModeId =
  | "research"
  | "product-planning"
  | "code-helpers"
  | "open-ended";

export type RunEvent =
  | { type: "agent_start"; agent: string }
  | { type: "tool_call"; agent: string; name: string; args: unknown }
  | { type: "tool_result"; agent: string; name: string; result: string }
  | { type: "agent_message"; agent: string; content: string }
  | { type: "error"; agent?: string; message: string };

export type TranscriptMessage = {
  agent: string;
  content: string;
};

export type AgentDef = {
  id: string;
  name: string;
  skillPath: string;
};

export type RunStatus = "ok" | "error";

export type RunResult = {
  id: string;
  status: RunStatus;
  mode: ModeId;
  goal: string;
  events: RunEvent[];
  transcript: TranscriptMessage[];
  error?: string;
};

export type ChatToolCall = {
  id: string;
  type: "function";
  function: { name: string; arguments: string };
};

export type ChatMessage = {
  role: "system" | "user" | "assistant" | "tool";
  content: string | null;
  tool_calls?: ChatToolCall[];
  tool_call_id?: string;
  name?: string;
};

export type ChatCompletionLike = {
  choices: Array<{
    message: {
      role: "assistant";
      content: string | null;
      tool_calls?: ChatToolCall[];
    };
  }>;
};

export type ChatClient = {
  complete(params: {
    model: string;
    messages: ChatMessage[];
    tools?: unknown[];
  }): Promise<ChatCompletionLike>;
};
