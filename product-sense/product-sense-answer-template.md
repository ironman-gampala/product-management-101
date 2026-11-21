# Product Sense Answer Template

A fill-in-the-blanks script for "improve X" and "design X" questions. Every step has **sub-steps**, the
**exact line to say**, what to **write on the board**, and a **check** for the mistakes I keep making.

The running example is **"How would you improve Uber for airport trips?"** (Day 5), so every line shows a
real answer.

[← How to answer product sense questions](how-to-answer-product-sense-questions.md) · [Senior bar](../senior-bar/product-sense.md) · [Daily Practice](../my-profile/daily-practice/daily-practice.md)

---

## The whole answer on one page

```
  0–3    1. CLARIFY        restate → 3–4 questions in one batch → "I'll assume…" → "I'll go ahead"
  3–6    2. STRATEGY       mission → why us → why now → narrow → north star (3 options → pick → board)
  6–10   3. USERS          sides → lens → 3 one-liners → pick + 2 reasons + reject           (NO pains)
  10–15  4. PAIN POINTS    goal → journey → 3 numbered pains → pick → PROBLEM STATEMENT with "because"
  15–20  5. SOLUTIONS      read the "because" → 3 one-liners → pick + 2 reasons + reject     (NO detail yet)
  20–24  6. FLOW           entry → screen → action → behind the scenes → result → edge case
  24–28  7. MVP + METRICS  re-read board → prerequisite → v1 → what waits → north star → 2 guardrails
  28–30  8. SUMMARY        "To summarise…" user → problem → solution → v1 → north star → guardrail
```

**The one rule behind every step:** end it with a decision, a reason and a reject.

> "So my ___ is ___, because ___. I'm not picking ___, because ___."

**What should be on the board by the end:**

```
  ┌─────────────────────────────────────────────────────────────────────┐
  │ Assume:     India · 6 months · riders                                │
  │ North star: median minutes from booking to rider in the car          │
  │             (today ~20 → target under 10)                            │
  │ User:       families with luggage                                    │
  │ Problem:    struggle to … because … which leads to …                 │
  │ Ideas:      1. ___  2. ___  3. ___      → Pick: ___                  │
  │ v1: ___   Waits: ___   Guardrails: ___, ___                          │
  └─────────────────────────────────────────────────────────────────────┘
```

Every later step reads from this board. That's what keeps the answer consistent.

---

## 1. Clarify (0–3 min)

| Sub-step | Say this | Check |
|---|---|---|
| **1a. Restate** | "So I'm a PM at Uber, and the goal is to improve airport trips." | One sentence. Then go straight to the questions. |
| **1b. Ask 3–4 questions in one batch** | "Before I start, a few quick questions. One: why is Uber looking at airport trips now? Two: trips to the airport, from the airport, or both? Three: are we focused on riders or drivers? Four: any market or time frame in mind?" | **Your first words are a question, not a pause.** Ask only questions whose answer changes your plan. |
| **1c. Assume the rest** | "I'll assume India, six months, and riders." | "I'll assume", never "I hope". |
| **1d. Close** | "I'll go ahead with that." | A statement, not "Does that sound okay?". |

**The four questions to keep in your pocket:** why now · which part of the product · which user · market
and time frame.

---

## 2. Strategy and north star (3–6 min)

| Sub-step | Say this | Check |
|---|---|---|
| **2a. Mission** | "Uber's mission is to help people go anywhere. Airport trips are where that promise is tested most." | One line, tied to the question. |
| **2b. Why us (only-us)** | "Only Uber has GPS traces from thousands of airport pickups, so we know exactly where riders and drivers actually meet." | Name the company's unique data or scale. |
| **2c. Why now** | "Two things changed: Ola and Rapido are pushing airport offers, and prepaid counters are winning riders back." | **Name what changed.** Use what the interviewer told you in clarify. "It's a big market" is not a why-now. |
| **2d. Narrow** | "I'll focus on pickups from the airport, because the rider has just landed, is tired, and the wait hurts most there." | A decision plus a reason. |
| **2e. North star: 3 options** | "A few options: number of airport bookings, booking-to-car time, and repeat airport rides." | One line each. |
| **2f. Pick, reject, board** | "I'll pick booking-to-car time. Bookings can go up while riders are still waiting 20 minutes. [Writes on board: North star = median minutes from booking to rider in the car. Today ~20, target under 10.]" | **Test it:** "Could this go up while users are worse off?" If yes, it's usage, so reject it. Name the **end event** and a **time limit**. Keep the target believable. |
| **2g. Move on** | "Now, users." | Don't wait for approval. |

