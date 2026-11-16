# Route and tools

The tools behind each step of both routes. Each one exists to stop a specific freeze or a specific
point loss. Teach the tool, not just the answer, so the learner can reuse it on any product.

## Contents
1. Scope (both routes)
2. Mission and lifecycle stage
3. User map
4. North star: candidates, tests, compare shape
5. Metric tree (north star, supporting metrics, guardrails)
6. Guardrail generator and second-order effects
7. Goal-setting steps and OKR shape
8. Conflicting-metric follow-up
9. A/B checklist: hypothesis and methodology
10. A/B metrics and what could mislead
11. Ship / no-ship decision table
12. Result cards (hidden results for A/B mocks)
13. Tradeoffs: what the test can't see
14. Transition lines
15. Freeze recovery
16. Common point losses

---

## 1. Scope (0–2 min)

Ask 2–3 questions **in one batch**, then state assumptions. Only ask what would change the answer.

Define-success clarifiers:
- Which part of the product? (Airbnb stays only, or Experiences too? Instagram, or only Reels?)
- Is this a new launch, or an existing product we want to measure better?
- Who is this goal for — the feature team, or the company's exec review?

A/B clarifiers:
- What exactly changes, on which platform, for which users?
- What decision will this test drive, and by when?
- How much eligible traffic do we get per day? Any past test on this surface?

Template: *"Just to make sure we're aligned: my understanding is that [product] does [X] for [Y].
I'll focus on [slice]. Does that scope work?"*

## 2. Mission and lifecycle stage (2–5 min)

Three layers, about 30 seconds each:
```
  MISSION        what the company exists to do, in plain words
  PRODUCT'S JOB  what this product does for users and for the company
  STAGE          new / growth / mature / declining → the metric bucket it implies
```

| Stage | Primary bucket | Example signal |
|---|---|---|
| New (does anyone want it?) | Adoption | Share of new users who complete the first real action in week 1 |
| Growth (scaling what works) | Acquisition + engagement | New activated users per week |
| Mature (holding the base) | Retention + monetisation | Month-3 retention, revenue per active user |
| Declining (managing loss) | Churn | Cancellation rate, win-back rate |

Say it out loud: *"This is a mature product, so I care most about retention, not sign-ups."*

## 3. User map (5–8 min)

Two or three lanes, two sentences each: what they want and the key action that shows they got it.
```
  SUPPLY / CREATORS   hosts, drivers, sellers, artists — want income or reach
  DEMAND / CONSUMERS  guests, riders, buyers, listeners — want value, quality, trust
  THE COMPANY         wants a healthy, growing, trusted system
```
B2B lanes: **buyer** (pays), **admin** (sets it up), **end user** (uses it daily). The best north
star reflects value for more than one lane; if it can't, a guardrail must cover the other lane.

## 4. North star (8–14 min)

### Generate candidates
Take the bucket from step 2 and the key actions from step 3. Write 2–3 candidates, each a specific
signal, not a category. "Engagement" is a bucket. "Songs saved per listener per week" is a metric.

### North star tests (run every one)

| Test | Question to ask | Fails when… |
|---|---|---|
| **Outcome, not method** | Does it measure what the user got, or how our feature did it? | "Parking button taps", "AI DJ sessions started" |
| **Survives the solution changing** | If we rebuild the feature next year, is this still the right number? | It names the feature or the screen |
| **One number** | Is it a single count, rate or ratio? | "Sessions and % weekly users" mixed together |
| **Defined precisely** | Who counts, what counts, over what window? | "Active users" with no definition of active |
| **Real signal** | What does the app or server actually log? | "Users feel confident", "users are happy" |
| **Scoped honestly** | Does it match what's being built? | All trips, when only hard-to-park trips are touched |
| **Team can move it** | Can this team move it in a normal test window? | Company revenue, GMV swinging with seasons |
| **"Up 10%" test** | If it rose 10%, would that clearly be good, with no caveats? | DAU (could be a push campaign or a competitor outage) |
| **Business value** | If it rose 20% and the business still struggled, would that surprise us? | Vanity counts like downloads |

### Candidate-compare shape (the senior move)

Say it as a short spoken comparison, then land:

