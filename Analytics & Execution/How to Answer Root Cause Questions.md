# How to Answer Root Cause Questions

> Root cause analysis questions test something specific: can you systematically investigate a problem under time pressure without wasting questions?

**Example questions:**
- *"Uber Eats entered 'U City' two years ago, a competitor entered four years ago, and we still have only about 18% market share. Diagnose what is going on and what you would do to improve growth."* — Uber
- *"What would you do when there is a customer drop or a specific metric drop in the dashboard for an Instagram-like product?"* — Meta
- *"We've noticed a drop off in card usage. Evaluate why this might be happening and propose solutions to address it."* — Coinbase
- *"The usage of Meta AI within Instagram DMs is up while the usage of Meta AI within the Search Bar of IG Discover page is down. How would you investigate?"* — Meta

---

## What Interviewers Are Looking For

| Signal | What It Means |
|---|---|
| **Systematic approach** | Every question you ask should change what you look at next. Asking at random signals checklist execution, not reasoning. |
| **Prioritization instincts** | Where you start matters as much as where you end up. Starting with the most interesting hypothesis (not the most likely) is an immediate signal. |
| **Thoroughness under constraint** | You will not have time to investigate everything. The skill is knowing what to rule out quickly and what to explore in depth. |
| **Macro awareness (Senior+)** | A solid investigation starts internal before expanding external. Senior+ candidates run both tracks in parallel — some external factors are immediately falsifiable. |

> **Timing context:** RCA questions are usually follow-ups. You have 10–15 minutes, and the interviewer is not scoring you on whether you find the right answer — they're scoring how you reason.

---

## The 5-Step Framework

```
1. Define the problem     → Get precise, shared measurement definition
2. Hypothesis space       → Name both internal and external tracks
3. Triage                 → Shape-of-drop questions to eliminate buckets fast
4. Investigate            → Go deep inside the most likely bucket
5. Resolution path        → Name the action or escalation
```

---

## Step 1 — Define the Problem

Before you form a single hypothesis, you need a **precise, shared definition** of what is actually being measured.

**Two things to nail down:**

**1. Define the metric.** Is the drop in volume, rate, or quality? Each points to a different investigation.
- Drop in *volume* (fewer users completing checkout) ≠ drop in *rate* (same users completing at a lower percentage)
- Both may show up as *"cart conversion declined"* — they require different investigations

**2. Define the measurement boundaries.** Confirm exactly what is and is not included in the metric.

> **Example:**
>
> *"Before I start investigating, I want to make sure I understand the metric precisely. When we say cart conversion rate dropped, what is the denominator — cart creation or cart view? And does the metric include instant checkout flows, or only the standard cart path?"*
>
> **Why this matters:** If the denominator is cart creation and your product recently launched an agentic feature that automatically creates carts while users review options, the denominator explodes while completions stay flat. The rate tanks. Nothing is broken. You would spend 15 minutes investigating a ghost.

> **Watch out for:** Jumping to hypotheses before you know what is being measured. Interviewers will let you do this and watch you run in the wrong direction.

### When the Question Involves Conflicting Metrics

When two metrics move in unexpected directions simultaneously, your job in Step 1 is to **explicitly name the tension** before investigating causes.

> **Example:**
>
> *"Notification engagement is up week over week, but time on site is flat or declining. The assumed relationship was that higher notification engagement would drive more session time. The tension is that users are clicking through but not staying. Before I investigate causes, I want to name what kind of break this is: are users finding what they expected and leaving satisfied, or finding something disappointing and leaving early? That distinction changes everything I look for."*

> **Note:** Meta's analytical rounds consistently end with a conflicting-metric follow-up in exactly this shape — one engagement signal up, one retention signal flat or down. Candidates who name the tension before investigating demonstrate systems thinking that separates a strong answer from a forgettable one.

---

## Step 2 — State Your Hypothesis Space

