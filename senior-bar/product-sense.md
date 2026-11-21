# Product Sense — Senior (SNR) and Senior+ (SNR+) Bar

Product sense questions ask you to **design a new product** or **improve an existing one**. Everyone knows
the framework. The level is decided by **judgement**: at every step you make a call, give the reason, and
say what you rejected, without the interviewer pulling you along.

[← All question types](README.md)

---

## Sample questions

| # | Question | Subtype | Good practice for |
|---|---|---|---|
| 1 | "How would you improve Slack for enterprise customers?" | Improve (B2B) | Rippling, Okta |
| 2 | "How would you improve Google Maps for parking?" | Improve (consumer) | Any |
| 3 | "Design a product to help people start exercising again." | Design | Any |
| 4 | "Design the onboarding experience for a new IT admin at a 200-person company that just bought Rippling." | Design (B2B) | Rippling |
| 5 | "Design a feature that helps recruiters trust Eightfold's candidate match scores." | Design (AI + trust) | Eightfold AI |
| 6 | "Improve the experience for an IT admin rolling out MFA to 5,000 employees." | Improve (B2B) | Okta |
| 7 | "Design an AI agent for a streaming service." | Design (AI) | Any AI-first company |
| 8 | "What's your favourite product, and how would you improve it?" | Favourite product | Any |

More: [sample-product-sense-questions.md](../product-sense/sample-product-sense-questions.md).

---

## The level ladder

```
  PM2 / L4   →  Follows the framework and covers every step.
                The interviewer has to ask for the north star, the pick or the MVP.

  SNR / L5   →  Every step ends in a CALL, a REASON and a REJECT.
                Drives the whole 30 minutes without prompts. The MVP is consistent with the board.

  SNR+ / L6  →  The strategy DECIDES the answer. Questions the premise, reframes the problem,
                and thinks past the feature: launch, go-to-market, second-order effects, 2–3 years out.
                The interviewer learns something.
```

## Time split

| Level | Strategy (clarify, mission, why now, north star) | Users → solution → MVP |
|---|---|---|
| PM2 | About 3 minutes | The rest |
| SNR | About 5–6 minutes, and it shapes every later choice | The rest |
| SNR+ | Close to **half** the interview | The solution grows out of the strategy |

---

## Step by step: what to say

