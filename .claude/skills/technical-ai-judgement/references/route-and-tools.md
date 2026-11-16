# Route and tools

The tools behind each step of the four routes. Each one exists to stop a specific freeze or a
specific point loss. Teach the tool, not just the answer, so the learner can reuse it on any
technical question.

## Contents
1. Route 1 — AI fluency (concept explanation)
2. Route 2 — AI product design + evaluation
3. AI eval toolkit
4. Route 3 — System design for PMs
5. System design checklist
6. Route 4 — Technical trade-off decisions
7. Trade-off tables (latency/cost/quality, levers, build vs buy, model choice)
8. Cost math in one line
9. Probe bank
10. Transition lines
11. Freeze recovery
12. Common point losses

---

## 1. Route 1 — AI fluency (about 5 minutes)

Often asked inside another round as "quick question — what's a context window?". Treat it as a
mini-route, not a definition.

```
  ONE LINE   what it is, in one sentence a non-engineer understands
  HOW        how it works in 2–3 steps, plus one analogy
  FIT        what problem it solves, and what it cannot fix
  FAILS      one specific failure mode and its mitigation
  SO WHAT    the product decision it changes (cost, latency, quality, trust)
  CHECK      "Would it help if I went one level deeper on how X works?"
```

Example (RAG, short): *"RAG lets the model look things up before it answers. When a question
comes in, we search our own documents for the most relevant passages and hand them to the model
with the question, so it answers from our material instead of memory. It's like an open-book exam.
It fixes missing or out-of-date knowledge, but not tone or behaviour — that's prompting or
fine-tuning. It breaks when search brings back the wrong or stale passage, so we measure retrieval
separately from the answer. For the product, it means answers can cite sources and stay current
without retraining the model."*

Rules: no unexplained term; the analogy must not mislead (RAG is not "fine-tuning at runtime");
always end on the "so what". Concept facts live in `concepts-cheatsheet.md`.

## 2. Route 2 — AI product design + evaluation (30 minutes)

```
  0–3    CLARIFY       user, task, stakes (what if it's wrong?), volume, data we already have
  3–7    USER + JOB    one user, one job; why AI is the right tool here (vs rules, search, a form)
  7–13   DESIGN        where AI sits in the flow; the lever (prompt → RAG → fine-tune); model
                       tier; the human's role; the fallback when the model is unsure
  13–20  "GOOD"        quality bar with numbers FIRST → golden set → eval methods → launch gate
  20–24  FAILURES      run the four failure lenses → one mitigation each
  24–28  LAUNCH        staged rollout → online metrics → guardrails → feedback loop
  28–30  SUMMARY       user, design call, how we know it's good, biggest risk, what ships first
```

**Why AI here?** One sentence that a rule or plain search would not do the job: the input is
messy language, the answers vary, the volume is too high for people. If a rule would work, say so —
that is a senior signal, not a weak one.

**Design call, in one breath:** *"The model drafts, the agent approves. It answers from our policy
docs and the customer's order data through retrieval, using a mid-size model with a large model
only for complex cases. If it isn't confident, it says so and hands over."*

**The four failure lenses** (run them out loud):
```
  WRONG      hallucination, stale or wrong retrieved data, misread request
  HARMFUL    unsafe advice, privacy leak (PII), prompt injection, misuse
  UNFAIR     works worse for one language, accent, region or group
  UNAFFORDABLE  cost per task or latency blows up at volume; agent loops
```
For each one you name: who gets hurt, the mitigation, and what the user sees when it happens.

## 3. AI eval toolkit

### a. Define "good" before building
| Dimension | Example bar (illustrative) |
|---|---|
| Correct | Right answer on ≥ 95% of the golden set |
| Grounded | Every factual claim supported by a retrieved source; unsupported claims ≤ 2% |
| Helpful / complete | Resolves the user's actual request; rater score ≥ 4 of 5 |
| Safe | Zero critical safety failures on the red-team set; low over-refusal |
| Format + tone | Matches brand voice and length limits |
| Fast + affordable | Time to first word under 1 s; cost per task under the value of the task |

