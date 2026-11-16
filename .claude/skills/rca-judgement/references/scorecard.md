# Scorecard

Use after a mock or when reviewing a pasted answer. Be direct: the learner is deciding whether they
are ready for real loops, so a soft verdict wastes their time. Score what they did, not what they
did after a hint — note hints separately. In a mock, reveal the hidden root cause before scoring.

## 1. Weak-spot table (first)

If the learner profile lists weak spots, score each one:

| Weak spot | What happened today | Status |
|---|---|---|
| … | specific moment from the mock | 🟢 fixed / 🟡 improving / 🟠 half / 🔴 still there |

Then one line: **the big insight from today** — the single habit that caused most of the losses.

## 2. Step scores (out of 10)

| Step | 4/10 looks like | 7/10 looks like (L4 pass) | 9/10 looks like (L5 strong) |
|---|---|---|---|
| Define | Jumps to causes; never asks what's measured | Volume vs rate, denominator asked, window stated | Identity on the board; finds hidden structure (denominator, boundaries); names the tension when two metrics disagree, with both readings real |
| Hypothesis map | Three random guesses, all internal (or leads with competitors) | Internal and external buckets named | Full 5 + 3 map in 30 seconds incl. measurement artifact and AI-specific failure modes, said as a map not a tour |
| Triage | Tours every bucket with one question each | Asks sudden/gradual and broad/concentrated before going deep | All four doors, and says what each answer eliminated; commits to one room with a shape reason |
| Investigate | Random questions; yes and no lead to the same place | Stays in one room; questions narrow it | Every question has a stated fork; uses the curveball as evidence; steps back out loud when 2–3 answers don't fit |
| Falsify check | Never considers measurement or seasonality | Checks one when prompted | Runs a parallel measurement or seasonality check unprompted and says why it's cheap |
| Root cause call | Names the first plausible cause | States a cause with evidence | One sentence: cause + evidence + share of the drop + confidence; says what's left unexplained |
| Decision | "I'd investigate further" / "I'd monitor it" | Clear call, owner, one guardrail | Rejects two bad pictures, names the asymmetry, 72-hour action, owner, reversal condition with a number |
| Communication | Monologue; interviewer has to drag them | Clear, signposted at most steps | Board kept current; transitions said out loud; treats the interviewer as a partner; crisp 30-second summary |

Give each step a score, one "what landed" and one "what to fix".

These map onto the repo rubric: Define + Map + Triage + Investigate + Falsify = **Investigation
skills**; Define (identity, tension) = **Metric judgement**; Decision = **Execution**; Communication =
**Communication & collaboration**; the quality of their questions across all steps = **Curiosity**.

## 3. Overall level read

| Overall | Read |
|---|---|
| ≤ 5 | Below PM2 bar. Guessed causes or toured buckets; interviewer had to drive. |
| 6 | Borderline L4. Structure is there with prompts; decision thin. |
| 7 | L4 / PM2 pass. Defines, triages, finds the room alone; decision has an owner. |
| 8 | Strong L4, borderline L5. Forks and step-back present; decision lacks a threshold or the asymmetry. |
| 9+ | L5 / Senior pass. Drives the room, sizes the cause, commits with asymmetry and a reversal number. |

State the verdict for each target level the learner is interviewing for (e.g. "PM2: lean hire.
Senior: no hire."), with the reason in one sentence each. Whether they found the true root cause
matters less than how they reasoned — say so if they reasoned well but ran out of time, or found it
by luck.

## 4. Fix the weakest step

Write the model turn for the weakest step only (spoken, full sentences, first person), using the same
scenario, so they leave with one thing to rehearse rather than a pile of notes.

## 5. Drill plan

Three short daily drills, each mapped to a weak spot. Pick from these defaults or write your own:
- **Denominator in 30 seconds:** any metric headline → say volume / rate / quality, the denominator,
  and the identity out loud.
- **Four doors:** any drop → ask the four doors, then say "most likely room is X because…" in 60 seconds.
- **Fork before you ask:** write five investigation questions; next to each, what yes and no would
  make you do. Delete any with the same next step.
- **72-hour close:** any root cause → reject two bad pictures, asymmetry, action, owner, reversal
  number in 90 seconds.

## 6. Log it

If `My Profile.md` exists, append a mock log row: date | question | type | score | key notes.
