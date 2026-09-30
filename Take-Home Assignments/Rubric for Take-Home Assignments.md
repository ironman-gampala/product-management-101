# Rubric for Take-Home Assignments

> Built from real rubrics used inside big tech companies and AI frontier labs.

---

## How the Rubric Works

Interviewers rate each dimension on a four-point scale: **Strong No Hire → No Hire → Hire → Strong Hire.**

- A take-home that scores Hire across the board will usually clear the bar
- Strong Hire on a few dimensions — especially the ones that matter most to that company — is what gets you into offer conversations

**The dimension that is hardest to fake with AI assistance is debrief readiness.** Everyone preparing for PM interviews has access to the same tools and can produce a polished-looking take-home. What AI cannot do is own the reasoning behind a claim in a live conversation. Hiring committees at companies like Anthropic, Stripe, and Notion have shifted more evaluation weight to the debrief precisely because the written work has become harder to differentiate. If you want to stand out, that is where it happens.

---

## Dimension 1 — Point of View

Scores whether your take-home takes a real position or reads as a well-organized survey of things a PM might consider. Interviewers can assess this within the first two slides or the first paragraph.

**Balanced is not a point of view. It is an absence of one.**

A take-home with a point of view commits to one direction, names the hypothesis explicitly, and defends it. A take-home without one covers the expected ground, considers multiple options, and lands on the "balanced" choice.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | Presents multiple options without committing to one, or makes a recommendation that could apply to any company in any situation. No discernible thesis. |
| **No Hire** | A direction is chosen, but the reasoning is hedged or generic. The candidate does not defend the call or name what they are trading off. |
| **Hire** | One direction is chosen and argued clearly. The reasoning is coherent, the hypothesis is stated, and the candidate can defend it against direct follow-up. |
| **Strong Hire** | The point of view reflects a non-obvious read on this company's current priorities. The candidate commits to a direction a less-informed candidate would not have landed on, and can articulate both the case for it and what it knowingly deprioritizes. |

---

## Dimension 2 — Company Specificity

Scores whether the take-home feels like it was built for this company — or whether it could be submitted to five different companies with the name swapped.

The most common failure mode is technically sound, structurally correct work that is completely generic. Interviewers can tell the difference between company-specific color added as decoration (a recent product name dropped into an otherwise generic framework) and decisions that could only have been made by someone who really understood this company's growth challenge, metric priorities, and competitive position.

> **Tip:** Company specificity is not a section you add. It is a property of every decision in the take-home. The metric you anchor to, the scoping of the feature, the rollout approach — each of these should feel like they could only have been chosen for this company, right now. When they do, the specificity is real.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | The take-home is generic. The company name is present, but no decision in the document reflects real knowledge of this company's situation. |
| **No Hire** | There is some company-specific context, but it is used as decoration rather than as a driver of decisions. The feature or roadmap would be reasonable at many companies. |
| **Hire** | The primary metric, feature scope, and framing reflect real knowledge of what this company is optimizing for. A reader familiar with the company would recognize that the candidate did meaningful research. |
| **Strong Hire** | Every major decision traces back to something specific about this company right now: a recent strategic shift, a known growth challenge, a product decision that signals what the team values. It could not have been submitted elsewhere without significant rework. |

---

## Dimension 3 — Rigor

Scores whether the thinking is defensible: whether the experiment is designed properly, the metrics connect to the business, and the tradeoffs are named.

**Rigor shows up in three places:**

| Area | What Rigor Looks Like |
|---|---|
| **Experiment design** | Falsifiable hypothesis, clear test and control, staged rollout approach, primary metric with a success threshold, guardrail metrics that would cause you to stop |
| **Metric selection** | Primary KPI connects directly to a business outcome — not just user behavior |
| **Tradeoffs** | Every major build decision trades something off; named explicitly, not implied |

> **Tip:** Guardrail metrics are the single most-skipped element in take-home work, and interviewers notice immediately. A feature designed to increase engagement without a guardrail on content quality, churn in a specific segment, or support volume is not a complete proposal. Adding guardrail metrics signals that you understand what could go wrong — not just what you want to go right.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | The experiment is a sketch. No hypothesis, no control, no guardrail metrics. Tradeoffs are not named. Metrics listed do not connect to a business outcome. |
| **No Hire** | An experiment is described, but key elements are missing: rollout approach is vague, success threshold is not stated, or guardrail metrics are absent. Tradeoffs are implied but not named. |
| **Hire** | The experiment has a falsifiable hypothesis, a clear test/control setup, and guardrail metrics. Tradeoffs are named. The primary metric connects to the stated business outcome. |
| **Strong Hire** | The experiment design anticipates failure modes. The candidate has thought about what quiet failure looks like — the test that ships, underperforms, and gets quietly deprioritized — and has included the signals that would catch it before that happens. Tradeoffs are named with explicit reasoning about why this tradeoff is the right one for this company. |

---

## Dimension 4 — Level Signal

Scores whether the scope of thinking matches the level of the role. The same take-home prompt is evaluated differently for a senior PM than for an associate, even when the deliverable looks similar on the surface.

