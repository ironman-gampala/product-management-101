import OpenAI from "openai";
import type { ChatClient, ChatCompletionLike, ChatMessage } from "./types.js";

export function createOpenAIChatClient(apiKey: string): ChatClient {
  const client = new OpenAI({ apiKey });
  return {
    async complete({ model, messages, tools }) {
      const completion = await client.chat.completions.create({
        model,
        messages: messages as OpenAI.Chat.ChatCompletionMessageParam[],
        tools: tools as OpenAI.Chat.ChatCompletionTool[] | undefined,
      });
      return completion as ChatCompletionLike;
    },
  };
}

export function formatTranscriptForPrompt(
  transcript: Array<{ agent: string; content: string }>,
): string {
  if (transcript.length === 0) return "(No prior agent messages yet.)";
  return transcript
    .map((m) => `### ${m.agent}\n${m.content}`)
    .join("\n\n");
}

export type { ChatClient, ChatMessage, ChatCompletionLike };