| Step | SNR (must say) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Clarify** | Ask only questions whose answer would change your plan. Ask them in one batch, then say "I'll assume…". | Question the premise: what does "improve" mean here — growth, retention, or defence against a competitor? | "I'll assume enterprise customers in the US, and that the goal is to defend renewals against Teams." |
| **Mission + why this company** | Link the mission to how the company makes money. Say why this company is the right one to build it. | Name the gap between what the company says and what it optimises for. | "Slack makes money from seats. When customers cut tools, Slack is the first one they question." |
| **Why now** | Name one specific change: a competitor, a technology, a cost, a rule or a behaviour. | Say why the window closes if we wait. | "Teams comes free with Microsoft 365, and CFOs are cutting tools this year. The window is this renewal cycle." |
| **North star** | One number that measures the **user's outcome**, not usage. Write it on the board. | Say why you rejected the obvious usage metric, and check it still works if the solution changes. | "My north star is the median time for a power user to respond to a message that needs them. I'm not using panel DAU, because it can rise while users are worse off." |
| **Users** | Name 3–4 user types, pick one with **two reasons**, and say why not the runner-up. In B2B, name buyer, admin and end user first. | The segment should belong only to this product, and the pick should tie back to the strategy. | "I'll focus on power users, because they sway renewals and feel the noise most. I'm not picking admins, because their pain doesn't decide renewals." |
| **Pain points** | Walk through the user's actual day. Find 3 pains with different root causes. Pick one and give a **problem statement with "because"**. | The pain should feel discovered, not pre-loaded. Check the product doesn't already solve it. | "Power users miss critical messages because Slack treats every notification the same, which leads to slow replies on incidents." |
| **Solutions** | Name **3 different one-liners first** (information / automation / partner-social). Then pick one against the north star. | Include one "only we can do this" idea, and one bigger idea that shows a 2–3 year direction. | "Idea 2 uses context from Jira and Confluence. Only Slack can do this, because it already holds the conversation." |
| **Rejecting ideas** | Give a real reason for each rejected idea, not "too complex". | Say what would need to be true for the rejected idea to become the right call. | "AI ranking waits until it gets the top five right 9 times out of 10. Then it becomes the right call." |
| **Solution flow** | Walk all 6 steps: entry → screen → action → behind the scenes → result → edge case. | Cover failure and empty states, what happens when the AI or data is wrong, and production readiness. | "If two incidents fire together, the more severe one goes first and the other stays pinned." |
| **MVP** | Give a **prerequisite** (what must be *true*), then v1, then **what waits, with reasons**. | Cover the launch: who gets it first, how they find it, and how you roll it out safely. | "The prerequisite is that our 'free' labels are right 8 times out of 10. v1 covers the 50 hardest areas in 5 cities. Booking waits." |
| **Metrics** | Read the north star back unchanged. Give **2 guardrails**: things that could get worse while the north star improves. | Name a **second-order effect**: something that looks healthy but really hurts. | "If we rank HR messages low, people will mark everything urgent and the noise comes back. So I'd watch reply times on low-ranked messages." |
| **Summary** | "To summarise…" in 4 sentences: user + problem + because, solution + v1, north star + guardrail, what comes next. | Close the loop to the strategy: the company, the competitor or the renewal. | "…That's the productivity that helps Slack survive the renewal review against Teams." |
| **Follow-ups** | Stay calm and link each answer back to your earlier reasoning. | Treat ethics, conflicting-metric and technical probes as a natural next step. Push back when you disagree. | "I'd push back a little. Here's why I'd still start with rules." |

---

## Checklist

**SNR — say all of these:**
1. Every step ends in "So my ___ is ___, because ___. I'm not picking ___ because ___."
2. Clarifying questions change your plan; then "I'll assume…".
3. A specific why now.
4. An outcome north star. Test: "Could this go up while users are worse off?"
5. A user pick with two reasons and a reject.
6. A problem statement with "because".
7. Three one-liners before going deep.
8. "X already exists, so I'd go beyond it by…".
9. All 6 steps of the flow, including the edge case.
10. Prerequisite → v1 → what waits and why.
11. Two guardrails and one second-order effect.
12. A 4-sentence "To summarise…".

**SNR+ — add these:**

13. Reframe the problem or question the premise in the first 5 minutes.
14. One idea that only this company can build, because of its data, scale or position.
15. A 2–3 year arc: v1 → v2 → where it leads.
16. Go-to-market thinking: who launches it, how users find it, what sales or marketing must do.
17. Mention competitors as you go, the way a colleague would.

---

## Red flags (these drop you to PM2)

| Red flag | Why it costs you |
|---|---|
| The interviewer asks twice for your north star | You didn't drive the step. |
| A usage north star (DAU, time spent, adoption) | It measures your feature, not the user's life. |
| Going deep on the first idea | It looks like tunnel vision. |
| Pitching a feature that already exists | It shows you don't know the product. |
| A launch city given as the "prerequisite" | That's scope, not something that must be true. |
| No "what waits" | Cutting scope with reasons is the senior signal. |
| "Let me take 2 minutes" before a step | The route isn't automatic yet. |
| Ending with "so yeah" | The last 30 seconds is what gets written down. |

---

## Read next

- [How to answer product sense questions](../product-sense/how-to-answer-product-sense-questions.md)
- [Rubric for product sense interviews](../product-sense/rubric-for-product-sense-interviews.md)
- [Understanding leveling](../intro/understanding-leveling.md)
- Practise: *"Mock me on a product sense question"* ([`product-sense-judgement`](../.claude/skills/product-sense-judgement/SKILL.md))