| Level | What the Bar Looks Like |
|---|---|
| **Junior** | A well-designed feature or roadmap with sound reasoning and clear structure |
| **Senior+** | Multi-team thinking: awareness of who else is affected, what dependencies exist across the organization, and what the sequencing logic is across a longer time horizon |

A senior-level take-home that goes deep on feature polish without naming what the feature makes harder to do elsewhere is missing the altitude the role requires.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | For a senior role: the take-home reads as a feature brief with no cross-team or strategic awareness. No acknowledgment of tradeoffs, dependencies, or internal resistance. |
| **No Hire** | The scope of the work is narrower than the role requires. The candidate identifies a good direction but does not show awareness of what it affects across the organization. |
| **Hire** | The take-home reflects appropriate scope for the level. For a senior role: tradeoffs are named, dependencies are acknowledged, and the candidate has thought about what gets deprioritized. |
| **Strong Hire** | The candidate is thinking at the right altitude from the start. Internal stakeholders who would push back are named. The sequencing logic reflects awareness of how early decisions create or foreclose later ones. The debrief conversation operates at the same strategic level as the written work. |

---

## Dimension 5 — Debrief Readiness

Scores whether you can defend every claim in a live conversation. Almost every take-home ends with a presentation and Q&A. This is not a formality — it is the second half of the evaluation, and it is where many candidates lose ground they gained with strong written work.

**Hiring committees read take-homes before the debrief specifically to find the questions they want to challenge.** Expect:
- Why this metric and not that one?
- What would you do if the test failed?
- Who internally would push back, and how would you respond?
- What did you intentionally leave out, and why?

The candidates who perform best have one thing in common: they built every section from their own thinking, so they can speak to any of it fluently under pressure.

| Score | What It Looks Like |
|---|---|
| **Strong No Hire** | The candidate cannot explain the reasoning behind major decisions. When pushed, they restate what the take-home says rather than explaining why they made those choices. Sections built with AI assistance are visible in the debrief because the candidate cannot speak to them. |
| **No Hire** | The candidate can answer direct questions about what the take-home says but struggles when pushed one level deeper: why this metric specifically, what they would do if the test failed, what they left out and why. |
| **Hire** | The candidate can speak to every section clearly and explain the reasoning behind major decisions. They handle direct follow-up without becoming defensive. |
| **Strong Hire** | The debrief conversation is as strong as the written work. The candidate anticipates the hardest questions and has already addressed them — either in the document or as a prepared answer. They surface tradeoffs before being asked. When asked *"what would you change if you had to ship this tomorrow,"* they have a crisp, already-considered answer. |

---

## Master Summary

| Dimension | Strong No Hire | No Hire | Hire | Strong Hire |
|---|---|---|---|---|
| **Point of View** | Multiple options, no thesis | Direction chosen but hedged | One direction, argued clearly, defensible | Non-obvious read on company priorities; names what it deprioritizes |
| **Company Specificity** | Generic; name present, no real knowledge | Specific context as decoration | Metric + scope + framing reflect real research | Every decision traces to something specific about this company right now |
| **Rigor** | No hypothesis, no guardrails, metrics disconnected from business | Experiment sketched; elements missing | Hypothesis + test/control + guardrails + named tradeoffs | Anticipates quiet failure modes; tradeoffs named with reasoning |
| **Level Signal** | Feature brief; no cross-team awareness (for senior role) | Narrower scope than role requires | Appropriate scope; dependencies acknowledged | Right altitude from the start; sequencing logic reflects strategic awareness |
| **Debrief Readiness** | Can't explain reasoning; AI sections visible under pressure | Handles direct questions; struggles one level deeper | Speaks to every section; handles follow-up without defensiveness | Debrief as strong as written work; anticipates hard questions; surfaces tradeoffs unprompted |

---

## Self-Audit Before You Submit

```
POINT OF VIEW
→ Can I state my thesis in one sentence?
→ Does my recommendation commit to one direction, or does it hedge?
→ Have I named what I'm consciously deprioritizing?

COMPANY SPECIFICITY
→ Could this be submitted to a different company with the name swapped?
→ Does my primary metric reflect what this company is actively optimizing for right now?
→ Does any decision in my take-home trace back to a specific recent event or strategic shift?

RIGOR
→ Is my hypothesis falsifiable?
→ Do I have a clear test vs. control setup and a success threshold?
→ Have I included guardrail metrics — the signals that would make me stop?
→ Have I named every major tradeoff explicitly?

LEVEL SIGNAL
→ For a senior role: have I named who else is affected by this decision?
→ Have I addressed dependencies and sequencing?
→ Have I named what gets deprioritized if this gets prioritized?

DEBRIEF READINESS
→ Can I answer "why this metric and not [alternative]?" without looking at the doc?
→ Can I answer "what would you do if the test failed?" with a specific answer?
→ Is there any section I didn't build from my own thinking?
→ What is my answer to "what would you change if you had to ship this tomorrow?"
```
