# AI Technical Fluency

> This lesson covers the 20% of AI technical concepts that come up in 80% of interviews at Frontier AI labs and state-of-the-art companies. It's a solid primer to start with.

**Why this matters now:** What it means to be technical has changed since the rise of LLMs. To be competitive as a PM today, you need AI technical fluency. Whether the top companies say they want it or not, the reality is that they do.

---

## 1. The Model Lifecycle

Every AI model goes through three phases. Some companies (Apple, for example) expect PMs to get into the weeds of AI architecture because product decisions often come down to swapping out components to address different tradeoffs: latency, hallucination, cost, and data privacy.

| Phase | What Happens | Analogy | Who Owns It |
|---|---|---|---|
| **Pre-training** | The model learns language patterns from massive datasets: grammar, facts, reasoning, concept relationships | A person spending years reading every book, article, and website — absorbing general knowledge before any specific training | Foundation model providers: OpenAI, Google, Anthropic, Meta |
| **Post-training** | Shapes model behavior after pre-training: fine-tuning on domain-specific data, instruction tuning, RLHF | Onboarding that new hire: teach company norms, give specific tasks to practice, correct unwanted behaviors | Usually the product team or a specialized partner |
| **Inference** | The model responds to a live user input — this is the product your users experience | The employee doing their actual job: every response is a fresh task, but working from the same knowledge base | The product — this is where PMs make the most direct impact |

> **RLHF** = Reinforcement Learning from Human Feedback — how models learn to align outputs with human preferences.
>
> **Note:** Pre-training is extremely costly and almost always handled by foundation model providers. Post-training and inference are where most PM product decisions live.

---

## 2. Tokens & Context Windows

NVIDIA's senior PM loop regularly asks: *"How do you measure whether an LLM project is efficient? And how do you measure model quality?"*

Efficiency is about token cost per output and latency per call. Quality is about whether the output is actually right. These aren't separable questions — and understanding why starts with tokens.

### What Are Tokens?

**Tokens** are the units a model reads and writes (roughly a word or part of a word in English). Everything that goes into a model — system prompt, conversation history, user input — and everything that comes out costs tokens. This is the basis for how AI APIs price usage and where context limits come from.

### Efficiency and Quality

```
Token efficiency  = useful output generated / total tokens consumed
Latency efficiency = response quality / time to first token (or full response)
```

Practical questions to ask:
- Are we passing in a 2,000-token system prompt when 400 tokens would do the same job?
- Are we sending the full conversation history every turn when a summary would work just as well?
- Waste here compounds fast at scale.

**Quality** is simply whether the output is right for the user. A model can be cheap and fast and still consistently wrong. You need evals to measure quality independently (covered in section 4).

### Context Windows

**Context windows** are the maximum number of tokens a model can process in a single call — the model's working memory. Once you hit the limit, older content gets truncated, or you pay more for a model with a larger window.

| Product Type | Context Window Risk |
|---|---|
| Customer support bot | Hits limit mid-conversation and starts forgetting what the user already said |
| Document analysis tool | Tries to process a 50-page legal brief in one shot and exceeds the window entirely |
| Multi-turn coding assistant | Loses earlier context about the user's codebase, making later suggestions incorrect |

### The Cost Math PMs Need to Own

> Most APIs charge per million tokens, split between input and output. GPT-4o charges roughly **$2.50 per million input tokens** and **$10 per million output tokens**.
>
> If your chatbot passes 2,000 tokens of conversation history on every turn, and you have 100,000 conversations per day averaging 10 turns each:
> - 2,000 tokens × 10 turns × 100,000 conversations = **2 billion input tokens/day**
> - At $2.50/million → **$5,000/day** just from history, before a single response is generated
>
> Reducing average context from 2,000 to 800 tokens cuts that by **60%**.
>
> This is the kind of tradeoff senior PMs are expected to own, not defer to engineering.

---

## 3. Hallucinations

When Google's Gemini PM loop asks *"Users are complaining that Gemini is confident but wrong — how would you fix this?"*, interviewers are assessing whether you can diagnose the root cause and propose a system-level fix.

**Hallucinations** are confident, plausible-sounding outputs that are factually wrong. The model isn't lying — it's pattern-matching from training data without grounding in truth.

### Two Root Causes (and why the distinction matters)

| Root Cause | What It Is | How to Fix It |
|---|---|---|
| **Training-time hallucinations** | The model learned something incorrect, outdated, or underrepresented in pre-training or fine-tuning data | No amount of clever prompting fixes this — the knowledge isn't there. Requires RAG, fine-tuning on better data, or retrieval at inference time. |
| **Inference-time hallucinations** | Contradictory or confusing context in the prompt causes the model to fill gaps poorly | Can be improved through better prompt design and context management |

### Four Design Mitigations Every PM Should Have Ready

