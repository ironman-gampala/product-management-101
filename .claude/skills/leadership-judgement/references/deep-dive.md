# Experience deep dive

The hiring-manager screen: "Walk me through a product you built", "Tell me about your most
impactful project", "Pick something on your resume and go deep". It is the round most candidates
will see first, and it often decides whether the loop goes ahead. One project, 30–45 minutes, and
follow-ups that go four or five levels down.

The interviewer is checking two things: **did you really do this**, and **how do you think**. The
walk-through gives them a map; the follow-ups test every claim on it.

## Contents
1. What interviewers listen for
2. Picking the project
3. The 3–4 minute walk-through
4. The question ladder
5. Curveballs
6. Running the drill
7. Red flags
8. Know-your-numbers sheet

---

## 1. What interviewers listen for

| Signal | Strong | Weak |
|---|---|---|
| **Problem origin** | "I noticed X in the data / from customers, and argued it mattered more than Y." | "Leadership gave us this project." |
| **Insight** | A specific user or data insight that shaped the solution | "Users wanted it" |
| **Decisions** | Two or three real calls, each with an alternative and a reason | A feature list in build order |
| **Ownership** | Clear line between what *I* did and what the team did | "We" throughout, or claiming everything |
| **Measurement** | Baseline, target, result, how you know it was causal, a guardrail | "Engagement went up" |
| **Stakeholders** | Named roles, what they wanted, how disagreements were settled | "Worked closely with eng and design" |
| **Honesty** | Says what went wrong, what they'd change, what they don't know | Everything went perfectly |
| **Depth on demand** | Can go one level deeper on any claim without hand-waving | Answers get vaguer as questions go deeper |
| **Level** | Scope and strategy ratio match the role (see `story-framework.md` §4) | A feature story for a senior role |

## 2. Picking the project

Pick the one with the **biggest scope you can defend for 40 minutes**. Good picks have a problem you
found or reframed, at least two real decisions, a cross-functional fight, a measurable result, and
something you'd do differently. Avoid a project where your part was small, the numbers are unknown,
or you can't explain the technical basics.

Have a second project ready — some interviewers ask for "another one, from a different area".

## 3. The 3–4 minute walk-through

```
  1. HEADLINE      one sentence: what it was, my role, the result          (~10 s)
  2. CONTEXT       product, users, scale, why it mattered now (stakes)     (~30 s)
  3. PROBLEM       what was broken, how I found it, the insight            (~30 s)
  4. KEY CALLS     2–3 decisions, each with the alternative and the reason (~60–90 s)
  5. HARDEST PART  the moment it nearly failed, and what I did             (~30 s)
  6. RESULT        metric baseline → result, a guardrail, what changed      (~20 s)
  7. LOOKING BACK  what I'd do differently / what's next                   (~15 s)
  8. INVITATION    "Happy to go deeper on any part of that."
```

Leave breadcrumbs: mention the interesting decisions in one line each so the interviewer chooses
to dig where you are strongest. End on the invitation, never on "so yeah, that's the project" — a
trailing ending throws away the last impression, which is the one the interviewer writes down.

## 4. The question ladder

Real hiring managers pick one thread and go down it. Use these layers; within a layer, go from the
first probe to the harder ones. Ask one question at a time.

**Layer 1 — Why this problem**
- Why was this the most important thing for your team to work on?
- Who decided that? Was it your idea or were you handed it?
- What did you *not* work on because of this?

**Layer 2 — Users and insight**
- Who exactly was the user? How many of them?
- What did you learn about them that others had missed? How did you learn it?
- What evidence told you this was a real problem and not a loud anecdote?

**Layer 3 — Decisions and alternatives**
- Why that approach? What else did you consider?
- Why didn't you do the simpler / cheaper / obvious version?
- What did you cut from v1, and who disagreed with the cut?

**Layer 4 — Data**
- What data did you have when you decided? What was missing?
- How did you decide without it?
- Was there a point where the data told you to change course?

**Layer 5 — Personal ownership**
- What did *you* personally do — not the team?
- What would not have happened if you hadn't been there?
- What part of this did someone else own, and how did you work with them?

**Layer 6 — Stakeholders and conflict**
- Who disagreed with you? What were they protecting?
- How did you change their mind — or did they change yours?
- Was there a moment you had to escalate? Why then?

**Layer 7 — Execution**
- What went wrong during the build or launch?
- How did you handle the timeline slipping / scope growing?
- What trade-off did you make between speed and quality?

**Layer 8 — Measurement**
- How did you measure success? What was the baseline and the target?
- How do you know the change caused the result? Was there a test? How long?
- What could have got worse while your metric went up? Did you watch it?

**Layer 9 — Looking back**
- What would you do differently if you started again tomorrow?
- What's the next version? What would you build next and why?
- What did this project change about how you work?

**Strong follow-up answer shape:** answer in the first sentence, give one concrete detail (a number,
a name of a role, a date), say the alternative if relevant, stop. 20–45 seconds. Don't retell the story.

## 5. Curveballs

Use one or two near the end to test depth and composure:
- "Your engineering lead would tell me this was their idea. What would you say?"
- "If the result had been flat, what would you have done?"
- "Why didn't you just [the obvious alternative]?"
- "What's the one number you'd look at every morning for this product?"
- "If I gave you half the team, what would you have cut?"
- "What did your manager think you could have done better?"
- "How would this work at ten times the scale?"

## 6. Running the drill

1. **Set up** in one line: "I'm the hiring manager. About 30 minutes. Walk me through a product you
   built — about three minutes, then I'll dig in." If `my-profile/my-stories.md` has a flagship story, offer it.
2. **Listen to the walk-through.** Note every vague claim, "we", missing number and missing
   alternative. Those are your drill targets.
3. **Drill one thread 3–4 layers deep before switching.** Start where the answer was weakest. Ask one
   question per turn, like a real interviewer — never a list of five.
4. **After each answer**, use the mock shape from SKILL.md: an in-character Interviewer turn (the
   next probe), then a short coach note (what landed, top 2–3 fixes with why, one model line from
   their own facts with `[placeholders]` for anything missing), then a progress line ("Probe N of
   about 8. Answer in 30 seconds.").
5. **Push back like a real interviewer** when an answer is vague: "You said 'we decided'. Who made
   the final call?" / "Up compared to what?" Don't accept the first answer if it dodges.
6. **After 6–10 probes**, add one curveball, close the round in character, then score with
   `scorecard.md` (use the deep-dive rows) and log it.

Never fill gaps in their project with invented facts. If a model line needs a number they haven't
given, write `[baseline]` / `[result]` and ask for it.

## 7. Red flags

- Can't say what they personally did after two tries.
- Numbers change between the walk-through and the follow-ups.
- No alternative was ever considered, or "there was no other option".
- All credit to self, no team; or all credit to team, no self.
- Blames another team for every problem.
- Can't explain how the result was measured, or claims causation from a before/after chart.
- Gets defensive when challenged instead of saying "fair point — here's why I still chose it".
- Doesn't know the basic technical shape of what was built.

## 8. Know-your-numbers sheet

Before the round, write these down for the project and know them cold:

```
  Users / customers affected       Team size and roles          Timeline (start → launch)
  Baseline metric                  Target                       Result (and over what period)
  Guardrail watched                Test design (A/B? how long?) Money (revenue, cost, savings)
  The 2–3 key decisions            The alternative for each     What you'd change
```

If you don't know a number, say "roughly" and give the direction. Never make one up in the room —
a hiring manager who catches one invented number stops trusting the rest.
