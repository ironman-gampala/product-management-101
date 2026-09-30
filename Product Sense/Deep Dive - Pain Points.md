# Deep Dive: Identifying Pain Points

> Shallow problem definition produces shallow solutions. Everything downstream is only as strong as the problem you chose to solve. This is where product judgment and user empathy converge.

---

## What Interviewers Are Scoring

- Whether your problems are **specific to this user** — not just plausible for any user
- Whether your problems are **genuinely distinct** from each other
- Whether your **prioritization shows product judgment**, not just a gut call

---

## The Three-Part Approach

```
Part 1: Paint the user's world  →  Surface raw friction from their day
Part 2: Bucket the problems     →  Find three distinct root causes
Part 3: Prioritize explicitly   →  Choose one with four-dimensional reasoning
```

---

## Part 1 — Paint the User's World

Start with a one-sentence recap of who you selected and the constraint that makes them interesting. Then **walk their day.** The problems should surface from the journey, not from a list you had in your head before you started.

**Interviewers are watching whether your problems feel discovered or pre-loaded.**

Walk from morning to evening. Note the moments that are hard, uncertain, or emotionally unresolved. Those are your raw materials. Write down every friction point — you want more raw problems than you'll use.

> **Example:**
>
> *"We're designing for dog owners with full-time jobs. They leave for work each morning without knowing how their dog is actually doing during the gap. They try different departure routines but have no feedback loop on what's helping. On weekends, they're hyperattentive to every behavioral signal because it's the only data they get."*

> **Tip:** If your narration sounds like a schedule, you haven't found the friction. *"They wake up, they go to work, they come home"* is what happened. The problems live in the moments that feel **uncertain, unresolved, or out of control.** Slow down there.

---

## Part 2 — Use the Buckets to Find Three Distinct Problems

Organize what surfaced from the user's day into four buckets:

| Bucket | What It Covers | Root Cause |
|---|---|---|
| **Time** | Access, capacity, delays | The user *can't* do something due to lack of access or bandwidth |
| **Money** | Cost, value mismatch | The user *won't* do something because the cost doesn't justify the benefit |
| **Motivation** | Engagement, emotional drive, willingness | The user *doesn't want* to do something, or loses the will to continue |
| **Trust & Safety** | Confidence, risk, reliability | The user *fears* doing something, or doesn't trust the outcome |

**The buckets aren't just a sorting exercise — they're a diagnostic.**

If all your problems land in one or two buckets, you haven't found three distinct problems yet. You've found one problem with multiple faces. Different root causes produce different solutions. Three motivation problems will generate three motivation solutions that blur together — and the interviewer will notice.

### Three Rules for Your Final Three Problems

| Rule | What It Catches |
|---|---|
| **They can't overlap** | If all three could be solved by the same product mechanism, you have one problem in three framings. Swap one out for something from a different bucket. |
| **They can't be too specific** | *"The dog barks at the mail"* collapses your solution space. Stay at the root cause level. |
| **They can't be too broad** | *"The owner doesn't understand their dog"* doesn't point anywhere. A good problem is specific enough that a focused solution obviously addresses it. |

> **Example — three distinct problems across different buckets:**
>
> - **Separation anxiety** *(Time)* — the owner is away and has no read on how the dog is doing
> - **Emotional bonding** *(Motivation)* — the owner wants to know the relationship is genuine, not just tolerated
> - **Health signals** *(Trust & Safety)* — the owner can't tell when something is actually wrong versus normal behavior
>
> Three different root causes. Three different solution spaces.

---

## Part 3 — Prioritize with Explicit Criteria

Pick one problem and show your reasoning across **four dimensions:**

| Dimension | Question to Ask |
|---|---|
| **Breadth** | How many users in this segment experience this? |
| **Depth** | How severe or frequent is it? |
| **Product strength** | What is this company specifically set up to solve, given their technology and moat? |
| **Risk** | Can the product, as defined, actually deliver on this? |

Naming all four signals that your prioritization is reasoned — not instinctive.

> **Example — applying the four criteria:**
>
> | Problem | Breadth | Depth | Product Strength | Risk |
> |---|---|---|---|---|
> | Separation anxiety | High — most dog owners with jobs face this | High — daily, acute, emotionally salient | High — vague emotional signal (calm/distressed) is sufficient | Low — directly solvable with what the technology delivers |
> | Emotional bonding | Medium — felt by engaged owners | Medium — diffuse rather than acute | Medium — signal exists but is harder to interpret | Medium — needs higher signal fidelity |
> | Health signals | Medium | High when it occurs | Low — requires medical-grade precision the tech doesn't yet support | High — misreads could cause harm |
>
> **Winner: Separation anxiety.** Broad, acute, and directly solvable with what this technology can actually deliver.

### Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Picks the strongest problem and makes a clear case for why it matters most. |
| **Senior+** | Walks all four criteria explicitly. Names why the other problems were **deprioritized** — not just left behind. Connects the final choice to what this company is specifically positioned to build right now. The prioritization feels earned because it's multidimensional and closes the loop between problem selection and the company context established earlier in the answer. |

> **Tip:** The dimension candidates most often skip is **product strength.** At OpenAI, interviewers consistently push back on *"it's the most painful"* as a standalone justification. The candidates who advanced named the tradeoff explicitly: *"Here's the problem, here's why this technology can solve it, here's what we'd need — that we don't currently have — for the others."*

---

## Common Pitfalls

**Three problems that are really one.**
If *"separation anxiety,"* *"not knowing if the dog is okay,"* and *"guilt about leaving"* all appear in your list, you have one problem with three emotional framings. The test: could all three be solved by the same product mechanism? If yes, consolidate and find a genuinely different third.

**A journey without friction.**
A schedule describes what happens. The friction lives in the transitions and the uncertain moments. Slow down there — that's where the interview is actually won.

**Prioritizing without criteria.**
*"I'm focusing on separation anxiety because it's the most important"* is a conclusion, not a prioritization. Show the reasoning across all four dimensions.

---

## Quick Reference

```
PART 1: PAINT THE USER'S WORLD
→ One sentence: who they are and what makes them interesting
→ Walk morning to evening — look for uncertain, unresolved, out-of-control moments
→ Collect more friction points than you'll use

PART 2: BUCKET INTO FOUR ROOT CAUSES
Time       → Can't do something (access/capacity)
Money      → Won't do something (cost/value)
Motivation → Doesn't want to (engagement/willingness)
Trust/Safety → Fears doing it (confidence/risk)

Three rules:
  1. Don't overlap — different mechanism, different bucket
  2. Don't over-specify — stay at root cause level
  3. Don't over-broaden — specific enough to point to a solution

PART 3: PRIORITIZE WITH FOUR CRITERIA
  Breadth × Depth × Product Strength × Risk
  → Name why the winner wins
  → Name why the others were deprioritized (not just left behind)
```
