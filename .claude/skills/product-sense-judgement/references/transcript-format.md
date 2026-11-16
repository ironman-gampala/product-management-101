# Model answer: spoken transcript format

The learner rehearses these by reading them aloud, so the transcript must sound like a real round:
natural speech, full sentences, the candidate driving, the interviewer probing. Avoid tables inside
the transcript — tables are for coach notes and scorecards, not for speech.

## Page shape

```
# Mock Interview Transcript
**Question:** …
**Type:** Product Sense — design / improve (B2B or consumer)
**Length:** about 30 minutes

*— Opening —*
*— Clarify —*
*— Strategy —*
*— Users —*
*— Pain points —*
*— Solutions —*
*— MVP —*
*— Metrics —*
*— Close —*

## 60-second summary
```

Use the step tags so the learner can skim back to a stage.

## Rules

- **Interviewer** answers clarifiers with concrete, plausible facts (open rate 2%, 55% permission,
  ₹550 average cart). Invented numbers are fine; vague ones are not.
- **Candidate** asks clarifiers in one batch, states assumptions, asks for 30 seconds to structure,
  and says the plan out loud before starting.
- Key calls appear as `*[Writes on board: …]*` — the north star, the user pick, the problem
  statement, the solution pick, the v1 cut, the reversal line.
- The interviewer probes **at least twice**, for example:
  - steelman a rejected option ("Isn't the commuter the bigger group?")
  - challenge the metric ("Why not just open rate?")
  - challenge a cost ("Turning that off will drop daily users. Defend it.")
  - stress a dependency ("What if the partners block your data?")
- The candidate defends on the merits, concedes what is true, and keeps the decision.
- Candidate turns are short spoken paragraphs (2–5 sentences) or a few full-sentence bullets when
  listing. No fragments, no "Trap:/Truth:" shorthand.
- Every step ends in a decision + reason + reject (see SKILL.md judgement rules).
- End with the interviewer closing the round and the candidate's one-line final thought.

## Example excerpt (shape only — do not reuse the content)

```
*— Users —*

**Candidate:** Let me split users by why they're driving and how often. I see four groups.
One, the daily office commuter, who drives to the same office every day. Two, the leisure
visitor, who drives on weekends to a restaurant or mall, often somewhere new. Three, the quick
errand runner, often on a two-wheeler. Four, the event goer, a few times a year.

I'll focus on the leisure visitor going somewhere unfamiliar, for two reasons. They have no
local knowledge to fall back on, which is exactly where Maps can help most. And it's a very large
group — every weekend millions of people drive out in big Indian cities.

I'm not picking the commuter, even though they drive more often. After the first week they learn
where to park, so their problem mostly solves itself.

*[Writes on board: Pick = leisure visitor, unfamiliar area. Not the commuter — problem solves itself]*

**Interviewer:** Event goers have far worse parking pain. Why not them?

**Candidate:** I agree the pain is worse. But it happens a few times a year, and fixing it needs a
deal with each venue. I'd rather build the habit with a weekly user first, and bring event goers in
later through venue partnerships.
```

## After the transcript

Optional short table "What to copy" (move → why it scores) and the 60-second spoken summary in
first person.
