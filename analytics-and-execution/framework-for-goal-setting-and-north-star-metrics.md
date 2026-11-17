# Framework for Goal Setting & North Star Metrics

> Generating a list of plausible KPIs is easy now. What interviewers are actually testing is whether you can connect a metric to strategy, defend why it's the right one, and navigate tradeoffs live.

---

## What Interviewers Are Looking For

| Signal | What It Means |
|---|---|
| **Strategic grounding** | Can you connect the product's metrics to the company's mission and business model — not just the feature in isolation? |
| **Stage awareness** | Do you understand what kind of product you're measuring, and what the right metric focus is for that stage? |
| **A defensible north star** | Is your chosen metric tied to the goal, with a clear argument for why it beats the alternatives? |
| **Tradeoff fluency** | Can you identify where your metric might mislead you, and what you'd watch alongside it? |

---

## The 4-Step Framework

```
1. SCOPE    → Confirm what you're measuring before you measure anything
2. MISSION  → Connect the product to strategy and name the lifecycle stage
3. USER MAP → Sketch who uses this and what they're trying to do
4. NORTH STAR → Generate candidates, argue for one, pair it with a guardrail
```

---

## Step 1 — Scope

**What the interviewer is scoring:** Do you check your assumptions before building an answer on top of them?

Start by confirming your understanding of the product and what you've been asked to measure. State it briefly and invite a correction.

**Template:**

> *"Just to make sure we're aligned: my understanding is that [product] is [brief description]. Are there any constraints I should know about, like whether we're looking at [parent company / specific feature / particular user segment]?"*

This step exists because scope questions often have hidden ambiguity. If you're asked to define success for Airbnb, are you measuring the entire company, or just short-term rentals? Getting that wrong early means you're solving the wrong problem.

> **Example:**
>
> *"My understanding is that we're measuring Airbnb's core short-term rental marketplace — not Experiences or other verticals. Does that scope work for you, or should I consider the full platform?"*

---

## Step 2 — Mission

**What the interviewer is scoring:** Whether you think about metrics as strategy, not just measurement.

After scoping, establish the strategic context in **three layers** before you touch a single metric:

| Layer | What to Cover |
|---|---|
| **Company mission** | State it briefly; explain how this product supports it. Flag if you're approximating. |
| **Product's role** | What does this product do for the company and for its users? What job is it hired to do? |
| **Lifecycle stage** | This determines your primary metric focus. Name it explicitly. |

### Lifecycle Stage → Metric Bucket

| Stage | Description | Primary Metric Focus |
|---|---|---|
| **New** | Validating whether anyone wants this | Adoption, early retention |
| **Growth** | Scaling what works | Acquisition, engagement |
| **Mature** | Holding the base, deepening value | Retention, monetization |
| **Declining** | Managing attrition, exploring what's next | Churn, transition signals |

**Name the stage out loud, and name the metric bucket it implies.** This sets up everything that follows.

> **Example:**
>
> *"Airbnb's mission is to create a world where anyone can belong anywhere. The core marketplace does so by connecting hosts who want to earn income from their space with guests seeking a more local, personal travel experience.*
>
> *Airbnb is a mature, global marketplace — it's not primarily a user acquisition story anymore. The challenge is retaining both sides of the marketplace and deepening the quality and frequency of transactions. So I'd focus on retention and transaction volume as my primary metric buckets."*

---

## Step 3 — User Map

**What the interviewer is scoring:** Do you think about the full product ecosystem, or just one type of user?

Before brainstorming specific metrics, sketch who uses this product and what they're trying to accomplish. For most products, there are three lanes:

| Lane | Who They Are | What They Want |
|---|---|---|
| **Creators** | Users who supply the experience (hosts, sellers, publishers) | Reliable income / reach / impact |
| **Consumers** | Users who receive the experience (guests, buyers, audiences) | Value, quality, trust |
| **The company** | Sitting in the middle | Mission-aligned, sustainable marketplace health |

**Keep it to two or three sentences per lane.** You're building a behavioral map that your north star will need to speak to.

> **The best north star metric represents value for both user types, not just one.** If your metric only captures consumer behavior, you're missing half the marketplace.

> **Example:**
>
> *"There are two sides to this marketplace, and the company sitting in the middle.*
>
> *Hosts want to earn a reliable income by attracting quality guests. Their key actions are listing a property, keeping it available, and delivering a stay that earns good reviews — because reviews determine future bookings.*
>
> *Guests want to find a great place to stay, ideally better than a hotel, at a competitive price. Their key action is searching, booking, and completing a stay they'd recommend.*
>
> *Airbnb, as the company, wants a healthy marketplace: enough supply in the right locations, enough demand to keep hosts active, and transaction quality high enough to build trust on both sides."*

