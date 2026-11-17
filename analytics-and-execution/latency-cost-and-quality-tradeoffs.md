# Latency, Cost, and Quality Tradeoffs

> When OpenAI PMs are asked to lead the rollout of a new model into ChatGPT, the question is not just about launch planning. It is about whether you can reason through inference cost, latency budgets, and quality floors as a product decision.

---

## The Latency-Cost-Quality Triangle

Every inference decision lives inside a triangle. This framing makes something explicit: **you cannot optimize all three simultaneously.** Every lever you pull creates tension somewhere else.

| Moving toward... | Creates tension in... |
|---|---|
| **Higher quality** | Larger model → slower and more expensive |
| **Lower latency** | Smaller model or shorter context → risks output quality |
| **Lower cost** | Fewer tokens, more compression, or a smaller model → circles back to affect quality and latency |

Candidates who understand this avoid two traps: proposing solutions that ignore cost, and proposing cost cuts that quietly destroy quality.

> **Your job is not to collapse this triangle.** It is to define where your product should sit on it, and defend that decision with data.

---

## The Four Concepts to Own

### 1. Latency: Know the Two Numbers

Interviewers at Nvidia and OpenAI push on this because it immediately separates candidates who have shipped AI products from candidates who have read about them.

**Latency in LLMs is not one number. It is two distinct signals:**

| Signal | Definition | What Users Feel |
|---|---|---|
| **TTFT** (Time to First Token) | Time from user hitting send to the first token appearing on screen | Responsiveness — users feel this viscerally |
| **TPOT** (Time Per Output Token) | Time to generate each token after the first | Streaming speed — how fast the response appears once it starts |

**They matter differently by use case:**

| Use Case | Priority | Why |
|---|---|---|
| Conversational chat | TTFT dominates | Users perceive delay at the start as the product being "slow" |
| Long document generation | TPOT matters more | Users accept a wait if progress is visible and steady |
| Agentic / multi-step tasks | Both matter | TTFT sets the task cadence; TPOT affects perceived throughput |
| Code completion (inline) | TTFT critical | Completion must feel instantaneous to stay in the flow state |

> **Watch out for:** Defaulting to "use a smaller model" as the answer to a latency problem. That is sometimes right, but the first question is where the latency is actually coming from. A bloated system prompt, slow retrieval from a vector database, or cold-start delays on serverless infrastructure all drive TTFT up — none of them is fixed by swapping models. Ask that question before recommending a solution.

> **Example — OpenAI Senior PM model rollout:**
>
> A weak answer jumps straight to staged rollout and user communication. A strong answer first raises the latency question: *"If this model is larger than its predecessor, what is the TTFT impact on conversational users, and is streaming sufficient to accommodate the increased latency?"* That framing signals you understand that a model rollout is also an infrastructure decision.

> **Example — Nvidia Principal PM loop:**
>
> *"A stronger reasoning model was hurting UX through delay. My job was mostly to watch user-response metrics, conversion, and drop-off, run A/B tests, and feed those numbers back so we could find the sweet spot between quality and speed."*
>
> That is the framing interviewers are looking for: not *"we should use a smaller model,"* but *"here is how I monitored the tradeoff and made the call."*

---

### 2. Quality: Define It Before You Optimize

Quality means: **does the model produce accurate, relevant, useful output for this specific task?** It is always relative to what you are asking the model to do.

- Within a model family, larger models generally produce better outputs on complex reasoning tasks
- A smaller model fine-tuned on your domain can outperform a general-purpose flagship on a narrow task — and do so faster and more cheaply
- **The product judgment defines the quality floor before choosing the model, not after**

**Quality degrades in predictable ways you should be able to name:**

| Failure Mode | What Happens |
|---|---|
| **Truncation** | When the context window is exceeded, older content is dropped silently. The model loses memory of earlier turns or document context without alerting the user. |
| **Hallucination under pressure** | Aggressive context trimming strips the grounding that keeps responses accurate. The model fills gaps with plausible-sounding content. |

### Meeting the Senior Bar

| Level | What the Answer Looks Like |
|---|---|
| **Competent** | Names the quality-latency tradeoff and recommends a smaller model for faster responses |
| **Senior+** | Defines a quality floor first, then proposes an eval suite to measure whether the smaller model meets that floor for the specific task. Also asks whether the latency gain is worth the quality loss for this particular user in this particular interaction context. |