> *"I have three candidates. One, [A] — it captures [value] but misses [gap]. Two, [B] — strong on
> [x], but [team can't move it / it rewards the method]. Three, [C] — [pro], [con]. I'll go with
> [A], because it is the one where the user has actually [outcome], it ties to how [company] makes
> money, and the team can move it in a two-week test. I'm not picking [B] because [reason]."*

*[Writes on board: NSM = … (who / what / window)]*

Defending it when pushed: don't swap metrics. Acknowledge the tension, say what the metric does and
does not capture, and name the guardrail that covers the gap.

## 5. Metric tree

Draw it on the board. It separates the three kinds of metrics candidates mix up.

```
  NORTH STAR       nights stayed per month (completed stays, not bookings)
        │
  SUPPORTING       searchers × search-to-book rate × nights per booking × (1 − cancellation rate)
  (inputs that     + active listings in high-demand cities
   drive it)
        │
  GUARDRAILS       share of stays with a complaint or refund
  (could get       host 90-day retention
   worse while
   the NSM rises)
```

- **Supporting metrics** go up *with* the north star; they are the levers teams own.
- **Guardrails** can go *the other way* while the north star rises. That is their whole point.
- **Exploratory** metrics are context; they never decide a launch.

## 6. Guardrail generator and second-order effects

The one question: *"If my north star goes up, what could I be breaking without noticing?"*

Run it through these families and keep the two that matter most for this product:

| Family | Example guardrail |
|---|---|
| Quality / trust | Complaint or refund rate, skip rate in first 30 seconds, hallucination rate |
| The other side | Host or driver earnings per hour, seller retention, creator posting rate |
| Cannibalisation | Time in Feed when pushing Reels; organic orders when pushing promos |
| Long-term health | Month-3 retention, unsubscribe or notification opt-out rate |
| Cost | Cost per order, support contacts per 1,000 users, compute cost per query |
| Fairness / safety | Error rate for one segment, fraud or chargeback rate |
| Speed | p95 load time, wait time |

Not a guardrail:
- The north star flipped ("users who don't use the feature", "trips that took longer than 3 minutes").
- A supporting metric ("session length", "search volume") — it rises with the north star.

**Second-order effect**: something that looks healthy but hurts later. Name one. Examples: more
notification opens, then more opt-outs; faster parking, longer walk; looser fraud rules lift payment
volume now and chargebacks 60 days later.

## 7. Goal-setting steps and OKR shape

When asked to "set goals" or "write OKRs", run these after the north star:
```
  1. METRIC     the north star, or the supporting metric this launch moves
  2. BASELINE   where it is today (ask, or assume and say so)
  3. REFERENCE  what similar launches or the test moved it by
  4. TARGET     a number and a date; say if it's a commit or a stretch
  5. LEADING    an early signal for weeks 1–4, because retention goals take a quarter to read
  6. COUNTER    the guardrail with a threshold ("while complaint rate stays under 2%")
```

OKR shape:
- **Objective:** the user outcome in words ("New teams get real work done in their first week").
- **Key results:** 2–3 numbers with dates — outcomes, never tasks. "Ship onboarding v2" is a task.
- **Guardrail KR:** "…while keeping X below Y."

Spoken: *"Today 22% of new teams are active in week 4. The last onboarding change moved it four
points, so I'd commit to 28% by end of Q2, with a stretch of 32%. In the first month I'd watch
day-7 activation as the early signal, and I'd hold support tickets per new team flat."*

## 8. Conflicting-metric follow-up

"Notification clicks are up six weeks in a row, but time on site is flat or falling. What do you do?"

```
  0. IS IT REAL?        logging change, definition change, mix shift (new users, one country)?
  1. NAME THE TENSION   both readings are defensible; steelman the side you'll reject
  2. ASYMMETRY          what does being wrong cost in each direction? can it be undone?
  3. COMMIT             the call + one-sentence reason + a specific reversal threshold
```

Spoken: *"If I keep pushing and I'm wrong, I train people to ignore notifications, and that hurts
every team that uses the channel. That's hard to undo. If I pause and I'm wrong, I lose some weeks of
growth. So I'd pause expansion and look at what happens after the click. If the time drop is only in
users who were already about to churn, I'd resume."* If the follow-up turns into a full "why did it
drop?" diagnosis, that's rca-judgement territory — do the short version here.

## 9. A/B checklist: hypothesis and methodology

### Hypothesis (2–5 min)
> *"I believe [change] will [move primary metric] for [users], because [observed behaviour or
> evidence]. If [metric] doesn't move by at least [X], I'm wrong."*

