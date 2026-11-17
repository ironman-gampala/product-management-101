# Rubric for Technical & AI Interviews

> Interviewers score five dimensions on a four-point scale: **Strong No Hire → No Hire → Hire → Strong Hire.**

**Before walking through each dimension:** The bar has shifted. AI tools have made it easy to produce a technically fluent-sounding answer. Interviewers at Nvidia, Apple, and Sierra have recalibrated in response. Four of the five dimensions below have always mattered. The fifth — **Depth Under Pressure** — is rapidly becoming the one that separates candidates at the margin, because it is the only dimension that cannot be assembled from studied vocabulary alone.

---

## Dimension 1 — Technical Accuracy

Scores whether a candidate uses AI and systems concepts **correctly when they come up** — not whether they can define them on demand, but whether they apply them in context without slipping.

**The failure mode is not ignorance. It is misapplication.** Saying "we'd use RAG to improve model creativity" or describing fine-tuning as the fix for a prompt quality problem — interviewers notice this immediately. The wrong tool applied confidently is a stronger negative signal than simply not knowing the term at all.

> **What most candidates miss:** Accuracy gets tested through follow-ups, not opening answers. You can define RAG correctly and still score No Hire on this dimension if you misapply it two questions later. The test is not the definition — it is whether the concept stays coherent under use.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Concepts are misapplied or conflated. Uses technical terminology to signal fluency without demonstrating understanding. Cannot recover when a follow-up probes the claim. |
| **No Hire** | Concepts are broadly correct but imprecise. Applies the right label to the wrong situation at least once. Does not notice the error without prompting. |
| **Hire** | Concepts are used correctly and consistently. Does not confuse hallucination types, conflate RAG and fine-tuning, or mischaracterize what temperature does. |
| **Strong Hire** | Concepts are used precisely, including edge cases and nuances. Catches their own imprecision and self-corrects. The interviewer learns something from the way concepts are connected. |

---

## Dimension 2 — Failure Mode Awareness

Scores whether the candidate knows **how AI and technical systems break** — not just how they work when everything goes right.

Knowing that RAG reduces hallucinations is table stakes. What this dimension measures:
- Knowing that a RAG system can fail because the embedding model underperforms on specialized terminology
- Knowing that bias compounds over time through feedback loops
- Knowing that agent errors cascade from step two through step ten

> **The Nvidia pattern:** If you mention a technical concept in a past project story, the follow-up asks for the specific failure mode and what you did about it.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Cannot identify failure modes beyond the surface level. Treats AI systems as reliable by default. Does not know what causes hallucinations or what happens when an agent encounters an unexpected result. |
| **No Hire** | Aware that systems can fail but can only name generic risks ("it might hallucinate," "there could be bias"). Cannot connect the failure mode to the specific product or context in the question. |
| **Hire** | Names specific, relevant failure modes for the product or system being discussed. Distinguishes between training-time and inference-time hallucinations, or between bias detection and bias reinforcement. |
| **Strong Hire** | Raises failure modes **before being asked**, connects them to specific user harm or product risk, and proposes a concrete mitigation. Demonstrates that failure mode thinking is already part of their default design process. |

---

## Dimension 3 — Tradeoff Reasoning

Scores whether the candidate can **make a call** — not just describe options.

Every AI product involves tradeoffs: RAG vs. fine-tuning vs. prompting, latency vs. quality, cost vs. accuracy. The failure mode is not lacking knowledge of the options — it is presenting them without a recommendation. Interviewers at Google DeepMind and Perplexity have specifically noted that they want candidates who have "real opinions on RAG versus fine-tuning," not candidates who can recite a comparison table.

> **Listing tradeoffs is No Hire territory. Choosing one and defending it is Hire territory.**
>
> **The test interviewers use:** Did the candidate actually commit? If the answer ends with *"so it depends"* without specifying what it depends on and what the answer would be in this context, it reads as a hedge. A strong tradeoff answer names the winner, names the condition under which that answer changes, and stops there.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Cannot identify the relevant tradeoffs. Reaches for the most complex solution by default — recommending fine-tuning when prompting would solve the problem. |
| **No Hire** | Identifies the tradeoffs but does not commit to a recommendation. Ends with "it depends" without specifying the dependency. Treats all options as equivalent. |
| **Hire** | Makes a clear recommendation, explains the reasoning, and names the key condition under which the answer would change. The interviewer understands why this tradeoff was resolved the way it was. |
| **Strong Hire** | Makes a recommendation, defends it under follow-up, and proactively raises the second-order implication — not just "RAG is cheaper to ship" but "and that matters here because the knowledge base changes monthly, which makes fine-tuning maintenance too costly." |

---

## Dimension 4 — Product Grounding

Scores whether **technical knowledge connects back to users** — not just to engineering.

A candidate can know exactly what a context window is and still fail this dimension by never connecting truncation to the user experience of a chatbot that forgets what was said earlier. This dimension is what separates PMs who have learned concepts from PMs who think with them.