> **Example:** Many PM loops ask directly: *"How do you measure whether an LLM or RAG project is efficient, and how do you measure model quality?"* The expected answer names specific eval types, defines what the quality bar is for this use case, and connects it to the efficiency question. If you are cutting costs by compressing context, you need to be able to say at what point that compression starts hurting quality enough to matter.

---

### 3. Cost: Two Layers PMs Need to Own

At companies like Nvidia and Apple, PM candidates are explicitly tested on their ability to connect infrastructure decisions to unit economics.

| Layer | What It Is | The Trap |
|---|---|---|
| **Cost per token** | The direct compute or API cost for each token in and out — scales with model size and usage volume | A chatbot that naively passes full conversation history on every call sees costs compound fast — every token in the context window is charged on every single call |
| **Total Cost of Ownership (TCO)** | Cost per token + retrieval infrastructure + human review pipelines + engineering optimization time + fixed compute costs for self-hosted deployments | Fixed compute needs volume to justify; TCO tells you whether the economics actually work at scale |

**Connect these costs to unit economics.** The question to hold in your head: *What is our cost per successful user interaction, and what is the revenue or retention value of that interaction?* If those numbers are wildly out of balance, you have a problem to solve — and you should be the one raising it.

> **Example — OpenAI model rollout:**
>
> A newer, more capable model almost certainly costs more per token. A strong PM answer names this directly: *"Before we commit to a full rollout, I want to understand the cost-per-conversation delta and whether our current pricing model absorbs it or requires a tier change."* That one sentence tells the interviewer you think about the business, not just the product.

---

### 4. The Optimization Levers

Interviewers weigh this section heavily because it shows whether you can translate diagnosis into action.

**Model routing**
Not every query needs your best model. Simple requests (rephrasing a sentence, answering an FAQ) route to a smaller, faster model. Complex reasoning gets the flagship. Get this right, and you can cut costs substantially without users noticing.

**Batching**
Group multiple user requests together and process them in a single inference pass. GPU utilization goes up, cost per request goes down. The trade-off: added queue latency before a request is processed.

> **Tip:** The inference batching question has shown up in PM final rounds at Anthropic and Nebius, not just engineering loops. The framing is always: *"How do you maximize GPU utilization without making users feel the wait?"* That is a product question. Think about it from the UX side: what queue latency is acceptable for this interaction type before users notice?

**Context management**
Every token in your context window costs money on every call. Options:
- Summarize earlier conversation turns
- Truncate low-relevance chunks
- Use a memory layer to persist only the highest-signal context

These reduce costs without destroying quality **if you have clearly defined what quality means**. That definition is yours to own.

**Caching**
Responses to identical or near-identical queries can be returned without a new inference call.
- Works well for deterministic content (FAQ answers, fixed prompts)
- Works poorly for open-ended conversation
- **Semantic caching** extends this to similar but not identical queries

---

## Optimization Levers at a Glance

| Lever | Cost Impact | Latency Impact | Quality Risk | Best For |
|---|---|---|---|---|
| **Model routing** | High reduction | High reduction | Low (if thresholds right) | Products with wide query complexity range |
| **Batching** | High reduction | Slight increase | None | High-volume, async workflows |
| **Context management** | Medium reduction | Medium reduction | Medium (if truncation aggressive) | Conversational products |
| **Caching** | High reduction | High reduction | None | Deterministic / FAQ content |

---

## Common Pitfalls

**Treating latency as a single number.**
TTFT and TPOT are distinct signals that matter differently depending on the use case. Conflating them signals surface-level reasoning.

**Defaulting to "use a smaller model" for latency problems.**
Ask where the latency is actually coming from before recommending a solution. Slow retrieval, bloated system prompts, and cold-start delays are not fixed by model swaps.

**Deferring cost decisions to engineering.**
*"We would work with the team to optimize costs"* is not a PM answer. Own the cost-value equation and name the thresholds that would trigger optimization work.

**Skipping the eval question.**
Anytime you argue for a quality-cost tradeoff, you need a way to measure quality. *"The output will be better"* without a measurement mechanism does not clear the bar at OpenAI, Nvidia, or Apple.
