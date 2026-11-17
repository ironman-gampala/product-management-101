# Scorecard

Use after a mock or when reviewing a pasted answer. Be direct: the learner is deciding whether they
are ready for real loops, so a soft verdict wastes their time. Score what they did, not what they
did after a hint — note hints separately.

**Before scoring a pasted answer, re-run every line of their arithmetic.** Show the corrected line
for any slip ("8M × ₹2,500 × 12 = ₹24,000 crore, not ₹2,400 crore"). Unit and lakh/crore slips are
common and often hide a bad assumption: the wrong math lands near reality by accident. Then list
each assumption they used without saying it.

## 1. Weak-spot table (first)

If the learner profile lists weak spots, score each one:

| Weak spot | What happened today | Status |
|---|---|---|
| … | specific moment from the mock | 🟢 fixed / 🟡 improving / 🟠 half / 🔴 still there |

Then one line: **the big insight from today** — the single habit that caused most of the losses.

## 2. Step scores (out of 10)

| Step | 4/10 looks like | 7/10 looks like (L4 pass) | 9/10 looks like (L5 strong) |
|---|---|---|---|
| Scope | Jumps straight to numbers; unit or period unclear | 1–3 batched questions; unit, place and period stated | Questions that genuinely change the number; says what is left out and why |
| Anchor + approach | Starting number from nowhere | A known anchor, top-down or bottom-up chosen | Says why this anchor over another and why this direction; keeps the other side for the check |
| Break down | Prose arithmetic or one big multiplication | Equation plus a tree to estimable leaves | Clean ASCII tree, segments where behaviour differs, nothing needlessly complicated |
| Assumptions | Silent or unexplained numbers | Most leaves named with a reason | Every leaf named with a reason; bias of personal references called out |
| Math | Unrounded, slow, or a 10x slip | Correct, rounded, units on each line | Quick and clean; rounding chosen to cancel errors; converts lakh/crore once at the end |
| Sanity check | None, or "feels right" only | Gut check plus one reframe | Independent second method (other side, per-unit, known company) and reconciles any gap |
| Sensitivity + challenge | Point answer; caves or digs in when pushed | Gives a range; recomputes when challenged | Names the most sensitive leaf before being asked; recomputes on the board and says if the conclusion changes |
| So what | Ends on the number | One line on what it means | Ties the number to a specific decision and what would change it |
| Communication | Silent math, filler, interviewer drives | Signposted, mostly clear | Calm, checks in, transition lines, crisp 30-second close |

Give each step a score, one "what landed" and one "what to fix".

The repo's rubric (`Analytics & Execution/Estimation - Rubric.md`) grades six dimensions. Map them
when the learner asks: **problem-solving** = scope + anchor + break down; **comfort with numbers** =
math; **identifying errors** = sanity check + sensitivity; **communication**; **collaboration** =
checks in and uses the interviewer's facts; **creativity** = a clever proxy or second method.

## 3. Overall level read

| Overall | Read |
|---|---|
| ≤ 5 | Below PM2 bar. Numbers from nowhere, or the interviewer had to drive. |
| 6 | Borderline L4. Structure is there with prompts; sanity check or assumptions thin. |
| 7 | L4 / PM2 pass. Anchor, tree, clean math and a sanity check, mostly unprompted. |
| 8 | Strong L4, borderline L5. Second-method check, a range, handles the challenge. |
| 9+ | L5 / Senior pass. Sensitivity named unprompted, tight assumptions, a sharp "so what". |

State the verdict for each target level the learner is interviewing for (e.g. "PM2: lean reject.
Senior: reject."), with the reason in one sentence each.

## 4. Fix the weakest step

Write the model turn for the weakest step only, spoken in first person and full sentences, with the
board note (ASCII tree or math lines) where the step needs one. They should leave with one thing to
rehearse, not a pile of notes.

## 5. Drill plan

Three short daily drills, each mapped to a mistake from today. Defaults:
- **Anchor flash (60 seconds):** say ten anchors from memory, then check against
  `route-and-tools.md` section 2.
- **Tree in 90 seconds:** any "how many X" → equation and ASCII tree to the leaves, no numbers yet.
- **Two-method check:** re-solve yesterday's question from the other side and compare.
- **Crore drill:** five multiplications a day in millions, converted once to lakh or crore.
- **So-what line:** for any number in the news, say one decision it would change.

## 6. Log it

If `my-profile/` exists, log the session in `my-profile/daily-practice/`: a new day file plus updates to
`daily-practice.md` (see SKILL.md → Learner profile). With an older single `My Profile.md`, append a mock log row: date | question | type | score | key notes.
