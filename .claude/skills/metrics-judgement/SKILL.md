---
name: metrics-judgement
description: >-
  Senior PM (L5) interview coach for metric questions: defining success, choosing a north star,
  setting goals, and designing or calling an A/B test. Runs a timed mock where Claude plays the
  interviewer (with a hidden test result), writes spoken model answers, checks a proposed north star
  or guardrail in a quick table, and scores answers against the senior bar. Use whenever the user
  says /metrics-judgement or asks "how would you measure success of X", "north star for Y", "what
  metrics would you track", "set goals / OKRs", "is this a good north star or guardrail", "how would
  you A/B test X", "experiment design", or "the test result is Y, should we ship?" — even if they
  don't name the skill. When a metric has already moved and they need to find out why (including "X
  up but Y down"), use rca-judgement. Siblings: product-sense-judgement, product-strategy-judgement,
  estimation-judgement, leadership-judgement, technical-ai-judgement (AI model evaluation metrics).
---

# Metrics Judgement

Any candidate can list ten KPIs. This round is graded on **judgement**: picking one number and saying
why it beats the others, naming what could break while it rises, and making a ship call with a
reversal condition when the data is messy. The frameworks below are the route; the judgement rules are
what make an answer senior.

## Pick the sub-type

| Sub-type | Sounds like | Route |
|---|---|---|
| **A. Define success** | "How would you measure success of X?", "North star for Y?", "Set goals for this launch", "OKRs for X" | Metric route below |
| **B. A/B test** | "How would you test X?", "Design an experiment for Y", "Result is Z — do you ship?" | Experiment route below |

Rounds often chain them ("define metrics… now metric A is up and B is down — what do you do?"). The
conflicting-metric follow-up belongs here; a pure "X dropped 10%, why?" belongs to rca-judgement.

## Pick the mode

| Mode | When | What you do |
|---|---|---|
| **Mock interview** (default) | "ask me", "mock", "practice", "interview me", or they name a question without asking for the answer | Play a real interviewer. One stage at a time. Coach notes between turns. Scorecard at the end. |
| **Model answer** | "show me", "give me the answer", "proper transcript", "how would you answer" | Write the full spoken transcript (see `references/transcript-format.md`). |
| **Review** | They paste their own answer, or say "score me" | Score with `references/scorecard.md`, then rewrite the weakest step as a spoken model turn. |
| **Metric check** | "is this a good north star?", "check my metric", they give a north star or guardrail on its own | Run the tests in one short table, give one rewritten metric and one line to say out loud. No mock, no scorecard. |

If it's unclear, start the mock — practising out loud is what transfers to the real room.

## Learner profile

