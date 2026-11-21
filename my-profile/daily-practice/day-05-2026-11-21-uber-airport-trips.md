# Day 5 — Uber airport trips

[← Day 4 — LinkedIn for recruiters](day-04-2026-11-21-linkedin-recruiters.md) · [Daily Practice](daily-practice.md)

| | |
|---|---|
| **Date** | 2026-11-21 (second mock of the day) |
| **Question** | "How would you improve Uber for airport trips?" |
| **Type** | Product Sense: improve (B2C marketplace) |
| **Score** | **~6/10** (up from 5.5; the first half improved, the close fell back) |
| **Verdict** | Rippling: borderline, leaning reject · Eightfold AI: borderline, leaning reject · Okta: reject |

---

## What went well
- **Started instantly.** No time-ask at clarify; my first words were the question.
- **Best north star in five mocks:** median minutes from booking to the rider in the car. It's an outcome, and I compared it with a usage metric (bookings count) and rejected that.
- **Clear scoping call with a human reason:** pickups *from* the airport, because the rider has just landed and is exhausted.
- **The one time-ask was done right:** "a quick 30 seconds to jot down my solutions", once, at solutions.
- **Root cause found:** "a path with multiple stops, and at each stop they have to figure out what to do next."
- **Rule #11:** rejected PIN pickup because it already exists, then defended the call with two real reasons (it needs a queue of cars that smaller airports don't have; the queue may not have an XL cab for families).
- Named alternatives (shuttle, PIN) without being asked.
- Named Uber's ops team as a user, and called out supply and demand at the airport.
- Second "To summarise…".

## What to improve
1. **The problem statement, fifth mock in a row.** I said every piece across three turns but never put them in one sentence, even when asked three times.
2. **The close fell back:** no prerequisite, no "what waits", no guardrail (even with a "think about drivers" prompt), no edge case.
3. **North star drift:** the board said "median minutes, target under 10", and the close said "% in the cab within 5 minutes".
4. **Mixing steps again:** pains inside the users step, second mock running.
5. **Three ideas bundled as one** (timed matching, car photo, walking directions). Say them as one-liners, then pick.

## Where I stand today
**~6/10 (+0.5 on Day 4).** The first half is the strongest it has been (instant start, outcome north star, one
clean time-ask). The close is where the points go. I had the content (prerequisites said as "assumptions",
an edge case trap) but didn't bring it back at the end. Rippling and Eightfold AI: borderline, leaning reject.
Okta Senior PM: reject.

---

## How it went

I started straight away with no pause: India, six months with a reason, and "why airport trips?". That got me
the real context (15–20 minute pickup waits, early-morning cancellations, Ola, Rapido and prepaid counters).
I only asked one real question, though, and said "I hope" instead of "I'll assume".

Strategy was my best yet. I picked pickups from the airport because the rider is exhausted, listed two north
stars, and picked time from booking to in-car over bookings count. When asked to define it, I gave a baseline
(~20) and a target (5), but 5 minutes in six months isn't believable, and I mixed two clocks (booking vs.
walking from the belt). It never went on the board.

