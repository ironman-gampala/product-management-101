import path from "node:path";
import { fileURLToPath } from "node:url";
import Fastify from "fastify";
import fastifyStatic from "@fastify/static";
import { createOpenAIChatClient } from "./llm.js";
import { runOrchestration } from "./orchestrator.js";
import type { ModeId, RunResult } from "./types.js";

const MODES: ModeId[] = [
  "research",
  "product-planning",
  "code-helpers",
  "open-ended",
];

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");
const runs = new Map<string, RunResult>();

export function buildServer() {
  const app = Fastify({
    logger: true,
    requestTimeout: 120_000,
  });

  app.get("/health", async () => ({ ok: true }));

  app.get<{ Params: { id: string } }>("/api/runs/:id", async (req, reply) => {
    const run = runs.get(req.params.id);
    if (!run) {
      return reply.code(404).send({ error: "Run not found" });
    }
    return run;
  });

  app.post<{
    Body: { mode?: string; goal?: string; roles?: string[] };
  }>("/api/runs", async (req, reply) => {
    const apiKey = process.env.OPENAI_API_KEY;
    if (!apiKey) {
      return reply
        .code(503)
        .send({ error: "OPENAI_API_KEY is not configured on the server" });
    }

    const mode = req.body?.mode as ModeId | undefined;
    const goal = typeof req.body?.goal === "string" ? req.body.goal.trim() : "";
    const roles = Array.isArray(req.body?.roles)
      ? req.body.roles.map(String)
      : undefined;

    if (!mode || !MODES.includes(mode)) {
      return reply
        .code(400)
        .send({ error: `mode must be one of: ${MODES.join(", ")}` });
    }
    if (!goal) {
      return reply.code(400).send({ error: "goal is required" });
    }
    if (mode === "open-ended") {
      const cleaned = (roles ?? []).map((r) => r.trim()).filter(Boolean);
      if (cleaned.length < 2 || cleaned.length > 3) {
        return reply
          .code(400)
          .send({ error: "open-ended mode requires 2 or 3 role names" });
      }
    }

    const model = process.env.OPENAI_MODEL || "gpt-4o-mini";
    const chat = createOpenAIChatClient(apiKey);
    const result = await runOrchestration({
      mode,
      goal,
      roles,
      chat,
      model,
    });
    runs.set(result.id, result);
    const code = result.status === "ok" ? 200 : 500;
    return reply.code(code).send(result);
  });

  app.register(fastifyStatic, {
    root: path.join(root, "public"),
    prefix: "/",
  });

  return app;
}
