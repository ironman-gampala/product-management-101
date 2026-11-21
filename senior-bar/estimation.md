# Estimation and Market Sizing — Senior (SNR) and Senior+ (SNR+) Bar

Estimation questions ask **"how many…?"** or **"how big is the market for…?"**. The number matters less
than the reasoning. At Senior and above, you also say **what decision the number drives**.

[← All question types](README.md)

---

## Sample questions

| # | Question | Subtype | Good practice for |
|---|---|---|---|
| 1 | "How many cups of chai are sold at roadside stalls in Mumbai every day?" | Count (easy) | Warm-up |
| 2 | "How many food delivery orders are placed in Bengaluru on a Friday night?" | Count (medium) | Any |
| 3 | "How many people in India take a flight in a year?" | Count (medium) | Any |
| 4 | "How many companies in the US need dedicated HR software?" | B2B market size | Rippling |
| 5 | "What is the market size for workforce identity software in the US?" | B2B TAM | Okta |
| 6 | "How many recruiters in the US could use an AI sourcing tool?" | B2B users | Eightfold AI |
| 7 | "How much storage does WhatsApp need for photos each day?" | Technical estimate | Technical rounds |
| 8 | "How many people in India will pay for an AI assistant in two years?" | Forecast (hard) | AI-first companies |

More: [estimation-introduction.md](../analytics-and-execution/estimation-introduction.md).

---

## The level ladder

```
  PM2 / L4   →  Jumps into maths, messy assumptions, no check at the end.

  SNR / L5   →  Clarifies the scope and the PURPOSE, picks top-down or bottom-up with a reason,
                draws a clean tree, uses round numbers, sanity-checks, and says what the number means.

  SNR+ / L6  →  Triangulates with two methods, names the one assumption that swings the answer most,
                gives a range, segments where it matters, and turns the number into a decision.
```

## Time split (about 15 minutes)

| Step | Time |
|---|---|
| Clarify scope and purpose | 1–2 minutes |
| Pick the approach and draw the tree | 2–3 minutes |
| Fill in numbers and calculate | 5–6 minutes |
| Sanity check and range | 2 minutes |
| So what: the decision | 1–2 minutes |

---

## Step by step: what to say

| Step | SNR (must say) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Clarify** | Pin the scope: geography, time period, units, what counts. | Ask what decision the number is for, because it changes how precise you need to be. | "Is this to decide how many riders to keep on shift? Then I need peak hours, not the daily total." |
| **Approach** | Choose top-down (population down) or bottom-up (supply up), and say why. | Plan to check one method with the other. | "I'll go top-down from households, then check it bottom-up from restaurant capacity." |
| **Tree** | Draw a clean tree with 3–5 leaves. Write it on the board. | Segment where behaviour differs a lot (city tier, age, company size). | "Orders = households × share that order on Friday × orders per home. I'll split by income band." |
| **Numbers** | Use round, defensible numbers and say where each comes from. | Name the **swing leaf**: the one assumption that changes the answer most. | "The swing leaf is the share of homes that order on a given Friday. Everything else is fairly stable." |
| **Maths** | Calculate out loud, step by step, with easy rounding. | Keep track of units and orders of magnitude as you go. | "That's about 30 lakh homes × 10% × 1.2, so roughly 3.6 lakh orders." |
| **Sanity check** | Compare the answer with a known fact or a second method. | Give a range (low, base, high) and explain the gap. | "Bottom-up gives about 4 lakh, so my range is 3 to 5 lakh, and I'd quote 3.6." |
| **So what** | Say what the number means for the business. | Turn it into a decision, with a threshold. | "At 3.6 lakh orders and 2 orders per rider-hour, we need about 15,000 riders at the peak hour." |

---

## Checklist

**SNR — say all of these:**
1. Scope: geography, time, units and what counts.
2. Top-down or bottom-up, with a reason.
3. A clean tree on the board.
4. Round numbers with a source for each.
5. Maths out loud.
6. A sanity check against a known fact.
7. What the number means.

**SNR+ — add these:**

8. The purpose of the estimate, asked at the start.
9. Two methods that check each other.
10. The swing leaf, named out loud.
11. A range, not just a single number.
12. A decision with a threshold.

---

## Red flags

| Red flag | Why it costs you |
|---|---|
| Starting the maths before clarifying | You may size the wrong thing. |
| Ten-level trees | They are slow and hard to check. |
| Precise-looking numbers with no source | It sounds made up. |
| No sanity check | Big errors slip through. |
| Stopping at the number | Seniors connect it to a decision. |
| Freezing on mental maths | Round harder; the interviewer cares about logic. |

---

## Read next

- [Estimation: how to answer](../analytics-and-execution/estimation-how-to-answer.md)
- [Estimation: strategies and tricks](../analytics-and-execution/estimation-strategies-and-tricks.md)
- [Estimation rubric](../analytics-and-execution/estimation-rubric.md)
- Practise: *"Speed drill: 3 estimation questions"* ([`estimation-judgement`](../.claude/skills/estimation-judgement/SKILL.md))
