# Introduction to Technical Questions

> A few years ago, a technical PM question meant system design: *"Design the architecture for Instagram's Home Feed."* Today, the new normal is technical questions about AI.

The expectation now covers hallucination mitigation, retrieval-augmented generation, token and latency tradeoffs, and fine-tuning versus synthetic data. If you're an AI PM, fluency in these concepts is required. If you're a general PM, this fluency is how you stand out — and it's increasingly expected even when the job description doesn't say so.

---

## What to Expect

At many large tech companies, the standard PM loop has no dedicated technical round. Rounds cover product sense, strategy, and behavioral questions. **Technical knowledge tends to come up inside those rounds** — as a follow-up, as context for a design question, or as the thing that separates a generic answer from a specific one.

**Recently asked questions at top tech companies:**

- *"How would you design safeguards for an AI system that can take actions on behalf of a user?"* — OpenAI
- *"Users complain Gemini is 'confident but wrong.' How would you fix this?"* — Google DeepMind, Google
- *"What's the effect of adjusting an LLM's context window size?"* — JP Morgan Chase, OpenAI
- *"How would you define success metrics for an AI-oriented feature or product?"* — Perplexity AI

---

## How Technical Do I Really Need to Be?

It depends on the role. Look at the job description and the company's engineering footprint together — let that tell you how deep to go.

**Frontier AI labs and AI-native companies run the toughest technical bar:**

| Company | What They Expect |
|---|---|
| **NVIDIA** | Defend every technical claim from your own background. Mention RAG or model quality in a past project story and the follow-up will press for the actual metric, the specific tradeoff, and the system detail. *"I would spend way less time on generic product sense prep and way more time making sure I can defend every technical claim."* — Principal PM candidate |
| **Google DeepMind** | Clean frameworks for offline vs. online AI evals and a real opinion on RAG vs. fine-tuning |
| **OpenAI** | Has sent candidates an LLM research paper as a mini take-home and asked them to critique the fine-tuning strategy using only public information |
| **Sierra AI** | Expects agent architecture cold: memory, RAG, MCP, quality controls, and eval metrics |

> **As AI takes over more of the day-to-day work, technical questions are showing up at companies that never used to ask them.**

> **Example — Google L5 PM candidate who cleared the AI product round:** *"If you are not actively using AI tools in your day-to-day, it is hard to fake the fluency because it shows up across product sense, execution, and technical."*

---

## What Interviewers Are Looking For

Interviewers asking AI technical questions are assessing whether you can think like someone who **builds and ships AI products**. They're evaluating your ability to:

| Signal | What It Means |
|---|---|
| **Fluent application** | Use AI and systems concepts correctly and apply them as the conversation gets specific — not just recite definitions |
| **Failure mode awareness** | Understand how these systems fail — hallucination, latency degradation, context truncation, model drift |
| **Tradeoff reasoning** | Reason through RAG vs. fine-tuning, latency vs. quality, cost vs. accuracy — and commit to a recommendation rather than listing options |
| **User outcome connection** | Connect technical decisions back to specific user outcomes and business metrics |
| **Depth under follow-up** | Go deeper when the interviewer pushes — not fall back to a comparison table |

---

## Meeting the Senior Bar

| Level | What the Answer Looks Like |
|---|---|
| **Solid** | Applies AI concepts to product problems when the question calls for it. Knows the mitigations for hallucinations, understands when RAG makes sense, and can hold your own in a technical conversation without an engineer walking you through it. |
| **Senior+** | Grounded in decisions you've actually made. When follow-ups get specific — which embedding model, what your evals measured, why fine-tuning over RAG in that case — you answer from experience rather than falling back on a comparison table. |

---

## What This Module Covers

The lessons in this module break down every AI concept PMs are expected to understand and show you how to bring them into your answers naturally:

- How LLMs work and what matters for product decisions
- Hallucination: causes, mitigations, and how to talk about it
- RAG vs. fine-tuning — when to use each and how to defend the tradeoff
- Latency, cost, and quality tradeoffs (TTFT, TPOT, context management)
- Evaluation frameworks: offline vs. online evals, quality metrics for AI products
- Agent architecture: memory, tool use, MCP, quality controls
- How to answer AI product design questions end-to-end

> **The goal is not to make you an ML engineer.** It is to make you the PM who can walk into any AI product conversation — technical or not — and contribute with specificity rather than deferring to the engineers in the room.
