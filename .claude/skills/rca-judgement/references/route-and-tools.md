# Route and tools

The tools behind each step of the RCA route. Each one exists to stop a specific freeze or a specific
point loss. Teach the tool, not just the answer, so the learner can reuse it on any metric.

## Contents
1. Define the problem (and identity templates)
2. Hypothesis space
3. Triage: the four doors
4. Investigate: "they say → you do"
5. Parallel falsify checks
6. Call the root cause
7. Resolve: the decision fork and the "what would you do" upgrade
8. Transition lines
9. Freeze recovery
10. Common point losses

---

## 1. Define the problem (0–4 min)

Restate the drop in one line, then ask the few questions whose answers change the investigation.
Batch them.

```
  WHAT KIND       volume (fewer people doing it), rate (same people, lower %), or quality (worse outcome)?
  DENOMINATOR     for a rate: divided by what? (carts created or carts viewed? sessions or users?)
  BOUNDARIES      what's in and out? (platforms, regions, new vs all users, automated traffic)
  WINDOW          compared with what? (week over week, same week last year, vs forecast)
  SIZE            how big, and is that outside normal weekly noise?
```

Opening line: *"Before I form any hypotheses, I want to make sure I understand exactly what's being
measured."*

Why the denominator matters: if a new feature creates carts automatically, carts created rises,
orders stay flat, and the conversion rate falls. Nothing is broken. Without the question you spend
fifteen minutes investigating a ghost.

### Conflicting metrics: name the tension first

When one metric is up and another is down, say what the assumed link was, what broke, and the two
real readings — before you investigate.

> *"We assumed more notification clicks would mean more time in the app. Clicks are up but time is
> down, so users are coming in and leaving fast. Either they got what they wanted quickly, which is
> fine, or they were disappointed, which is not. Which one it is changes everything I look at."*

### Write the identity on the board

Break the metric into terms that multiply or add. The drop must live in one of them.

| Metric | Identity to write |
|---|---|
| Daily active users | DAU = new + retained + resurrected (churned users drop out) |
| Any conversion rate | rate = completions ÷ starts — say which event is each |
| Gross merchandise value | GMV = active buyers × orders per buyer × average order value |
| Gross profit (marketplace) | GP = Σ orders × (revenue per order − cost per order) |
| Gross profit (broker / trading) | GP = Σ trades × (revenue per trade − cost per trade) |
| Subscription revenue | revenue = paying users × average revenue per paying user |
| Ads revenue | users × sessions per user × ads per session × click rate × price per click |
| Time spent | users × sessions per user × minutes per session |
| Blended retention | Σ (cohort's share of new users × that cohort's retention) — watch the weights |
| Market share | our orders ÷ category orders |

Say: *"Let me write the identity so we can see which term moved."* Then ask which term moved before
asking why. The blended-retention line is the one that catches mix shifts: every cohort can be
healthy while the average falls, because the weights changed.

## 2. Hypothesis space (4–5 min)

Name the whole map in about 30 seconds, as a map. Do not ask a question per bucket.

```
  INTERNAL                                      EXTERNAL
  1. Product / UX change (release, experiment)  6. Competitor / market / platform dependency
  2. Cohort or mix (new channel, new segment)   7. Seasonality / calendar
  3. Quality or model regression                8. Macro / regulation / force majeure
  4. Infrastructure / latency / third party
  5. Measurement artifact (logging, definition, bots or agents in the denominator)
```

Say: *"There are five internal places this could come from and three external ones. Rather than check
each, let me ask a few questions about the shape of the drop to cut this down."*

## 3. Triage: the four doors (5–9 min)

Each answer eliminates several buckets at once.