---

## 3. Users (6–10 min)

| Sub-step | Say this | Check |
|---|---|---|
| **3a. Name the sides** | "This is a marketplace, so there are three sides: riders, drivers and the airport. I'll focus on riders, because the wait is where we lose them." | In B2B: buyer, admin, end user. |
| **3b. Say the lens** | "Let me split riders by who they travel with and how often they fly." | The lens gives you the segments. You don't need inspiration. |
| **3c. 3 one-liners** | "One: frequent business travellers who travel light. Two: families with luggage. Three: first-time or foreign visitors." | **One line each. No pains, no stories.** Save them for step 4. |
| **3d. Pick, 2 reasons, reject** | "I'll pick families with luggage. First, they're the biggest group. Second, luggage makes the pickup problem worst: they walk slower and need XL cabs. I'm not picking business travellers, because there are fewer of them and they already know the airport." | Two reasons, and one ties back to the north star. One reject with a reason. |

---

## 4. Pain points (10–15 min)

| Sub-step | Say this | Check |
|---|---|---|
| **4a. Goal** | "Their goal is to step out of the airport and into the cab, with as little walking as possible." | One line. |
| **4b. Journey** | "Their journey: land → collect bags → book → walk to the exit → find the Uber zone → find the car → load bags and leave." | 5–7 steps. At each one, ask yourself "what goes wrong here?". |
| **4c. 3 numbered pains** | "I see three pains. **One**, at booking: they don't know whether to book before or after their bags. **Two**, at the zone: they can't find the Uber area. **Three**, at the car: a crowd of identical cabs, and the driver is at a different pillar." | **Number them out loud.** Pains from different steps. Put a number on one ("15–20 minutes of a 1-hour ride"). |
| **4d. Pick** | "I'll pick finding the zone and the car, because that's where most of the 20 minutes goes." | How often × how bad. |
| **4e. Problem statement** | "[Writes on board: Families with luggage struggle to get from the baggage belt into their cab **because** the path has three hops with no guidance at each one, **which leads to** 15–20 minutes of stress and walking with heavy bags.]" | **One sentence, one breath, and say it without being asked.** The "because" is what your solutions will attack. |

**Template:**
> "[User] struggles to [pain] **because** [root cause], **which leads to** [cost, with a number]."

---

## 5. Solutions (15–20 min)

| Sub-step | Say this | Check |
|---|---|---|
| **5a. Read the "because"** | "My board says the problem is three hops with no guidance. So I'll look for ideas that remove or guide those hops." | **Do this before any idea.** It stops you picking a solution for a different problem (Day 6). |
| **5b. Transition** | "Let me name three ideas from different angles first, then pick one." | If you need a pause: "Can I take 30 seconds to jot down a few ideas?", once. |
| **5c. 3 one-liners, one per lens** | "**One**, information: step-by-step walking directions with a photo of the exact spot. **Two**, automation: timed matching, so the driver reaches the zone just as the family does. **Three**, partner: a shuttle or a closer Uber lane with the airport." | **One line each. Don't detail yet.** Don't bundle three ideas into one. Look for one "only we can" idea. |
| **5d. Check what exists** | "Uber already shows the car model and plate, and PIN pickup exists at some airports, so I'll build on that." | Rule #11. Never pitch an existing feature as new. |
| **5e. Pick, 2 reasons, reject** | "I'll pick directions plus timed matching. First, together they fix all three hops on my board. Second, timed matching is something only Uber can do, because we see live supply. I'm not picking the shuttle, because airport deals take longer than six months." | The pick must fix **the "because" on the board**. One reason ties to the north star. |

---

## 6. Solution flow (20–24 min)

Say "Let me walk through how it works, from entry to result." Then one or two sentences for each step:

