# Rubric for Analytical / Execution Interviews

> Built from real rubrics used inside big tech companies and AI frontier labs.

---

## How the Rubric Works

Interviewers score each dimension on a four-point scale:

**Strong No Hire → No Hire → Hire → Strong Hire**

A single weak score can pull down an otherwise strong performance. No dimension is safe to ignore.

---

## Dimension 1 — Investigation Skills

Scores whether you can take a broken metric or ambiguous data signal and diagnose it systematically — scoping the problem, building a full hypothesis space, and using each data point to eliminate possibilities rather than confirm a prior hunch.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Jumps to fixes before diagnosing. Asks questions at random with no logic connecting them. Treats the first plausible explanation as the answer. |
| **No Hire** | Attempts a diagnosis but makes serious errors — conflates correlation with causation, skips the scoping step, or needs significant guidance to stay on track. |
| **Hire** | Scopes the problem before hypothesizing. Builds a reasonable hypothesis space and uses data to narrow it. May miss a less obvious variable or need a nudge to consider the full range of causes. |
| **Strong Hire** | Asks scoping questions that reveal hidden structure in the problem. Builds a hypothesis space that includes both internal and external causes, including AI-specific failure modes where relevant. Every question visibly changes where they go next. Steps back and re-triages out loud when the data doesn't fit the expected pattern. |

---

## Dimension 2 — Metric Judgment

Scores whether you can choose the right metric for what's being built and defend that choice with real reasoning — connecting a metric to the product's strategic context, explaining why it beats the alternatives, and navigating conflicting signals without folding.

**The AI-specific nuance:** Classic engagement metrics can actively mislead for AI products. A user clicking through on an AI suggestion isn't always a signal of success; time spent can reflect confusion or frustration as easily as satisfaction. Candidates who understand this — and who can propose metrics that capture quality, trust, or task completion — score significantly higher than those applying a standard engagement funnel to a fundamentally different kind of product.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Defaults to obvious metrics without considering alternatives. Can't explain why the chosen metric is better than the next best option. |
| **No Hire** | Selects metrics with weak rationale. Struggles to explain tradeoffs or chooses metrics that don't align with the product's actual goal or lifecycle stage. |
| **Hire** | Makes reasonable metric choices with a clear argument for each. May miss the strongest candidate or need a push to apply the reasoning to AI-specific measurement challenges. |
| **Strong Hire** | Applies principled criteria to multiple candidates before selecting one. Proactively names where the chosen metric could mislead and proposes guardrails to catch it. Treats the north star not as a final answer but as a decision that needs to be monitored and potentially revised. |

---

## Dimension 3 — Execution

Scores whether you can translate your analysis into a concrete, actionable plan and defend it under pressure. A direction without a plan is half an answer. Interviewers are watching whether you can go all the way from *"here's my call"* to *"here's exactly how we execute it, in this order, with these guardrails."*

> **The most common failure:** Producing a careful analysis and then landing on a vague recommendation. *"I'd do a phased rollout and monitor quality"* isn't a plan. A plan names who gets it first and why, what percentage, what timeline, which guardrail metrics are being tracked, what threshold triggers a pause, and what happens next if it does.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Produces analysis and hands the decision back. Lists considerations on both sides with no resolution. Says "it depends" without naming what it depends on. |
| **No Hire** | Reaches a direction but the plan is too thin to execute — no sequencing logic, no guardrail thresholds, no stated reversal condition. |
| **Hire** | Makes a clear recommendation with a reasonable plan. Names the main tradeoff and at least one guardrail metric. May need prompting to get to specific thresholds or rollout sequencing. |
| **Strong Hire** | Commits to a specific call with a fully articulated plan: who gets it first and why, what the rollout sequence is, which guardrail metrics are being tracked with pre-committed thresholds, and what the exact trigger is for pausing or reversing. Concrete enough to action the next day. |

---

## Dimension 4 — Communication & Collaboration

Scores whether the interviewer can follow your reasoning in real time, and whether you treat them as a thinking partner or an audience.

What's being scored is not polish or fluency — it's whether your logic is **traceable at each step**: do you signal when you're moving from diagnosis to recommendation? Do you flag your assumptions? Do you check in when you're about to go deep on a hypothesis? You should bring the interviewer along as if you two were collaborating on the problem.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Reasoning is hard to follow. Interviewer has to ask repeatedly for clarification. Treats the session as a monologue. |
| **No Hire** | Some clarity, but transitions are abrupt or unstated. Doesn't use the interviewer as a resource. May need significant redirects to stay on track. |
| **Hire** | Communicates clearly for most of the session. Articulates reasoning at key steps. Uses the interviewer's input when offered but may not actively invite it. |
| **Strong Hire** | Makes reasoning audible at every transition. Flags assumptions, checks in at natural pivot points, and incorporates the interviewer's responses in a way that sharpens the answer rather than just acknowledging them. The session feels like a real collaboration. |

---

## Dimension 5 — Curiosity & Passion

Scores whether you're genuinely engaged with the problem. Interviewers notice the difference between a candidate who is working through a framework and a candidate who is actually curious about what's broken and why.

This shows up in the **quality of questions**, not the quantity. A candidate who asks *"what's the denominator of this metric?"* before forming any hypothesis is showing real analytical curiosity. A candidate who asks a surprising follow-up after the diagnosis is showing they're thinking beyond the immediate task. Candidates who score highest on this dimension often uncover something the interviewer hadn't framed explicitly — simply because they were genuinely trying to understand the problem.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Shows no interest in the problem. Asks only what's required to move to the next step. Answers feel mechanical. |
| **No Hire** | Attempts to show curiosity but asks surface-level questions or follows up in predictable, low-signal ways. |
| **Hire** | Asks good questions and engages genuinely with the problem. Shows real interest at key moments, even if it doesn't surface consistently throughout. |
| **Strong Hire** | Asks questions that reveal how they're actually thinking — not just what they need to proceed. Uncovers something interesting or unexpected in the problem through their line of inquiry. The engagement feels consistent, not performed. |

---

## Master Summary

| Dimension | Strong No Hire | No Hire | Hire | Strong Hire |
|---|---|---|---|---|
| **Investigation Skills** | Jumps to fixes, no scoping | Serious errors, needs heavy guidance | Reasonable space, may miss variables | Full internal + external space, re-triages out loud |
| **Metric Judgment** | Defaults to obvious metrics | Weak rationale, poor alignment | Reasonable choice with argument | Principled selection, names failure modes, proposes guardrails |
| **Execution** | Hands back the decision | Direction with no plan | Clear call + main tradeoff + one guardrail | Full plan: sequence, thresholds, reversal trigger |
| **Communication** | Hard to follow, monologue | Abrupt transitions, no collaboration | Clear at key steps, uses input | Reasoning audible at every step, real collaboration |
| **Curiosity & Passion** | Mechanical, no interest | Surface-level questions | Genuine engagement at key moments | Uncovers unexpected structure, consistently engaged |
