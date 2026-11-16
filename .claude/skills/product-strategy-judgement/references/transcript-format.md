# Model answer: spoken transcript format

The learner rehearses these by reading them aloud, so the transcript must sound like a real round:
natural speech, full sentences, the candidate driving, the interviewer probing. Avoid tables inside
the transcript — tables are for coach notes and scorecards, not for speech.

## Page shape

```
# Mock Interview Transcript
**Question:** …
**Type:** Product Strategy — [subtype: what to build / GTM / growth / pricing / market entry / competitive response]
**Length:** about 30–35 minutes

*— Opening —*
*— Clarify —*
*— Business goals —*
*— Landscape —*
*— Principles —*
*— Options —*
*— Recommendation —*
*— Counter-argument —*
*— First moves and metrics —*
*— Probes —*
*— Close —*

## 60-second summary
```

Use the step tags so the learner can skim back to a stage. For GTM, growth and pricing, keep the
same tags but fill them the subtype's way (see `subtypes.md`): e.g. in growth the business-goals
step contains the equation; in pricing the recommendation contains a specific number.

## Rules

- **Interviewer** answers clarifiers with concrete, plausible facts ("two-year horizon", "success is
  revenue, not users", "assume no acquisitions over $1B"). Invented numbers are fine; vague ones are
  not. Real company facts (revenue mix, products that exist) must be right — don't invent those.
- **Candidate** asks clarifiers in one batch — always horizon and success, plus one framing question
  that shows a hypothesis — then states assumptions, asks for 30 seconds to structure, and says the
  plan out loud.
- **Business goals** anchor on how the company makes money and where it's investing, and name one
  tension between what it says and how it earns.
- **Landscape** names a specific trigger (what changed, roughly when, who it hurts) and at least one
  competitor's posture or threat model.
- **Principles:** two or three, each said with "that rules out ___".
- **Options:** a quick brainstorm of five or more one-liners, then cuts made by name against the
  principles, leaving three or fewer.
- **Recommendation:** one call with a horizon, introduced by the connecting sentence ("Because ___ and
  ___, the option that survives is ___").
- **Counter-argument:** the candidate raises the strongest case for the runner-up **before** the
  interviewer does, concedes what's true, and defeats it on the merits.
- **First moves and metrics:** the first 90 days, one success metric, one counter-metric, and "I'd
  change my mind if ___ by ___".
- Key calls appear as `*[Writes on board: …]*` — the anchor, the trigger, each principle and what it
  kills, the shortlist, the recommendation, the counter-metric, the change-my-mind signal.
- The interviewer probes **at least twice**, and one probe **steelmans a rejected option**. Others:
  - challenge the business read ("Isn't Google really a cloud company now?")
  - challenge the timing ("Why not wait a year and see?")
  - attack the right to win ("Amazon can copy this in a quarter. Then what?")
  - press for a number ("What would you actually charge?")
- The candidate defends on the merits, concedes what is true, and **keeps the call**. Changing the
  recommendation under light pressure costs more points than any weak step.
- Candidate turns are short spoken paragraphs (2–5 sentences) or a few full-sentence bullets when
  listing. No fragments, no shorthand.
- Every step ends in a decision + reason + reject (see SKILL.md judgement rules).
- End with the interviewer closing the round and the candidate's one-line final thought.

## Example excerpt (shape only — do not reuse the content)

```
*— Principles —*

**Candidate:** Let me turn what I've said into three principles that actually rule things out.

First, we'll prefer revenue that doesn't pay a label royalty on every unit. About two-thirds of
music revenue goes to rights holders, so growth that only adds streams grows margin very slowly.
That rules out the simplest plan, which is just raising the Premium price over and over.

Second, we won't build anything that makes the free tier much worse to push upgrades. The free tier
is our acquisition funnel, and a rival can always undercut a degraded free product. That rules out
cutting free listening to a few hours a week.

Third, when two options are close, I'll pick the one that uses something only Spotify has — hundreds
of millions of people who already open the app every month and tell us what they like.

*[Writes on board: P1 prefer non-royalty revenue → kills "just raise the price". P2 don't break free
tier → kills hard listening caps. P3 tiebreak: use our listening data + reach]*

**Interviewer:** Isn't raising the price the most reliable lever you have? Netflix has done it for
years.

**Candidate:** It's reliable, and I'd still do modest rises — that's real money. But it doesn't get
us to 5x. Every price rise also raises what we pay labels, and each one pushes some people back to
free. So I'd treat price as a steady base, not the strategy. The 5x has to come from lines where we
keep more of each dollar.
```

## After the transcript

Optional short table "What to copy" (move → why it scores) and the 60-second spoken summary in first
person: the anchor, the trigger, the call over the runner-up, the biggest risk, and the change-my-
mind signal.
