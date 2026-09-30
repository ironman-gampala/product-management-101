# How to Vibe Code in an Interview

> AI tools allow product managers to prototype quickly on their own — and this is increasingly expected. When interviewers assess prototyping skills through vibe coding, they're evaluating your product judgment under real constraints, not your engineering ability.

---

## When This Comes Up

Two question types trigger a vibe-coding round:

| Type | Example |
|---|---|
| **Design X for Y** | Classic product design question — you're allowed (or expected) to use AI for prototyping |
| **Use AI to solve X** | Open-ended AI product question — you choose the approach and build it live |

> **Note:** As of late 2025, AI-first companies like Sierra AI and LangChain are holding explicit AI prototyping rounds. Sierra's APX program (combining PM and agent engineering) asks candidates to design an AI agent for a streaming service. Even where not explicitly tested, candidates are increasingly allowed to use AI tools — and those who do stand out.

---

## What Interviewers Are Evaluating

- Clear problem framing and the ability to handle ambiguity
- Use of real user insights (not generic personas)
- Concrete, visual, and interactive prototypes
- Awareness of tradeoffs and constraints
- Production thinking: what would happen *after* the prototype ships

---

## Using AI Prototyping to Stand Out

### Instant replication of familiar UI patterns
Search for *"Cash App transaction UI"* or *"Coinbase onboarding"* → drop a screenshot or link into Lovable → it generates screens with similar patterns. Interviewers instantly recognize the UX and can focus on product decisions instead of parsing unfamiliar UI.

### Real-time LLM interaction via your own API key
Connecting your own LLM API key (e.g., OpenAI) to your prototype means your demo responds with actual AI reasoning — not static text. The prototype feels alive and much closer to a real product than slides or wireframes.

### Collaborative iteration with the interviewer
Treat the interview as a co-creation session rather than a presentation. Use AI tools to iterate live:
- *"Let's simplify this onboarding step."*
- *"Let's try a different risk explanation."*
- *"Let's adjust the messaging for a different segment."*

Making live changes demonstrates flexibility, good product judgment, and strong collaboration skills.

### Micro-skills interviewers remember
- Auto-generate UI from screenshots or URLs
- Use LLM to generate flows from user stories
- Pull live data (e.g., crypto prices, balances)
- Generate UX copy on the fly

---

## The 7-Step Vibe Coding Framework

### Step 1 — Clarify the Prompt

Ask three high-leverage questions:

1. What problem are we solving?
2. For whom?
3. Under what constraints?

### Step 2 — Define the Motivation

Use AI to surface quick context before forming a hypothesis:
- *"Why is Gen Z entering crypto?"*
- *"What causes drop-off in fintech onboarding?"*

These insights support a grounded direction — not assumptions.

### Step 3 — Segment Users

Use AI-assisted persona or TAM generation. Example prompt:

```
Segment US crypto users by age, risk tolerance, investing frequency, 
and motivations. Rank segments by opportunity size.
```

Pick one primary segment and build around it.

### Step 4 — Identify Pain Points & Form a Hypothesis

Translate the segment and context into a design hypothesis:

> *"Gen Z values transparency and simplicity, but current crypto apps feel opaque and risky. We need a UX that explains risk clearly, builds trust, and reduces friction."*

This hypothesis guides every prototype decision that follows.

### Step 5 — Build the AI Prototype Live

Use Lovable + your LLM to:
- Build the core flow
- Focus on the **single most important interaction**
- Narrate tradeoffs and decisions as you build

> **Tip:** Do not get carried away trying to build an entire app. Interviewers are only interested in seeing how you reason about and iterate through the core flow.

### Step 6 — Co-Create with the Interviewer

Treat feedback as collaboration input. Make live changes in response to:
- Changing user flows
- Adjusting copy
- Simplifying or deepening logic

This is one of the highest-signal moments in the round. Candidates who adapt in real time consistently outperform candidates who present a finished thing.

### Step 7 — Transition to Production Thinking

Close with real-world execution thinking. This is a strong seniority signal.

| Area | What to Cover |
|---|---|
| **Instrumentation** | What would you log and track? (funnel metrics, errors, model performance, feedback signals) |
| **AI fundamentals** | RAG vs. pure LLM, hallucination handling, memory/context management, how you'd monitor and debug |
| **Validation & evals** | How you'd test correctness, quality, and user satisfaction |
| **Guardrails & compliance** | Limits, disclosures, approvals, data privacy — especially for fintech, healthcare, or kids |
| **Rollout** | Alpha → beta → phased rollout with clear rollback plans |

