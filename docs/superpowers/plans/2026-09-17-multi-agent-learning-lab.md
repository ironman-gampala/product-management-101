# Multi-Agent Learning Lab Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a deployable TypeScript learning lab in `multi-agent-demo/` where skill-loaded agents use tools and an orchestrator runs four multi-agent modes.

**Architecture:** Fastify monolith serves a static UI and `POST /api/runs`. Each agent turn loads a SKILL.md, runs an OpenAI Chat Completions tool loop (scratchpad, fetch_url, calculator), and appends to a shared transcript. Pipeline modes run agents in sequence; open-ended runs debate rounds then a moderator.

**Tech Stack:** Node.js 20+, TypeScript, Fastify, OpenAI SDK, Vitest, static HTML/CSS/JS

## Global Constraints

- Project root: `multi-agent-demo/` under the PM101 workspace
- Default model: `gpt-4o-mini` via `OPENAI_MODEL` env override
- Secrets only in `.env` / Railway (never commit keys)
- Max 5 tool rounds per agent turn; exceed → fail that turn with explicit error
- Runs stored in-memory `Map` only
- No auth, DB, Cursor SDK, or SSE in v1
- Skip git commits unless the user explicitly asks (workspace may not be a git root)

## File Structure

```
multi-agent-demo/
  package.json
  tsconfig.json
  vitest.config.ts
  .env.example
  .gitignore
  README.md
  src/
    types.ts
    tools.ts
    llm.ts
    agent.ts
    modes.ts
    orchestrator.ts
    server.ts
    index.ts
  skills/
    researcher/SKILL.md
    synthesizer/SKILL.md
    critic/SKILL.md
    problem-framer/SKILL.md
    ideator/SKILL.md
    prioritizer/SKILL.md
    planner/SKILL.md
    coder/SKILL.md
    reviewer/SKILL.md
    moderator/SKILL.md
  public/
    index.html
    app.js
    styles.css
  tests/
    tools.test.ts
    agent.test.ts
    orchestrator.test.ts
```

---

### Task 1: Scaffold + calculator & scratchpad tools

**Files:**
- Create: `multi-agent-demo/package.json`
- Create: `multi-agent-demo/tsconfig.json`
- Create: `multi-agent-demo/vitest.config.ts`
- Create: `multi-agent-demo/.gitignore`
- Create: `multi-agent-demo/.env.example`
- Create: `multi-agent-demo/src/types.ts`
- Create: `multi-agent-demo/src/tools.ts`
- Create: `multi-agent-demo/tests/tools.test.ts`

**Interfaces:**
- Produces: `Scratchpad` class; `createToolHandlers(scratchpad)`; `TOOL_DEFINITIONS` for OpenAI; `evalCalculator(expr: string): string`; `executeTool(name, args, handlers): Promise<string>`

- [ ] **Step 1: Create package.json and tsconfig**

`package.json`:
```json
{
  "name": "multi-agent-demo",
  "version": "1.0.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "tsx watch src/index.ts",
    "build": "tsc",
    "start": "node dist/index.js",
    "test": "vitest run"
  },
  "engines": { "node": ">=20" },
  "dependencies": {
    "@fastify/static": "^8.0.0",
    "dotenv": "^16.4.5",
    "fastify": "^5.0.0",
    "openai": "^4.70.0"
  },
  "devDependencies": {
    "@types/node": "^22.0.0",
    "tsx": "^4.19.0",
    "typescript": "^5.6.0",
    "vitest": "^2.1.0"
  }
}
```

`tsconfig.json`:
```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true
  },
  "include": ["src"]
}
```

`vitest.config.ts`:
```ts
import { defineConfig } from "vitest/config";
export default defineConfig({ test: { environment: "node" } });
```

`.gitignore`: `node_modules/`, `dist/`, `.env`, `.DS_Store`

`.env.example`:
```
OPENAI_API_KEY=
OPENAI_MODEL=gpt-4o-mini
PORT=3000
```

- [ ] **Step 2: Write failing tools tests**

```ts
import { describe, it, expect } from "vitest";
import { Scratchpad, evalCalculator, executeTool, createToolHandlers } from "../src/tools.js";

describe("evalCalculator", () => {
  it("adds numbers", () => {
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
    await executeTool("scratchpad_write", { name: "facts", content: "hello" }, handlers);
    const out = await executeTool("scratchpad_read", { name: "facts" }, handlers);
    expect(out).toContain("hello");
  });
});
```

- [ ] **Step 3: Run tests — expect FAIL**

Run: `cd multi-agent-demo && npm install && npm test`
Expected: FAIL (modules missing)

- [ ] **Step 4: Implement types + tools**

`src/types.ts` — define `RunEvent`, `TranscriptMessage`, `AgentDef`, `ModeId`, `RunResult`.