The "because" is the part most candidates skip and the part interviewers push on.

### Treatment and control
Specific enough that an engineer could build it with no questions. Always say what control sees.

### Unit of randomisation

| Unit | Use when | Watch out for |
|---|---|---|
| **User (logged-in ID)** | Default for visible changes; people come back | Needs a login |
| **Device / cookie** | Logged-out traffic | One person on two devices sees both versions |
| **Session or page view** | Invisible ranking tweaks with no memory | Never for prices or visible UI — the same person sees both |
| **City / region (cluster)** | Marketplaces, pricing, anything with shared supply | Few units, so run longer; cities differ |
| **Switchback (time slots)** | Dispatch, surge, delivery fees in one city | Effects carrying over between slots |
| **Social cluster** | Messaging, sharing, anything where users affect each other | Spillover between friends in different groups |

Say why: *"I'll randomise by user, not session, because the same guest searches several times
before booking and must see one consistent price."*

### Population and rollout

| Risk | Start at | Examples |
|---|---|---|
| Low | 10–20% | Copy or layout change |
| Medium | 5–10% | New feature, pricing display, monetisation |
| High | 1–5% | Core ranking, AI model change, anything safety-related |
| Very high | under 1% canary | Infrastructure, payments flow |

Name who is excluded and why (new markets, enterprise accounts, regions with legal rules).

### Sample size and duration — intuition, not maths
- **The smaller the lift you want to see, the more users you need — fast.** Half the lift needs about
  four times the users.
- **Rare events need more users.** Testing purchases needs far more traffic than testing clicks.
- **Pick the minimum lift worth shipping** (often 2–5%): the smallest change that pays for the work.
- **Duration** = users needed ÷ eligible users per day, rounded up to **whole weeks**, and at least
  **2 weeks** — to cover weekday/weekend cycles and let novelty wear off.
- **Don't peek and stop early** when it looks good; decide the end date up front.
- If they ask for a number: users per group ≈ 16 × p(1 − p) ÷ (lift)². At 10% conversion, to see a
  1-point lift: 16 × 0.09 ÷ 0.0001 ≈ 14,400 users per group. Say it once; don't do maths on stage.

## 10. A/B metrics and what could mislead (10–14 min)

```
  PRIMARY       one behavioural metric tied to the hypothesis (not ratings, not clicks if
                the hypothesis is about bookings)
  GUARDRAILS    2 that could get worse while the primary rises, each with a threshold
  EXPLORATORY   context for the next test; never decides the launch
```

What could mislead — name the one or two that fit this test:
- **Novelty / primacy:** a spike from curiosity, or a dip because people dislike change.
- **Sample ratio mismatch:** groups planned 50/50 come out 52/48 — the assignment is broken.
- **Many metrics:** check 20 metrics and one will look "significant" by chance.
- **Mix shift / segment flip:** up overall, down for new users or one platform.
- **Spillover:** control is affected by treatment (shared drivers, shared inventory, friends).
- **Logging changes:** the treatment logs events differently.

For AI features, behaviour alone can't tell a right answer from a confident wrong one. Add an offline
eval on sampled outputs (accuracy, hallucination rate, override rate). For deeper model-quality
metrics, point the learner to technical-ai-judgement.

## 11. Ship / no-ship decision table

State the rule **before** the result: *"I'll ship if [primary] rises at least [X] and [guardrail 1]
and [guardrail 2] stay within [threshold]."*

| Result | What it looks like | The call |
|---|---|---|
| Clear win | Primary up, range clear of zero, guardrails flat | Ship. Ramp 10% → 50% → 100% over 1–2 weeks; keep a small holdback to read the long-term effect |
| Clear loss | Primary flat or down, or a guardrail broken | Don't ship. Find out why; write down what you learned |
| Flat | Not significant; the range includes zero | "No effect bigger than X." Ship only if it's cheap and needed for other reasons; don't extend the test forever |
| Mixed | Primary up, one guardrail down | Tension → asymmetry → call → reversal threshold (section 8) |
| Too good to be true | Primary +25% from a small change | Check logging, bugs and sample ratio first |
| Novelty decay | Strong week 1, near zero by week 3 | Judge on the late weeks or on new users only |
| Segment flip | Up overall, down for a key group | Ship to the groups that win, hold or fix for the one that loses — if that group was named before the test |
| Sample ratio mismatch | Groups don't match the planned split | Don't read the result. Fix assignment and rerun |