> Instead of simply focusing on the UI, demonstrate that you understand AI fundamentals — RAG needs, observability, memory, safety, hallucination risks — while you're building.

---

## How to Differentiate Yourself

### Do these

- Prototype only the **critical interaction** — not the entire app
- Use LLM to generate UI and **explain your reasoning** as it appears
- Focus on decision-making, not pixel perfection
- Introduce metrics early: *"Here's what we'd track on day one…"*
- Communicate constraints clearly: *"We won't build X in v1; too complex"*
- Stay structured and calm under ambiguity
- Bring AI fundamentals into the discussion (data, RAG, observability, safety)

### Avoid these

| Mistake | Why It Hurts |
|---|---|
| **Overbuilding** | Full backend or entire app is unnecessary — and signals poor scope judgment |
| **Framework over product** | Interviewers expect to see prototypes, not you walking through CIRCLES or AARM |
| **No narrative** | A prototype without a story = chaos. A story without a prototype = generic. |
| **Ignoring metrics** | Interviewers won't understand your design decisions if they don't understand what success looks like |
| **Perfectionism** | Agility and the ability to iterate live is what's being tested — not polish |

---

## Recommended Workflow & Tech Stack

| Tool | Role |
|---|---|
| **Notion / Google Doc** | Structure your thinking, capture tradeoffs, add roadmap/strategy |
| **GPT-5 (or latest LLM)** | Ideation, flows, copy, segmentation, insight generation |
| **Lovable + LLM API key** | Rapid UI, real-time AI responses, interactive flows |
| **N8N (optional)** | Simulate simple backend logic (auth → API → callback) |

> **Tip:** If you already have proficiency with certain AI tools, use them over this list.

### Always close with the "Close the Doors" mindset

Before you finish, say:
- *"If this went to production, here's what I'd instrument."*
- *"Here's what I'd guardrail and monitor."*
- *"Here's how I'd validate and experiment."*
- *"Here's how I'd roll this out safely."*

---

## Practical Templates

### Template 1 — Standard Product Design (*"Design X for Y"*)

**Example prompt:** *Design a crypto app for Gen Z.*

```
1. Clarify the prompt (3 questions: what, who, constraints)
2. Why now? (insight from AI or domain knowledge)
3. Segment users (AI-assisted)
4. Pain points + hypothesis
5. Build prototype live (core flow only)
6. Co-iterate with interviewer feedback
7. Production considerations:
   - Metrics
   - AI risks / guardrails (if relevant)
   - Rollout plan
```

### Template 2 — AI Product Question (*"Use AI to solve X"*)

**Example prompt:** *Use AI to reduce user friction or increase trust in an investing app.*

```
1. Define data inputs & sources
2. Choose AI approach: retrieval, generation, classification, or hybrid
3. Define boundaries: what AI does vs. what needs human review / guardrails
4. Prototype the chat or task flow with LLM + UI
5. Validate assumptions live with interviewer feedback
6. Evaluation & observability:
   - What you measure for quality
   - How you detect hallucinations or bad outputs
   - How fallback flows work (e.g., human review, simpler logic)
```

### For Take-Home Assignments

> **Tip:** There's a tendency to overbuild for take-homes. Use this structure instead:
>
> 1. Build the core feature or flow via vibe coding
> 2. Draft a companion document (Notion / Google Doc) covering:
>    - Vision & value proposition
>    - User flows & edge cases
>    - Risk, compliance, and safety considerations (especially for AI or fintech)
>    - Metrics & success criteria
>    - Long-term roadmap & scaling

---

## Quick Reference

```
DURING THE BUILD
→ Core flow only — not the whole app
→ Narrate every decision as you build
→ Pull in live data or LLM reasoning if possible
→ Iterate with the interviewer, don't present at them

AFTER THE BUILD — "CLOSE THE DOORS"
→ Instrumentation: what you'd log and track
→ AI fundamentals: RAG, hallucinations, memory, safety
→ Validation: how you'd test quality and user satisfaction
→ Rollout: alpha → beta → phased, with rollback plan
```
