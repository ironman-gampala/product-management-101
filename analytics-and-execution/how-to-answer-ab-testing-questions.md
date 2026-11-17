# How to Answer A/B Testing Questions

> A/B testing questions test more than your knowledge of experiment mechanics. They test whether you can make decisions under uncertainty, navigate results that don't give you a clean answer, and hold a defensible position when the interviewer pushes back.

---

## How This Shows Up in Real Interviews

| Company | Format | What Was Actually Being Tested |
|---|---|---|
| **Uber** | Embedded in a product design question — *"How would you design an A/B test for this gift card redemption flow?"* | Whether experimentation drives a product decision |
| **OpenAI** | Framed as a rollout question — *"Lead the launch of GPT-6 into ChatGPT"* | Phased rollout, metric selection, and launch decisions under uncertainty |
| **Capital One** | Direct — *"How do you A/B test a new feature?"* | Same underlying test: does experimentation inform a decision? |

**The pattern:** None of them test the mechanics of experimentation in isolation. Even the plainest version is really asking how experimentation drives a decision.

---

## What Interviewers Are Looking For

| Signal | What It Means |
|---|---|
| **Investigation skills** | Do you scope the experiment before jumping to setup — checking assumptions about the product, the population, and what's being measured? |
| **Metric judgment** | Can you choose a primary metric that maps to your hypothesis and name where it could mislead you? |
| **Execution** | When results are mixed, can you commit to a ship decision with explicit reasoning, a rollout plan, and a specific reversal condition? |
| **Communication** | Do you make your reasoning audible at each step so the interviewer can follow the logic from hypothesis to impact? |
| **Curiosity** | Do you push past the mechanics to ask the harder questions — what the test can't see, where the offline/online gap shows up? |

---

## The 5-Part Framework

> These five components map to the five things an interviewer needs to believe before trusting your recommendation: that you're testing the right thing (hypothesis), in the right way (methodology), measuring the right signals (metrics), drawing the right conclusion (impact), and being honest about what you might be wrong about (tradeoff).

```
1. Hypothesis  → What you believe is true, and why
2. Methodology → How the experiment is set up
3. Metrics     → What signals tell you it worked (and what might mislead)
4. Impact      → How the result drives a decision
5. Tradeoffs   → What the experiment can't see
```

---

## Part 1 — Hypothesis

Before touching any setup, **state your hypothesis.** What do you believe is true, and what result would prove or disprove it?

A strong hypothesis has two parts:

