# Root Cause Analysis — Senior (SNR) and Senior+ (SNR+) Bar

Root cause questions say **a metric moved** — dropped, spiked, or one metric went up while another went
down — and ask **why, and what you would do**. The level is decided by how you narrow the search, and
whether you end with a decision instead of "I'd investigate further".

[← All question types](README.md)

---

## Sample questions

| # | Question | Subtype | Good practice for |
|---|---|---|---|
| 1 | "Spotify's Premium checkout conversion in India dropped 20% last week. What's going on?" | Sudden drop | Any |
| 2 | "Duolingo's day-7 retention for new users fell from 55% to 48% over six weeks. Why?" | Gradual drop | Any |
| 3 | "Uber rides are up, but revenue is down. What's happening?" | Conflicting metrics | Any |
| 4 | "Replies to Instagram Stories are down 15% week over week. Why?" | Engagement drop | Any |
| 5 | "Passwordless sign-in adoption is low among Okta's customers. Why, and what would you do?" | Adoption gap (B2B) | Okta |
| 6 | "Payroll runs submitted on time dropped 10% for Rippling's mid-market customers this month. Why?" | B2B workflow drop | Rippling |
| 7 | "Recruiters are accepting 30% fewer of Eightfold's AI-recommended candidates. Why?" | AI quality drop | Eightfold AI |
| 8 | "Our AI support bot's resolution rate is up, but customer satisfaction is down. What do you do?" | Conflicting metrics (AI) | AI-first companies |

More: [how-to-answer-root-cause-questions.md](../analytics-and-execution/how-to-answer-root-cause-questions.md).

---

## The level ladder

```
  PM2 / L4   →  Lists many possible causes, asks questions at random, often jumps to a fix.

  SNR / L5   →  Defines the metric first, maps internal and external causes in 30 seconds,
                triages with 4 shape questions, goes deep in the MOST LIKELY bucket, and ends with
                an owner, an action and a reversal condition.

  SNR+ / L6  →  Every question visibly changes where they go next. Spots mix shifts, measurement
                bugs and AI failure modes early. Steps back out loud when the data doesn't fit.
                Handles conflicting metrics as a business trade-off, and fixes the system so it
                doesn't happen again.
```

## Time split

| Level | Define + hypotheses + triage | Investigate | Resolve |
|---|---|---|---|
| PM2 | 2 minutes, then random questions | Most of the time | Often missing |
| SNR | About 8 minutes | About 12 minutes, in one bucket | About 5 minutes, ending in a decision |
| SNR+ | Same, but sharper questions | Re-triages out loud when needed | Decision, systemic fix, and how to tell leadership |

---

## Step by step: what to say

| Step | SNR (must say) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Define** | Say exactly what the metric is: the numerator, the denominator and the time window. Is it a volume, rate or quality drop? | Write the identity that links the metrics, so a conflict becomes maths. | "Revenue = rides × average fare × take rate. Rides are up, so fare or take rate must have fallen." |
| **Hypothesis space** | Name all the buckets in 30 seconds: product change, user mix, quality, infrastructure, measurement, competitor, seasonality, macro. | Add AI-specific causes where relevant: model change, data drift, prompt change, eval gap. | "Inside AI causes, a new model version or a shift in incoming resumes could both move acceptance." |
| **Triage** | Ask the 4 shape questions: external event? sudden or gradual? broad or concentrated? anything we changed? | Each answer should cut the space, and you should say which buckets it rules out. | "It's sudden and only in India on one payment method. That rules out seasonality and points to a partner." |
| **Fast falsify** | Check measurement first, in parallel: logging, dashboard or definition changes. | Know which checks are cheap and run them first. | "Before going deep, I'd check whether 'user cancelled' events jumped, because that would mean errors are being mislabelled." |
| **Investigate** | Go deep inside the most likely bucket. Segment by platform, region, cohort, channel and version. | Step back and re-triage out loud if 2–3 answers in a row don't fit. Watch for mix shift. | "Overall retention fell, but each channel is flat. So the mix moved: more users came from the cheap channel." |
| **Root cause** | Name one root cause and the evidence for it. | Say how confident you are and what would prove you wrong. | "I'm 80% sure. If card payments had also dropped, I'd be wrong." |
| **Decide** | Is action needed? Who owns it? What is the action in the next 72 hours? | Weigh both sides of a conflicting metric as a business trade-off, with numbers. | "Reactions are up 60%, but replies drive friendships. I wouldn't ship until replies recover." |
| **Reversal + prevention** | Say what would make you reverse the decision. | Add a systemic fix (alerts, tests, a dashboard) and how you'd brief leadership. | "I'd add an alert when 'user cancelled' rises above 2× normal, so this gets caught in hours, not days." |

---

## Checklist

**SNR — say all of these:**
1. The exact metric definition: numerator, denominator and window.
2. All buckets, internal and external, in 30 seconds.
3. The 4 triage questions.
4. A measurement check in parallel.
5. One leading bucket, investigated deeply with segments.
6. A named root cause with evidence.
7. Owner, 72-hour action and reversal condition.

**SNR+ — add these:**

8. An identity that turns conflicting metrics into maths.
9. Mix shift and measurement bugs checked early.
10. AI-specific failure modes when the product uses AI.
11. Re-triaging out loud when the data doesn't fit.
12. A confidence level and what would prove you wrong.
13. A systemic fix, plus how you'd tell leadership.

---

## Red flags

| Red flag | Why it costs you |
|---|---|
| Jumping to a fix before diagnosing | It's the most common fail. |
| Asking 15 questions with no order | It looks like guessing, not reasoning. |
| Never checking measurement | Many real drops are logging bugs. |
| Touring every bucket lightly | Seniors go deep in the most likely one. |
| Ending with "I'd investigate further" | The question asked what you would *do*. |
| Treating conflicting metrics as "both matter" | You have to pick and explain the trade-off. |

---

## Read next

- [How to answer root cause questions](../analytics-and-execution/how-to-answer-root-cause-questions.md)
- [Making and defending decisions](../analytics-and-execution/making-and-defending-decisions.md)
- [Rubric for analytical and execution interviews](../analytics-and-execution/rubric-for-analytical-and-execution-interviews.md)
- Practise: *"DAU dropped 8% last week. Interview me."* ([`rca-judgement`](../.claude/skills/rca-judgement/SKILL.md))
