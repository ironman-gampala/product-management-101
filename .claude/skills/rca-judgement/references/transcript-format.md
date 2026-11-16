# Model answer: spoken transcript format

The learner rehearses these by reading them aloud, so the transcript must sound like a real RCA round:
the candidate drives, asks for data, and reasons out loud; the interviewer behaves like an analyst who
knows the answer and only says what is asked. Avoid tables inside the transcript — tables are for coach
notes and scorecards, not for speech.

## Page shape

```
# Mock Interview Transcript
**Question:** …
**Type:** Analytical — root cause (volume / rate / quality drop, or conflicting metrics)
**Length:** about 25–30 minutes

*— Opening —*
*— Define —*
*— Hypotheses —*
*— Triage —*
*— Investigate —*
*— Curveball —*
*— Root cause —*
*— Decision —*
*— Close —*

## 60-second summary
```

Use the step tags so the learner can skim back to a stage.

## Rules

- **Decide the ground truth before writing.** Pick it from `scenario-bank.md` if the prompt matches, or
  build one privately in the same shape. Every number the interviewer gives must fit it.
- **Interviewer** gives data only in response to a question, with concrete numbers (42% → 34%, p95
  from 4 to 19 seconds). Sometimes the honest answer is "we don't have that" or "which area?". The
  interviewer never confirms a hypothesis directly — they report what the data shows.
- **Candidate** batches the define questions, writes the identity, names the 5 + 3 map in about
  30 seconds, asks the four doors, then picks one room and says why. In the investigate step they ask
  one or two questions at a time and say the fork out loud ("If yes, I'll…; if no, I'll…").
- The candidate runs at least one **parallel falsify check** (measurement or seasonality) and says why.
- Key calls appear as `*[Writes on board: …]*` — the identity, the tension (if two metrics), the triage
  result and the room picked, the evidence, the root cause with its share of the drop, and the decision
  with owner and reversal line.
- The interviewer probes **at least twice**, and one probe is a **curveball data point**:
  - a new fact that moves the cause ("It's only Android." / "Two-thirds of it is one channel.")
  - a fact that creates a tension ("Reactions are up 60%, so total interactions are up.")
  - a pressure move ("Your GM wants to match the discount tomorrow. Do you?")
  - "So what would you do?"
- The candidate treats the curveball as new evidence: says what it changes, re-triages if needed,
  and keeps or updates the call on the merits.
- Show one **step-back** moment when it fits the scenario (two answers that don't fit, then re-triage).
- End the investigation with the root cause **sized** ("explains about 7 of the 8 points").
- The decision rejects two bad pictures, names the asymmetry, gives a 72-hour action, an owner and a
  reversal condition with a number.
- Candidate turns are short spoken paragraphs (2–5 sentences) or a few full-sentence bullets when
  listing. No fragments, no shorthand.
- End with the interviewer closing the round and the candidate's one-line final thought.

## Example excerpt (shape only — do not reuse the content)

```
*— Triage —*

**Candidate:** Rather than check each bucket, let me ask about the shape of the drop. Was it sudden
or gradual? And is it across all creators, or concentrated somewhere?

**Interviewer:** Gradual, over about five weeks. And it's concentrated in creators who joined in the
last two months. Longer-tenured creators are flat.

**Candidate:** That's helpful. Gradual and concentrated in new creators points to a cohort effect, not
a release — a bad release would hit everyone at once. So my most likely room is cohort or mix. In
parallel I'll do one quick check on measurement, because it's one question: did the upload event or
its definition change in the last two months?

**Interviewer:** No changes to the event.

*[Writes on board: Gradual + new creators only → cohort/mix. Measurement ruled out.]*

**Candidate:** Then my next question is whether new-creator volume or channel changed. If a new
channel brought in a lot of creators, I'd expect each channel to look normal on its own. If the
channels are the same, then something in their first weeks got worse, and I'd look at onboarding.
```

## After the transcript

Optional short table "What to copy" (move → why it scores) and the 60-second spoken summary in
first person: the drop, the root cause and its size, the decision, the owner, the reversal line.
