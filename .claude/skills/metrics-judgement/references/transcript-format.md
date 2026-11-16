# Model answer: spoken transcript format

The learner rehearses these by reading them aloud, so the transcript must sound like a real round:
natural speech, full sentences, the candidate driving, the interviewer probing. Avoid tables inside
the transcript — tables are for coach notes and scorecards, not for speech.

## Page shape — define success / north star / goals

```
# Mock Interview Transcript
**Question:** …
**Type:** Analytical / Execution — define success (consumer or B2B)
**Length:** about 25 minutes

*— Opening —*
*— Scope —*
*— Mission and stage —*
*— User map —*
*— North star —*
*— Guardrails and metric tree —*
*— Goals —*            (when the question asks for goals or OKRs)
*— Conflicting-metric follow-up —*
*— Close —*

## 60-second summary
```

## Page shape — A/B test

```
# Mock Interview Transcript
**Question:** …
**Type:** Analytical / Execution — A/B test design and ship call
**Length:** about 25 minutes

*— Opening —*
*— Scope —*
*— Hypothesis —*
*— Methodology —*
*— Metrics —*
*— Ship rule —*
*— Tradeoffs —*
*— Result and call —*
*— Close —*

## 60-second summary
```

Use the step tags so the learner can skim back to a stage.

## Rules

- **Interviewer** answers clarifiers with concrete, plausible facts (2 million daily searchers, 3.1%
  search-to-book rate, last onboarding change moved activation 4 points). Invented numbers are fine;
  vague ones are not.
- **Candidate** asks clarifiers in one batch, states assumptions, asks for 30 seconds to structure,
  and says the plan out loud before starting.
- Key calls appear as `*[Writes on board: …]*` — the scope, the stage and bucket, the north star with
  its definition, the rejected candidates, the guardrails, the ship rule, the final call and the
  reversal threshold.
- The interviewer probes **at least twice**, and always includes:
  - a lazy-metric challenge: "Why not just use DAU?" (or revenue, or clicks), and
  - a **conflicting-metric curveball**: "Your north star is up 8% but [guardrail or another team's
    metric] is down 5%. What do you do?" For A/B transcripts, the revealed result can be the curveball.
  Other good probes: "Your guardrail is just the north star flipped, isn't it?", "Why randomise by
  user and not by session?", "Leadership wants it live on Friday — two weeks is too long", "The result
  is +2% but not significant. Ship?"
- The candidate defends on the merits, concedes what is true, and keeps the decision. When pushed on
  the north star, they don't swap it — they name what it misses and the guardrail that covers it.
- Candidate turns are short spoken paragraphs (2–5 sentences) or a few full-sentence bullets when
  listing. No fragments.
- Every step ends in a decision + reason + reject (see SKILL.md judgement rules).
- End with the interviewer closing the round and the candidate's one-line final thought.

## Example excerpt (shape only — do not reuse the content)

```
*— North star —*

**Candidate:** I have three candidates. One, group orders placed per week. Two, the share of group
orders where everyone in the group adds an item before checkout. Three, people per group order.

The first one counts how often the feature is used, so it measures our method, not whether the group
got fed with less hassle. The third rewards bigger groups, which we can't really influence. I'll go
with the second one: the share of group orders where every invited person adds their item and the
order is placed within 15 minutes of the first invite. That's the moment the organiser stops chasing
people, which is the whole point. And if we later replace the invite link with something else, the
metric still holds, because it measures the result, not the link.

*[Writes on board: NSM = % of group orders where all invitees add an item and the order is placed
within 15 min of first invite. Rejected: group orders/week (method), people per order (can't move)]*

**Interviewer:** Why not just track daily active users of the app? That's what leadership looks at.

**Candidate:** Daily users would barely move from this feature. Group orders are a small slice of
all orders, so a real win would be lost in the noise, and the team couldn't learn from it. I'd
report up through orders per active customer, but the team needs a number it can actually move.
```

## After the transcript

Optional short table "What to copy" (move → why it scores) and the 60-second spoken summary in first
person: scope and stage, the north star and why it beat the runner-up, the two guardrails, the goal or
ship call, and the reversal threshold.
