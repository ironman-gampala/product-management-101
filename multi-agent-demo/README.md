# Multi-Agent Learning Lab

A small deployable demo that teaches how **LLMs**, **agents** (skills + tools), and **multi-agent orchestration** fit together.

## What you are learning

1. **LLM** — a model that completes a list of messages  
2. **Agent** — LLM + a skill file (`skills/*/SKILL.md`) + tools (function calling) + a loop until it answers  
3. **Multi-agent** — an orchestrator runs several agents; they share a transcript and scratchpad  

The UI timeline shows tool calls and messages so you can see each layer.

## Modes

| Mode | Flow |
|------|------|
| Research | Researcher → Synthesizer → Critic |
| Product planning | Problem Framer → Ideator → Prioritizer |
| Code helpers | Planner → Coder → Reviewer |
| Open-ended | 2–3 named roles debate (2 rounds) → Moderator |

## Local setup

```bash
cd multi-agent-demo
cp .env.example .env
# put OPENAI_API_KEY in .env (never commit .env)
npm install
npm test
npm run dev
```

Open http://localhost:3000

## Scripts

- `npm run dev` — TypeScript via `tsx` with reload  
- `npm test` — Vitest unit tests (mocked OpenAI)  
- `npm run build` && `npm start` — production build  

## Railway deploy

1. Create a new Railway project from this folder (set **Root Directory** to `multi-agent-demo` if the repo is the parent PM101 folder).  
2. Build: `npm run build`  
3. Start: `npm start`  
4. Variables: `OPENAI_API_KEY`, optional `OPENAI_MODEL` (default `gpt-4o-mini`), `PORT` is provided by Railway.  
5. Health check path: `/health`  

Optional `railway.toml` in this folder:

```toml
[build]
buildCommand = "npm run build"

[deploy]
startCommand = "npm start"
healthcheckPath = "/health"
```

## Project map

- `src/tools.ts` — calculator, scratchpad, fetch_url  
- `src/agent.ts` — single-agent tool loop  
- `src/orchestrator.ts` — pipeline / debate  
- `src/modes.ts` + `skills/` — mode configs and skill markdown  
- `public/` — UI  

## Safety

Never commit API keys. If a key was pasted in chat, rotate it in the OpenAI dashboard.