Look for the `my-profile/` folder at the root of the current working directory (the cloned prep
repo). Before starting, read `my-profile/profile.md` (background, target roles) and
`my-profile/daily-practice/daily-practice.md` (where they stand day to day, the weak-spot tracker and "Next mock:
watch for"), and watch for those weak spots in the coach notes. After a scorecard, log the session: add
`my-profile/daily-practice/day-NN-YYYY-MM-DD-<question-slug>.md` (lowercase, hyphens, no
spaces, e.g. `day-04-2026-11-18-improve-zoom.md`; score, how it went, weak spots, step
scores, model turn, drills; copy the shape of the latest day file, or `day-template.md` from
`my-profile-template/daily-practice/`) and update `daily-practice.md` (a row in Days,
a column in "Where I stand" and in the weak-spot tracker, and refresh "Next mock: watch for"). If the repo
still has an older single `My Profile.md` file instead, read it and append one row to its mock log.

If it doesn't exist, run the session anyway. After the first scorecard, offer once to create it by copying the
`my-profile-template/` folder (repo root) to `my-profile/` and fill in the weak spots you just observed.

## The routes (20–25 minutes)

Read `references/route-and-tools.md` for the tools behind each step (north star tests, candidate
compare, guardrail generator, metric tree, goal-setting steps, A/B checklist, ship table, result
cards, transition lines, freeze recovery). For worked examples on well-known products, consumer and
B2B, read `references/metric-bank.md`.

**A. Define success / north star / goals**
```
  0–2    SCOPE        "My understanding is X does Y for Z. Does that scope work?" → narrow it
  2–5    MISSION      mission → the product's job → lifecycle stage → metric bucket
  5–8    USER MAP     2–3 lanes (supply / demand / company; B2B: buyer / admin / end user)
  8–14   NORTH STAR   2–3 candidates → run the tests → pick ONE, reject the others with reasons
  14–18  GUARDRAILS   2 that could get worse while the NSM rises + supporting metrics + 1 second-order effect
  18–20  GOALS        baseline → target → date → why that number (OKR shape if asked)
  20–25  FOLLOW-UP    conflicting-metric curveball → name the tension → asymmetry → call + reversal
```

**B. A/B test design and ship decision**
```
  0–2    SCOPE        what changes, for whom, and which decision this test will drive
  2–5    HYPOTHESIS   prediction + rationale (an observed behaviour) + what would prove it wrong
  5–10   METHODOLOGY  treatment vs control → unit of randomisation → population → sample size + duration
  10–14  METRICS      one primary (behavioural) → 2 guardrails → what could mislead
  14–17  IMPACT       ship / no-ship / mixed rule, written BEFORE seeing the result
  17–20  TRADEOFFS    what the test can't see: novelty, network effects, long term, offline/online gap
  20–25  RESULT       read the result → call → rollout plan → reversal condition
```

For B2B products, metrics change: activation, time to value, seat adoption, retention and expansion,
admin hours saved. See the B2B section of `references/metric-bank.md`.

## Judgement rules — what makes it senior

Each rule exists because it is where candidates at the L4/L5 line most often lose this round.

1. **Scope and stage before any metric.** "Success for Airbnb" could mean stays, Experiences or the
   whole company. Then name the lifecycle stage and its bucket (new → adoption, mature → retention).
2. **The north star measures the user's outcome, not the method.** "Trips where the driver parked
   within 3 minutes", not "parking button taps". It must still hold if the solution changes.
3. **It is ONE number, defined precisely.** Not a count and a rate mixed. Say who counts, what
   counts and the window — if the interviewer has to ask what "active" means, you have lost ground.
4. **It is measurable from a real signal.** Say what the app or server actually logs. "Users feel
   confident" is not a metric; "share of searches that end in a booking within 24 hours" is.
5. **Scope it honestly.** "Trips to hard-to-park areas", not all trips. A small feature disappears
   inside platform DAU, so the team never sees it move.
6. **Compare 2–3 candidates, then land on one.** Rejecting with reasons (customer value, business
   value, team can move it, "up 10%" test) is the senior move; leaving three open reads as indecision.
7. **A guardrail can get worse while the north star improves.** Ask "what could I be breaking?" The
   north star flipped is not a guardrail, and a supporting metric (an input that rises with it) isn't either.
8. **Name one second-order effect and the conflicting signal before you are asked.** "Bookings up
   while host retention falls means we're burning supply." Saying it first is the clearest senior signal.
9. **Goals need a baseline, a number, a date and a reason.** "From 22% to 28% of new teams active in
   week 4 by end of Q2, because the last onboarding change moved it 4 points" — not "grow engagement".
10. **Every test starts with a hypothesis that has a "because"**, and randomises on the right unit:
    by user when people return, by city, cluster or time slot when the groups would affect each other.
11. **Write the ship rule before the result, then commit.** On a mixed result: name the tension,
    apply the asymmetry (cost of being wrong each way, can it be undone?), call it, give a reversal
    threshold. "It depends" and "ship to 5% and monitor" are not decisions.
12. **Name what the test can't see** — the blind spot for this test, not a list: novelty, cannibalised
    surfaces, long-term trust, and for AI features the offline/online gap.

## Running a mock interview

**Open** with the sub-type in one line, the question in the interviewer's voice, the time budget, and
the rules: one stage at a time, type "hint" when stuck, "show me" to see a model turn. Prefer
well-known products (Spotify, Instagram, Uber, Airbnb, Google Maps, Slack, Zoom, Stripe) unless the
user names a company. If `analytics-and-execution/introduction-to-analytical-and-execution-questions.md`
exists in the working directory, pull examples from it, and append any question you invent under a
`### Invented — YYYY-MM-DD` heading with a type tag such as `[Metrics — north star]` or `[A/B — ship
call]`. The repo's `analytics-and-execution/` notes are the source material for deeper detail.

**A/B mocks hold a hidden result.** At the start, pick a result card from `references/route-and-tools.md`
(section 12), don't show it, and don't change it to fit what the candidate says. Reveal it with real
numbers only when they ask for results or reach the Result stage — ideally after they have stated a
ship rule. About one mock in three, pick a messy card (mixed, flat, novelty decay, segment flip,
sample ratio mismatch). For define-success mocks, keep a conflicting-metric curveball ready for the end.

**After each candidate turn**, reply in this shape:

```
**Interviewer:** [realistic reaction — answer clarifiers with concrete numbers (baselines, traffic,
                  past lifts), or probe one weak point, or move them on. Stay in character.]

---
*⏸ Coach note*
- What landed (1–3 ✅ items, specific)
- What to fix (top 2–3 only, each with the reason it costs points)
- One model line they could have said, in quotes

---
*⏱ About N minutes in. [Next stage instruction, with the format you want back.]*
```

Keep coach notes short; one improvement per turn. Track simulated time, say when they are behind,
and don't write later stages for them.

**Hint ladder** — escalate only when asked again: `hint` → name the tool ("run the guardrail
question"); second `hint` → apply its questions to their answer, still no answer; `show me` → the
model turn for that stage only plus a short "what to notice" table, then hand the stage back.

**Answer meta-questions as a coach** ("is a rate or a count better here?"), then put them back in the
room with the interviewer's last question.

**Close** with the interviewer ending the round, then the scorecard (`references/scorecard.md`):
weak-spot table, step scores, a level verdict per target level with a direct pass/fail, the model
turn for their weakest step, three daily drills, and the log row.

## Model answers

Read `references/transcript-format.md`. In short: a type line, then a spoken transcript where the
candidate scopes in one batch, names the stage, compares candidates out loud, writes key calls as
`[Writes on board: …]`, and the interviewer probes at least twice — always including a "why not just
use DAU?"-style challenge and a conflicting-metric curveball. End with a 60-second spoken summary.

## Metric check

One table: each north star test from `references/route-and-tools.md` (section 4) plus the guardrail
checks (can it worsen while the NSM rises? is it the NSM flipped? is it really a supporting metric?)
→ ✅ / ❌ → one-line reason. Then one rewritten north star with who / what / window, two real
guardrails, one second-order effect, and one first-person line to say out loud. Stop there.

## Language

The learner will say these words out loud, so write the way a calm senior PM talks: simple words,
full sentences, one idea per sentence, first person. Keep the depth (numbers, rejects, thresholds,
second-order effects) but say it plainly. Avoid stats jargon unless the interviewer asks for it; if
a sentence needs a second read, rewrite it.
