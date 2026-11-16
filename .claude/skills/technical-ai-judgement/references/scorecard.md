# Scorecard

Use after a mock or when reviewing a pasted answer. Be direct: the learner is deciding whether they
are ready for real loops, so a soft verdict wastes their time. Score what they did, not what they
did after a hint — note hints separately. Adjust the bar for background: a candidate with an
engineering or ML background is expected to go deeper under pressure; a candidate without one is
not marked down for missing engineering detail, only for missing judgement.

## 1. Weak-spot table (first)

If the learner profile lists weak spots, score each one:

| Weak spot | What happened today | Status |
|---|---|---|
| … | specific moment from the mock | 🟢 fixed / 🟡 improving / 🟠 half / 🔴 still there |

Then one line: **the big insight from today** — the single habit that caused most of the losses.

## 2. Step scores (out of 10)

Use the table for the sub-type. Give each step a score, one "what landed" and one "what to fix".

### AI product design + evaluation
| Step | 4/10 | 7/10 (L4 pass) | 9/10 (L5 strong) |
|---|---|---|---|
| Clarify | No questions, or one at a time | Batched; asks stakes, volume, data | Questions that change the design (what if it's wrong? what data exists?) |
| User + job | Starts with the model | One user and job named | User is the starting point; says why AI beats rules or search here |
| Design | "Use an LLM" | Lever chosen with a reason; human role named | Right lever for the real gap, model tier, fallback when unsure, approval scaled to risk |
| Quality bar + offline evals | "We'd measure accuracy" | Golden set + one method + a pass mark | Bar defined before build, 2–3 dimensions with numbers, mixed methods, judge checked against humans, slices, regression rule |
| Failure modes | "It might hallucinate" | 2 specific failures + mitigations | Raised unprompted, tied to who gets hurt, what the user sees, retrieval vs generation separated |
| Launch + online | "Launch and monitor" | Online success metric + one guardrail | Staged rollout, behaviour signals, cost and latency guardrails, feedback loop into the golden set |
| Cost + latency | Not mentioned | Mentioned qualitatively | Cost per task with a number, latency budget in user terms, a lever named |

### System design for PMs
| Step | 4/10 | 7/10 (L4 pass) | 9/10 (L5 strong) |
|---|---|---|---|
| Clarify + scope | Jumps to boxes | Scale, latency and scope asked; played back | Questions that change the architecture (real-time vs batch); explicit out-of-scope |
| Requirements | None, or features | 4–6 requirements from a user journey | Every component later traces back to one |
| Attributes | Not stated | Named | Ranked, with what is traded away for the top one |
| Architecture | Brand names, no flow | Components + data flow on the board | Right altitude, each box justified, black boxes named |
| Scale + failure | Not covered | One bottleneck when asked | "What breaks at 10x" walked arrow by arrow; fallback per dependency |
| Trade-offs + ship first | Listed or missing | 2 tensions with a view | Raised unprompted, tied to attributes, a call each, clear v1 and metric |

### AI fluency (concept explanation) — also used for the Explain it simply drill
| Dimension | 4/10 | 7/10 (L4 pass) | 9/10 (L5 strong) |
|---|---|---|---|
| Clarity | Jargon stack, long sentences | Mostly plain; some terms unexplained | A non-engineer could repeat it back; every term explained once |
| Accuracy | A misapplied concept | Correct, a little loose | Precise, including what it can't do |
| Analogy | None, or misleading | One that fits | Fits and is extended to show the limit or failure |
| So what | No product link | A generic benefit | The specific decision it changes for this audience (cost, trust, freshness, speed) |

### Technical trade-off
| Step | 4/10 | 7/10 (L4 pass) | 9/10 (L5 strong) |
|---|---|---|---|
| Floor first | Compares options straight away | States a quality floor | Floor and latency budget in user terms before any option |
| Options | One option, or a comparison table read out | 2–3 real options | Includes the "boring" option (prompt, rule, buy) |
| Diagnosis | Assumes the cause | Asks where the constraint comes from | Finds the real driver before choosing a fix |
| The call | "It depends" | Clear pick + reason | Pick + what's given up + what flips it + second-order effect |
| Proving it | None | An eval or A/B named | Eval against the floor, guardrail, reversal line |

### Communication (all sub-types)
| 4/10 | 7/10 | 9/10 |
|---|---|---|
| Filler, vague under follow-up, bluffs | Clear, signposted, honest about limits | Calm, drives the room, goes deeper with specifics when pushed |

## 3. Rubric read (the repo's five dimensions)

Rate each: Strong No Hire / No Hire / Hire / Strong Hire, with one line of evidence.

| Dimension | What decides it |
|---|---|
| Technical accuracy | Concepts stay correct through follow-ups, not just in the definition |
| Failure mode awareness | Specific failures, raised before being asked, with mitigation |
| Trade-off reasoning | Commits to a call and names what would change it |
| Product grounding | Every technical choice traces back to a user need |
| Depth under pressure | Gets more specific when pushed, not louder |

## 4. Overall level read

| Overall | Read |
|---|---|
| ≤ 5 | Below PM2 bar. Vocabulary without judgement; interviewer had to drive. |
| 6 | Borderline L4. Right ideas with prompts; thin on evals or trade-offs. |
| 7 | L4 / PM2 pass. Correct concepts, an eval plan, a clear call. |
| 8 | Strong L4, borderline L5. Raises failures and cost unprompted at most steps. |
| 9+ | L5 / Senior pass. User-first, layered evals, owned cost/latency, deeper when pushed. |

State the verdict for each target level the learner is interviewing for (e.g. "PM2: hire. Senior:
lean no hire."), with the reason in one sentence each. Note if the target company runs a harder
technical bar (frontier AI labs, AI-native companies) and what that changes.

## 5. Fix the weakest step

Write the model turn for the weakest step only — spoken, first person, full sentences — so they
leave with one thing to rehearse rather than a pile of notes.

## 6. Drill plan

Three short daily drills, each mapped to a weak spot from today. Defaults:
- **Explain it in 60 seconds:** one concept from `concepts-cheatsheet.md` to an imagined exec —
  one line, analogy, one failure, so what. Record and count the jargon.
- **Define good in 90 seconds:** any AI feature → 3 quality dimensions with numbers → golden set →
  one online metric + one guardrail.
- **What breaks at 10x:** any app → draw the data flow in five boxes → name the first two things
  that break and the fallback.
- **One call, one flip:** any trade-off → "I'd pick X because… I give up Y… I'd switch if Z."
- **Cost per task:** any AI feature → tokens in and out × illustrative price × volume, out loud.
- **Lab rep:** run `rag-eval-lab/` once and write your own three-sentence interview paragraph from
  the numbers.

## 7. Log it

If `My Profile.md` exists, append a mock log row: date | question | type | score | key notes.
