# Deep Dive: North Star Metrics

> Most candidates can generate a plausible north star candidate. Fewer can explain why that candidate beats the alternatives, what it gets wrong, and what they'd watch alongside it. This lesson builds that second layer.

**Example questions:**
- *"What north star metric would you track for Facebook Events?"* — Meta
- *"Define a north star metric for Stripe Connect."* — Stripe
- *"You're a PM at Zoom for Business. Why does the product exist? What is the north star metric?"* — Meta

---

## What Interviewers Are Looking For

| Signal | What It Means |
|---|---|
| **Criteria-driven selection** | A principled reason for choosing this metric — not just picking something familiar |
| **Awareness of what the metric misses** | You can articulate where it might mislead, without being asked |
| **Company-type pattern recognition** | You understand why a media company and a marketplace would choose different north stars for similar goals |
| **A specific, defined signal** | Not a category (*"engagement"*), not a vague outcome (*"user success"*) — a measurement you could actually instrument |

---

## What Makes a Strong North Star Metric

A north star metric is the single metric that best represents whether your product is achieving its core goal. It's the number a PM team rallies around, shows up in the weekly review, and tells you whether a big bet is working.

Three criteria determine whether a metric is strong enough to fill that role.

---

### Criteria 1 — Customer Value

The metric has to represent users **actually achieving something meaningful** — not just arriving.

A user opening the app is not customer value. A user completing a task, consuming content they sought out, or connecting with someone they care about is.

**Why this matters:** Metrics that measure presence without purpose are easy to game. If you track weekly active users, you can move that number with push notifications or re-engagement emails without helping users at all. If you track users who complete at least one meaningful action per week, inflating the number without actually helping users becomes much harder.

> **Example — Spotify:**
>
> Spotify's north star is **time spent listening** — not app opens. A user who opens Spotify and leaves after 30 seconds counts in one metric but not the other. Time spent listening is a signal that users found something worth staying for.

---

### Criteria 2 — Business Value

The metric has to connect to the company's **mission and underlying business model**.

This is why *"time spent"* means different things for different businesses. For an ad-supported media product, time spent directly predicts ad inventory and revenue. For a subscription productivity tool, what matters is not raw time but deep usage of the workflows that make the product hard to leave.

> **Example — Slack:**
>
> Slack tracks **messages sent within a team** — not logins. Message volume drives team stickiness, and team stickiness justifies the per-seat price. A team that logs in once a day to share a link is not a team that renews. A team that routes all coordination through Slack is.

> **The 20% test:** If your north star metric increased by 20% while the business was still struggling, that's a sign the metric lacks business value. Run this test before committing to a metric in your answer.

---

### Criteria 3 — Team Value

The metric has to be one that the product team **can actually move**.

A metric that responds to macroeconomic shifts, seasonality, or platform changes beyond the team's control is hard to learn from. You cannot run a proper experiment if the outcome variable is swayed by forces outside your control.

> **Example — DoorDash:**
>
> DoorDash tracks **orders completed per week per active user** — not overall GMV. GMV swings with restaurant partnerships and local market conditions — things the product team cannot touch in a standard sprint. Order frequency responds to improvements in experience: better search, better recommendations, smoother checkout. The team can run experiments against it and learn.

---

## The "So What" Test

Before committing to a metric in your answer, run this test. If the metric went up 10%, ask: **Does that unambiguously mean the product is working?**

| Metric | What "up 10%" could mean |
|---|---|
| *Daily active users +10%* | Growth, a re-engagement campaign, a viral moment, or a competitor's outage |
| *Orders completed per active user +10%* | Users are finding more value in the product |

The latter tells a clear story. The former requires caveats. If an increase requires caveats to interpret, it's probably not the right north star.

This test also protects you against **vanity metrics** — numbers that look good but don't connect to anything real.

---

## Top-Line Metrics by Lifecycle Stage

Use your diagnosis of the product's lifecycle stage to narrow the candidate set before brainstorming.

| Stage | Primary Metric Focus | Secondary |
|---|---|---|
| **New** (validating demand) | Adoption: first meaningful action, D1/D7 activation rate | Early retention, referral |
| **Growth** (scaling what works) | Acquisition: new activated users, organic CAC | Engagement, viral coefficient |
| **Mature** (holding base, deepening value) | Retention: D30/D90, cohort retention curves | Monetization, NPS |
| **Declining** (managing attrition) | Churn: cancellation rate, win-back conversion | Transition signals |

> **Note:** Any cell that reads as a category (e.g., *"engagement"*) needs one more level of specificity before it becomes a north star candidate. A north star is a measurement — not a bucket.

---

## North Star Patterns by Company Type

Different product categories have different north star conventions and, more importantly, different failure modes. Knowing these patterns means walking into a question about a media company and immediately knowing that time spent is the obvious candidate — and that its addiction and passivity risks are well-documented and need to be named unprompted.

| Company Type | Typical North Star | Common Failure Mode | Key Tradeoff to Name |
|---|---|---|---|
| **Media / Content** | Time spent per user per month | Measures quantity, not quality; addiction risk; passive play inflates numbers | Pair with quality signal (saves, shares, ratings) |
| **Marketplace** | Completed transactions per active user | Consumer-only focus misses supply health | Pair with supply-side metric (host retention, seller NPS) |
| **SaaS / Productivity** | Active users per account on core workflow | Login ≠ value; team may log in without doing the job the product is hired to do | Pair with depth-of-use metric |
| **Social / Network** | Connections made / messages sent | Quantity over quality; spam inflates | Pair with meaningful interaction rate |
| **E-commerce** | Repeat purchase rate | Discounts can drive repeat purchases without building loyalty | Pair with CAC and LTV |
| **Fintech** | Transactions per active user | Regulatory events, external shocks can move this | Pair with user-initiated vs. automated transaction split |

