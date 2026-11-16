# Model answer: spoken transcript format

The learner rehearses these by reading them aloud, so the transcript must sound like a real round:
natural speech, full sentences, the candidate driving, the interviewer probing. The tree and the math
go on the board; the speech explains why each number is what it is. Avoid tables inside the
transcript — tables are for coach notes and scorecards.

## Page shape

```
# Mock Interview Transcript
**Question:** …
**Type:** Estimation — consumer count / B2B count / market size / infrastructure / time and throughput
**Length:** about 15 minutes

*— Opening —*
*— Scope —*
*— Anchor and approach —*
*— Break down —*
*— Math —*
*— Challenge —*
*— Sanity check —*
*— Sensitivity —*
*— Close —*

## 30-second summary
```

Use the step tags so the learner can skim back to a stage.

## Rules

- **Interviewer** answers scoping questions with concrete facts ("Assume this year, all of urban
  India, revenue at retail price"). For anchors the candidate should know, the interviewer says
  "What would you assume?" rather than handing over the number.
- **Candidate** asks 1–3 scoping questions in one batch, states the scope (unit, place, period, what
  counts), asks for 30 seconds to structure, and says the plan out loud before starting.
- **Anchor and approach** are said with reasons: "I'll start from ___ because ___. I'll go top-down
  because ___, and use the supply side as my check."
- **The tree and the math are board notes**, never prose arithmetic. Write
  `*[Writes on board:]*` followed by a fenced ASCII tree: equation on top, branches, leaves with a
  number and a short reason in brackets. Then a second board note with the math, one line per step,
  units on every line, rounded numbers.
- **Each leaf is spoken as a named assumption with a reason** ("I'll assume 3%, because…"). Segment
  out loud where groups behave differently.
- **The interviewer challenges one assumption** with a plausible counter-fact. The candidate
  recomputes that branch on the board, says how much the answer moves, and says whether the
  conclusion changes. A second probe is optional (for example "Why not start from households?").
- **Sanity check** uses a second, independent method (the other side, a per-unit reframe, or a known
  company), not the same tree again.
- **Sensitivity**: the candidate names the one assumption the answer moves most with and gives a
  low–high range with a most-likely value.
- **Close**: the candidate says what the number means for the decision ("so what"), then the
  interviewer ends the round.
- Candidate turns are short spoken paragraphs (2–5 sentences). No fragments, no shorthand.
- Final number to one or two significant figures. No false precision.

## Example excerpt (shape only — do not reuse the content)

```
*— Anchor and approach —*

**Candidate:** I'll start from the city's population, about 13 million people, because haircuts are
a personal need and everyone needs one. I'll go from the demand side, haircuts per month, and divide
by what one salon can handle. Then I'll check it from the supply side, by how many salons I see on
a typical street.

*— Break down —*

**Candidate:** Men and women get haircuts at very different rates, so I'll split them.

*[Writes on board:]*
    Salons in the city
     = haircuts per day ÷ haircuts one salon does per day
       |
       +-- Haircuts per day = (men + women haircuts per month) ÷ 30
       |     +-- Men ....... 6.5M x 1 a month        (most men cut monthly)
       |     +-- Women ..... 6.5M x 1 every 3 months (fewer, longer visits)
       +-- Per salon per day ... 3 chairs x ~7 cuts ≈ 20

*— Math —*

*[Writes on board:]*
    Men:    6.5M x 1      = 6.5M a month
    Women:  6.5M x 0.33   ≈ 2M a month
    Total ≈ 8.5M ≈ 9M a month  ÷ 30  = 300K a day
    300K ÷ 20 per salon   = 15,000 salons

**Candidate:** So my first estimate is about 15,000 salons.

*— Challenge —*

**Interviewer:** A lot of men here cut every three weeks, not monthly. What does that do?

**Candidate:** That's fair, let me redo the men's branch. At one and a half cuts a month, men are
about 10 million a month. With women, that's 12 million a month, or 400,000 a day, which is about
20,000 salons. So the answer moves by a third, and I'd give a range of 15,000 to 20,000.

*[Writes on board: Men 1.5/month → 12M a month → 400K a day → ~20,000 salons]*
```

## After the transcript

A short "What to copy" table (move → why it scores), then the 30-second spoken summary in first
person: the scope, the anchor, the number as a range, the assumption it is most sensitive to, and
the "so what".