**1. Retrieval-Augmented Generation (RAG)**
Fetch relevant, up-to-date information at runtime and pass it to the model as context before it generates a response. A legal research tool doesn't rely on the model's training data — it first retrieves the relevant case documents, then generates a response grounded in those documents. If the model gets something wrong, you can trace it to the retrieved source.

**2. Grounding with Citations**
The model is instructed to make only claims it can back with a source and to surface that source in its response. Perplexity does this well — every claim is tied to a URL. When the model is wrong, the citation makes the failure auditable rather than invisible. It also shifts user behavior: people learn to check sources rather than blindly trust outputs.

**3. Confidence Thresholds and Human-in-the-Loop**
Build a layer that flags low-confidence responses for human review before they're surfaced. A medical symptom checker might route any response below a confidence threshold to a human reviewer or a fallback message like "we recommend speaking with a doctor." The model handles high-confidence, low-stakes cases at scale — the risky ones get a second look.

**4. Evals**
You can't fix what you don't measure. Run model outputs against a benchmark set of prompts for which you already know the correct answers. If the hallucination rate goes up compared to the previous version, you don't ship. This is how you catch problems before production rather than discovering them through user complaints.

> **Perplexity AI's PM round** has recently asked about customer trust when launching AI features. A strong answer covers how you detect hallucinations, how you communicate uncertainty to users, and how you build feedback loops to catch them post-launch.

---

## 4. Evals

Evals are the test suite for your AI product. Unlike traditional software with deterministic unit tests ("if input X, expect output Y"), AI output is probabilistic. Evals fill that gap with a structured, repeatable way to measure output quality.

### Three Types of Evals

| Type | How It Works | Best For | Limitation |
|---|---|---|---|
| **Human review** | Raters score outputs on quality, accuracy, and tone on a 1–5 rubric | High-stakes outputs where nuance matters (medical, legal) | Slowest and most expensive — not scalable alone |
| **LLM-as-judge** | A second model evaluates the output, prompted to rate accuracy and helpfulness | Fast first-pass filter before human review | The judge model has its own blind spots; may favor certain response styles |
| **Automated metrics** | Scoring algorithms compare model outputs against a known correct answer | Clear, verifiable correct answers exist (code runs without errors, policy number is correct) | Less useful for open-ended tasks like summarization or creative writing |

**As a PM, you define what "good" means:** factual accuracy, tone match, latency under a threshold. Evals operationalize those requirements into measurable signals. Any model update, prompt change, or data refresh should run through your eval suite before it ships.

> **Most candidates miss that evals require you to define the quality bar before you build the system, not after.** "We'd measure accuracy" isn't an answer until you've defined what accuracy means for your users.
>
> This came up directly in a **Google DeepMind PM interview**: *"As a PM, what would you measure to ensure an LLM is correctly executing a user's requested actions?"*

---

## 5. Retrieval-Augmented Generation (RAG)

RAG is used when you have an existing body of knowledge and want your AI product to search and draw from it accurately — especially when data is proprietary, frequently updated, or too specific to be well represented in the model's training data.

### How RAG Works

**Before a user asks anything:**
1. Convert your knowledge base into **embeddings** (numerical vectors that capture semantic meaning) and store them in a **vector database**

> **What embeddings capture:** Think of it like coordinates on a map — but instead of two dimensions, thousands. Words or phrases with similar meanings end up with similar coordinates: "mouse" in a tech document lands near "keyboard" and "cursor," not near "rat" or "rodent."

**When a query comes in:**
1. The query is converted into an embedding
2. Matched against stored vectors to find the most semantically similar content
3. That content gets passed to the model as context, grounding the response in retrieved information

### The Product Decisions Inside RAG

| Decision | What It Means | Why It Matters |
|---|---|---|
| **What to embed and store** | Not everything retrieves well — a product FAQ chunked into individual Q&A pairs outperforms the same content stored as one long document | Garbage in, garbage out — poor chunking means poor retrieval even with a great model |
| **How to chunk** | Breaking source documents into smaller pieces before storing them | Chunk too large → noisy retrieved context. Chunk too small → lose surrounding context that gives sentences meaning |
| **Which embedding model** | General-purpose vs. domain-specific (a medical knowledge base retrieves more accurately with a clinical text embedding model) | The embedding model is the translator — a poor fit means semantically similar queries don't find the right content |
| **Keeping the index fresh** | Re-embed and refresh when source data changes | A customer support bot working from last year's docs will confidently answer with outdated information — stale retrieval is a silent failure |

> When a RAG system returns irrelevant results, the embedding model or chunking strategy is usually the first place to look — not the generative model on top of it.

---

## 6. RAG vs. Fine-Tuning vs. Prompting

Choosing between these levers comes up both when diagnosing why a model isn't performing and when making initial architecture decisions. Perplexity's senior PM loop tests this directly. OpenAI gave principal PM candidates a take-home asking them to critique a fine-tuning strategy using only public information.

