# Multi-Agent Learning Lab — Design

**Date:** 2026-09-17  
**Status:** Draft for review  
**Goal:** A deployable TypeScript app that teaches how LLMs, tools, skills, single agents, and multi-agent orchestration fit together.

## Problem

People hear “agents” and “multi-agent” without seeing the layers. This project is a small, runnable lab: one agent loop with skills + tools, then an orchestrator that runs several agents with a shared transcript.

## Goals

- Learn: LLM call → tool loop → skill-loaded agent → multi-agent orchestration
- Portfolio-ready demo with four modes
- Deployable on Railway as a single service
- UI shows who spoke, tool calls, and final answers

## Non-goals (v1)

- Auth, user accounts, persistent DB
- Vector memory / RAG
- Cursor SDK / cloud coding agents
- Production-grade web search APIs (optional later)
- Separate frontend deploy

## Architecture

Monolith (Approach 1):

```
Browser UI  →  POST /api/runs  →  Orchestrator
                                      │
                 ┌────────────────────┼────────────────────┐
                 ▼                    ▼                    ▼
           Mode + skills        Agent runner           Shared state
           (markdown)           (LLM + tools loop)     (transcript,
                                                        scratchpad)
```

- **Stack:** Node.js, TypeScript, Fastify, OpenAI Chat Completions API with function calling, static UI in `public/`
- **Deploy:** One Railway service; `OPENAI_API_KEY` as env var; `GET /health`
- **Location:** `multi-agent-demo/` under the Product Management 101 workspace

## Concepts taught (three layers)

1. **LLM** — model that completes a message list  
2. **Agent** — LLM + skill instructions + tools + turn loop (model may call tools until it returns a final answer)  
3. **Multi-agent** — orchestrator runs several agents; they share a transcript and scratchpad  

## Components

### Modes

| Mode | Agents | Flow |
|------|--------|------|
| Research | Researcher → Synthesizer → Critic | Sequential pipeline |
| Product planning | Problem-framer → Ideator → Prioritizer | Sequential pipeline |
| Code helpers | Planner → Coder → Reviewer | Sequential pipeline |
| Open-ended | User-named roles (2–3) + Moderator | 2–3 debate rounds → summary |

### Skills

- Each agent loads `skills/<agent-id>/SKILL.md` (instructions, when to use tools, output shape)
- Open-ended mode: short generated role skill from the user’s role names, plus a fixed Moderator skill

### Tools (OpenAI function calling)

| Tool | Purpose |
|------|---------|
| `scratchpad_write` | Write a named note other agents can read |
| `scratchpad_read` | Read notes by name or list all |
| `fetch_url` | GET a public URL (timeout, max body size, text only) |
| `calculator` | Evaluate a simple arithmetic expression |

Tool results are appended to the agent’s message list; the loop continues until the model returns content without tool calls (cap: e.g. 5 tool rounds per agent turn).

### Agent runner

For one agent turn:

1. Build system message from skill markdown + mode context  
2. Attach shared transcript (prior agent messages) and available tool schemas  
3. Call OpenAI; if `tool_calls`, execute tools, append results, repeat  
4. Emit structured events: `agent_start`, `tool_call`, `tool_result`, `agent_message`  
5. Append final assistant text to the shared transcript  

### Orchestrator

- **Pipeline:** run agents in order; each sees full transcript so far  
- **Debate:** for each round, each role agent speaks once; then Moderator summarizes  
- Stop on max agents/rounds or on OpenAI/tool errors (surface error in run result)

### API

- `GET /health` → `{ ok: true }`  
- `POST /api/runs` body: `{ mode, goal, roles?: string[] }`  
  - Validates mode; for `open-ended`, requires 2–3 role names  
  - Runs orchestration synchronously for v1  
  - Returns `{ id, status, events, transcript, error? }`  
- `GET /api/runs/:id` → same payload from in-memory store (lost on restart; fine for v1)

### UI (`public/`)

- Mode picker, goal textarea, optional role inputs for open-ended  
- “Run” button; loading state  
- Timeline of events: agent name, tool calls (name + args + result preview), messages  
- Short “what you’re seeing” blurb mapping UI → LLM / agent / multi-agent  

## Data flow

1. User submits mode + goal (+ roles)  
2. Server creates run id, empty transcript + scratchpad  
3. Orchestrator selects agent sequence from mode config  
4. Each agent turn: skill load → LLM/tool loop → events + transcript update  
5. Response returns full event log for the UI  

No database; `Map` in process memory.

## Error handling

- Missing `OPENAI_API_KEY` → 503 on run with clear message  
- Invalid body → 400  
- OpenAI failures → run `status: "error"`, include message; partial events kept  
- `fetch_url` failures → tool result string with error (agent can recover)  
- Tool round cap exceeded → fail that agent turn with an explicit error in the event log  
 
- Request timeout: set a generous server timeout suitable for multi-agent runs (e.g. 120s); document Railway timeout limits  

## Config & secrets

- `.env` locally (gitignored): `OPENAI_API_KEY`, `PORT`, optional `OPENAI_MODEL` (default `gpt-4o-mini` for cost)  
- Railway: same vars in dashboard  
- Never commit keys; rotate any key pasted in chat  

## Testing

- Unit: calculator tool; scratchpad read/write; URL fetch size/timeout guards (mock fetch)  
- Unit: agent runner stops after N tool rounds (mock OpenAI)  
- Unit: orchestrator pipeline order for Research mode (mock agent runner)  
- Manual: one happy-path run per mode locally before deploy  

## Project layout (target)

```
multi-agent-demo/
  package.json
  tsconfig.json
  .env.example
  README.md          # how it teaches agents + Railway deploy
  src/
    server.ts
    llm.ts
    tools.ts
    agent.ts
    orchestrator.ts
    modes.ts
    types.ts
  skills/
    researcher/SKILL.md
    synthesizer/SKILL.md
    critic/SKILL.md
    ...
  public/
    index.html
    app.js
    styles.css
```

## Success criteria

- Local `npm run dev` runs a Research mode end-to-end with visible tool calls  
- All four modes work  
- Deployed on Railway; `/health` OK; one successful remote run with env key set  
- README explains the three layers in plain language  

## Future (explicitly later)

- SSE streaming of events  
- Real search tool  
- Persist runs to SQLite/Postgres  
- Cursor SDK comparison chapter  