| Part | What It Contains | Most Candidates Stop Here |
|---|---|---|
| **Prediction** | What you expect to happen | ✓ |
| **Rationale** | *Why* — the specific user behavior or friction that makes you confident this change will matter | ✗ (the part that's skipped) |

The rationale names a specific observed behavior, not just a general logic. That specificity is what makes it defensible when the interviewer pushes back.

> **Weak:** *"I believe showing the review count will increase conversion."*
>
> **Strong:** *"I believe showing the review count will increase conversion because users drop off at the moment of booking decision, and exit surveys show that uncertainty about quality is the most-cited reason for abandonment. The review count is a trust signal that directly addresses that uncertainty."*

---

## Part 2 — Methodology

Define the experiment setup across four components.

### Treatment and Control

Be specific enough that an engineer could build the treatment without clarifying questions. **Always define what the control group experiences** — without it, you can't attribute any change to your intervention.

### Population

*"All users"* is almost never right. For every experiment, name:
- The segment most likely to be affected
- What you're excluding and why
- Your rollout percentage with the logic behind it

**Starting population guidance by risk level:**

| Risk Level | Starting Rollout | When to Use It |
|---|---|---|
| **Low risk** | 10–20% | Minor copy or UI changes; well-understood feature area |
| **Medium risk** | 5–10% | New features; significant UX changes; monetization changes |
| **High risk** | 1–5% | AI model changes; core product changes; anything with safety implications |
| **Very high risk** | <1% (canary) | Infrastructure changes; anything that could fail catastrophically |

### Duration and Sample Size

Two numbers to state explicitly, with justification for both:

- **Duration:** Floor is 2–3 weeks — long enough to survive the novelty effect and capture full weekly cycles
- **Sample size:** Name your confidence level (typically 95%) and the minimum lift you care about detecting (usually 3–5%)

> **Weak:** *"I'd run for three weeks at 5% of users."*
>
> **Strong:** *"Three weeks gets us past the novelty effect and captures the weekly usage pattern we'd expect for this feature. 5% of this product's MAU gives us more than enough volume to detect a 3% lift at 95% confidence — which is the minimum lift that would justify the engineering cost of a full rollout."*

---

## Part 3 — Metrics

Name three tiers of signals:

### Tier 1 — Primary Metric

The signal directly tied to your hypothesis. This is what the experiment is designed to move. It should be:
- Behavioral (not attitudinal)
- Directly influenced by the change you're testing
- Sensitive enough to move in your experiment window

> **Why ratings are almost always the wrong primary metric:** Explicit thumbs-up/thumbs-down ratings have a low participation rate, are negatively skewed, and capture perception rather than whether the user got what they needed. A behavioral metric — whether the user continued or completed the task — is almost always a stronger signal.

### Tier 2 — Guardrail Metrics

Metrics that should *not* move. These protect against unintended harms. If a guardrail metric moves in the wrong direction, it's a signal to halt or investigate — even if the primary metric improved.

Examples: session depth, D7/D30 retention, error rate, customer support contact rate.

### Tier 3 — Exploratory Metrics

Secondary signals you're watching out of curiosity. They won't make or break the ship decision, but they add context and generate hypotheses for the next experiment.

---

### Metrics for AI Products

For AI features, the standard three-tier framework isn't enough on its own. Classic engagement metrics **cannot distinguish between a user engaging with the correct answer and one engaging with the wrong one** — they look identical in behavioral data.

Add a parallel layer that tracks whether the AI is actually doing its job well:

| AI-Specific Metric | What It Catches |
|---|---|
| **Hallucination rate** | Model generating false but confident outputs |
| **Task completion rate** | Whether users actually accomplished what they came to do |
| **User override rate** | How often users edit or dismiss the model's output |
| **Escalation to manual path** | Users abandoning AI in favor of doing it themselves |
| **Return rate to same query** | Users didn't trust or understand the first answer |
| **p50/p95 response time** | Latency tradeoffs (AI features often trade speed for quality) |
| **Cost per query** | Token cost at scale — often invisible until it isn't |

**This is the offline/online gap.** Your A/B test tells you how users behaved. It doesn't tell you whether the model's outputs were accurate or safe. If your entire metric stack is behavioral, you're testing half the thing. Running a parallel offline eval on sampled outputs — human review of model outputs running alongside the experiment — is what closes that gap.

---

## Part 4 — Impact

Running an experiment just tells you information. The impact section is where you explain how that information will **actually drive a decision**.

Name the specific metric movement that would make you launch, and the specific movement that would make you not. Then tie both back to the company's broader goal.

**Three outcomes to address explicitly:**

| Outcome | What It Looks Like | What You Do |
|---|---|---|
| **Clear win** | Primary metric up; guardrails stable or improved | Launch with a phased rollout plan; state the rollout sequence and timeline |
| **Clear loss** | Primary metric flat or down; guardrails may have worsened | Do not ship; run a follow-up diagnosis to understand why |
| **Mixed results** | Primary metric up; one guardrail degraded | This is the hardest case. Name the framework for resolving the tension, name what you're consciously deprioritizing, and commit to a position. |

> **On mixed results:** The move interviewers are watching for is whether you can make a call. *"It depends"* is not a ship decision. Name the tension, explain which metric you're prioritizing and why, state the rollout plan (often: ship to a smaller segment with close monitoring), and specify the exact condition that would trigger a reversal.

---

## Part 5 — Tradeoffs

Every experiment has something it can't see. The data tells you whether a metric moved. It doesn't tell you whether the change was actually good for the product.

**Name at least one thing your experiment would miss before the interviewer asks.**

| Blind Spot | What It Misses |
|---|---|
| **Meaningful vs. hollow interactions** | A feature might increase engagement volume while degrading quality. More comments ≠ better conversations. |
| **User delight and trust** | Satisfaction and emotional response influence long-term retention but don't map cleanly to behavioral metrics. |
| **Cannibalization of other surfaces** | Making one element more prominent often comes at the expense of something else. What did users stop clicking? |
| **Novelty vs. lasting habit** | An experiment window captures a snapshot. It can't tell you whether the change builds a lasting habit or just produces a spike that decays. |
| **What you can't A/B test at all** | Some changes are too large, too infrastructural, or too brand-defining for a controlled experiment. Data informs the decision but can't make it. |

> **The move interviewers are looking for:** Name the specific blind spot most relevant to *this* experiment — not a generic list. What would a purely data-driven analysis of this particular test miss?

---

## Common Pitfalls

**Jumping to setup before stating the hypothesis.**
State what you believe is true and why before describing any experiment design.

**Picking ratings as your primary metric.**
For AI features, a behavioral metric — conversation continuation rate, task completion rate — is a stronger signal than thumbs-up/thumbs-down.

**Treating "all users" as a valid population.**
Name the segment, explain why it's right, and give the rollout percentage with logic behind it.

**Hedging on the ship decision.**
Name the framework for resolving the tension, name what you're consciously deprioritizing, and commit.

**Missing the offline/online eval gap.**
If your metrics are entirely behavioral, you're testing half the thing — especially for AI features.

---

## Quick Reference

```
1. HYPOTHESIS
→ Prediction: what you expect to happen
→ Rationale: the specific user behavior that makes you confident

2. METHODOLOGY
→ Treatment vs. control (specific enough to build)
→ Population: named segment, exclusions, rollout % with logic
→ Duration: 2–3 weeks minimum (novelty effect + full weekly cycles)
→ Sample size: 95% confidence, 3–5% minimum detectable effect

3. METRICS
→ Primary: behavioral, directly influenced, sensitive enough to move
→ Guardrails: what should NOT move (retention, error rate, support contacts)
→ Exploratory: context signals for next experiment
→ AI features: add offline eval (hallucination rate, override rate, task completion)

4. IMPACT
→ Define launch threshold (primary up + guardrails stable)
→ Define halt threshold (primary flat or guardrail down)
→ Mixed results: name the tension, pick a side, state rollout plan + reversal condition

5. TRADEOFFS
→ Name the specific blind spot most relevant to THIS experiment
→ What would purely behavioral data miss about this particular change?
```