| Door | Answer | Points to |
|---|---|---|
| 1. Any obvious external event at the same time? | Yes (holiday, competitor launch, outage, new law) | External bucket is live — falsify it fast before going internal |
| | No | Focus internal |
| 2. Sudden or gradual? | Sudden (a day or two, a step) | Release / experiment, infrastructure, measurement |
| | Gradual (weeks) | Cohort or mix, quality drift, seasonality, competitor |
| 3. Broad or concentrated? | Broad (all platforms, regions, users) | Product change, quality regression, measurement |
| | Concentrated (one platform, region, segment, step) | Infrastructure, client release, cohort, local competitor or regulation |
| 4. Did we change anything around then? | Yes (release, experiment, model, pipeline, pricing, promo) | Product change or measurement leads |
| | No | Cohort, quality drift, or the external track |

Commit line: *"Based on this, the most likely room is X, possibly Y. I'll start with X because
[shape reason], and I'll check [measurement / seasonality] in parallel because it's one question to
rule out."*

## 4. Investigate: "they say → you do" (9–20 min)

One room, deep. Before each question, know the fork. If two or three answers don't fit, step back.

### Product / UX change
| They say | You do |
|---|---|
| Rolled out via experiment | Compare treatment vs control. If only treatment dropped, you have it. |
| Rolled out 100% | No control — compare before/after on the exact surface, and check for a holdout |
| Drop sits on one step of the funnel | That surface is the culprit; walk what the user now sees there |
| Drop is spread downstream | Second-order effect — look for the habit the change broke |
| Power users hit harder than new users | A workflow regression → targeted fix, not a full rollback |
| Everyone hit equally | Universal friction → rollback is the fast answer |

### Cohort or mix
| They say | You do |
|---|---|
| New-user volume spiked | Split the metric by channel — dilution by low-intent users? |
| Channel mix changed | Compare each channel with its own history. Flat within channels = pure mix |
| Same channel, worse cohorts | Onboarding or early experience changed — check D1 vs D7 |
| Worse at D1 | First-impression problem. Worse at D7+ = habit problem |

### Quality or model regression
| They say | You do |
|---|---|
| Satisfaction / thumbs-down moved too | Users notice it — find what changed in the output |
| Model, prompt or ranking version changed | Line the ramp dates up with the drop |
| Concentrated in some query types, languages or regions | One capability regressed → targeted rollback or retrain |
| Users compensate (more search, more retries) | Real cost hidden in effort — check lagging churn |

### Infrastructure / latency / third party
| They say | You do |
|---|---|
| p95/p99 latency up | Averages hide tail pain — find where the slow tail sits |
| One region or data centre | Check deploys or providers in that region |
| One device or OS or app version | Client release — check the release log |
| No alerts fired | Silent degradation — a dependency may be failing in a way logged as user behaviour |

### Measurement artifact
| They say | You do |
|---|---|
| Definition, event or pipeline changed | Reconcile old vs new — the drop may be definitional |
| New surface, agent, API or bot traffic | Filter to the users the metric was built for. Drop vanishes = artifact |
| Paired metric didn't move (DAU down, messages flat) | Real behaviour is unchanged — suspect logging |
| Volume up with no matching acquisition | Bots or automation inflating a denominator |

### Competitor / market
| They say | You do |
|---|---|
| Competitor launched or discounted | Is the drop concentrated where switching is easiest (price-sensitive, short trips, one city)? |
| Platform dependency changed (app store, OS, payment partner) | Does the drop map exactly to the change window? |
| Whole category moving | Market-wide force — external cause confirmed |
| Only us | Back to the internal track |

### Seasonality
| They say | You do |
|---|---|
| Same dip in previous years | Overlay last year. Inside the normal range → document, monitor, no action |
| Bigger than the usual dip | Seasonal plus something else — investigate the excess only |

### Macro / regulation
| They say | You do |
|---|---|
| New law or platform block in one region | Confirm the drop is only there and starts on the date |
| Economic shift | Check discretionary vs essential segments |
| Cause is outside our control | Pivot to mitigation — the PM still owns the response |

**Step-back line:** *"That's the third answer that doesn't fit a product change. I'm going to step out
of this room and revisit triage — the shape now looks more like a cohort effect."*

## 5. Parallel falsify checks

One question each. Run one while you work the main room; say why.