At users I named three sides (rider, driver, Uber's ops manager) but spent the turn on pains, with no
segments and no pick. After a push I picked families with luggage, decision first, and rejected business
travellers because there are fewer of them.

In pain points I walked the journey and put a number on the pain (15–20 minutes out of a 1-hour ride). When
asked "why?", I found the root cause: three hops (book, find the Uber zone, find the car), each with no
guidance. I never said the problem statement as one sentence.

In solutions I asked for 30 seconds the right way. Then I went deep on a bundle (timed matching + car photo
+ walking directions), leaked metrics (including "weekly active users of the feature"), and named the shuttle
and PIN ideas at the end. When the interviewer pushed on PIN, I defended well: it needs a queue of cars, and the
queue may not have an XL. I didn't give an edge case.

The close: v1 = walking directions with a driver photo and ETA. My north star changed to "% in the cab within
5 minutes", and I added repeat frequency. No prerequisite, no "what waits", no guardrail, no edge case. The
summary covered problem and solution but not the north star or guardrail.

**Big insight: I have the pieces but don't assemble them.** The problem statement was said in three parts
over three turns. The prerequisites were said as "assumptions" in the solutions step and never brought back.
The north star was on the board but got rewritten in the close. The fix is to say the template sentence in
one go, and re-read the board before the close.

---

## Weak spots that day

| # | Weak spot | What happened | Status |
|---|---|---|---|
| 1 | Freezing | No freeze; one planned 30-second pause | 🟡 improving |
| 2 | Only one solution | Deep on a bundle first, but named alternatives and rejected PIN with reasons | 🟠 half |
| 3 | Not walking the flow | Entry, behind the scenes, screen; no result number, no edge case even when asked | 🟠 slipped |
| 4 | Mixing steps | Pains inside the users step again | 🔴 second mock running |
| 5 | Not locking in decisions | User pick decision-first; north star never written on the board | 🟡 improving |
| 6 | Contradicting myself | North star "median < 10" → "% within 5 minutes"; widened user to "solo or families" | 🟠 half |
| 7 | Guardrail confusion | No guardrail in the close, even with a driver-side prompt | 🔴 |
| 8 | Weak endings | Second "To summarise…"; no north star or guardrail in it | 🟡 improving |
| 9 | Asking for time | **Once, the right way, at the right step** | 🟢 fixed today |
| 10 | Not landing the decision | All pieces said, never one problem-statement sentence | 🔴 fifth mock |
| 11 | Usage-metric reflex | Best north star yet; "weekly active users of the feature" leaked into solutions | 🟡 improving |

---

## Step scores

| Step | Score | What landed | What to fix |
|---|---|---|---|
| Clarify | 6/10 | Instant start; assumptions with a reason; "why airport trips?" | One real question; "I hope"; didn't ask to vs. from the airport |
| Strategy + north star | **6/10** | Outcome north star with a usage reject; baseline and target; scoping call with a human reason | Generic why-now; no only-Uber; unbelievable target; not on the board |
| Users | 5/10 | Three sides incl. ops; families picked decision-first with a reject | Pains mixed in; no segments until pushed; one reason |
| Pain points | 6/10 | Journey walk; 15–20 minutes of a 1-hour ride; "three hops" root cause | No problem statement; widened the user |
| Solutions | 6/10 | Timed matching (only Uber); rejected PIN because it exists, and defended it with the XL point | Three ideas bundled; deep first; metrics leaked |
| Solution flow | 5/10 | Entry, timed match behind the scenes, photo and directions on screen | No result number; no edge case |
| MVP + metrics | 4/10 | v1 named (directions first); a retention metric | No prerequisite, "what waits", guardrail or edge case; north star drifted |
| Communication | 6/10 | One clean time-ask; good signposting; summary attempted | "Sorry" ×3; long turns; summary cut short |
| **Overall** | **~6/10** | First half at its best | The close and the problem statement |

---

## Model turn: the close (about 60 seconds)

> *"Let me close with what I'd ship and how I'd know it works.*
>
> *The **prerequisite** is location accuracy. The driver's spot in the pickup zone has to be right to within
> about 20 metres, 9 times out of 10. Otherwise our directions send a family with bags to the wrong pillar,
> which is worse than today.*
>
> ***v1**, in six months: walking directions from the exit to the exact car, with a photo of the spot from the
> driver, at the six busiest airports (Delhi, Mumbai, Bengaluru, Hyderabad, Chennai and Kolkata), where most
> airport trips are. Uber already shows the car model and plate number, so we build on that.*
>
> ***What waits:** timed matching, because it needs real belt-to-zone walk times, which v1 will give us. The
> shuttle waits too, because it needs airport deals.*
>
> *My **north star** stays what's on the board: median minutes from booking to the rider in the car. It's
> about 20 today, and I'm aiming for under 10.*
>
> *The **guardrail** is the driver side. If drivers wait near the zone for riders who are still at the belt,
> their idle time and cancellations go up. So I'd watch driver wait time per airport trip and the driver
> cancellation rate. One **second-order effect**: if directions work well, riders may book earlier, before
> their bags arrive, which makes drivers wait even longer. Timed matching in v2 fixes that.*
>
> ***To summarise:** families with luggage lose 15 to 20 minutes after landing, because getting to their cab
> takes three hops with no guidance. I'd ship step-by-step directions with a photo of the exact spot at the top
> six airports, then add timed matching. Success is median booking-to-car time under 10 minutes, without longer
> waits for drivers."*

| Move | Why it scores |
|---|---|
| A prerequisite with a number (20 metres, 9 in 10) | Something that must be true, not a launch city |
| "Uber already shows the car model and plate" | Rule #11: build on what exists |
| Timed matching waits *because v1 gives the data it needs* | What waits, with a dependency reason |
| North star "stays what's on the board" | No drift |
| Guardrail on the driver side | The other side of the marketplace can get worse while riders improve |
| Second-order effect (riders book earlier) | The senior signal, and it sets up v2 |

## The problem statement I could have said

> [Writes on board: Families with luggage struggle to get from the baggage belt into their cab **because** the
> path has three hops (book, find the Uber zone, find the car) and at each one they have to work out what to
> do next, **which leads to** 15–20 minutes of stress and walking with heavy bags.]

---

## Drills given

| Drill | How | Fixes |
|---|---|---|
| A. Say the whole sentence | 5 problem statements a day, each in one breath: "___ struggle to ___ because ___, which leads to ___." No splitting across sentences | #10 |
| B. The 60-second close | Say the model close above out loud, then do the same for Day 4 (LinkedIn) from memory: prerequisite → v1 → what waits → board north star → other-side guardrail → summary | #7, MVP step |
| C. Users in one-liners | Any app: name the sides, then 3 segments of one line each, then pick. Stop before any pain | #4 |
