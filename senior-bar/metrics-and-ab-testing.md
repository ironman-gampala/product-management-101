# Metrics, Goals and A/B Testing — Senior (SNR) and Senior+ (SNR+) Bar

These questions ask **how you would measure success**, choose a **north star**, set **goals**, or
**design and call an A/B test**. The level is decided by whether your metric measures the user's real
outcome, whether you know how it can mislead, and whether you make a clear ship decision.

[← All question types](README.md)

---

## Sample questions

| # | Question | Subtype | Good practice for |
|---|---|---|---|
| 1 | "How would you measure the success of Google Maps parking?" | Success metrics | Any |
| 2 | "What should the north star be for Instagram Reels?" | North star | Any |
| 3 | "How would you measure whether Eightfold's AI matching is actually good?" | AI quality metrics | Eightfold AI |
| 4 | "Set goals for Rippling's new IT product for its first year." | Goal setting (B2B) | Rippling |
| 5 | "What metrics would you track for Okta's passwordless sign-in?" | Success metrics (B2B) | Okta |
| 6 | "How would you A/B test a new checkout button for Amazon?" | Experiment design | Any |
| 7 | "The test raised clicks by 5% but lowered 7-day retention by 1%. Do we ship?" | Ship decision | Any |
| 8 | "How would you test a new feature in a marketplace where buyers and sellers affect each other?" | Experiment with network effects | Uber, Airbnb style |

More: [framework-for-goal-setting-and-north-star-metrics.md](../analytics-and-execution/framework-for-goal-setting-and-north-star-metrics.md).

---

## The level ladder

```
  PM2 / L4   →  Lists many metrics (DAU, retention, NPS). Picks the obvious one without criteria.
                For A/B tests, names a primary metric but no threshold or guardrail.

  SNR / L5   →  Starts from the user's goal, compares 2–3 candidate metrics with criteria, picks an
                OUTCOME north star, adds guardrails that could get worse, and sets targets.
                For tests: hypothesis, unit of randomisation, duration, thresholds, a clear ship call.

  SNR+ / L6  →  Says where the chosen metric could mislead and how to catch it. Treats the north star
                as a decision to revisit. Handles novelty effects, network effects, long-term holdouts
                and conflicting results with pre-committed rules.
```

---

## Step by step: success metrics and north star

| Step | SNR (must say) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Goal** | Say what the product is for, in the user's words. | Connect it to the company's business goal. | "If parking works, people spend less time circling and are more likely to drive to busy places." |
| **User actions** | Walk the journey and list the actions that show value. | Separate actions that show value from actions that only show activity. | "Parking within 3 minutes shows value. Opening the parking tab only shows activity." |
| **Candidates** | Name 2–3 candidate north stars. | Score them on clear criteria: tied to value, hard to game, measurable, moves fast enough. | "Taps on the tab are easy to game. Time to park is hard to game and tied to the pain." |
| **North star** | Pick **one** outcome metric, with a clear definition. | Say what you rejected and why, and when you'd revisit it. | "My north star is the share of trips to busy areas where people park within 3 minutes." |
| **Supporting metrics** | Give 2–3 metrics that explain *why* the north star moves (a funnel). | Split them by user segment and stage. | "Supporting: parking shown before arrival, list tapped, navigated to a lot." |
| **Guardrails** | Give 2 guardrails: things that could get worse while the north star improves. | Name the second-order effect and a threshold for each guardrail. | "Guardrail: door-to-door time. If we send people to far lots, parking speeds up but trips get longer." |
| **Targets** | Set a target and a timeframe. | Base the target on a baseline or a benchmark, and say what you'd do if you miss it. | "From 40% to 55% in 6 months, based on the pilot city." |

## Step by step: A/B tests and ship decisions

| Step | SNR (must say) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Hypothesis** | Say what you believe will change and why. Make it falsifiable. | Say what result would prove you wrong. | "If we show prices earlier, checkout completion rises, because surprise costs drop." |
| **Unit and split** | Choose the unit of randomisation (user, session, account, city) and why. | Spot interference: network effects, shared accounts, marketplaces. Use cluster or switchback tests. | "In a marketplace, I'd randomise by city, so treated drivers don't take riders from control." |
| **Sample and duration** | Size it with a minimum detectable effect, and run at least 1–2 full weeks. | Watch novelty effects and plan a long-term holdout. | "I'd keep a 5% holdout for 3 months to check the effect doesn't fade." |
| **Metrics and thresholds** | Set a primary metric, guardrails, and **pre-committed thresholds** before the test starts. | Check sample ratio mismatch and don't stop early just because it looks good (peeking). | "Ship if completion rises at least 1% and refunds don't rise more than 0.2%." |
| **Ship decision** | Make a clear call: ship, don't ship, or iterate, with a reason. | When results conflict, weigh short-term against long-term value, with numbers. | "Clicks are up 5%, but retention is down 1%. Retention drives revenue, so I wouldn't ship." |
| **Rollout** | Roll out in stages with a reversal trigger. | Name who gets it first and why, and how you'd monitor it after launch. | "10% → 50% → 100%, pausing if support tickets rise by more than 10%." |

---

## Checklist

**SNR — say all of these:**
1. The goal in the user's words.
2. Two or three candidate metrics, compared on criteria.
3. One outcome north star with a precise definition.
4. Supporting metrics that explain the north star.
5. Two guardrails that could get worse while the north star improves.
6. For tests: hypothesis, unit, duration, pre-committed thresholds, and a clear ship call.

**SNR+ — add these:**

7. Where the metric could mislead, and how you'd catch it.
8. When you'd revisit the north star.
9. Interference and network effects, with the right test design.
10. Novelty effects and a long-term holdout.
11. A rule for conflicting results, agreed before the test.

---

## Red flags

| Red flag | Why it costs you |
|---|---|
| DAU or time spent as the north star by reflex | It measures usage, not value. |
| A long list of metrics with no pick | Seniors choose. |
| The north star flipped around as a "guardrail" | A guardrail is something *different* that could get worse. |
| No thresholds before the test | You'll be tempted to read the result the way you want. |
| "Let's run it longer" as the ship call | That avoids the decision. |
| Ignoring network effects in a marketplace | The test result will be wrong. |

---

## Read next

- [Framework for goal setting and north star metrics](../analytics-and-execution/framework-for-goal-setting-and-north-star-metrics.md)
- [Deep dive: north star metrics](../analytics-and-execution/deep-dive-north-star-metrics.md)
- [How to answer A/B testing questions](../analytics-and-execution/how-to-answer-ab-testing-questions.md)
- Practise: *"Check my north star"* or *"Mock me on an A/B test"* ([`metrics-judgement`](../.claude/skills/metrics-judgement/SKILL.md))
