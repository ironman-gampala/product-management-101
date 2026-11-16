# Concepts cheatsheet

Use this as the accuracy check for the Explain it simply drill, and to answer meta-questions in a
mock. Each concept: what it is in plain words, one analogy, and why a PM cares. These are the
working-level ideas a PM needs, not engineering detail. Specific model names, prices and context
sizes change often — tell the learner to check current provider docs before quoting numbers.

## Contents
Models: 1 LLM · 2 Tokens · 3 Context window · 4 Model lifecycle · 5 Prompting · 6 Temperature ·
7 Hallucination
Knowledge: 8 Embeddings · 9 Vector search · 10 Chunking · 11 RAG · 12 Fine-tuning
Quality: 13 Evals and golden sets · 14 Model as judge · 15 Precision and recall · 16 Grounding and
citations · 17 Human in the loop · 18 Model drift
Agents and safety: 19 Agents and tool use · 20 MCP · 21 Guardrails and prompt injection
Speed and cost: 22 Latency and streaming · 23 Cost per task and model routing · 24 Caching ·
25 Queues and batching

---

## Models

### 1. LLM (large language model)
A model trained on a huge amount of text to predict the next word, one piece at a time. Because it
has seen so much language, predicting the next word well looks like writing, summarising and
reasoning. It doesn't look facts up unless you give it a way to.
**Analogy:** a very well-read autocomplete.
**Why a PM cares:** it is fluent by default, not correct by default — so quality has to be designed
and measured, not assumed.

### 2. Tokens
The units a model reads and writes — roughly a word or part of a word. Everything sent in (system
prompt, history, documents, the question) and everything sent back is counted in tokens.
**Analogy:** a taxi meter that runs on words, in both directions.
**Why a PM cares:** tokens are the unit of cost and of the context limit. A long prompt sent on
every call is paid for on every call.

### 3. Context window
The most tokens a model can take in one call — its working memory for that request. Past the limit,
older content is cut off or the call fails.
**Analogy:** a desk that only fits so many papers; add more and some fall off the back.
**Why a PM cares:** a support bot that forgets what the customer said ten turns ago is a context
problem. Bigger windows cost more per call; summarising history is often the better fix.

### 4. Model lifecycle: pre-training, post-training, inference
Pre-training teaches general language from massive data (done by model providers). Post-training
shapes behaviour — following instructions, being helpful and safe, specialising on a task.
Inference is the model answering a live request.
**Analogy:** years of reading → onboarding at a new job → doing the job each day.
**Why a PM cares:** most product decisions live in post-training and inference — which model, how
it's instructed, what data it sees, how fast and costly each answer is.

### 5. Prompting and the system prompt
Instructions sent with every request that tell the model its role, rules, format and tone. The
system prompt is the fixed part the user doesn't see.
**Analogy:** the brief you give a capable freelancer before each job.
**Why a PM cares:** it is the cheapest, fastest lever and should be tried first. It cannot add
knowledge the model doesn't have.

### 6. Temperature
A setting for how predictable or varied the output is. Low means the model picks the most likely
words every time; high means it samples more widely.
**Analogy:** a dial from "stick to the script" to "improvise".
**Why a PM cares:** it sets the product's personality. A medical or legal assistant wants low; a
brainstorming tool wants higher. It is not a fix for wrong facts.

### 7. Hallucination
A confident, plausible answer that is wrong. It has two root causes. Training-time: the model never
learned the fact, or learned it wrong or out of date. Inference-time: the prompt or context was
missing, contradictory or confusing, so the model filled the gap.
**Analogy:** a student who'd rather guess fluently than say "I don't know".
**Why a PM cares:** it destroys trust. Prompting can't fix missing knowledge — that needs
retrieval or better data. Mitigate with grounding, citations, confidence thresholds and evals.

## Knowledge

### 8. Embeddings
A way to turn text into a list of numbers so that text with similar meaning gets similar numbers.
That lets a computer find related passages even when the words differ.
**Analogy:** map coordinates for meaning — "refund policy" and "getting my money back" land close
together.
**Why a PM cares:** the choice of embedding model decides whether search finds the right content;
a general one may miss specialised terms (medical, legal, product codes).

### 9. Vector search (and hybrid search)
Search by meaning using embeddings, usually stored in a vector database. Hybrid search combines it
with classic keyword search, which is better at exact names and codes.
**Analogy:** a librarian who understands what you mean, plus one who matches exact titles.
**Why a PM cares:** retrieval quality caps answer quality in RAG. When RAG answers are bad, look at
search first, not the model.

### 10. Chunking
Splitting documents into smaller pieces before embedding them, so search can return the relevant
part rather than a whole manual.
**Analogy:** cutting a cookbook into recipe cards.
**Why a PM cares:** too big and the answer is buried in noise; too small and the context that gives
it meaning is lost. It's a measurable product choice (see `rag-eval-lab/CHUNK_DECISIONS.md`).

### 11. RAG (retrieval-augmented generation)
Before answering, the system searches your own content for relevant passages and gives them to the
model with the question, so it answers from that material. It changes what the model reads for
this request, not the model itself.
**Analogy:** an open-book exam instead of answering from memory.
**Why a PM cares:** answers stay current and can cite sources without retraining. It fails when
search returns the wrong or stale passage, so the index must be kept fresh and retrieval measured
separately from the final answer.

