# Scorecard

Use after a mock, a deep dive, or when reviewing a pasted story. Be direct: the learner is deciding
whether they are ready for real loops, so a soft verdict wastes their time. Score what they said, not
what they said after a hint — note hints separately. Score the story they told, not the story you
suspect they could tell.

## 1. Weak-spot table (first)

If the learner profile lists weak spots, score each one:

| Weak spot | What happened today | Status |
|---|---|---|
| … | specific moment from the answer | 🟢 fixed / 🟡 improving / 🟠 half / 🔴 still there |

Then one line: **the big insight from today** — the single habit that caused most of the losses.

## 2. Per-story scores (out of 10)

Score every story told (in a mock, each question is one story). Give each dimension a score, one
"what landed" and one "what to fix".

| Dimension | 4/10 looks like | 7/10 looks like (L4 pass) | 9/10 looks like (L5 strong) |
|---|---|---|---|
| **STAR+ completeness** | Situation and a vague outcome; no task, no reflection | All five beats present; reflection is a lesson | Headline first, stakes clear, every beat earns its time, reflection is a transferable insight |
| **Ownership ("I")** | "We" throughout; can't say what they did when asked | Mostly "I"; personal actions clear | Clear line between own calls and team work; problem was found, not just assigned |
| **Quantified result** | No number, or "it went well" / "stakeholders were happy" | One metric with a direction | Baseline → result → time frame, plus scale and a second-order change (process adopted, funding) |
| **Judgement and trade-off** | Activities, no decision; no named stakeholder or tension | One decision with a reason; a named stakeholder and a real disagreement | Key decision + rejected alternative + what it cost; names what the other side was protecting and how trust was kept |
| **Level signal** | Feature-level story, handed down, for a senior role | Problem-level scope owned end to end (L4) | Team roadmap or cross-team scope, shaped direction, ~40% strategy (L5); org-level for L6 |
| **Delivery** | Over 3 minutes or under 45 seconds; long situation; scripted or rambling; weak ending | About 2 minutes, clear order, ends on the result | Calm and conversational, transition lines, one unscripted detail, lands the closing line |

**Deep-dive rounds** add three rows:

| Dimension | 4/10 | 7/10 | 9/10 |
|---|---|---|---|
| **Problem origin and insight** | "We were asked to build it" | Clear user problem with evidence | Found or reframed the problem; a specific insight others missed |
| **Measurement** | "Engagement went up" | Metric with baseline and result | Baseline, target, causal test, guardrail watched, honest about what wasn't measured |
| **Depth under follow-ups** | Vaguer with each layer; numbers change | Holds up 2–3 layers | Holds up 4–5 layers; concedes fair points and keeps the decision |

**Intro mode** scores: length (60–90 s), level anchor in line one, a number per project,
company-specific line, clean invitation at the end.

## 3. Overall level read

| Overall | Read | Interviewer rubric equivalent |
|---|---|---|
| ≤ 5 | Below PM2 bar. Interviewer had to drag out what they did. | Strong No Hire / No Hire |
| 6 | Borderline L4. Real work, but flat or "we"-heavy. | No Hire |
| 7 | L4 / PM2 pass. Clear ownership and a number; thin judgement. | Hire at L4 |
| 8 | Strong L4, borderline L5. Decision + alternative most of the time. | Hire at L4, lean Hire at L5 |
| 9+ | L5 / Senior pass. Team-level scope, real tension, insight at the close. | Hire / Strong Hire at L5 |

The repo's interviewer rubric (`Leadership & Drive/Rubric for Leadership and Drive Interviews.md`,
if present) scores scope, stakeholder management, ownership, communication and passion on a
Strong No Hire → Strong Hire scale. The six dimensions above cover the same ground: scope = level
signal; stakeholders = judgement and trade-off; communication and passion = delivery + STAR+.

**State the verdict for each target level** the learner is interviewing for, with the reason in one
sentence each (e.g. "PM2: lean hire — clear ownership, but no alternative. Senior PM: no hire — the
scope is one feature and the conflict has no named person."). If the story itself is fine but the
scope is below the target level, say so plainly: better telling won't fix it, a bigger story will.

## 4. Rewrite one story

Rewrite the weakest story as a **spoken model version**: first person, full sentences, about two
minutes, STAR+ beats in order, headline first, closing on change.

- Use only the learner's facts. Put every missing fact in `[brackets]` — `[the baseline]`, `[the
  eng lead's concern]`, `[what you cut]` — never a made-up number or event.
- Under the rewrite, list the bracketed gaps as questions for them to answer, then offer to finish
  the story and save it to `My Stories.md`.
- If you need to show what a strong version sounds like before they've given the facts, label it on
  its own line: **Fictional example — for shape only, not your story.**

## 5. Drill plan

Three short daily drills, each tied to a specific mistake from today. Defaults:
- **"I" rewrite:** take one story, say it out loud replacing every "we" with what you personally did.
- **Decision in 30 seconds:** for each story, say "The real decision was between A and B. I chose A
  because… It cost us…" out loud.
- **Number hunt:** for each story, write baseline → result → time frame; find the real number if you
  don't know it.
- **Headline first:** say only the opening line of five stories in a row, 10 seconds each.
- **Closing on change:** for each story, say one sentence on what changed beyond the metric and one
  on what you'd do differently.
- **Follow-up ladder:** have someone ask the 10 common follow-ups (impact, what did you do, why that
  approach, why not the alternative, trade-offs, what if it failed, how measured, how you knew,
  stakeholders, what differently) on one story.
- **Level audit:** for each story, write the scope (feature / problem / team / org) and whether you
  found or were given the problem.

## 6. Log it

If `my-profile/` exists, log the session in `my-profile/daily-practice/`: a new day file plus updates to
`daily-practice.md` (see SKILL.md → Learner profile). With an older single `My Profile.md`, append a mock log row:
date | question | type (Behavioural / Deep dive / Intro) | score | key notes. If a story was improved, offer to update it in `My Stories.md`.
