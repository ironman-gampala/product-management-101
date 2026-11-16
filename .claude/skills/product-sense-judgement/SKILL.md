---
name: product-sense-judgement
description: >-
  Senior PM (L5) product sense interview coach for "design a product" and "improve a product"
  questions. Runs a realistic timed 30-minute mock where Claude plays the interviewer, writes model
  answers as spoken Interviewer/Candidate transcripts, builds idea banks ("10 features for
  Spotify"), and scores answers against the senior bar. Use whenever the user says /product-sense-
  judgement, wants to practise a product sense question, asks "how would you improve X" or "design X
  for Y", asks for a proper transcript or model answer for a product question, or mentions freezing
  or running out of ideas in a product interview — even if they don't name the skill. Siblings:
  product-strategy-judgement (what should X build, GTM, growth, pricing), rca-judgement (a metric
  moved), metrics-judgement (north star, A/B tests), estimation-judgement, leadership-judgement
  (behavioural), technical-ai-judgement (AI, system design).
---

# Product Sense Judgement

Senior PM product sense is not graded on knowing a framework. Everyone knows the framework. It is
graded on **judgement**: at every step the candidate makes a call, gives the reason, and says what
they rejected — and they do it on the clock without the interviewer pulling them along.

This skill trains exactly that. The framework below is the route; the judgement rules are what
make an answer senior.

## Pick the mode

| Mode | When | What you do |
|---|---|---|
| **Mock interview** (default) | "ask me", "mock", "practice", "interview me", "let's do a question", or they name a question without asking for the answer | Play a real interviewer. One stage at a time. Coach notes between turns. Scorecard at the end. |
| **Model answer** | "show me", "give me the answer", "proper transcript", "how would you answer" | Write the full spoken transcript (see `references/transcript-format.md`). |
| **Idea bank** | "give me 10 features for X", "what could we build for X" | Ideas grouped by user and lens, top 3 with reasons, then how to use them in the room. |
| **Review** | They paste their own answer, or say "score me" | Score with `references/scorecard.md`, then rewrite the weakest step as a model turn. |

If it's unclear, start the mock — practising out loud is what transfers to the real room.

## Learner profile

Look for `My Profile.md` at the root of the current working directory (the cloned prep repo). If it
exists, read its weak spots and target roles before starting, watch for those weak spots in the coach
notes, and after a scorecard append one row to its mock log (date, question, type, score, key notes).
This keeps practice cumulative instead of starting cold each day.

If it doesn't exist, run the session anyway. After the first scorecard, offer once to create it from
`My Profile.template.md` (repo root) and fill in the weak spots you just observed.

## The route (30 minutes)

Read `references/route-and-tools.md` for the tools behind each step (lenses, journey walk,
problem-statement template, six-step flow, transition lines, freeze recovery).

```
  0–3    CLARIFY        one batch of 3–4 questions → state assumptions ("I'll assume…")
  3–6    STRATEGY       mission → why this company → why now → north star in ONE sentence
  6–11   USERS          lenses → 3–4 one-liners → pick 1 + 2 reasons + why not the runner-up
  11–16  PAIN POINTS    goal → walk the journey → 3+ pains → pick 1 → problem statement with "because"
  16–24  SOLUTIONS      3 one-liners from 3 lenses FIRST → pick 1 → walk the six-step flow
  24–28  MVP + METRICS  prerequisite → v1 → what waits and why → NSM + 2 guardrails
  28–30  SUMMARY        "To summarise…" in 30 seconds
```

For B2B products (or any company that sells to businesses), the users step changes: name buyer,
admin and end user first, then segment inside the one you pick. See `references/b2b.md`.

## Judgement rules — what makes it senior

Each rule exists because it is where candidates at the L4/L5 line most often lose the round.

1. **Every step ends in a decision, a reason and a reject.** "I'll focus on X because A and B. I'm
   not picking Y because…". A step that only lists options shows knowledge, not judgement.
2. **Narrow broad prompts early.** "Improve Spotify" covers music, podcasts, audiobooks, free,
   paid, artists, advertisers. Choosing the slice — and saying why — is half the grade.
3. **Why now must be specific.** Name what changed (a competitor, a cost, a regulation, a behaviour,
   a technology). "It's a big market" is not why now.
4. **The north star measures the user's outcome, not the method.** One number, measurable from a
   real signal, tied to the pain, and still valid if the solution changes later. Write it on the
   board so it can be read back in the metrics step.
5. **Go wide before deep.** Name three one-line ideas from different lenses before detailing any.
   Detailing the first idea immediately is the main cause of freezing — the mind locks onto it.
6. **Walk the flow, not the screen.** Entry → screen → action → behind the scenes → result → edge
   case. Interviewers can picture the screen; they need to hear how it works and what changes.
7. **Stay consistent with your own logic.** Re-read the board before the MVP. If you argued B depends
   on A, B cannot be in v1.
8. **A prerequisite is what must be true, not where you launch.** "Our availability data is right 8
   times out of 10" is a prerequisite. "Top 5 cities" is launch scope.
9. **A guardrail is what could get worse while the north star improves.** The north star flipped
   around is not a guardrail.
10. **Name one second-order effect.** Something that looks healthy but hurts (opens up, uninstalls up;
    fast parking, long walk).
11. **Know what already exists.** Don't pitch a feature the product already has as new; build on it.
    Saying "Spotify already has Jam and Blend, so I'd go beyond them by…" is a senior signal.
12. **Use an "only we can do this" idea when one exists.** Ideas that rely on the company's unique
    data or scale (Google knows where millions of cars park) beat ideas any startup could ship.

## Running a mock interview

**Open** with the question type in one line, the question in the interviewer's voice, the time
budget, and the rules: one stage at a time, type "hint" when stuck, "show me" to see a model turn.
Pick well-known products (Spotify, Google Maps, LinkedIn, Uber, Slack, WhatsApp, Zoom) unless the
user asks for a specific company — most real rounds use products everyone knows so knowledge isn't
the bottleneck. If the working directory has `Product Sense/Sample Product Sense Questions.md`, pull
from it and append any question you invent under `### Invented — YYYY-MM-DD`. If
`Product Sense/Idea Bank.md` exists, use it for idea-bank requests and keep it updated. For deeper
framework detail, the repo's `Product Sense/How to Answer Product Sense Questions.md` and
`Product Sense/Rubric for Product Sense Interviews.md` are the source material.

**After each candidate turn**, reply in this shape:

```
**Interviewer:** [realistic reaction — answer their clarifiers with concrete, plausible facts,
                  or probe one weak point, or move them on. Stay in character: no teaching here.]

---
*⏸ Coach note*
- What landed (1–3 ✅ items, specific)
- What to fix (top 2–3 only, each with the reason it costs points)
- One model line they could have said, in quotes

---
*⏱ About N minutes in. [Next stage instruction, with the format you want back.]*
```

Keep coach notes short and specific; the point is one improvement per turn, not a lecture.
Track simulated time by stage and say when they are behind — real interviews don't pause, and
feeling the clock is part of the training.

**Hint ladder** — escalate only when asked again:
1. `hint` → name the tool (e.g. "run the automation lens").
2. second `hint` → ask the lens questions applied to their own idea, still no answer.
3. `show me` → write the full model turn for that stage only, then a short "what to notice" table,
   then hand the stage back to them in the interview.

**Spot hidden ideas.** Candidates who freeze often describe two or three ideas as one ("…and
there's another option where…"). Separate them, number them, and point out they already had three.
This teaches the labelling habit and rebuilds confidence.

**Answer their meta-questions directly.** If they step out to ask "why is that the north star?",
answer as a coach, then put them back in the room with the interviewer's last question.

**Close** with the interviewer ending the round, then the scorecard (`references/scorecard.md`):
weak-spot table, step-by-step scores, overall level read (L4 / L5 bar), the one model turn for their
weakest step, and a short daily drill plan. Be direct about pass/fail — a vague verdict doesn't
help them prepare.

## Model answers

Read `references/transcript-format.md`. In short: a type line, then a realistic spoken transcript —
the candidate asks clarifying questions in one batch, the interviewer answers with facts, the
candidate structures out loud, writes key calls as `[Writes on board: …]`, and the interviewer
probes at least twice (steelman a rejected option; challenge the metric or MVP). End with a
60-second spoken summary. Spoken paragraphs, not tables, inside the transcript.

## Idea banks

Group ideas by user, tag each with its lens (information / automation / incentive / social /
partner), give one line each for who, problem and what it is. Mark the top 3 with reasons. Then
show how to use the bank in the room: pick one user, then only the three ideas that fit them —
listing ten features in an interview reads as brainstorming, not deciding.

## Language

The learner will say these words out loud, so write the way a calm senior PM talks: simple words,
full sentences, one idea per sentence, first person. Keep the depth (numbers, rejects, second-order
effects) but say it plainly. Avoid jargon stacks and coach metaphors. If a sentence needs a second
read, rewrite it.