| Technical Concept | What Product Grounding Looks Like |
|---|---|
| Context window | Truncation = the chatbot forgetting what the user already said mid-conversation |
| Tokens | Cost scales with volume → shapes what features are viable at scale |
| Temperature | Setting it wrong ships the wrong product personality |
| Latency | Eight seconds in a medical triage tool is not real-time regardless of model quality |
| Confidence thresholds | Protecting user trust, not just filtering outputs |

> **Interviewers consistently notice when a candidate answers a technical question and then stops.** The missing piece is almost always the user.
>
> *"We'd implement confidence thresholds"* — half an answer.
>
> *"We'd implement confidence thresholds so users are not served a wrong answer confidently, because trust is what we are protecting here"* — the full one.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Technical concepts are discussed in isolation with no reference to user impact. Answers sound like engineering documentation. |
| **No Hire** | Mentions users but does not connect them specifically to the technical decision. The user reference is generic ("this would improve the user experience") rather than causal. |
| **Hire** | Connects technical decisions to specific user outcomes. Names who is affected, how, and why the technical choice was the right one given that user context. |
| **Strong Hire** | The user is the **starting point**, not the ending point. Technical choices are framed as consequences of user needs rather than options to be evaluated. The interviewer can trace every technical decision back to a specific user requirement. |

---

## Dimension 5 — Depth Under Pressure

Scores **what happens when the interviewer pushes** — and it is the hardest dimension to fake.

The pattern across the highest-bar loops is consistent: the opening answer is not the test. The follow-up is.
- At **Apple**: a zero-to-one AI story needs architecture detail, model choice, and eval methodology built in — not added when prompted
- At **Sierra**: agent architecture is expected cold — memory, RAG, MCP, quality controls, eval metrics

Candidates who have genuinely built with these systems go deeper under pressure. Candidates who have studied concepts go vaguer.

> **The clearest signal interviewers see on this dimension:** When pushed for specifics, does the candidate produce a specific answer — or do they restate the general principle at higher volume?
>
> *"We'd use embeddings to improve retrieval"* repeated more slowly — not depth.
>
> *"We switched from a general-purpose embedding model to one trained on clinical text because our recall on medication names was 60% and needed to be above 85%"* — depth.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Cannot go deeper when pushed. Restates the opening answer or retreats to abstraction. Specific follow-up questions ("which embedding model?", "what did your eval measure?") produce vague responses. |
| **No Hire** | Provides some additional detail under follow-up but cannot sustain it. Depth runs out after one level. Cannot speak to specific metrics, model choices, or decisions from real work. |
| **Hire** | Provides meaningful additional detail when pushed. Can name a specific metric, a concrete tradeoff from experience, or a decision point and its rationale. Does not retreat when the question gets specific. |
| **Strong Hire** | Goes deeper **unprompted** and sustains it. Produces specific, credible detail — metrics, model names, failure modes encountered, decisions made and reconsidered — that reads like someone who has actually built with these systems. |

---

## Master Summary

| Dimension | Strong No Hire | No Hire | Hire | Strong Hire |
|---|---|---|---|---|
| **Technical Accuracy** | Misapplied concepts; confident but wrong | Broadly correct but imprecise; wrong label applied at least once | Concepts used correctly and consistently | Precise including edge cases; self-corrects; interviewer learns from the connections |
| **Failure Mode Awareness** | Treats systems as reliable by default; surface-level at best | Generic risks only ("it might hallucinate"); no product connection | Names specific failure modes; distinguishes hallucination types or bias stages | Raises failure modes unprompted; ties to user harm; proposes concrete mitigation |
| **Tradeoff Reasoning** | Reaches for most complex solution by default | Identifies options but hedges with "it depends" without specifying | Clear recommendation with reasoning and reversal condition | Recommends + defends + raises second-order implication |
| **Product Grounding** | Pure technical discussion; no user reference | Mentions users generically; no causal connection | Names who is affected, how, and why the choice fits their context | User is the starting point; every technical decision traces to a user requirement |
| **Depth Under Pressure** | Restates opening answer or retreats to abstraction | Some detail but runs out after one level | Meaningful detail when pushed; doesn't retreat from specific questions | Goes deeper unprompted; specific metrics, model names, real decisions — reads like someone who built it |

---

## Self-Audit Before Your Interview

```
TECHNICAL ACCURACY
→ Can I use each concept correctly in context, not just define it?
→ If I mentioned RAG, can I say exactly what problem it solved and what it couldn't solve?
→ Can I apply my concepts correctly two or three follow-ups in?

FAILURE MODE AWARENESS
→ For every technical system I mention, what is its specific failure mode?
→ Can I connect that failure mode to a user or product risk — not just name it?
→ Do I raise failure modes proactively, or only when asked?

TRADEOFF REASONING
→ When I present options, do I commit to one?
→ Can I name the condition under which my recommendation changes?
→ Does my answer end with a choice, or does it end with "it depends"?

PRODUCT GROUNDING
→ Does every technical concept I use trace back to a user?
→ Am I naming who is affected, how, and why — or am I writing engineering documentation?
→ Is the user my starting point, or my ending point?

DEPTH UNDER PRESSURE
→ For every technical claim I plan to make: can I go one level deeper without hesitation?
→ Do I have at least one specific metric, model name, or real decision per technical area I might discuss?
→ Would I go vaguer or more specific if the interviewer pushed?
```