### 12. Fine-tuning (and synthetic data)
Training an existing model further on many examples of your task, which changes the model's
behaviour itself. Synthetic data means examples generated by a model to fill gaps where real
examples are scarce.
**Analogy:** specialist training for a generalist hire.
**Why a PM cares:** it can make a small model good and cheap at a narrow task, but it needs data,
money and upkeep, and it doesn't add fresh facts. Synthetic data scales examples but can copy the
generating model's mistakes and biases, so it needs checking. Use it after prompting and RAG.

## Quality

### 13. Evals and golden sets
A repeatable test of output quality. A golden set is a collection of real inputs with known-good
answers, covering common, hard, edge and adversarial cases and different user groups.
**Analogy:** a driving test with a fixed route, taken by every new version before it gets the keys.
**Why a PM cares:** the PM defines what "good" means and the pass mark. Every model, prompt or data
change reruns the evals; if quality drops, it doesn't ship.

### 14. Model as judge (LLM-as-judge)
Using a second model, with a scoring rubric, to grade outputs — fast and cheap compared with people.
**Analogy:** a teaching assistant marking papers, with the professor spot-checking.
**Why a PM cares:** it makes evals scale, but the judge has its own blind spots (it may prefer long
or confident answers). Check it agrees with human raters on a sample before trusting it.

### 15. Precision and recall
Precision: when the system flags something, how often it is right. Recall: of everything it should
have caught, how much it caught. Pushing one up usually pushes the other down.
**Analogy:** a fishing net — a fine net catches more fish (recall) but also more junk (lower
precision).
**Why a PM cares:** you choose the balance by asking which mistake hurts users more — a missed fraud
case or a blocked honest customer.

### 16. Grounding and citations
Telling the model to make only claims backed by provided sources, and to show those sources.
**Analogy:** a journalist who must footnote every claim.
**Why a PM cares:** wrong answers become checkable instead of invisible, users learn to verify, and
you can measure "claims supported by sources" as a quality metric.

### 17. Human in the loop and confidence thresholds
A person reviews or approves some outputs before they take effect — usually the low-confidence or
high-stakes ones — while the model handles the rest.
**Analogy:** a junior drafts, a senior signs anything risky.
**Why a PM cares:** it is how you ship AI in high-stakes areas safely. The more irreversible the
action (payment, deletion, message to a customer), the more you want approval first.

### 18. Model drift and monitoring
Quality changes over time because users, data or the underlying model change, even if your code
doesn't.
**Analogy:** a map that slowly goes out of date as roads change.
**Why a PM cares:** launch is not the finish line. Watch live quality signals, sample outputs
regularly, and rerun evals when a provider updates the model.

## Agents and safety

### 19. Agents and tool use
An agent is a model in a loop: it plans steps, calls tools (search, APIs, code, calendars), reads
the results and decides the next step until the goal is done.
**Analogy:** an assistant who doesn't just suggest a trip but books it, checking as they go.
**Why a PM cares:** errors compound across steps, costs can run away, and some actions can't be
undone. You need step limits, cost caps, approval for risky actions and a log of every step.

### 20. MCP (Model Context Protocol)
An open standard for connecting AI models to tools and data sources in one consistent way, instead
of custom code for every pairing.
**Analogy:** a universal plug adapter for AI tools.
**Why a PM cares:** faster, more consistent integrations for agent products, and clearer control and
audit over what the model can reach.

### 21. Guardrails and prompt injection
Guardrails are checks before and after the model — filters for unsafe content, private data, or
off-topic requests. Prompt injection is when text inside a document, web page or email tries to
give the model new instructions.
**Analogy:** a security desk that checks what comes in and what goes out, and ignores notes slipped
under the door claiming to be from the boss.
**Why a PM cares:** an agent that reads emails or web pages can be tricked into acting. Limit what
it can do, treat outside content as data, and red-team before launch.

## Speed and cost

### 22. Latency, TTFT and streaming
Latency is how long the user waits. For models it is two numbers: time to first token (how quickly
the answer starts) and time per output token (how fast it continues). Streaming shows words as they
are generated.
**Analogy:** a waiter who brings bread right away while the main course cooks.
**Why a PM cares:** chat lives or dies on time to first token; long reports care more about the
streaming rate. Set the latency budget up front, and find where the time goes (prompt size,
retrieval, cold starts) before swapping models.

### 23. Cost per task and model routing
Cost per task = tokens in and out × price × calls per task. Model routing sends easy requests to a
small, cheap model and hard ones to a large model.
**Analogy:** a hospital triage desk — not every patient needs the senior surgeon.
**Why a PM cares:** unit economics decide which features are viable at scale. Compare cost per
successful task with the value of that task, and own the threshold that triggers optimisation.

### 24. Caching (exact and by meaning)
Storing answers to repeated requests so they are served instantly without a new model call.
Semantic caching also reuses answers for questions that mean the same thing.
**Analogy:** a pre-printed FAQ card handed out instead of asking the expert every time.
**Why a PM cares:** big cost and speed wins for repeated factual questions, but cached answers can go
stale, and caching doesn't help open-ended conversation.

### 25. Queues, async work and batching
A queue holds work to be done later instead of making the user wait. Batching groups many requests
into one model run to use hardware efficiently.
**Analogy:** a laundry service — drop it off, get a ticket, collect it later.
**Why a PM cares:** anything that doesn't need an instant answer (reports, bulk summaries) gets much
cheaper and survives traffic spikes. The trade-off is waiting time, so show progress and set
expectations.
