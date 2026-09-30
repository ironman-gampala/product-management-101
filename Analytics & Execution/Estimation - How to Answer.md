# How to Answer Estimation Questions

> The key to solving ambiguous estimation problems is to break them down into manageable pieces you can address individually. Once you have a handle on the component pieces, you can build them back up to arrive at a reasonable estimate.

**Running example used throughout this guide:**
*"Estimate the number of stacked quarters needed to reach the height of the Empire State Building."*

---

## The 5-Step Framework

```
Step 1: Scope the problem
Step 2: Break the problem down
Step 3: Estimate unknowns
Step 4: Answer
Step 5: Explain why you're wrong
```

---

## Step 1 — Scope the Problem

Ask questions to clarify the scope of the problem. This prevents you from taking the question in the wrong direction and gives you a chance to glean helpful information from your interviewer.

**Example scoping questions for "estimate the weight of a school bus":**
- Does the weight estimate include a full tank of gas?
- Does the weight estimate include humans inside the school bus?
- How many people is the school bus expected to seat in total?

> **If the interviewer tells you to make your own assumptions:** State any assumptions that feel reasonable and make the problem easier. If they decline to answer your questions about the school bus's weight, assume the gas tank is empty.

### Example — Empire State Building

Reasonable up-front assumptions:
- The height of an average building is mainly made up of floors
- A landmark skyscraper may have a vaulted ceiling on the ground floor
- The Empire State Building has a large antenna on top

**Decision:** Ignore the vaulted ceiling and antenna for now, and estimate height according to the sum of the building's floors. Communicate this to your interviewer. You can come back to it later if needed.

---

## Step 2 — Break the Problem Down

Once you've scoped the problem, break it down into manageable pieces.

**Process:**
1. Find a reasonable high-level equation that describes the problem
2. Break down each factor further until you're left with something you can reasonably estimate
3. Communicate any simplifying assumptions to your interviewer as you go

### Example — Empire State Building

**High-level equation:**

```
Number of quarters = Height of the Empire State Building / Height of a quarter
```

This immediately clarifies that you only need to estimate **two numbers**:
1. The height of the Empire State Building
2. The height of a quarter

---

## Step 3 — Estimate Unknowns

Break down each component until you arrive at something you feel confident estimating.

> **Remember: the numbers don't matter as much as the reasoning.** There are always other ways to slice the problem or break down a factor into something workable.

**Strategies when you're drawing a blank:**

| Strategy | How to Use It |
|---|---|
| **Recall benchmark facts** | Is there anything helpful in your memorized figures? |
| **Estimate via proxy** | Can you make reasonable assumptions using a known fact as a jumping-off point? |
| **Segment diverse groups** | Don't try to make assumptions about diverse groups wholesale — segment in a way that's meaningful to your question, then sum individual estimates |
| **Use a personal reference** | Can you relate the unknown to something you do know? (Communicate that you're offering anecdotal and possibly biased information) |

**Always gut-check your numbers as you go.** If they feel reasonable, continue. If something feels off, revisit your math or break the problem down further.

### Example — Empire State Building

**Estimating the height of the Empire State Building:**

```
Empire State Building height ≈ Number of floors × Average floor height
```

Assumptions:
- *"The Empire State Building is known to be very tall, so it's safe to assume around 100 floors."*
- *"It's a commercial building, so floors are likely standard office height — around 12 ft."*

→ **100 floors × 12 ft = 1,200 ft** *(feels reasonable)*

**Estimating the height of a quarter:**

A quarter is small and hard to visualize directly. Instead, use a proxy — a $10 roll of quarters:

```
Height of a single quarter = Height of a roll of quarters / Number of quarters in $10
```

Assumptions:
- A $10 roll of quarters fits decently in a hand → approximately **4 inches tall**
- A $10 roll of quarters contains **40 quarters**

→ **4 inches ÷ 40 quarters = 1/10th of an inch per quarter** *(seems reasonable)*

**Summary of estimates:**
- Height of the Empire State Building ≈ **1,200 ft**
- Height of a single quarter ≈ **1/10th of an inch**

---

## Step 4 — Answer

Plug your estimates into your high-level equation and compute the total.

**Before calculating:**
- Convert any mismatched units
- Round difficult numbers for simplicity
- Communicate each step of your computation

**Gut-check your final number** — if something feels very wrong, check your assumptions and re-examine your math.

### Example — Empire State Building

```
Number of quarters = 1,200 ft / (1/10th of an inch per quarter)
```

Unit conversion: 1/10th of an inch ≈ 1/100th of a foot

```
= 1,200 ft × 100 quarters per foot
= 120,000 quarters
```

**Final estimate: ~120,000 quarters**

This feels reasonable given confidence in intermediate estimates.

---

## Step 5 — Explain Why You're Wrong

**Your answer is wrong. That's expected.** This step is where you demonstrate critical thinking and self-awareness.

Take 1–2 minutes to share your critiques with your interviewer:
- Summarize any estimations that felt like guesses
- Describe what you'd reconsider if you had more time
- List any elements you ignored for simplicity that may have large implications for your answer
- If you used proxy estimates or personal references, call out the potential errors in those approaches

> **Why this matters:** Being proactive here demonstrates important PM skills — critical thinking and communication. A thorough recap also preempts follow-up questions from your interviewer.

### Example — Empire State Building

> *"When estimating the height of the Empire State Building, I assumed around 100 floors because it's known to be a tall skyscraper. This is the first assumption I would want to check given more time. I also ignored vaulted ceilings and, more importantly, the Empire State Building's antenna — from the ground the antenna doesn't seem large, but this could be a case of distorted perspective. I also neglected to consider a basement or below-ground floors.*
>
> *When estimating the height of a quarter, I assumed a $10 roll of quarters to be about 4 inches in length because it fits in my hand. This seems suspect, and an incorrect estimate here could have a large impact on my final answer."*

---

## Quick Reference Card

```
STEP 1: SCOPE
→ Ask 1–3 clarifying questions
→ State assumptions up-front; communicate what you're ignoring and why

STEP 2: BREAK IT DOWN
→ Write a high-level equation that captures the problem
→ Break each factor until you hit something estimable

STEP 3: ESTIMATE UNKNOWNS
→ Benchmark facts → proxy → segmentation → personal reference
→ Gut-check every number before moving on

STEP 4: ANSWER
→ Convert units, round numbers, calculate out loud
→ Gut-check the final number

STEP 5: EXPLAIN WHY YOU'RE WRONG
→ Flag your guessiest assumptions
→ Name what you'd check first with more time
→ Call out ignored factors that could have the biggest impact
```