**The judgment required is the same in both cases: match the right lever to the actual problem.**

| Approach | Best When | What It Can't Fix |
|---|---|---|
| **Prompting** | The model knows the answer but needs guidance on format, tone, or reasoning style | Knowledge gaps — if the info isn't in training data, no prompt brings it back |
| **RAG** | The model lacks current, proprietary, or domain-specific information | Style, behavior, or task execution patterns — RAG changes what the model knows, not how it acts |
| **Fine-tuning** | You need specialized task execution that prompting and RAG can't solve, and you have the data and budget | Real-time data — fine-tuned models don't know anything after their training cutoff |

### Decision Flow

```
Does the model know what it needs to know?
→ YES: Start with prompting. It's fast and often underestimated.
→ NO (current or proprietary info missing): Move to RAG.
→ Still underperforming on task execution after RAG: Fine-tune — only when you have the data and budget.
```

> **A knowledge gap** is when the model simply doesn't know something — either it wasn't in training data, it's proprietary, or it's changed since training. That's a RAG problem, not a prompting problem.

---

## 7. Agentic AI

Unlike standard AI models that respond to a single prompt, **agents take sequences of actions to complete a goal**. They can use tools (search, code execution, APIs), maintain state across steps, and adapt based on intermediate results.

> **The business trip example:** Ask an AI assistant to plan a business trip. A standard model gives you suggestions. An agent actually books the flights, checks calendar availability, reserves a hotel within budget, and sends the itinerary to your email — each a separate action, taken in sequence, adjusting based on what it finds along the way.

### What PMs Need to Think About When Building with Agents

**Failure modes compound.**
Each step can fail, and errors cascade. If an agent misreads step two, steps three through ten are built on a bad foundation. Evaluation is harder than for single-turn outputs — you're checking a chain of decisions, not one response.

**Human-in-the-loop thresholds.**
Decide upfront which actions the agent can take on its own and which require user confirmation first.

| Low stakes (agent can act) | High stakes (user confirmation required) |
|---|---|
| Sending a calendar invite | Sending an email to a client |
| Looking up a policy | Making a purchase |
| Drafting a response | Deleting a file |

The more irreversible the action, the more you want a human in the loop before it executes.

**Logging agent steps.**
You need a record of every action the agent took and the reasoning behind it. Without this, when something goes wrong, you have no way to trace back what happened. Think of it like a flight recorder for your agent. Users also need this for trust: *"Why did you send that email?"* requires an audit trail.

**Cost control.**
Agents can spin up long chains of tool calls to complete a single goal. Each call costs tokens. Without limits, a single agent run can get expensive fast — especially if the agent loops or takes an unnecessarily long path.

> **Sierra AI PM interview:** Candidates were asked to design the full technical system for an agentic customer support chatbot — including how it would handle tool use, routing, and failure states.

---

## 8. MCP (Model Context Protocol)

**MCP** is an open standard that lets AI models connect to external tools, data sources, and services in a structured way. Think of it as the API contract between an AI agent and the outside world.

**Without MCP:** Every integration between an AI model and an external tool requires custom code written from scratch.

**With MCP:** The same model can talk to a CRM, a calendar, a database, and a code editor without a bespoke integration for each.

> **Concrete example:** Claude can connect to Google Drive, Notion, Slack, and GitHub through MCP. When you ask it to *"summarize the latest comments in my Notion doc and draft a Slack message about it,"* it pulls data from two separate systems in a single request. MCP is what makes that possible without a custom integration built between each pair of tools.

**Why it matters for PMs building agentic or multi-system AI products:**
- Standardizes how models access external context (reducing custom integration work)
- Makes tool use more reliable and auditable
- Increasingly expected as a baseline for enterprise AI products

> **Try it yourself:** Open Claude.ai → Settings → Connectors. Connect one source (Google Drive, Notion, Slack, or GitHub) and ask Claude a question that requires it to pull from that source. That pipeline is MCP in action.

---

## 9. Temperature & Sampling

*"How would you make a model's output more creative?"* is a question that comes up at Google and Apple. It sounds like a product question — but it's a technical probe. Candidates who answer with "we'd tune the UX" reveal they don't understand how the model works.

**Temperature** controls how deterministic or creative the model's outputs are.

| Temperature | Behavior | Best For |
|---|---|---|
| **Low (near 0)** | Picks the most likely next token every time — predictable, consistent, reliable | Legal summarization, medical assistants, factual Q&A |
| **High** | Samples more broadly — more varied, more surprising, sometimes more wrong | Marketing copy, brainstorming, creative writing |

**The practical PM decision:** What does this feature need to be — consistent and accurate, or varied and generative?
- A medical assistant that gets creative is dangerous
- A brainstorming tool that always plays it safe is useless

