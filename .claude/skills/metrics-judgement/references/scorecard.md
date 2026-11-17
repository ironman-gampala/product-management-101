# Scorecard

Use after a mock or when reviewing a pasted answer. Be direct: the learner is deciding whether they
are ready for real loops, so a soft verdict wastes their time. Score what they did, not what they did
after a hint — note hints separately.

## 1. Weak-spot table (first)

If the learner profile lists weak spots, score each one:

| Weak spot | What happened today | Status |
|---|---|---|
| … | specific moment from the mock | 🟢 fixed / 🟡 improving / 🟠 half / 🔴 still there |

Then one line: **the big insight from today** — the single habit that caused most of the losses.

## 2. Step scores (out of 10)

Score only the steps the question used. Give each one a score, one "what landed" and one "what to fix".

### A. Define success / north star / goals

| Step | 4/10 looks like | 7/10 looks like (L4 pass) | 9/10 looks like (L5 strong) |
|---|---|---|---|
| Scope | Starts listing metrics at once | Confirms scope, states assumptions | Spots the hidden ambiguity (which vertical, which side) and narrows it with a reason |
| Mission + stage | Skipped | Mission and product's job stated | Names the lifecycle stage out loud and the metric bucket it implies |
| User map | One user type | Two lanes with key actions | All lanes incl. supply side or B2B buyer / admin / end user; says whose value the NSM must carry |
| North star | A category ("engagement") or DAU; method metric; count + rate mixed | One defined, measurable metric with a reason | Compares 2–3 candidates with criteria, rejects with reasons, lands on one outcome metric that survives a solution change, scoped honestly, defended out loud |
| Guardrails + tree | NSM flipped, or none | Two guardrails that could plausibly worsen | Guardrails that worsen while the NSM rises, supporting metrics kept separate, one second-order effect named unprompted |
| Goals | "Increase X" | Number and date | Baseline, reference, commit vs stretch, leading signal, counter-goal |
| Follow-up / conflicting metrics | Lists both sides, no call | Picks a side, vague monitoring | Checks it's real, names the tension fairly, applies asymmetry, commits with a reversal threshold |
| Communication | Monologue, filler, "so yeah" | Clear, mostly signposted | Reasoning audible at every transition, checks in, crisp close |

### B. A/B test design and ship decision

| Step | 4/10 looks like | 7/10 looks like (L4 pass) | 9/10 looks like (L5 strong) |
|---|---|---|---|
| Hypothesis | "I think it will improve things" | Prediction with a metric | Prediction + "because" from an observed behaviour + what would prove it wrong |
| Methodology | "50/50, all users, a few days" | Control defined, user-level split, 2+ weeks | Unit of randomisation justified (incl. spillover), population and exclusions, minimum lift worth shipping, duration in whole weeks |
| Metrics | Clicks or ratings as primary; no guardrails | Behavioural primary + a guardrail | Primary tied to hypothesis, 2 real guardrails with thresholds, names what could mislead (novelty, SRM, mix shift) |
| Ship rule | Decides after seeing data | Ship if primary up | Pre-stated rule for win, loss and mixed |
| Tradeoffs | None | Generic list | The one blind spot that matters for this test (incl. offline/online gap for AI) |
| Result and call | "It depends" / "ship to 5% and monitor" | A call with a reason | Reads the result critically, commits, names what is given up, rollout steps and a reversal threshold |
| Communication | Monologue, filler | Clear, mostly signposted | Drives the room, flags assumptions, crisp close |

## 3. Overall level read

| Overall | Read |
|---|---|
| ≤ 5 | Below PM2 bar. Interviewer had to drive, or no metric was landed. |
| 6 | Borderline L4. Reasonable metric with prompting; guardrails or ship call weak. |
| 7 | L4 / PM2 pass. Runs the route alone, one defended metric, some thin judgement. |
| 8 | Strong L4, borderline L5. Candidates compared, real guardrails, a committed call. |
| 9+ | L5 / Senior pass. Names the conflicting signal before being asked, specific thresholds, reversal condition, drives the room. |

State the verdict for each target level the learner is interviewing for, with a direct pass or fail
and one sentence of reason each (e.g. "PM2: pass, just. Senior PM: no — the north star counts the
feature, not the user's outcome, and there was no reversal threshold.").

## 4. Fix the weakest step

Write the model turn for the weakest step only, spoken, first person, full sentences — so they leave
with one thing to rehearse rather than a pile of notes.

## 5. Drill plan

Three short daily drills, each mapped to a mistake from today. Defaults:
- **North star in 90 seconds:** any app → stage → three candidates → pick one and reject two out loud.
- **Guardrail generator:** take any north star → "what could I break?" → two guardrails, neither the
  NSM flipped.
- **Ship call in 60 seconds:** take a result card → call → what you give up → reversal threshold.
- **Metric definition:** rewrite one vague metric a day as who / what / window.

## 6. Log it

If `my-profile/` exists, log the session in `my-profile/daily-practice/`: a new day file plus updates to
`daily-practice.md` (see SKILL.md → Learner profile). With an older single `My Profile.md`, append a mock log row: date | question | type | score | key notes.
If it doesn't, offer once to create it by copying the `my-profile-template/` folder to `my-profile/`.