Before asking a single data question, **briefly name the full set of buckets** you will investigate. This takes 30 seconds and signals exhaustive thinking while giving the interviewer a map of where you're going.

### Internal Track (causes within your product and organization)

| Bucket | What It Covers |
|---|---|
| **Product / UX change** | A feature release, redesign, or experiment altered user behavior in an unanticipated way |
| **Cohort effect** | New users acquired from a different channel behave differently from the existing base |
| **Quality / model regression** | Product output degraded; for AI products, includes prompt drift and model version changes |
| **Infrastructure / latency issue** | Response times increased or reliability dropped, causing users to abandon before they get value |
| **Measurement artifact** | The metric itself changed, not the underlying experience |

### External Track (causes outside your product and organization)

| Bucket | What It Covers |
|---|---|
| **Competitive / market shifts** | A competitor launched something significant, or a platform dependency changed |
| **Seasonality / cyclical patterns** | The drop follows a known calendar pattern or recurring usage cycle |
| **Macro / out-of-control events** | Government policy, regulatory action, macroeconomic shift, or force-majeure event |

---

## Step 3 — Triage with Shape-of-Drop Questions

Do not jump directly into bucket-specific questions. Ask a small number of **high-leverage questions that can eliminate multiple buckets at once**. Shape tells you where to look.

### The Four Triage Questions

**Q1: Is there any obvious external event that coincides with the timing of the drop?**

| Answer | What It Implies |
|---|---|
| Yes (competitor launch, platform outage, regulatory change, major holiday) | External track has at least one live bucket. Run a quick falsifiability check before delving into internal causes. |
| No known external event | External track is lower priority. Focus triage energy on the internal track. |

> Seasonality is the fastest external bucket to falsify — a single historical overlay either confirms or eliminates it.

**Q2: Was the drop sudden or gradual?**

| Answer | What It Implies |
|---|---|
| Sudden (within a day or two) | Product/UX change, infrastructure issue, or measurement artifact — something discrete happened |
| Gradual (over weeks or months) | Cohort effect or quality/model regression; also raises seasonality as a candidate |

**Q3: Is the drop broad-based or concentrated in a specific segment?**

| Answer | What It Implies |
|---|---|
| Broad-based (all users, geographies, devices) | Product/UX change, quality regression, or measurement artifact |
| Concentrated (specific geography, device, cohort) | Infrastructure issue or cohort effect; also raises competitive/market shift if it maps to where a competitor is active |

**Q4: Did anything change on our end around the time the drop started?**

| Answer | What It Implies |
|---|---|
| Yes (release, experiment, model update, data pipeline change) | Product/UX change or measurement artifact is the leading candidate |
| No known internal change | Cohort effect or quality regression more likely internally; raises the external track |

**After these four questions, you should be able to say:**

> *"Based on this, the most likely bucket is X and possibly Y. I'll start with X because [reason], and I want to run a quick check on [external bucket] in parallel since it's fast to eliminate."*

---

## Step 4 — Investigate Inside the Bucket

You are now inside a specific bucket. Your goal is to confirm the root cause with **targeted questions that each narrow the space further**. Both yes and no are informative.

> **If two or three consecutive answers within a bucket don't fit the expected pattern, step back.** Say: *"This evidence is not consistent with what I'd expect from a product change. I'm going to revisit my triage and look at infrastructure or cohort effect instead."* Stepping back when data contradicts your hypothesis is a green flag.

---

### Bucket A — Product / UX Change

*You arrive here when: sudden drop, broad-based, internal change confirmed.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Was this rolled out 100% or via a flag/experiment? | Full rollout caused it — no control group to compare against | Compare treatment vs. control — the treatment group is likely driving the drop |
| Is the drop concentrated on a specific surface or step in the funnel? | The change on that surface is the direct culprit | The change has downstream behavioral effects — look for second-order friction |
| Did the metric drop immediately on release, or with a lag? | Users hit the friction point on first encounter | Behavioral change is cumulative — users are gradually abandoning a habit |
| Are power users and new users equally affected? | The UX change is universally harmful | The change broke a workflow power users depended on — new users never learned the old pattern |