---

## Step 4 — North Star

**What the interviewer is scoring:** Can you turn strategic logic into a specific, defensible measurement choice?

### Properties of a Strong North Star

| Property | What It Means |
|---|---|
| **Customer value** | Represents both user types achieving something meaningful |
| **Business value** | Maps to the company's mission and model |
| **Team value** | The product team can actually move this metric through their work in a reasonable timeframe |

### How to do it

1. Generate a few candidate north stars using the metric bucket from Step 2 and the user map from Step 3
2. Reason through each one
3. Land on a choice — **be explicit about why you chose this one over the alternatives**

> **Tip:** A north star is not the same as a category.
> - *"Engagement"* is not a north star — it's a bucket
> - *"Number of nights booked per month per active host"* is a north star
>
> Name the specific signal, define how it's measured, and explain what it tells you.

> **Example:**
>
> *"Given the mature stage and the transaction focus, my candidate north stars are:*
>
> 1. **Number of completed bookings per month** — captures both host and guest activity; maps directly to Airbnb's revenue model
> 2. **Number of unique guests who complete a stay per month** — captures consumer demand but misses host health
> 3. **Percentage of listed properties with at least one booking in the past 30 days** — captures supply-side health but misses demand depth
>
> *I'd go with the number of completed bookings per month.*
>
> *Here's why: a completed booking represents host success (earned income), guest success (found and stayed somewhere worth booking), and Airbnb's business success (GMV drives revenue and marketplace trust). The team can influence it directly through search ranking, pricing tools, host onboarding, and demand marketing. And it's sensitive enough to move in a normal experiment cycle.*
>
> *The tradeoff I'd watch: it doesn't tell me anything about quality. Bookings could be rising while guest satisfaction declines — a leading indicator of churn. So I'd pair this north star with a quality guardrail: average guest rating per stay, or the percentage of bookings that result in a complaint or refund."*

---

## Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Picks a reasonable north star; explains the connection to the product goal; shows understanding of lifecycle stage as a concept. |
| **Senior+** | Moves through all four steps in a clear, logical sequence and makes the reasoning audible at each transition. Generates multiple credible candidates with explicit rejection criteria. Anticipates the conflicting-signal follow-up before it's asked — e.g., *"The scenario I'd watch for is bookings rising while host retention falls, which would tell me we're burning through supply rather than building a healthy marketplace."* |

---

## Common Pitfalls

**Don't skip the stage diagnosis.**
It's the highest-leverage move in the answer. Candidates who jump straight to brainstorming end up with a north star that floats free of strategic logic — and that's exactly where interviewers apply pressure.

**Answer the question that was asked.**
If the interviewer asked for one north star metric, land on one. Walking out with three options signals indecision, not thoroughness.

**"Engagement" is not a metric.**
Neither is "retention" or "growth." Name the specific signal: *daily active users who complete a booking, D7 retention rate, time spent per session.* Then define how it's measured.

**Make sure your metric can actually move.**
A small feature's impact will get lost in platform-wide DAU. Match the scope of your metric to the scope of what's being measured.

**Think about both sides of the marketplace.**
The most common analytical mistake is optimizing for consumers and forgetting about supply. A north star that only reflects consumer behavior misses half the system.

---

## Habit-Based Prep Advice

Before you practice answering metrics questions, practice **diagnosing products**.

For any product you encounter — apps you use, features you read about, companies in the news — run through the first two steps quickly:

1. What stage is this product at?
2. What's the right metric bucket?

Getting that diagnosis quickly is what makes the rest of the framework feel natural under pressure.

---

## Quick Reference

```
STEP 1: SCOPE
→ "My understanding is [product] does [X] for [Y]. Does that scope work?"

STEP 2: MISSION
→ Company mission → product's role → lifecycle stage → metric bucket
   New: adoption | Growth: acquisition | Mature: retention | Declining: churn

STEP 3: USER MAP (2–3 sentences per lane)
→ Creators: what they supply and what they want
→ Consumers: what they consume and what they want
→ Company: what marketplace health means

STEP 4: NORTH STAR
→ Generate 3 candidates from bucket + user map
→ Argue for one: customer value + business value + team can move it
→ Name the tradeoff → pair with a guardrail metric
→ Anticipate the conflicting-metric follow-up before it's asked
```