---

## Applying the Framework: Spotify

**The question:** *"How would you define a north star metric for Spotify?"*

**Step 1 — Narrow by stage and category.**
Spotify is a mature consumer media product. Its growth story is largely about engagement depth and retention, not new user acquisition. That points to the Engagement and Retention rows — and to the Media row of the company type table.

**Step 2 — Generate candidates.**

| Candidate | Pros | Cons |
|---|---|---|
| Time spent listening per month | Conventional media north star; captures customer value; maps to ad inventory and subscription justification | Doesn't distinguish active listening from background play; can be high without meaningful engagement |
| Songs saved per user per week | Intentional action; signals discovery value; strong predictor of library depth and retention | Misses users who are satisfied but don't actively save (e.g., habitual playlist listeners) |
| Streams per user per month | Easy to instrument; maps to royalty calculations | Can be high from repeat plays of the same songs; doesn't signal discovery or growth |

**Step 3 — Apply the three criteria to the winner.**

> *"I'd go with number of songs saved per user per week as my north star. It represents a meaningful user action: the user heard something new, decided it was worth keeping, and took a deliberate step. That is a stronger signal of customer value than passive play time. It maps to Spotify's business model because library depth is one of the strongest predictors of subscription retention. And the discovery and recommendations teams can directly influence it through Discover Weekly, Radio, and Daily Mixes.*
>
> *The tradeoff I'd name: it doesn't capture users who are satisfied but not actively building a library — commuters who play the same playlists repeatedly. So I'd pair it with a counter metric: monthly listening hours per retained user, segmented by cohort. That combination tells me whether users are both discovering new music and staying engaged over time."*

> **Note:** Time spent listening is also a defensible answer. Both can be correct. The right choice depends on what Spotify is optimizing for right now. A Spotify focused on growing new subscriber engagement will weight discovery signals more heavily. A Spotify focused on retention among long-tenured subscribers may care more about listening hours. **Two candidates can give different north star metrics and both be excellent** — as long as each is grounded in a clear reading of the company's current goals.
>
> When your interviewer gives you a product and asks for a north star, they are not expecting a predetermined right answer. They are watching whether you can reason from a specific strategic context to a principled choice. **Naming your assumptions about the company's current priority before naming the metric is itself a signal.**

---

## How to Defend Your Choice

When the interviewer pushes back on your north star, the right move is **not** to immediately offer alternatives. It is to:

1. Acknowledge the tension directly
2. Explain what your metric does and does not capture
3. Describe the counter metric you would use to address the gap

> Naming a tradeoff in your north star **before** the interviewer surfaces it is one of the clearest signals of senior-level thinking in an analytical round. It is not hedging — it is demonstrating that you understand the tool well enough to know where it breaks.

---

## Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Picks a north star from the right category for the product stage. Explains the connection to the product goal using one or two of the three criteria. Acknowledges tradeoffs exist when probed. |
| **Senior+** | Applies all three criteria explicitly. Names the tradeoffs of two or three candidates before landing on one. Gets ahead of the conflicting-signal follow-up: *"The risk I'd watch for is saves going up among new users but declining among users past the six-month mark — which would tell me we're winning at discovery but losing at long-term retention."* Treats the north star not as a final answer but as a decision that will need to be monitored and potentially revised. |

---

## Common Pitfalls

**Picking a metric because it sounds impressive, not because it fits.**
*"Revenue"* sounds serious for any mature product, but revenue is usually a lagging indicator the PM team can't move directly. If you pick revenue, explain how the team influences it within a normal experiment window.

**Not defining the metric precisely.**
*"Number of active users"* is not a metric. *"Number of users who complete at least one listening session per day"* is. If the interviewer has to ask you what counts as *"active,"* you've already lost ground.

**Treating the category as the north star.**
*"Engagement"* is not a north star. *"Time spent"* is not specific enough unless you define the interval, the user population, and what counts as time spent. Get specific.

**Ignoring one side of the marketplace.**
In any two-sided product, a north star that only captures consumer behavior misses supply health. The north star doesn't have to capture both sides directly, but the counter metrics need to.

**Never naming the tradeoff.**
Every metric has one. Candidates who present a north star with no caveats either haven't thought it through or are afraid that acknowledging weakness signals uncertainty. The opposite is true: naming the tradeoff clearly is what makes the choice feel earned.

---

## Quick Reference

```
THREE CRITERIA FOR A STRONG NORTH STAR
1. Customer value  → users achieving something meaningful (not just arriving)
2. Business value  → connected to mission and revenue model
3. Team value      → the product team can move this in a sprint cycle

THE "SO WHAT" TEST
→ If the metric went up 10%, does that unambiguously mean the product is working?
→ If you need caveats to interpret it, it's probably not the right north star

STAGE → METRIC BUCKET
New → Adoption | Growth → Acquisition | Mature → Retention | Declining → Churn

HOW TO DEFEND
→ Don't immediately offer alternatives when pushed back on
→ Acknowledge the tension → explain what it captures → describe the guardrail
→ Name the tradeoff before the interviewer asks

NORTH STAR ≠ CATEGORY
"Engagement" → not a north star
"Songs saved per user per week" → north star
```
