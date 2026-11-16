# Model answer: spoken transcript format

The learner rehearses these by reading them aloud, so the transcript must sound like a real round:
natural speech, full sentences, the candidate driving, the interviewer pushing for depth. Tables
belong in coach notes and scorecards, not inside the transcript. Diagrams go on the board.

## Page shape

```
# Mock Interview Transcript
**Question:** …
**Type:** Technical — [AI fluency | AI product design + evaluation | system design | trade-off]
**Length:** about [5 | 30 | 45 | 15] minutes

(step tags from the matching route, e.g. for AI product design + evaluation:)
*— Opening —*
*— Clarify —*
*— User and job —*
*— Design —*
*— What good looks like —*
*— Failure modes —*
*— Launch and online metrics —*
*— Close —*

## 60-second summary
```

Step tags for the other routes:
- **AI fluency:** One line → How it works → Where it fits → How it fails → So what → Follow-ups.
- **System design:** Clarify → Requirements → Attributes → Architecture → Scale → Trade-offs →
  Ship first → Close.
- **Trade-off:** Clarify → Quality floor → Options → Diagnosis → The call → Proving it → Close.

## Rules

- **Interviewer** answers clarifiers with concrete, plausible numbers: volume (40,000 tickets a
  week), latency expectations, budget, what data exists, team size. Invented numbers are fine;
  vague ones are not.
- **Candidate** asks clarifiers in one batch, states assumptions, asks for 30 seconds to structure,
  and says the plan out loud before starting.
- **User first.** The candidate names the user and the job before any model or architecture.
- Key calls appear as `*[Writes on board: …]*` — the quality bar, the lever choice, the eval plan,
  the v1 cut, the decision line. Include **at least one simple ASCII diagram** on the board for
  design and system questions, for example:

```
*[Writes on board:*
  Recording ──► Transcribe ──► Model summarises ──► Check claims vs transcript ──► Owner reviews ──► Shared
                                                          │ unsupported claim
                                                          └──► Line marked "check this"
*]*
```

- The interviewer probes **at least twice**, and at least one probe is a hard technical one:
  - "What breaks at 10x?"
  - "How do you know it's not hallucinating?"
  - "What does one task cost?"
  - "Why not fine-tune?"
  - "Your judge model and your raters disagree — which do you trust?"
  - "Latency doubled after launch. Where do you look first?"
- The candidate answers probes with a **specific** mechanism or number, not the general principle
  louder. Concedes what's true, keeps or changes the decision, and says why.
- Every technical term is explained in plain words the first time it is used.
- Every stage ends in a decision + reason + what was rejected or given up.
- Candidate turns are short spoken paragraphs (2–5 sentences) or a few full-sentence bullets when
  listing. No fragments.
- Prices and model names stay generic ("a small fast model", "illustrative price"), with a note to
  check current numbers.
- End with the interviewer closing the round and the candidate's one-line final thought.

## Example excerpt (shape only — do not reuse the content)

```
*— What good looks like —*

**Candidate:** Before I talk about models, I want to define what good means for the agent using
this. For a meeting summary, three things matter. It has to be correct — no decision or owner that
wasn't actually in the meeting. It has to be complete on action items, because a missed action item
is the expensive failure. And it has to be fast enough to read before the next meeting, so under
a minute after the call ends.

My bar for launch is: on a golden set of 300 real meetings with human-written summaries, at least
95% of action items captured, and fewer than 2% of statements not supported by the transcript.

*[Writes on board: GOOD = action items ≥95% captured · unsupported claims <2% · ready <60s]*

**Interviewer:** How do you know it's not hallucinating once it's live?

**Candidate:** Three ways. First, I prevent it: the model only summarises the transcript it's
given, and every action item links to the moment in the recording. Second, I measure it: each week
we sample 200 live summaries, a judge model checks each claim against the transcript, and a person
reviews 50 of them so we know the judge is still honest. Third, I contain it: users can flag a
wrong line in one click, and those cases go straight into the golden set.

**Interviewer:** That judge model costs money too. Is it worth it?

**Candidate:** At 200 samples a week, the judge costs a few dollars, which is tiny next to one
wrong action item reaching a customer. I wouldn't judge every summary — sampling is enough to see
the trend. If the flag rate rises, I'd raise the sample size before anything else.
```

## After the transcript

Optional short table "What to copy" (move → why it scores, linked to the judgement rules) and the
60-second spoken summary in first person: user and job, the design call, how we know it's good,
the biggest risk and its mitigation, what ships first.