> **Tip:** The power-user vs. new-user split is one of the highest-signal questions in this bucket. It tells you whether you're dealing with universal friction or a workflow regression that only surfaces with depth of use — and that determines whether the fix is a rollback or a targeted adjustment.

---

### Bucket B — Cohort Effect

*You arrive here when: gradual drop, or concentration in recently acquired users.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Did acquisition volume spike recently? | Dilution effect — more low-intent users pulling down the aggregate | Volume isn't the issue — channel mix or onboarding quality is more likely |
| Did the acquisition channel mix change? | New channel is bringing in users with different intents | The problem exists within unchanged channels — look at onboarding for new users |
| Do new users from the same historical channels behave similarly to past cohorts? | Something changed in onboarding or early experience, not the channel | The channel is sending a structurally different user type |
| Is retention worse at Day 1, Day 7, or later? | Day 1 = first-impression problem; Day 7 = habit-formation problem | Helps isolate whether the issue is activation or longer-term engagement |

---

### Bucket C — Quality / Model Regression

*You arrive here when: gradual drop, broad-based, no obvious internal change event.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Did explicit satisfaction scores drop alongside the engagement metric? | Users are noticing degraded output quality | The drop is behavioral but not perceived — look at latency or a UX change the user isn't conscious of |
| Was there a model update, prompt change, or API version change? | Regression was introduced at that point — start investigation there | Gradual drift — data distribution shifted or user expectations changed without a discrete trigger |
| Are users abandoning earlier in the session, or completing sessions but rating them lower? | Quality is failing before value is delivered — output is bad enough that users give up | Users reach the end but experience feels worse — a subtler quality issue |
| Is the regression uniform or concentrated in specific query types? | Model degraded broadly — likely a model version or infrastructure change | A specific capability regressed — fix targets retraining or a prompt adjustment |

---

### Bucket D — Infrastructure / Latency Issue

*You arrive here when: sudden drop, concentrated in a specific segment (geography, device, time window).*

| Question | Yes Implies | No Implies |
|---|---|---|
| Did p95/p99 latency increase around the time of the drop? | Tail latency is degrading experience for a meaningful subset — average hides it | Look at error rates and availability rather than speed |
| Is the issue isolated to a specific geography or data center? | Infrastructure or CDN issue in that region — check recent deployments in that region | Client-side (device/OS) or network-level, not server-side |
| Is it device-type or OS-version specific? | Client-side change or compatibility regression — check recent app releases | Server-side or network issue — eliminate carrier/ISP as a variable |
| Did on-call alerts or error rate spikes fire around the same time? | Confirms an infrastructure incident — cross-reference incident log with metric timeline | Silent degradation — a dependency or third-party service may have degraded without triggering alerts |

---

### Bucket E — Measurement Artifact

*You arrive here when: aggregate metric dropped, but a core user segment appears unaffected; or a pipeline/definition change occurred.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Did we change the metric definition, logging event, or attribution window recently? | The drop is definitional, not real — reconcile old and new definitions to confirm | Look for a new usage type being averaged in rather than a definition change |
| Did we launch a new surface, API tier, or agentic feature generating automated sessions? | Automated sessions are diluting the aggregate — nothing is wrong for real users; metric needs segmenting | Look for a data pipeline issue or sampling change |
| If we filter to only the user segment this metric was originally designed for, does the drop disappear? | Confirmed measurement artifact — metric needs to be restructured to exclude automated usage | A real drop exists even in the core segment — return to other buckets |
| Did data volume spike without a corresponding spike in real user acquisition? | Bot traffic, crawler activity, or automated usage inflating the denominator | Genuine new usage type introduced at scale — consider whether the metric definition should evolve |