| Sub-step | Say this | Check |
|---|---|---|
| **6a. Entry** | "When the plane lands, Uber knows from the flight number and shows 'Book when your bags arrive'." | Where the user first meets it. |
| **6b. Screen** | "After booking, they see the car's photo, plate and exact spot: 'Pillar 14, lane B, 6 minutes walk'." | What they see. |
| **6c. Action** | "They tap 'Guide me' and get step-by-step directions with photos at each turn." | What they do. |
| **6d. Behind the scenes** | "We estimate their walk time from past pickups at that terminal, and match a driver to arrive in the same window." | Where the data and logic come from. Your engineering strength. |
| **6e. Result** | "The family walks straight to the car. Booking-to-car time drops from about 20 minutes to under 10." | **A number**, tied to the north star. |
| **6f. Edge case** | "If no XL cab can reach the zone in time, we tell them the honest wait before they leave the belt, so they can sit inside instead of standing outside with bags." | **Always give one.** It's been missing for three mocks. |

---

## 7. MVP and metrics (24–28 min)

| Sub-step | Say this | Check |
|---|---|---|
| **7a. Re-read the board** | "Let me check the board before I scope v1." | Silently check: does my v1 fit my problem and my north star? |
| **7b. Prerequisite** | "Before launch, the one thing that must be true: the driver's location at the zone must be right to within 20 metres, 9 times out of 10." | **What must be true**, not where you launch. Usually accuracy, data, permission or a partner. |
| **7c. v1** | "v1, in six months: walking directions with the spot photo, at the six busiest airports." | The smallest version that still delivers value. Say where and for whom. |
| **7d. What waits, and why** | "Timed matching waits, because it needs the real walk times that v1 will collect. The shuttle waits, because it needs airport deals." | A reason for each: dependency, data, cost or risk. |
| **7e. North star, read back** | "My north star stays what's on the board: median minutes from booking to in the car, from about 20 to under 10." | **Word for word, unchanged.** |
| **7f. 2 guardrails** | "Guardrail one: driver idle time per airport trip, because drivers might wait longer at the zone. Guardrail two: rider cancellations after matching." | **What could get worse while the north star improves?** Look at the other side of the marketplace, at quality or accuracy, and at trust. Not the north star flipped, and not feature adoption. |
| **7g. Second-order effect** | "If directions work well, riders may book before their bags arrive, which makes drivers wait. Timed matching fixes that in v2." | Something that looks healthy but hurts. A senior signal. |

---

## 8. Summary (28–30 min)

> "**To summarise:** for [**user**], the real problem is [**problem**], because [**root cause**]. I'd build [**solution**],
> starting with [**v1**]. I'd know it works if [**north star**] improves, while [**guardrail**] doesn't get worse.
> Next comes [**what waits**]."

**Example:**
> "To summarise: families with luggage lose 15 to 20 minutes after landing, because getting to their cab
> takes three hops with no guidance. I'd build step-by-step directions with a photo of the exact spot,
> starting at the six busiest airports. I'd know it works if median booking-to-car time drops under 10
> minutes, while driver idle time doesn't go up. Next comes timed matching."

30 seconds. No new ideas.

---

## Rescue lines

| When this happens | Say this |
|---|---|
| Your mind goes blank | "Let me think about this from three angles: what we can show them, what we can do for them, and what we can get others to do." |
| You need a moment | "Can I take 30 seconds to jot this down? Then I'll walk you through it." (At most twice.) |
| You can't find pains | "Let me walk through their journey and see where it goes wrong." |
| The interviewer pushes back | "That's fair. Here's why I'd still…" or "Good point. Let me update the board." |
| You realise you contradicted yourself | "Let me correct that. My board says ___, so I'll ___." |
| You lose the thread | "Let me quickly recap where we are." Then read the board top to bottom. |

## Say this, not that

| Not this | This |
|---|---|
| "Let me take a minute or two" | "Can I take 30 seconds?" |
| "I hope we can take India" | "I'll assume India" |
| "Can I take these as assumptions?" | "Since X exists, I'll build on it." |
| "If you're okay with this…" / "If we're good to go…" | "Let me walk through the MVP." |
| "Sorry" / "1 second" / "uh" | A silent breath, then the first word of the step |
| "So yeah" / trailing off | "So that's my user." / "To summarise…" |
| "Sense of entitlement" | "Sense of achievement" |

## The 10-second self-check before each step

1. Did the last step end in a **decision, reason and reject**?
2. Is the decision **on the board**?
3. Does the next step **read from the board**? Pains come from the user, solutions from the "because", and the MVP from the north star.
