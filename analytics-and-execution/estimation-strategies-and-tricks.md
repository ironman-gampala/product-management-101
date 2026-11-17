# Estimation Strategies and Tricks

> There are a few common areas that trip candidates up when answering estimation interview questions. This guide covers strategies to help you estimate unknown quantities, prevent basic math errors, and gut-check your estimates as you go.

---

## Part 1 — Estimating Unknowns

It's likely you'll have to make an estimate for some quantity you know little or nothing about. Here are strategies for moving past unknowns quickly and effectively.

---

### Strategy 1: Estimate via Proxy

Substitute a complete unknown for something familiar to you. Instead of guessing, choose a related concept and adjust up or down as needed.

**Example question:** *"How many cars are there in Seattle?"*

You probably won't know offhand — but you can proxy through something familiar:
- Hypothesize that the number of cars is directly related to the number of families
- Estimate that Seattle is roughly twice as large and similarly dense as San Francisco
- Use your own city or experience as a starting point, then adjust

> *"I estimate around 300,000 households in Seattle. Assuming each household has on average 2 cars: 300,000 × 2 = 600,000 cars in Seattle."*

---

### Strategy 2: Segment Large Groups

It's difficult to reason about large, diverse groups wholesale. Instead, break up the group into smaller segments, estimate for each segment specifically, and sum the results.

Come up with a segmentation scheme that makes sense for your question, state assumptions about each segment, and briefly discuss size and relevant behaviors.

**Example question:** *"How many photos does the average iPhone user take a week?"*

| Segment | Definition | Size | Photos/week |
|---|---|---|---|
| **Infrequent** | Non-tech-savvy users or people who rarely take photos — may snap occasionally to share info | 10% of users | 4 |
| **Standard** | Users who document notable events and occasionally post to social media — low consistent volume with occasional spikes | 80% of users | 20 |
| **Power** | Users who actively document their life, communicate via photos, or have a professional reason — high and consistent volume | 10% of users | 150 |

**Weighted average:**
```
(10% × 4) + (80% × 20) + (10% × 150)
= 0.4 + 16 + 15
= ~31 photos/week
```

---

### Strategy 3: Use Personal References

Relate an unknown quantity to some known quantity in your life. Important caveat: **you must account for bias** in your reference.

**Example question:** *"How many cars are there in Seattle?"*

- You estimate that 50% of your friends have cars — a helpful starting point
- But if most of your friends live in dense neighborhoods with great public transit, you may need to adjust your Seattle estimate upward

**Combine with segmentation to reduce bias risk:**
- Assume 50% of Seattle is around the same age as your friend group
- Estimate that 50% of that segment has cars: 1M × 50% × 50% = **250,000 cars** from that segment alone
- Now only estimate the remaining 50% of Seattle's population separately

This gives you a solid reference number to gut-check against.

---

### Strategy 4: Define Upper and Lower Bounds

State realistic upper and lower limits on what's reasonable. Setting boundaries upfront keeps your estimate from spiraling and gives you a range to refine through the interview.

**Example question:** *"How many cars are there in Seattle?"*

- **Extreme lower bound:** 0 cars
- **Extreme upper bound:** ~1 million (one per resident if every person owned a car)
- **Midpoint estimate:** (0 + 1M) / 2 = **500,000 cars**

> The actual number is closer to 400,000 — not far off using just this simple bounding approach. In the interview, a reasonable process matters more than a precise answer.

---

## Part 2 — Avoiding Math Errors

Mental math is difficult under pressure. You are always free to simplify numbers and calculations — just communicate your simplifications to your interviewer.

---

### Trick 1: Round Difficult Numbers

If you have an inconvenient number, round it.

| Original | Rounded |
|---|---|
| 334,944,277 (US population) | 300 million |
| 7.6 billion | 8 billion (or 10 billion if overestimating is safer) |
| 237 million | 200 million |
| 84 | 80 |

**Round to numbers that make the math easier**, not just up/down based on the figure:
- $85K revenue ÷ 9K customers → round to $81K for clean division: $9/customer
- Or round up to $90K → $10/customer

---

### Trick 2: Split Multiplications

Separate out the powers of ten, multiply the remaining numbers, then bring the powers of ten back in.

**Example:**
```
70,000,000 × 40
= (7 × 10,000,000) × (4 × 10)
= (7 × 4) × (10,000,000 × 10)
= 28 × 100,000,000
= 2.8 billion
```

**Or split into a sum of easier multiplications:**
```
17 × 120
= 17 × (100 + 20)
= (17 × 100) + (17 × 20)
= 1,700 + 340
= 2,040
```

**This works for percentages too:**
```
15% of 70
= (10% + 5%) of 70
= (0.1 × 70) + (0.05 × 70)
= 7 + 3.5
= 10.5
```

> Round your numbers to multiples of 10 and 2 wherever possible — the easiest numbers to work with under pressure.

---

### Trick 3: Simplify Powers of Ten

**Multiplying by a power of 10:** move the decimal to the **right**
**Dividing by a power of 10:** move the decimal to the **left**

**Example:**
```
50 × 1,000
→ 50.0, move decimal 3 places right
= 50,000
```

**Treat big powers of ten like units:**
```
12 million × 8 thousand
= (12 × 8) million × thousand
= 96 million × thousand
= 96 billion
```

---

## Part 3 — Increasing the Accuracy of Your Answer

Always check your estimates before giving a final answer. Make sure the answer makes logical sense — not just mathematically correct.

---

### Tip 1: Gut-Check Estimates

If you think an answer is unreasonable, say so. Interviewers want to see that you can recognize unrealistic situations and backtrack to identify the issue.

**Example:** If you estimated 3 cars per household in Seattle, you'd get 1.5 million cars — which seems too high. Go back, identify the inflated assumption, and correct it.

---

### Tip 2: Put the Answer in Context

Some estimates are difficult to gut-check in isolation. Reframe the number to make it more interpretable.

**Example:** If you estimate Google spends $100M/year running a specific product, you may not know if that's reasonable. But if you previously estimated 20M users, that's $5/user/year — much easier to assess given your sense of the product.

---

### Tip 3: Check Against Competitors

Use competitive benchmarks to sanity-check your estimates. If you're estimating Dropbox's monthly users, use prior knowledge of Google Drive to confirm your estimate isn't wildly off. This strategy hinges on prior knowledge, so it's most useful when you have relevant data points.

---

## Quick Reference Card

```
ESTIMATING UNKNOWNS
→ Proxy: substitute a familiar related concept, then adjust
→ Segment: break large groups into estimable chunks, sum them
→ Personal reference: use your own experience, but account for bias
→ Bounds: set upper and lower limits, take the midpoint

AVOIDING MATH ERRORS
→ Round to clean numbers (communicate simplifications)
→ Split multiplications: separate powers of 10, multiply the rest
→ Treat millions/billions as units: "12 million × 8 thousand = 96 billion"
→ Use percentages as sums: 15% = 10% + 5%

GUT-CHECKING
→ Does the number feel right on instinct?
→ Can you reframe it in a more interpretable context?
→ Does it align with competitive benchmarks you know?
```