Pick the 2–3 that matter for this user and say why. A medical tool weighs correct and safe; a
brainstorming tool weighs helpful and varied.

### b. Offline evals (the launch gate)
- **Golden set:** a few hundred real examples with known-good answers — common cases, hard cases,
  edge cases, adversarial cases, and slices by language / region / user group. Built from real
  traffic or real tickets, labelled by experts. Grows every time a new failure is found.
- **Methods:**

| Method | Use it for | Watch out |
|---|---|---|
| Automated checks | Anything with a checkable answer (right order number, valid code, correct JSON) | Useless for open-ended quality |
| Model as judge | Fast scoring of groundedness, tone, helpfulness at scale | Has its own bias; check it agrees with humans on a sample first |
| Human review | High-stakes or nuanced output; calibrating the judge | Slow and costly — sample, don't review everything |

- **Separate retrieval from generation.** For RAG, measure "did we fetch the right passage?"
  (recall at top 5) apart from "was the answer right?". Otherwise you can't tell which half broke.
  The repo's `rag-eval-lab/` does exactly this.
- **Regression rule:** every prompt, model or data change reruns the suite. If quality on any key
  slice drops, it doesn't ship.
- **Disaggregate:** report by slice, not only the average. 90% overall can hide 70% for one group.

### c. Online (after launch)
- **Staged rollout:** internal → shadow mode (model runs, humans don't see it) → small % → wider.
- **Success metric:** task success in user terms (ticket resolved, draft sent with light edits).
- **Behaviour signals:** accept / edit / regenerate / copy rates, thumbs, abandonment.
- **Guardrails:** cost per task, p95 latency, escalation or complaint rate, safety flags,
  "I don't know" rate (too high = useless, too low = maybe bluffing).
- **A/B test** when you change model or prompt and the effect on users is uncertain.

### d. Feedback loop
Log inputs, outputs and sources → sample and review weekly → sort failures into a taxonomy → fix
the biggest bucket → add those cases to the golden set. Say who owns it.

### e. "How do you know it's not hallucinating?"
A good answer has three parts: (1) **prevent** — ground answers in retrieved sources and tell the
model to say "I don't know" when sources are missing; (2) **measure** — groundedness rate on the
golden set and a weekly sample of live answers, with citations checked against sources;
(3) **contain** — show sources to users, route low-confidence answers to a human, and let users
flag wrong answers.

### f. Agents
Measure task completion and step success, not just the final message. Cap steps and cost per run.
Require approval for irreversible actions. Log every step and the reason, so you can answer "why
did it do that?". See `multi-agent-demo/` for a visible agent loop.

## 4. Route 3 — System design for PMs (45 minutes)

The repo's five steps, plus scale and "what ships first". System design for a PM is a scoping
exercise dressed as a technical one.

```
  0–5    CLARIFY + SCOPE      users, what's in and out, scale, latency, data sensitivity
                              → play back your understanding before drawing anything
  5–10   JOURNEY → REQS       walk the user's steps; each step becomes a requirement (4–6)
  10–13  ATTRIBUTES           rank speed, accuracy, reliability, privacy, cost; pick the top one
                              and say what you trade away for it
  13–25  ARCHITECTURE         components (each traces to a requirement) + data flow, on the board
  25–32  SCALE + BREAKS       what breaks at 10x; the bottleneck; failure and fallback
  32–38  TRADE-OFFS           2–3 tensions tied to your attributes, each resolved with a call
  38–42  SHIP FIRST           v1 cut, what stays a black box, the metric that says it works
  42–45  SUMMARY
```

Draw at the right altitude — boxes and arrows, not schemas:
```
  Client ──► API gateway ──► Translation service ──► Cache (hit → return)
                                   │ miss
                                   ▼
                     Language detect ──► Translation model ──► Cache (store)
                                   │
                         User prefs DB (recipient's language) ──► Client
```

Reverse system design ("walk me through a system you built"): know one system cold — the
architecture, the data flow, the key trade-off you made, and one thing you'd change in hindsight.

## 5. System design checklist

**Building blocks** (say what each is for; avoid brand names unless you can compare alternatives):

| Block | What it does | Add it when |
|---|---|---|
| API gateway / load balancer | Front door; spreads traffic | Many clients or servers |
| Service | One job, owned by one team | A requirement needs its own logic |
| Database | Source of truth | Data must survive and be queried |
| Cache | Fast copy of frequent answers | Same reads repeat; speed matters |
| Queue | Holds work to do later | Work can wait; traffic spikes |
| Search / vector index | Find by keyword or meaning | Retrieval, RAG, search |
| Model endpoint | Runs the model | Any AI step; watch rate limits and cost |
| CDN | Serves files near the user | Media or static content at scale |
| Logs + monitoring | See what happened | Always; non-negotiable for AI |

**What breaks at 10x?** Walk the data flow and ask at each arrow:
- Reads pile up → cache, read copies.
- Spikes overwhelm a step → queue it, make it async, show progress.
- Model calls hit rate limits or budget → route easy cases to a smaller model, cache, batch.
- One dependency fails → fallback (show the original, a default, or "try again"), not a blank screen.
- Data grows → index refresh time, storage cost, stale results.

**Always cover:** privacy and who can see what data, a fallback for every external dependency,
and how you'd know it's healthy (one metric per attribute).

**Cut scope out loud:** *"Let's keep moderation as a black box for now and come back to it."*

## 6. Route 4 — Technical trade-off decisions (about 15 minutes)

```
  0–2    CLARIFY     the user moment, volume, stakes, budget
  2–4    FLOOR       quality floor + latency budget in user terms, BEFORE comparing options
  4–7    OPTIONS     2–3 real options, one line each: cost / latency / quality / effort / risk
  7–10   DIAGNOSE    where the constraint really comes from (latency source, cost driver)
  10–12  CALL        "I'd pick X because… I give up Y. I'd switch if Z."
  12–15  PROVE IT    the eval or A/B that checks it, the guardrail, the reversal line
```

The decision line: *"I'd recommend ___ because ___. The cost is ___, which is acceptable because
___. If ___ changes, I'd switch to ___."*

## 7. Trade-off tables

### Latency, cost, quality — you can't max all three
| Move toward | Tension |
|---|---|
| Higher quality | Bigger model, more context → slower, costlier |
| Lower latency | Smaller model, shorter context → quality risk |
| Lower cost | Fewer tokens, smaller model → quality and sometimes latency risk |

Latency is two numbers: **time to first token** (how responsive it feels — dominates chat and
inline completion) and **time per output token** (how fast the answer streams — matters for long
outputs). Agents feel both.

### Optimisation levers
| Lever | Cost | Latency | Quality risk | Best for |
|---|---|---|---|---|
| Model routing (easy → small model) | Big cut | Big cut | Low if routing is right | Wide range of query difficulty |
| Context trimming / summarising history | Medium cut | Medium cut | Medium if too aggressive | Long conversations |
| Caching (exact or by meaning) | Big cut | Big cut | Low; stale risk | Repeated, factual questions |
| Batching | Big cut | Adds queue wait | None | Background jobs |
| Streaming | None | Feels faster | None | Chat |
| Shorter prompts / outputs | Cut | Cut | Low–medium | Bloated system prompts |

### Prompt vs RAG vs fine-tune
| Problem | Lever | Can't fix |
|---|---|---|
| Model knows it, output format or tone is off | Prompting | Missing knowledge |
| Model lacks current or private knowledge | RAG | Behaviour and style |
| Task behaviour still wrong after both; you have data and budget | Fine-tuning | Anything after its training date |

### Build vs buy (or hosted vs self-hosted)
| Question | Leans build / self-host | Leans buy / hosted |
|---|---|---|
| Is it our differentiator? | Yes | No |
| Data sensitivity / residency | Strict | Standard |
| Time to market | Can wait | Need it this quarter |
| Volume | Very high and steady (fixed cost pays off) | Low or spiky |
| Team skill to run it | Have it | Don't |
| Lock-in risk | High concern | Acceptable, or keep an abstraction layer |

A good answer often lands on "buy now behind an abstraction, revisit at volume X".

### Model choice (generic tiers — check current options)
| Tier | Pick when |
|---|---|
| Large hosted model | Hard reasoning, low volume, quality floor is high |
| Small fast hosted model | High volume, simple tasks, tight latency |
| Open-weight model you host | Data must stay in-house, very high steady volume, need control |
| Small model fine-tuned on your task | Narrow task, lots of examples, cost or latency matters |
| Router across tiers | Mixed difficulty — usually the senior answer |

### Precision vs recall (classifiers, moderation, fraud)
Missing a bad case costs more → favour recall (catch more, accept false alarms). Annoying good
users costs more → favour precision. Say which mistake is worse for this user, then pick.

## 8. Cost math in one line

```
  cost per task = (input tokens × input price + output tokens × output price) × calls per task
  daily cost    = cost per task × tasks per day
```
Illustrative: 3,000 input + 500 output tokens, at $3 and $15 per million (check current prices) →
about 1.65 cents per call (0.9 cents input + 0.75 cents output). At 200,000 tasks a day, about
$3,300 a day. Then compare with the value
of the task (a support ticket a person handles may cost a few dollars). Say the biggest driver
(usually input context) and the lever you'd pull first.

## 9. Probe bank

Use these as the interviewer; teach the learner to pre-empt them.
- "What breaks at 10x?"
- "How do you know it's not hallucinating?"
- "What does one task cost? Who pays for it?"
- "Latency doubled after launch. Where do you look first?"
- "Why not fine-tune?" / "Why not just a better prompt?"
- "Your judge model and your human raters disagree. Which do you trust?"
- "Which users does this work worst for?"
- "The provider triples its price. Now what?"
- "What does the user see when the model fails?"
- "Which actions can the agent take without asking?"
- "What would you ship in the first six weeks?"
- "You said X in your project — what exactly did your eval measure?"

## 10. Transition lines

- "Before I design anything, let me ask a few questions that change the architecture."
- "Let me start with who uses this and what they need, then work back to the system."
- "Before choosing a model, let me define what good looks like."
- "Let me run through how this fails, because that shapes the design."
- "Let me walk the data flow from the user's tap to the answer."
- "If traffic grew ten times, here's what breaks first."
- "Here's the call I'd make, what it costs us, and what would change my mind."
- "To summarise…"

## 11. Freeze recovery

| Freeze | What to say | What to do in your head |
|---|---|---|
| Don't know a term | "I haven't used that directly. My understanding is… Is that the part you mean?" | Reason from first principles; never bluff |
| Blank on architecture | "Let me walk the user's steps and turn each into a requirement." | Journey → requirements → one box each |
| Can't think of failures | "Let me check four ways this could fail: wrong, harmful, unfair, unaffordable." | Four failure lenses |
| Stuck between options | "Let me set the quality floor first, then compare." | Floor → options → call |
| Pushed deeper than you know | "At the product level, the decision is… The detail I'd confirm with engineering is…" | Hold the decision, name the open question |
| Lost the thread | "Let me quickly recap where we are." | Read the board top to bottom |

## 12. Common point losses

- Jargon stacks with no "which means".
- Starting with the model or architecture before the user and the job.
- "We'd use RAG" for a tone problem, or "fine-tune it" for missing fresh data.
- "We'd measure accuracy" with no definition, no golden set, no threshold.
- Only offline evals, or only thumbs up/down — no layers.
- Generic "it might hallucinate" with no mitigation or user-facing fallback.
- No number for cost or latency anywhere in the answer.
- "Use a smaller model" before finding where the latency comes from.
- Listing options and ending with "it depends".
- A v1 with ten components and no "what ships first".
- Naming a brand of database or model you can't compare with alternatives.
- Letting an agent take irreversible actions with no approval step or logs.
