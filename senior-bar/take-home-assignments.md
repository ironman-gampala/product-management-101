# Take-Home Assignments — Senior (SNR) and Senior+ (SNR+) Bar

Take-homes give you a **real problem, a few days and a deck or document to submit**, usually followed by
a **live presentation and Q&A**. The level is decided by your **point of view**, how specific it is to
**this company**, how **rigorous** the plan is, and whether you think **across teams and time**.

[← All question types](README.md)

---

## Sample questions

| # | Prompt | Subtype | Good practice for |
|---|---|---|---|
| 1 | "An airline launched its first AI support agent 3 months ago. Here are 4 initiatives; only one gets funded for the next two quarters. Which one, and why?" | Prioritisation | Sierra style |
| 2 | "Propose a feature that would make a developer tool spread within large companies." | Growth / virality | Anthropic style |
| 3 | "Pick any role in any enterprise industry. Design an AI product that would 10× what that role can do." | Open AI product design | AI-first companies |
| 4 | "Design Rippling's experience for an employee moving from one country to another, and the 12-month roadmap." | Product + roadmap (B2B) | Rippling |
| 5 | "Eightfold wants more recruiters to trust and act on AI recommendations. Propose a plan and an experiment." | Product + experiment | Eightfold AI |
| 6 | "Okta wants to win the identity layer for AI agents. Write a 1-year product strategy." | Strategy | Okta |
| 7 | "Here is 3 months of usage data. What's happening, and what would you do?" | Data analysis | Any |

More: [introduction-to-take-home-assignments.md](../take-home-assignments/introduction-to-take-home-assignments.md).

---

## The level ladder

```
  PM2 / L4   →  A well-structured feature or roadmap with sound reasoning. Several options, hedged.
                Could be submitted to any company.

  SNR / L5   →  ONE clear point of view, argued and defended. Metrics, scope and framing reflect real
                research on this company. A falsifiable experiment with guardrails. Trade-offs named.

  SNR+ / L6  →  A non-obvious read on the company's current priorities. Multi-team thinking: who else
                is affected, the dependencies, sequencing over a longer horizon. Plans for "quiet
                failure" and production readiness. Says clearly what it deprioritises.
```

---

## Step by step: what to include

| Part | SNR (must include) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Executive summary** | The recommendation, the why and the expected impact, on the first page. | A thesis a less-informed candidate wouldn't land on. | "Fund the rebooking agent, not the FAQ upgrade. Rebooking is where the airline loses loyal flyers." |
| **Company context** | What the company is optimising for now, with evidence. | A recent strategic shift you found, and how it drives your call. | "Their last two launches were both about loyalty, so retention beats deflection here." |
| **Users and problem** | One user, one problem, with data or evidence. | Show you checked the problem with real users or real data. | "I spoke to 5 frequent flyers. 4 of them had rebooked by phone after a failed chat." |
| **Options and choice** | 2–3 options, compared on clear criteria, then one pick. | Say what would need to be true for a rejected option to win. | "The FAQ upgrade wins only if deflection is the CFO's top goal this year." |
| **Solution** | The key screens or flow, and how it works behind the scenes. | Edge cases, failure states, and what you'd change before production. | "If the agent can't find a seat, it hands off to a human with the full context." |
| **Experiment** | A falsifiable hypothesis, test and control, a staged rollout, a primary metric with a threshold, and guardrails. | Signals that catch "quiet failure" before the project is quietly dropped. | "If adoption is below 10% by week 4, we review it, rather than letting it fade." |
| **Roadmap** | Now, next, later, with what waits and why. | Dependencies across teams and the milestone that unlocks each phase. | "Phase 2 needs the loyalty team's API, so I'd agree that in Q1." |
| **Risks** | The top 3 risks and how you'd reduce them. | Org and go-to-market risks, not just technical ones. | "The biggest risk is the call-centre team seeing this as a threat. I'd involve them in the pilot." |
| **Presentation + Q&A** | Present in 15–20 minutes, then defend your call calmly. | Invite pushback, and adjust only with a reason. | "That's a fair challenge. Here's what would change my mind." |

---

## Checklist

**SNR — include all of these:**
1. The recommendation on page one.
2. Evidence of real company research.
3. One user and one problem, with data.
4. Options compared on criteria, and one pick.
5. A falsifiable experiment with thresholds and guardrails.
6. A roadmap that says what waits.
7. Named trade-offs.
8. A calm defence in the Q&A.

**SNR+ — add these:**

9. A non-obvious point of view, specific to this company right now.
10. Cross-team dependencies and sequencing.
11. Signals that catch quiet failure.
12. Production readiness: what changes before a real launch.
13. Org and go-to-market risks.

**Time:** most companies say 3–4 hours. Strong candidates spend more, but keep the output **short and
sharp**: a long deck is not a better deck.

---

## Red flags

| Red flag | Why it costs you |
|---|---|
| Several options with no pick | There's no point of view. |
| The company name is the only specific thing | It could be submitted anywhere. |
| An experiment with no threshold or guardrails | It isn't rigorous. |
| A 40-slide deck | It shows you can't prioritise. |
| Getting defensive in the Q&A | The Q&A is half the score. |
| Obviously AI-written text with no real research | Reviewers notice quickly. |

---

## Read next

- [Introduction to take-home assignments](../take-home-assignments/introduction-to-take-home-assignments.md)
- [Going above and beyond](../take-home-assignments/going-above-and-beyond.md)
- [AI prompt toolkit for take-home prep](../take-home-assignments/ai-prompt-toolkit-for-take-home-prep.md)
- [Rubric for take-home assignments](../take-home-assignments/rubric-for-take-home-assignments.md)