```
  MEASUREMENT    "If I filter to the users this metric was built for, is the drop still there?"
                 "Did the paired metric move too?" (DAU down → are messages / streams down?)
  SEASONALITY    "Does the same window last year show the same dip, and by how much?"
  COMPETITOR     "Is the category moving, or only us?"
  MIX            "Within each segment, is the metric flat?"
```

## 6. Call the root cause (20–22 min)

One sentence: cause + evidence + share of the drop + confidence.

> *"I'm fairly confident the root cause is the new channel's mix: it went from 5% to 30% of new users,
> its day-7 retention is 31%, and every other channel is flat. The mix shift alone explains almost all
> of the 7-point drop."*

If it explains only part, say what's left and where you'd look next.

## 7. Resolve: the decision fork (22–28 min)

```
  Is action warranted?
  ├─ Measurement artifact      → fix the metric (definition, filter), not the product
  ├─ Seasonal, inside range    → annotate, monitor, set a re-check date — no action
  ├─ Our product, our team     → is the trade-off worth it? keep, adjust or roll back
  ├─ Another team's surface    → escalate to that owner with the evidence
  └─ External (competitor, law) → mitigation is still ours: protect the affected users
```

### The "what would you do?" upgrade

```
  1. REJECT TWO BAD PICTURES   the panic move (roll everything back, match the discount) and the
                               passive move ("it's noise, let's wait") — one line each on why not
  2. ASYMMETRY                 if I'm wrong in each direction, what does it cost, and which is
                               harder to undo?
  3. 72-HOUR ACTION            what happens by Thursday, concretely
  4. OWNER                     a named role (payments PM, growth lead, ML on-call), not "the team"
  5. REVERSAL CONDITION        "If [signal] crosses [threshold] by [date], I reverse."
```

Template: *"I wouldn't [panic move], because [cost]. I also wouldn't wait, because [cost]. The
asymmetry is that [harder-to-undo mistake]. So in the next 72 hours, [owner] will [action]. If
[signal] is still [threshold] by [date], I'll [reverse]."*

A staged rollout only counts if you say why the smaller scale removes the risk you named.

## 8. Transition lines

- "Before I form any hypotheses, I want to understand exactly what's being measured."
- "Let me write the identity so we can see which term moved."
- "There are five internal places this could come from and three external ones."
- "Let me ask a few questions about the shape of the drop to cut this down."
- "The most likely room is X. I'll start there and check Y in parallel."
- "If the answer is yes, I'll go to A. If it's no, I'll go to B."
- "That's the second answer that doesn't fit. Let me step back."
- "So I'm fairly confident the root cause is… and it explains about … of the drop."
- "Now, is this worth acting on?"
- "To summarise…"

## 9. Freeze recovery

| Freeze | What to say | What to do in your head |
|---|---|---|
| Don't know where to start | "Let me first make sure I know what's being measured." | Volume / rate / quality, then the denominator |
| Can't think of causes | "Let me lay out internal and external buckets." | Recite the 5 + 3 map |
| Too many causes, can't choose | "Let me use the shape of the drop to narrow this." | Four doors |
| Don't know the next question | "What I need to know next is whether…" | Write the fork: yes → A, no → B |
| Answers keep not fitting | "This evidence doesn't fit. Let me re-triage." | Back to the doors with the new facts |
| Found the cause, now blank | "Now, is this worth acting on, and who owns it?" | Decision fork |
| Lost the thread | "Let me quickly recap what we know." | Read the board: identity, doors, evidence |

## 10. Common point losses

- Hypothesising before defining the metric or the denominator.
- Treating a rate drop as a volume drop ("marketing stopped, so fewer people came").
- Touring every bucket with one question each instead of triaging.
- Asking the interviewer "which of these happened?" — handing the investigation back.
- Leading with competitors or the economy before checking anything internal.
- Questions with no fork: a yes and a no would lead to the same next step.
- Never asking whether it could be a measurement problem.
- Staying in a room after two or three answers that don't fit.
- Naming a cause that explains only part of the drop and stopping there.
- Ending on "I'd investigate further" or "I'd monitor it" with no owner and no threshold.
- "I'd ship to 5%" with no reason why 5% removes the risk.