`src/tools.ts` — implement safe calculator (allow only `[0-9+\-*/().\s]` then `Function` or recursive descent), Scratchpad Map, fetch_url with 8s timeout and 50kb cap, TOOL_DEFINITIONS array matching OpenAI function tools format, createToolHandlers, executeTool.

- [ ] **Step 5: Run tests — expect PASS**

Run: `npm test`
Expected: PASS

---

### Task 2: Agent runner with mocked OpenAI

**Files:**
- Create: `multi-agent-demo/src/llm.ts`
- Create: `multi-agent-demo/src/agent.ts`
- Create: `multi-agent-demo/tests/agent.test.ts`
- Create: skill stubs used by agent (at least `skills/researcher/SKILL.md`)

**Interfaces:**
- Consumes: tools from Task 1
- Produces: `runAgentTurn(opts): Promise<{ events: RunEvent[]; message: string }>`  
  opts: `{ name, skillPath, goal, transcript, scratchpad, chat: ChatClient, model, maxToolRounds?: number }`  
  `ChatClient` interface: `complete(params): Promise<ChatCompletionLike>` for mocking

- [ ] **Step 1: Write failing agent test**

Mock chat that first returns a calculator tool_call, then returns final text. Assert events include `tool_call`, `tool_result`, `agent_message`, and message is the final text. Second test: 5 tool-only responses → status error / throw with "tool round cap".

- [ ] **Step 2: Implement llm.ts + agent.ts**

`llm.ts`: real OpenAI client wrapping Chat Completions; export type for mock.  
`agent.ts`: load skill file from disk; loop; execute tools; emit events; on cap throw Error with clear message.

- [ ] **Step 3: `npm test` — PASS**

---

### Task 3: Modes, skills, orchestrator

**Files:**
- Create: all remaining `skills/*/SKILL.md`
- Create: `multi-agent-demo/src/modes.ts`
- Create: `multi-agent-demo/src/orchestrator.ts`
- Create: `multi-agent-demo/tests/orchestrator.test.ts`

**Interfaces:**
- Produces: `getModeConfig(mode, roles?): { kind: "pipeline"|"debate"; agents: AgentDef[]; rounds?: number }`  
  `runOrchestration({ mode, goal, roles, chat }): Promise<RunResult>`

- [ ] **Step 1: Write orchestrator test with mock runAgentTurn / mock chat**

Assert Research mode calls agents in order researcher → synthesizer → critic (spy on names). Assert open-ended with 2 roles runs debate then moderator.

- [ ] **Step 2: Write all SKILL.md files** (short: role, when to use tools, output format)

- [ ] **Step 3: Implement modes.ts + orchestrator.ts**

- [ ] **Step 4: `npm test` — PASS**

---

### Task 4: HTTP server + UI

**Files:**
- Create: `multi-agent-demo/src/server.ts`
- Create: `multi-agent-demo/src/index.ts`
- Create: `multi-agent-demo/public/index.html`
- Create: `multi-agent-demo/public/app.js`
- Create: `multi-agent-demo/public/styles.css`
- Create: `multi-agent-demo/README.md`

**Interfaces:**
- Produces: `buildServer(): FastifyInstance` with `GET /health`, `POST /api/runs`, `GET /api/runs/:id`, static files from `public/`

- [ ] **Step 1: Implement server + index**

Validate body: mode in enum; goal non-empty string; open-ended requires roles length 2–3. Missing API key → 503. Store runs in Map. requestTimeout 120000.

- [ ] **Step 2: Implement UI**

Mode select, goal, roles (shown only for open-ended), Run button, timeline rendering events (agent, tools, messages), short teaching blurb.

- [ ] **Step 3: README**

Explain three layers; local setup; Railway (root directory `multi-agent-demo`, start `npm start`, build `npm run build`, env vars); remind not to commit keys.

- [ ] **Step 4: Manual smoke**

With `.env` set: `npm run dev`, POST research run or use UI, confirm tool events appear.

---

### Task 5: Railway readiness

**Files:**
- Create: `multi-agent-demo/railway.toml` (optional) or document in README only
- Modify: `package.json` if needed for `engines`

- [ ] **Step 1: Ensure `npm run build && npm start` works**
- [ ] **Step 2: Document Railway steps in README** (root dir, env, health `/health`)

---

## Spec coverage checklist

| Spec item | Task |
|-----------|------|
| Four modes + hybrid flows | 3 |
| Skills markdown | 3 |
| Tools: scratchpad, fetch_url, calculator | 1 |
| Agent tool loop + cap | 2 |
| Orchestrator | 3 |
| API + in-memory runs | 4 |
| UI event timeline | 4 |
| Health + Railway | 4–5 |
| Unit tests | 1–3 |
| README teaching layers | 4 |