---

## 10. Latency & Streaming

**Latency** is the time between a user submitting input and the model completing its response. For LLMs, this can run into seconds — unacceptable for many real-time use cases.

**Streaming** solves the perception problem by sending tokens to the UI as they're generated. The user sees words appearing progressively rather than waiting for a complete response. Total time to completion is the same, but perceived responsiveness improves dramatically.

### UX Implications by Use Case

| Use Case | Right Approach | Why |
|---|---|---|
| Conversational interfaces | **Streaming** (default) | Without it, user stares at a blank screen — feels broken even when the model is working fine |
| Background tasks (doc summarization, report generation) | **Batch (non-streaming)** | User doesn't need to watch it happen — they just need the result |
| Long-running agentic tasks | **Progress indicators**, not just a typing indicator | Users need to know something is happening across a multi-step process |

**Latency directly impacts product decisions beyond UX:**
- A real-time medical triage tool that takes 8 seconds to respond is not real-time
- A live customer support agent who pauses mid-conversation while waiting for a model call will feel broken to the user

> **Latency budgets need to be defined upfront, not tuned after launch.**
>
> **Google DeepMind PM interview:** *"How would you design UI and UX around AI latency and multimodal features?"* — testing whether candidates could translate a technical constraint into concrete product decisions.

---

## 11. Bias & Fairness

Models learn from human-generated data, which means they encode human biases. These are predictable failure modes, not edge cases.

> **OpenAI principal PM interview:** Candidates were asked directly: *"How would you prevent the system from reinforcing harmful biases?"* — and the expected answer went well beyond detection into feedback-loop design and safeguards architecture.

### Four PM Responsibilities

**1. Identify who gets hurt when the model is wrong.**
Map your user population. Which groups are underrepresented in training data? Where is the error rate likely to be highest? A speech-to-text product trained on American English accents will perform worse for non-native accent users. A loan approval model trained on historical data may systematically disadvantage groups that were historically denied credit. Name the risk before it ships.

**2. Detect bias through disaggregated evals.**
Don't just measure average performance — measure across demographic slices, languages, and accessibility needs separately. A model that is 90% accurate on average can be 70% accurate for a specific group, and the average masks that.

In practice:
- Build a test set that intentionally over-represents edge case groups
- Run your eval suite across subgroups and compare error rates
- Flag any group where performance drops meaningfully below average as a **launch blocker**, not a backlog item

**3. Prevent reinforcement.**
Bias compounds over time. A biased model yields worse results for certain users → those users engage less → less data from that group feeds back into the training pipeline → the model becomes even less representative. Breaking that loop means:
- Filtering model outputs before using them as a training signal
- Bringing in diverse human raters for labeling
- Auditing your data pipeline for representation gaps on a regular cadence

**4. Be transparent with users.**
Tell users when AI is involved in a consequential decision — especially in hiring, lending, healthcare, or content moderation. Users who know AI is involved can push back. Users who don't know have no recourse.

> **A strong interview answer on bias does three things:**
> 1. Names a specific group or scenario at risk given the product context
> 2. Describes a concrete detection method (disaggregated evals, third-party audit)
> 3. Explains how you'd prevent bias from compounding through your feedback-loop design
>
> Most candidates stop at detection. The prevention piece is what separates a good answer from a great one.

---

## Quick Reference

```
MODEL LIFECYCLE
→ Pre-training: foundation knowledge (done by model providers)
→ Post-training: fine-tuning, instruction tuning, RLHF (your team shapes behavior)
→ Inference: what users experience (where PM decisions have direct impact)

TOKENS & CONTEXT
→ Everything in + out costs tokens → drives cost and context limits
→ Context window = working memory; truncation = silent forgetting
→ Reducing context from 2,000 to 800 tokens = ~60% cost reduction at scale

HALLUCINATIONS
→ Training-time: wrong knowledge → fix with RAG or better data
→ Inference-time: confusing prompt → fix with prompt design
→ Four mitigations: RAG, citations, confidence thresholds, evals

RAG vs. FINE-TUNING vs. PROMPTING
→ Start with prompting
→ Knowledge gap? → RAG
→ Task execution gap after RAG? → Fine-tune (with data + budget)

AGENTIC AI
→ Agents = sequences of actions, not single responses
→ Failure modes compound; define human-in-the-loop thresholds upfront
→ Log every step; control costs; design for irreversibility

TEMPERATURE
→ Low = consistent and predictable (medical, legal, factual)
→ High = creative and varied (brainstorming, marketing copy)

LATENCY & STREAMING
→ Streaming = default for conversational interfaces
→ Define latency budgets upfront, not after launch

BIAS
→ Name who gets hurt → disaggregated evals → prevent reinforcement loops → be transparent
→ Detection is the floor; prevention is what gets you to Strong Hire
```
