# Mock Interview Log — Product Sense

Every timed mock I've done, with the score, what landed and what to fix. Add a new section after each mock.
Read the **trend** and the **weak-spot tracker** before the next mock. They show what to watch.

---

## Contents

| # | Date | Question | Type | Score | What landed | Top fix | Details |
|---|---|---|---|---|---|---|---|
| 1 | 2026-11-14 | How would you improve Google Maps for parking (India)? | Product Sense: improve | **~5/10** | The "no circling near the destination" signal; good launch scoping | Name 3 one-liners before detailing any; keep booking out of v1 | [Mock 1](#mock-1--google-maps-parking) |
| 2 | 2026-11-16 | How would you improve Google Calendar (work users)? | Product Sense: improve (B2B angle) | **~5.5/10** | 3 numbered, distinct ideas; "4 free hours scattered in 30-min gaps" | Stop asking for time; land each step with "so my ___ is ___ because ___" | [Mock 2](#mock-2--google-calendar) |
| 3 | 2026-11-17 | How would you improve Slack (enterprise)? | Product Sense: improve (B2B) | **~6/10** | Best clarify yet; most complete solution flow yet | Outcome north star (not usage); finish the close | [Mock 3](#mock-3--slack) |
| — | 2026-11-17 | Practice: say the summary for Google Maps parking | Summary drill | Not scored yet | — | Use the 4-part formula | [Summary drill](#summary-drill--pending) |

**Other practice (model answers and idea banks, not scored):**

| Question | What we did | Link |
|---|---|---|
| How would you improve a quick commerce compare platform (Blinkit, Zepto, Instamart)? | Model answer transcript: shoppers and brands, 7–8 solutions | [Idea Bank: quick commerce compare](Idea%20Bank.md#3-quick-commerce-price-compare-app) |
| Build the notifications product for the compare app | Model answer transcript | [Idea Bank: notifications](Idea%20Bank.md#4-quick-commerce-notifications-product) |
| How would you improve Spotify? | 10-feature idea bank | — |
| 10 ideas each for Calendar, Maps parking, quick commerce, notifications | Idea bank | [Idea Bank.md](Idea%20Bank.md) |

---

## Score trend

```
  Score
   7 |                                    ← target: PM2 bar
   6 |                         ● Slack (6)
   5 |  ● Parking (5)  ● Calendar (5.5)
   4 |
     +--------------------------------------
       Nov 14          Nov 16       Nov 17
```

| Step | Parking | Calendar | Slack | Trend |
|---|---|---|---|---|
| Clarify | 6 | 5 | **7** | ⬆ best step now |
| Strategy + north star | 6 | 5 | 4 | ⬇ north star keeps breaking |
| Users | 4 | 6 | 6 | ⬆ |
| Pain points | — | 6 | 6 | ➡ but no problem statement yet |
| Solutions | 5 | 6 | 6 | ➡ |
| Solution flow | 4 | 5 | **7** | ⬆ nearly fixed |
| MVP + metrics | 5 | 3 | 3 | 🔴 weakest step, 3 mocks in a row |
| Communication | — | 4 | 5 | ⬆ slowly |
| **Overall** | **~5** | **~5.5** | **~6** | ⬆ steady climb |

**The pattern:** the first half (clarify → users → pains → flow) is close to the PM2 bar. The second half
(north star → MVP → guardrail → summary) is where the points go.

---

## Weak-spot tracker

🟢 fixed · 🟡 improving · 🟠 half / slipped · 🔴 still there or new · — not seen

| # | Weak spot | Parking | Calendar | Slack | Fix |
|---|---|---|---|---|---|
| 1 | Freezing in 30 minutes | 🟡 | 🟠 | 🟡 | Time budget + lenses; start talking with the transition line |
| 2 | Only one solution | 🟡 | 🟢 | 🟠 | 3 one-liners from 3 lenses **before** detailing any |
| 3 | Not walking the solution flow | 🟠 | 🟡 | 🟢 | Entry → screen → action → behind the scenes → result → edge case |
| 4 | Mixing steps | 🔴 | 🟢 | 🟢 | One line per user; save the story for pain points |
| 5 | Not locking in decisions | 🔴 | 🟠 | 🟠 | Say it in one sentence and write it on the board |
| 6 | Contradicting my own logic | 🔴 | 🟠 | 🟠 | Re-read the board before the MVP |
| 7 | Guardrail confusion | 🔴 | 🟡 | 🔴 (none given) | Guardrail = what could get worse while the north star improves |
| 8 | Filler and weak endings | 🔴 | 🔴 | 🟠 | End with "To summarise…" |
| 9 | Asking for time | — | 🔴 (4×) | 🟡 (2×) | First sentence of the step within 3 seconds |
| 10 | Not landing the decision | — | 🔴 | 🔴 (3rd mock) | "___ struggle to ___ because ___, which leads to ___" |
| 11 | Usage-metric reflex | — | 🟠 | 🔴 | "If we succeed, users spend less ___ or get more ___" |

---

## Mock 1 — Google Maps parking

**Date:** 2026-11-14 · **Question:** "How would you improve Google Maps for parking in India?" · **Score: ~5/10**

**Big insight:** the problem isn't a lack of ideas. I go deep on the first idea straight away, and that blocks
everything else. Every freeze started that way.

### Step scores

| Step | Score | What landed | What to fix |
|---|---|---|---|
| Clarify | 6/10 | "Why now" was a strong question; second turn was batched well | Pick the market without being asked; say "I'll assume", not "I hope" |
| Strategy + NSM | 6/10 | The circling signal was a smart, measurable idea | Name the north star in one sentence and write it on the board |
| Users | 4/10 | Understood the lenses once I saw them | Froze at one user; mixed users with pain points |
| Pain points | — | Asked to see the model turn | Practise the journey walk myself |
| Solutions | 5/10 | 3 real ideas (list, booking, auto re-route) across 3 lenses | Didn't number them, so didn't notice I had 3 |
| Solution flow | 4/10 | Entry and screen were clear | Stopped there; no behind the scenes, result or edge case |
| MVP + metrics | 5/10 | Top 5 cities, busy areas first, partner with vendors | See below |

### What went wrong in the MVP
1. **Booking in v1 contradicted my own pick.** I'd said booking depends on find parking.
2. **"Top 5 cities" is launch scope, not a prerequisite.** A prerequisite is what must be *true*: is our "usually free" data accurate enough?
3. **No "what waits."** Cutting is the senior signal.
4. **No guardrails** (shown-free-but-full rate, door-to-door time).
5. **No closing summary.**

### Model turn: the MVP (about 1 minute)

> *"**Prerequisite:** our 'usually free' labels must be accurate. Before launch, I'd check them against partner lot counts and test drives, and only launch where we're right at least 8 times out of 10.*
>
> ***v1:** find parking only, in the 50 hardest-to-park areas in each of the top five cities. It has the 'parking is hard here' tag, the list with availability labels, navigation to the lot entrance, and saving where you parked.*
>
> ***What waits:** booking, because it needs payments and contracts with each lot. Automatic re-routing, because in v1 we only suggest the next nearest lot. Two-wheelers, because their parking is very different.*
>
> ***Metrics:** my north star is the share of trips to hard areas where people park within 3 minutes without circling. My guardrails are how often we said 'free' and it was full, and total door-to-door time.*
>
> ***To summarise:** for leisure drivers going somewhere new, the real problem is that they can't see where parking is or whether it's free. Find parking fixes that first, and builds the base for booking next."*

### Drills
| Drill | How | Fixes |
|---|---|---|
| A. Users in 60 seconds | Any app → 2 lenses (why + how often) → 4 users → pick one | Freezing at users |
| B. Three ideas before details | Information, automation, partner/social one-liners in 90 seconds | One solution |
| C. Flow in 2 minutes | All 6 steps out loud | Not walking the flow |

---

## Mock 2 — Google Calendar

**Date:** 2026-11-16 · **Question:** "How would you improve Google Calendar for work users?" · **Score: ~5.5/10**

**Big insight:** my *content* has caught up. The day in the life, the "4 free hours scattered in 30-minute gaps"
insight, three real ideas and the stacking example were strong. **What costs points now is landing.** I describe
well but don't close each step with a decision, and I ask for time when the answer is already in my head.

### Step scores

| Step | Score | What landed | What to fix |
|---|---|---|---|
| Clarify | 5/10 | Asked "why now"; the answer powered everything after | One question at a time; asked the interviewer to scope instead of proposing |
| Strategy + north star | 5/10 | Specific why now (Copilot in Outlook); ended on an outcome north star | Needed coaching; skipped "why Google cares"; didn't define "focus hours" |
| Users | 6/10 | Spotted the security team; **reframed to the player-coach lead under pressure** (best moment) | Only 2 personas; vague reasons |
| Pain points | 6/10 | Vivid, timed day; three numbered pains | Picked two; **no problem statement with "because"** |
| Solutions | 6/10 | Three numbered ideas; creative "send me the summary" | Idea 1 already exists (Focus time); no reason for the pick |
| Solution flow | 5/10 | Concrete stacking example (4, 5, 6 pm → free 5:30–7) | Result and edge case missing |
| MVP + metrics | 3/10 | Good supporting metrics; a real guardrail | No prerequisite, v1 or "what waits"; NSM drifted 3h → 2h |
| Communication | 4/10 | Concrete examples | Asked for time 4×; ended "and also, if yeah" |

### Level read
| Role | Verdict |
|---|---|
| Rippling PM | Borderline, leaning reject |
| Eightfold AI PM2 | Borderline, leaning reject |
| Okta Senior PM | Reject |

### Model turn: MVP and close (about 60 seconds)

> *"The **prerequisite** is that suggestions must be right. Before launch, I'd check that at least 9 out of 10 suggested times are truly free for every attendee.*
>
> *For **v1**, I'd ship organizer suggestions only while a meeting is being booked, only for meetings inside one company, with a few Workspace customers whose teams have heavy meeting loads.*
>
> ***What waits:** re-suggesting when meetings get cancelled, because it messages everyone; 'send me the summary', because it depends on meeting notes being good enough; and I'd build on the existing Focus time rather than rebuild it.*
>
> *My **north star** stays what I wrote on the board: the share of users with three or more hours of focus time a week, in blocks of two hours or more. **Guardrails:** total meeting time, so we're not just moving meetings into the evening, and how often organizers dismiss the suggestion.*
>
> ***To summarise:** player-coach leads have four free hours a day, but they're scattered in 30-minute gaps, because meetings land anywhere. Calendar can suggest better times while meetings are booked, and turn those gaps into real focus blocks."*

### Drills
| Drill | How | Fixes |
|---|---|---|
| A. Start in 3 seconds | Say each step's transition line within 3 seconds; count how often I ask for time | Asking for time |
| B. Land it | After each step: "So my ___ is ___, because ___." | Not landing |
| C. 60-second MVP | Prerequisite → v1 → what waits → NSM → guardrail → summary | MVP score |

---

## Mock 3 — Slack

**Date:** 2026-11-17 · **Question:** "How would you improve Slack for enterprise customers?" · **Score: ~6/10**

**Big insight:** the first half is close to the PM2 bar. The second half breaks in the same two places:
1. **The north star.** I reach for a usage number every time (NRR → time spent → feature adoption → panel DAU).
2. **The close.** In three mocks I've never finished prerequisite → v1 → what waits → north star → guardrail → summary.

### Step scores

| Step | Score | What landed | What to fix |
|---|---|---|---|
| Clarify | **7/10** | Batched questions; proposed enterprise myself; why now with a guess ("to defend?") | "I hope" instead of "I'll assume" |
| Strategy + north star | 4/10 | Mission in plain words; why now tied to tool cutting and retention | North star failed four times |
| Users | 6/10 | All three B2B roles; picked the power user **because they sway renewals** | No end-user split; no reject of the runner-up |
| Pain points | 6/10 | Real morning (Datadog, GitHub, DMs); VP tag vs L&D reminder | Picked a feature that already exists; no problem statement |
| Solutions | 6/10 | Idea 2 (summaries with context from Jira and Confluence) is strong and only-Slack | Deep before wide; idea 3 off-problem |
| Solution flow | **7/10** | Event streams, AI ranking plus user rules, Jira due dates, incidents first | No number in the result |
| MVP + metrics | 3/10 | v1 used rules first and existing connectors | Not stated as a choice; no prerequisite, "what waits", guardrail or summary |
| Communication | 5/10 | Concrete examples; fewer pauses | Long "so what would happen is…" chains |

### Level read
| Role | Verdict |
|---|---|
| Rippling PM | Borderline, leaning reject |
| Eightfold AI PM2 | Borderline, leaning reject |
| Okta Senior PM | Reject |

### Model turn: the close (about 60 seconds)

> *"The **prerequisite** is trust in the ranking. Before AI ranks anything, it has to get the top five right at least 9 times out of 10. Until then, **v1 uses simple rules**: incidents and DMs from senior leaders first, the user's own rules second. I'd start with engineering power users at a few large customers, with Jira, GitHub and PagerDuty.*
>
> ***What waits:** AI ranking, until it passes that test. The richer cross-thread summary, until people trust the panel. Video calls are out of scope, since Huddles exists.*
>
> *My **north star** stays what's on the board: the median time it takes a power user to respond to a message that needs them. It measures whether they stop missing important things, not whether they open our panel.*
>
> *For **guardrails**, the risk is the messages we rank *low*. If teammates get slower replies, they'll mark everything urgent and the noise comes back. So I'd watch reply times for low-ranked messages, and how often someone moves a low-ranked item to the top.*
>
> ***To summarise:** power users miss critical messages because Slack treats every notification the same. A priority panel, starting with rules and moving to AI once it's proven, shows them what needs them first."*

### Drills
| Drill | How | Fixes |
|---|---|---|
| A. Outcome, not usage | 5 products a day: "If we succeed, users spend less ___ or get more ___." Could it rise while users are worse off? | Usage-metric reflex |
| B. The 60-second close | Prerequisite → v1 → what waits → read back NSM → one guardrail → "To summarise…" | MVP, guardrail, weak endings |
| C. Problem statement on demand | "___ struggle to ___ because ___, which leads to ___." Five a day. | Not landing |

---

## Summary drill — pending

**The formula (20–30 seconds, no new ideas):**

```
  "To summarise:
   1. USER + PROBLEM   → for [user], the real problem is [problem], because [root cause].
   2. SOLUTION         → I'd build [solution], starting with [v1].
   3. MEASURE          → I'd know it works if [north star] improves, while watching [guardrail].
   4. NEXT             → after that, [what comes next]."
```

**Practice:** say it for Google Maps parking.
- User: the leisure visitor going somewhere unfamiliar
- Problem: circling, because they can't see where parking is or whether it's free
- Solution: find parking with availability labels; v1 = the 50 hardest areas in each of the top 5 cities
- North star: share of trips to hard-to-park areas where the user parks within 3 minutes
- Guardrail: total door-to-door time
- Next: booking

**Score:** not done yet.

---

## Next mock: watch for

1. **North star = outcome.** Write it on the board; read it back unchanged in the metrics step.
2. **Problem statement with "because".** Not yet said in any mock.
3. **Full close.** Prerequisite → v1 → what waits → NSM → guardrail → "To summarise…".
4. **3 one-liners before detail.** It slipped in the Slack mock.