A staged rollout is only a decision if you say why the smaller size solves the risk you named.

## 12. Result cards (hidden results for A/B mocks)

Pick one at the start of an A/B mock, keep it hidden, and fit the metric names to the test. Reveal it
with numbers only when the candidate asks for results. About one mock in three, use a messy card.

| # | Card | Reveal as |
|---|---|---|
| 1 | Clean win | Primary +4.1% (95% range +2.0% to +6.2%). Both guardrails flat. 3 weeks, 50/50 as planned. |
| 2 | Clean loss | Primary −1.5%. Support contacts per 1,000 users +8%. |
| 3 | Mixed | Primary +3.2% (significant). One guardrail down 2% (e.g. revenue per user, retention, quality). |
| 4 | Flat | Primary +0.6% (range −1.1% to +2.3%). Test was sized to see 2%. |
| 5 | Novelty decay | Week 1 +9%, week 2 +4%, week 3 +0.5%. |
| 6 | Segment flip | Overall +2.5%. New users −4%; returning users +5%. |
| 7 | Sample ratio mismatch | Planned 50/50; got 52.3% / 47.7% on 400,000 users. Primary +6%. |
| 8 | Too good | Primary +28% from a button colour change. |

Good next probes after the reveal: "Your PM partner wants to ship today. What do you say?", "Leadership
only cares about the primary metric. Defend holding back."

## 13. Tradeoffs: what the test can't see (17–20 min)

Pick the blind spot that fits **this** test:
- Hollow vs meaningful engagement (more comments, worse conversations).
- Trust and delight, which show up in retention months later.
- Cannibalisation of another surface (what did users stop clicking?).
- Novelty vs lasting habit.
- Network and marketplace effects the test design can't contain.
- The offline/online gap for AI features.
- Things that can't be A/B tested at all (brand changes, pricing for the whole market) — data informs,
  judgement decides.

## 14. Transition lines

Saying the next step's name out loud buys thinking time and sounds structured:
- "Before I pick a metric, let me make sure I've got the scope right."
- "Let me start with what this product is for and what stage it's at."
- "Let me sketch who gets value here, because the north star has to reflect them."
- "I have three candidates. Let me test each one and pick."
- "If my north star goes up, here's what I could be breaking."
- "Let me state my hypothesis before I design anything."
- "Before we look at results, here's the rule I'd use to decide."
- "Here's what this test can't tell us."
- "To summarise…"

## 15. Freeze recovery

| Freeze | What to say | What to do in your head |
|---|---|---|
| Can't think of candidates | "Let me go back to the key action each user takes." | User map → each key action is a candidate |
| Can't choose between two | "Let me run the 'up 10%' test on both." | Pick the one that needs fewer caveats |
| Can't find a guardrail | "If this goes up, what could I be breaking?" | Run the families: quality, other side, cannibalisation, cost |
| Stuck on sample size | "I'll size it to see the smallest lift worth shipping." | Smaller lift → more users; at least two full weeks |
| Mixed result, no idea | "Both signals are real. What does being wrong cost each way?" | Asymmetry → call → reversal threshold |
| Lost the thread | "Let me quickly recap where we are." | Read the board top to bottom |

## 16. Common point losses

- Jumping to a metric before scope and lifecycle stage.
- A north star that counts the feature's use (the method) instead of the user's outcome.
- Two metrics glued into one north star, or no definition of "active".
- Listing three candidates and never landing on one.
- The north star flipped as a guardrail; a supporting metric called a guardrail.
- Goals with no baseline, number or date.
- Randomising by session for something the user sees, or ignoring spillover in a marketplace.
- "Run it for 3 days" — misses weekly cycles and novelty.
- Clicks or ratings as the primary metric when the hypothesis is about bookings or completion.
- No ship rule before the result; "it depends" after it; "ship to 5% and monitor" as the decision.
- No reversal threshold.
- A generic list of blind spots instead of the one that matters for this test.
- Ending a turn with "that's it" or "so yeah" instead of a one-line landing ("So my call is ___
  because ___").