> **Tip:** Measurement artifact is the most underweighted bucket in interview settings. Most candidates never ask *"Could this be a measurement problem?"* On AI products especially, this matters: when agentic or API usage is introduced at scale, automated sessions — short by design — get averaged into engagement metrics built for interactive human users. The metric appears to be declining. What's actually happening is that a different kind of usage is being counted inside the same number.
>
> **Example:** A candidate at Cursor was asked: *"We've seen a lot of usage, but PRs are going down or not making it to production. How would you think about that?"* High usage with declining downstream completion is a textbook measurement artifact — the headline metric looks healthy while the real signal is buried.

---

### Bucket F — Competitive / Market Shifts

*You arrive here when: the drop coincides with a known competitor action or platform change.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Did a major competitor launch a new feature around this time? | Users may be churning to or experimenting with the competitor — check if the drop is concentrated in segments most likely to switch | Competitor action is not the trigger — check platform dependencies |
| Did a platform your product depends on change or experience an outage? | Product's reach or functionality was degraded by an upstream dependency — check if the drop maps precisely to the outage window | Platform dependency isn't the cause — broaden to the category-level trend |
| Is there a meaningful shift in user behavior in your category? | A structural market shift is eroding relevance — slow-moving and won't reverse without a strategic response | No category-level shift — the drop is product-specific |
| Are competitors experiencing the same drop, or is it isolated to your product? | A market-wide force is affecting the whole category — external cause strongly confirmed | The drop is specific to your product — internal causes are more likely |

> **Tip:** The last question is one of the most senior signals in the entire framework. Knowing whether your competitors are seeing the same trend requires market awareness beyond your own dashboards: analyst reports, app store rankings, public earnings calls, social listening. Candidates who demonstrate fluency with this kind of external data show they think like a GM, not just a feature owner.

---

### Bucket G — Seasonality / Cyclical Patterns

*You arrive here when: the drop follows a known calendar pattern or timing aligns with a recurring usage cycle.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Does this drop occur at the same time in previous years or cycles? | Seasonality is likely — confirm by overlaying current data against the same period historically; no corrective action may be needed | Not seasonal — a genuine deviation worth investigating across other buckets |
| Is the magnitude of the drop within historical tolerance? | Expected seasonal variation — flag, monitor, treat as normal | Larger than seasonal norms — an additional factor is compounding the seasonal effect |
| Did a major holiday, cultural event, or calendar shift coincide with the drop? | Calendar effect explains the timing — cross-reference with geography to confirm | Cyclical calendar events aren't the driver — look at structural or competitive causes |

> **Note:** Seasonality is the fastest external bucket to falsify. A single historical data overlay can confirm or rule it out in seconds — worth checking early, even before going deep on internal buckets, when the timing makes it plausible.

---

### Bucket H — Macro / Out-of-Control Events

*You arrive here when: no internal or competitive explanation fits, or a known large-scale external event coincides with the drop.*

| Question | Yes Implies | No Implies |
|---|---|---|
| Did a government policy change, regulatory action, or platform block occur in the affected region? | Access or usage was constrained by an external mandate — root cause confirmed as external | Political/regulatory cause is unlikely — look at macroeconomic or force-majeure events |
| Did a macroeconomic shift coincide with the drop in a product sensitive to discretionary spending? | Users are pulling back due to economic pressure — monitor alongside retention and churn data | Macroeconomic cause is unlikely — look at force-majeure events |
| Did a natural disaster, major infrastructure outage, or significant news event occur? | External disruption reduced access or attention — confirm by isolating the drop to affected regions and checking whether it recovers post-event | If all external buckets are exhausted and the internal track is also empty, re-examine your metric definition and triage assumptions |

> **Tip:** Bucket H is the only bucket where the root cause is genuinely outside your control. That doesn't mean the conversation ends. A strong candidate identifies the external cause and immediately signals awareness that mitigation remains the PM's responsibility: protecting retention in affected regions, accelerating the contingency roadmap, adjusting pricing to economic conditions, or repositioning the product. Interviewers at senior level often use this as a natural pivot into a product strategy follow-up. Being ready for that transition is part of the answer.

---

## Step 5 — Determine the Resolution Path

Naming the root cause is not the end. Interviewers will ask (or simply wait for) what you'd actually do next.

**Two parts:**

**1. Determine whether action is warranted.**
Not every metric drop signals a problem worth fixing.
- Measurement artifact → fix is a metrics architecture change, not a product change
- Seasonal pattern within tolerance → document, monitor, move on

**2. If action is warranted, name the tradeoff and who owns it.**
- If the cause is within your product: assess whether the tradeoff is worth it. Was this an expected side effect? Is the upside still worth the cost?
- If the cause belongs to another team: name the escalation path. *"I'd flag this to the PM who owns that surface"* is a legitimate answer — it signals cross-functional awareness, not avoidance.

---

## Interviewer Pivots to Watch For

**The pivot:** The interviewer introduces new information that redirects you to a different bucket. *"Let's say the analytics team just told you this drop is concentrated in Southeast Asia."*

This is not a curveball — it's the interviewer extending the exercise with new evidence. The right response: treat it as a data point, step back to Step 3, and re-triage with the new constraint.

**The rabbit hole:** The interviewer keeps saying yes and lets you go deeper without introducing new constraints. This is a stress-test of how far your domain knowledge goes within that bucket.

> **The meta-lesson:** The interview is not over when you name a bucket. It is over when the interviewer signals it is. Stay in investigation mode until you get an explicit closing cue.

---

## Common Pitfalls

**Skipping metric definition.**
Getting measurement bounds wrong early means your entire investigation is built on a misunderstood premise. Asking *"what is the denominator?"* before forming hypotheses looks rigorous, not pedantic.

**Ignoring the external track entirely.**
Candidates who only investigate internal causes miss an entire class of root causes. At the senior level, this signals that the candidate thinks like a feature owner rather than a GM.

**Raising external factors without being able to investigate them.**
Leading with competitors before checking internal causes looks like avoiding the hard analytical work. Check the fast-falsifiable external buckets (seasonality especially) early, and hold off on harder-to-verify ones (competitive shifts, macro) until internal causes have been explored.

**Asking questions without acting on the answers.**
Every answer should visibly change where you go next. If a yes and a no would lead you to the same next question, you're reciting a checklist — not building a decision tree.

**Ignoring the measurement artifact bucket.**
Most candidates never ask whether the metric itself could be the problem. On AI products especially, this is increasingly the correct answer.

**Anchoring on the first bucket that fits.**
Two or three consecutive nos inside a bucket is your signal to step back and re-triage. Candidates who cannot exit a bucket gracefully appear to be guessing rather than reasoning.

---

## Quick Reference

```
STEP 1: DEFINE THE PROBLEM
→ Volume drop, rate drop, or quality drop? (different investigations)
→ What is the denominator? What's included/excluded?
→ Conflicting metrics: name the tension before investigating

STEP 2: HYPOTHESIS SPACE (30 seconds)
Internal: Product/UX change | Cohort effect | Quality regression | Infrastructure | Measurement artifact
External: Competitor/market | Seasonality | Macro/out-of-control

STEP 3: TRIAGE WITH 4 QUESTIONS
1. Any obvious external event coinciding with the drop?
2. Sudden or gradual?
3. Broad-based or concentrated in a specific segment?
4. Did anything change on our end around this time?

→ "Most likely bucket is X. I'll start there and check [external] in parallel since it's fast to falsify."

STEP 4: INVESTIGATE (each answer changes where you go next)
→ If 2–3 consecutive answers don't fit the pattern → step back and re-triage

STEP 5: RESOLUTION PATH
→ Is action warranted? (not every drop needs fixing)
→ Who owns it? Name the action or the escalation path
→ Be ready for a product strategy pivot on Bucket H
```
