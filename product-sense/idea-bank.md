# Idea Bank — Product Sense Practice

> Ten feature ideas per product, grouped so you can pull **three ideas from three different lenses** in the room.
> Use this to stop the "I can only think of one solution" freeze — not to list ten features in an interview.
> Last updated: 2026-11-21

---

## Contents

| # | Product | Practice question it fits | Ideas | My top 3 | Go to |
|---|---|---|---|---|---|
| 1 | Google Calendar | "How would you improve Google Calendar?" | 10 | C1, C5, C7 | [Google Calendar](#1-google-calendar) |
| 2 | Google Maps (parking) | "How would you improve Google Maps for parking?" | 10 | M1, M3, M8 | [Google Maps](#2-google-maps-parking) |
| 3 | Quick commerce price-compare app | "How would you improve a quick commerce compare platform?" | 10 | Q3, Q1, Q9 | [Quick commerce compare](#3-quick-commerce-price-compare-app) |
| 4 | Quick commerce notifications | "Build the notifications product for the compare app" | 10 | N3, N2, N1 | [Notifications](#4-quick-commerce-notifications-product) |
| 5 | LinkedIn Recruiter | "How would you improve LinkedIn for recruiters?" | 12 | L1, L2, L6 | [LinkedIn Recruiter](#5-linkedin-recruiter) |
| 6 | Uber airport trips | "How would you improve Uber for airport trips?" | 18 | U10, U15, U1 | [Uber airport trips](#6-uber-airport-trips-arrivals-and-departures) |
| 7 | YouTube for learners | "How would you improve YouTube for people who use it to learn?" | 15 | Y1, Y5+Y6, Y3 | [YouTube for learners](#7-youtube-for-learners) |

**Related:** [My Profile](../my-profile/profile.md) · [Daily Practice](../my-profile/daily-practice/daily-practice.md) · [Sample Product Sense Questions](sample-product-sense-questions.md)

### Lens key

| Lens | Question it answers |
|---|---|
| **Information** | What can we *show* them that they can't see today? |
| **Automation** | What can we *do for them*? |
| **Social** | How can we change what *other people* do? |
| **Incentive** | What reward or cost changes behaviour? |
| **Partner** | Which business or third party can we bring in? |
| ⭐ **Only us** | Does it rely on data or scale only this company has? |

### "Exists today?" column
Rule 11: know what the product already has. ✅ = exists (build on it, don't pitch as new) · 🟡 = partly exists · ❌ = new.
These are best-effort as of Nov 2026 — check before an interview.

---

## 1. Google Calendar

**Focus user:** the player-coach lead (hands-on work + many meetings). **Root problem:** ~4 free hours a day, scattered in 30-minute gaps, *because* meetings land anywhere.
**North star:** % of users with 3+ hours a week of focus time in blocks of 2+ hours.

**Already exists — build on, don't pitch:** Focus time (can auto-decline), Time insights (where your time goes), Appointment schedules, Find a time, Speedy meetings, Working location, Gemini in Calendar, Gemini notes in Meet.

| # | Feature | Who | Problem it fixes | What it is | Lens | Exists today? |
|---|---|---|---|---|---|---|
| C1 | **Meeting stacking suggestions** | Organizers, every attendee | Meetings land anywhere and break free time into scraps | While booking (and again when meetings get cancelled), Calendar suggests a time that keeps a longer free block for everyone: "Move to 4:30 → 3 people get 90 free minutes." | Social ⭐ Only us | ❌ |
| C2 | **"Send me the summary" RSVP** | Optional attendees | People sit in meetings they only need the outcome of | A third choice next to Accept / Decline. You skip the meeting and get the Gemini notes, decisions and your action items afterwards. Organizers see who's async. | Social / Automation | 🟡 Gemini notes exist; RSVP option doesn't |
| C3 | **Meeting cost preview** | Organizers | Nobody sees how much time an invite costs | When you invite 8 people for an hour: "This costs 8 hours. 3 attendees have under 1 hour of focus time left this week." | Information | ❌ |
| C4 | **Auto-protected focus time** | Busy ICs and leads | Focus time exists, but people must set it up and defend it, so most don't | Calendar places focus blocks for you based on your workload and moves them (instead of deleting them) when a real conflict comes up. | Automation | 🟡 Manual Focus time exists |
| C5 | **Recurring meeting health check** | Organizers, teams | Recurring meetings live forever, even when no longer useful | Flags recurring meetings with falling attendance, no agenda or no notes: "Still needed? 4 of 6 people skipped the last 3." One tap to shorten, make biweekly or end. | Automation / Information | ❌ |
| C6 | **Agenda-first invites** | Teams with meeting overload | Meetings with no clear goal run long and pull in extra people | Meetings over 30 minutes ask for a one-line goal. Gemini drafts it from the email or doc thread. Invites without a goal show a soft warning. | Social | 🟡 Descriptions exist; no nudge |
| C7 | **Admin focus policies** | IT and HR admins (B2B buyer value) | Companies want "no-meeting Wednesdays" but can't enforce them | Admins set company-wide focus windows or meeting-free days. Calendar warns organizers and suggests other times. The buyer sees adoption in the admin console. | Partner / Social (B2B) | ❌ |
| C8 | **Auto prep time** | Presenters, leads | Meetings that need prep eat the gap before them | Calendar spots meetings where you present or a doc is attached and blocks 15 minutes before, linked to the doc. | Automation | ❌ |
| C9 | **Time zone fairness** | Global teams | The same region always gets the 9 pm call | Shows each attendee's local time on the invite and rotates the inconvenient slot across regions for recurring meetings. | Information / Social | 🟡 Time zones shown; no fairness |
| C10 | **Weekly plan and review** | Everyone | People don't plan their week around focus | A Monday plan ("11 hours of meetings, 2 focus blocks — here's how to get a third") and a Friday recap against the north star. | Information | 🟡 Time insights shows the past only |

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **C1 Meeting stacking** | Attacks the root cause, and it's "only Google": Calendar can see every attendee's schedule in a Workspace company. |
| **C5 Recurring meeting health check** | Recurring meetings are a big share of meeting hours, so one tap can free hours a week with low effort. |
| **C7 Admin focus policies** | B2B angle: gives the *buyer* a reason to stay on Workspace instead of moving to Microsoft 365. |

---

## 2. Google Maps (parking)

**Focus user:** a leisure visitor driving to an unfamiliar, busy area (India metros). **Root problem:** 10–15 minutes of circling *because* they can't see where parking is or whether it's free.
**North star:** % of trips to hard-to-park areas where the user parks within 3 minutes of arriving, without circling.

**Already exists — build on:** Saved parking location, parking difficulty labels and "Find parking" in some markets (limited in India), Live View walking directions, EV charger availability.

| # | Feature | Who | Problem it fixes | What it is | Lens | Exists today? |
|---|---|---|---|---|---|---|
| M1 | **Find parking with availability labels** | Leisure visitors | Can't see where parking is or whether it's free | A list of nearby lots, streets and valet within a 5-minute walk, with "usually free now / often full" labels and price. | Information | 🟡 Some markets only |
| M2 | **Navigate to the parking entrance** | All drivers | "You have arrived" leaves you at the door, not the lot | The destination switches to the lot entrance, then to walking directions, and saves where you parked. | Automation | 🟡 Saved parking exists |
| M3 | **"Spot freeing up" signals** | Drivers in dense areas | Street spots open and close in minutes | When a Maps user who parked nearby starts driving away, Maps tells nearby drivers a spot is likely free. Anonymised and opt-in. | Social ⭐ Only us | ❌ |
| M4 | **Book and pay for a slot** | Mall, office and event visitors | Lots are full when you arrive | Reserve and pay through partner lots and parking apps from inside Maps. | Partner | ❌ in India |
| M5 | **Smart re-route if the lot is full** | Anyone whose lot is full | The data was wrong, and now they circle | Maps sees you slowing and circling near the lot and suggests the next nearest option straight away. | Automation | ❌ |
| M6 | **Two-wheeler parking layer** | Bike and scooter riders (India) | Two-wheeler parking is different from car parking | Separate spots and rules for two-wheelers, from user reports and partners. | Information | ❌ |
| M7 | **Business parking and valet info** | Restaurants, malls, hospitals | Businesses know their parking, but Maps doesn't show it | Businesses add valet, parking at the back, or a partner lot in their Business Profile. | Partner | 🟡 Basic attributes exist |
| M8 | **Drive or not? comparison** | People deciding how to travel | They drive, then get stuck parking | Before the trip: "Driving: 25 min + ~12 min to park + ₹100. Metro: 32 min, ₹40." | Information | 🟡 Mode comparison exists; parking time isn't included |
| M9 | **Time-limit and tow-zone alerts** | Street parkers | Fines, towing, forgotten meters | Auto-saves your spot, warns about no-parking or tow zones, and reminds you before a time limit ends. | Automation | 🟡 Saved spot exists |
| M10 | **Event parking plans** | Stadium, concert and wedding goers | Huge crowds arriving at once | Venue-partner lot maps, pre-booking, shuttle info and staggered arrival suggestions. | Partner | ❌ |

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **M1 Find parking + labels** | Goes straight at the root cause, and it's the foundation that booking and re-routing need. |
| **M3 Spot-freeing signals** | "Only Google": no parking app has millions of drivers' movements. |
| **M8 Drive or not?** | Fixes the problem *before* the trip, so some people don't need parking at all. A strong second-order idea. |

---

## 3. Quick commerce price-compare app

**Focus user:** Priya, the weekly stocker (₹1,000–1,500 basket, 2–3 quick commerce apps). **Root problem:** we compare item prices, but she pays a cart price; fees make "cheapest" wrong about 1 in 3 times.
**North star:** weekly verified savings handoffs (the final checkout price really was lower than her usual app).
**Brand side:** Karan (FMCG e-commerce head), Neha (D2C founder). **Rule:** brands buy insight and labelled spots, never ranking.

| # | Feature | Who | Problem it fixes | What it is | Lens | Phase |
|---|---|---|---|---|---|---|
| Q1 | **Clean catalog + unit price** | All shoppers | 1 kg compared with 5 kg; wrong variants | One matched entry per product across apps, a price per kg or litre, and a "closest match" tag when unsure. | Information | Now (prerequisite) |
| Q2 | **Smart sorts and filters** | All personas | Basic filters don't match how people decide | Sort by final cart price, price per kg, delivery time and "in stock near me". Respects memberships. | Information | Now (basic) |
| Q3 | **True-price basket + one-tap handoff** | Priya | Item winner ≠ checkout winner | A saved staples list priced at checkout on each app (all fees, best coupon, memberships), with a breakdown and one-tap handoff. | Automation | Now (hero) |
| Q4 | **Membership-aware pricing** | Members of Swiggy One, Zepto Pass and so on | Free delivery doesn't apply on other apps, so comparisons mislead | "I have Swiggy One" toggles feed into every price shown. | Information | Now |
| Q5 | **Price and stock alerts** | Ananya, Meena, Priya | Don't know when to buy; brand out of stock | Target price, back in stock by pincode, and "basket is cheaper" alerts. | Automation | Next |
| Q6 | **Availability finder** | Rohan, Meena | Opens an app and finds it out of stock | "Who has it in stock right now, and how fast?" for one item. | Information | Next |
| Q7 | **Verified savings tracker** | All shoppers | Trust: "did I really save?" | "Did you pay about ₹1,140?" check and a monthly verified-savings total. | Information / Trust | Now (in-app) |
| Q8 | **Split-basket optimizer** | Priya | Sometimes two apps together are cheaper | Shown only when the saving after both sets of fees is ₹80 or more. | Automation | Later |
| Q9 | **Brand shelf + missed-demand dashboard** | Karan (B2B) | No single, fast view of stock, price and missed demand | Stock by pincode, price gaps and search rank across 4 apps, plus "2,300 searches in Pune while out of stock everywhere". | Information ⭐ Only us | Pilot |
| Q10 | **Labelled brand discovery** | Neha (D2C) | Can't afford platform ad minimums | "New launch" and "try a sample" spots, kept apart from rankings, clearly labelled. | Partner / Incentive | Later (trust risk) |

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **Q3 True-price basket** | Fixes the broken promise ("cheapest") and moves the north star directly. |
| **Q1 Clean catalog** | The prerequisite: every other feature is wrong if matching is wrong. |
| **Q9 Brand dashboard** | "Only us": cross-app demand that no single platform can see. It's the business model. |

---

## 4. Quick commerce notifications product

**Rule:** no saving, no stock news, no user request → no notification.
**Metric:** verified savings handoffs per 1,000 sends, plus a 10% holdout group to prove retention lift.
**Engine:** trigger → match → score (₹ saving × chance they buy soon × price confidence − tiredness) → rules (3 a week, quiet hours, merge, price fresh within 15 minutes) → channel and time → re-check the price on open → learn.

| # | Feature | Who | Problem it fixes | What it is (example) | Lens | Counts toward weekly cap? |
|---|---|---|---|---|---|---|
| N1 | **Target price alert** | Ananya, Priya | Don't know when to buy | "Fortune oil 1L is ₹138 on Zepto. Your target was ₹140." | Automation | No (user asked) |
| N2 | **Back in stock near you** | Meena | Her brand is out of stock; substitutes won't do | "Your formula is back on Blinkit, about 12 minutes away." Can be marked urgent to skip quiet hours. | Automation | No (user asked) |
| N3 | **Basket is cheaper** | Priya | The weekly basket price moves with fees | "Your weekly basket is ₹85 cheaper on Instamart today." Sent Saturday morning before her usual shop. | Information | Yes |
| N4 | **Restock reminder** | Priya | Runs out before she remembers | "Your atta usually runs out around now. It's ₹18 cheaper on Blinkit." Needs 6+ weeks of purchase data. | Automation | Yes |
| N5 | **Fee timing tip** | Rohan | Late-night and rain fees surprise him | "Late-night fees start at 11 pm. Order now to save ₹25." Only when true. | Information | Yes |
| N6 | **Weekly savings recap** | Everyone | Forgets the value we give | "You saved ₹340 this month." In-app inbox only. | Information / Trust | No (in-app) |
| N7 | **"Did you pay this?" check** | Everyone | We can't verify our accuracy | 30 minutes after a handoff: "Did you pay about ₹1,140?" In-app only. | Trust | No (in-app) |
| N8 | **Brands you follow** | Opted-in shoppers, Neha | Brands want reach; shoppers fear spam | New launches from brands the shopper chose to follow. Labelled, at most 1 a week. | Partner | Yes |
| N9 | **Smart merge + send-time** | Everyone | Three alerts at once feel like spam | Alerts due together merge into one message, sent when this person usually shops. | Automation | — (engine rule) |
| N10 | **Brand alerts (B2B)** | Karan's team | Finds stock-outs and price undercuts late | "Your shampoo is out of stock on 2 apps in South Mumbai since 9 am." By email, Slack or WhatsApp to the brand, never to shoppers. | Information ⭐ Only us | — (B2B, paid) |

**Deliberately not sending:** daily "top deals" blasts, streaks or games, unlabelled brand pushes, fake urgency.

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **N3 Basket is cheaper** | Ties straight to the north star and builds Priya's weekly habit. |
| **N2 Back in stock** | The highest intent of any alert, the user asked for it, and almost no spam risk. Ship in v1. |
| **N1 Target price** | User-requested, easy to build, and every alert set doubles as a demand signal for brands. |

---

## 5. LinkedIn Recruiter

**Focus user:** in-house recruiters at mid-size companies (200–2,000 people) hiring experienced people. **Root problem:** they send 50 InMails and get about 5 replies, *because* they reach out to "the whole ocean" with no signal of who is open to a move or fits their pay range.
**North star:** % of LinkedIn-sourced candidates hired within 45 days.
**Why now:** Easy Apply and AI-written applications flood inbound; InMail reply rates are falling; AI sourcing tools and Naukri (in India) compete for seats.

**Already exists — build on, don't pitch:** Open to Work (recruiter-only, hidden from your own company's recruiters), Spotlights (e.g. open to work, engaged with your company), AI-assisted search, AI-assisted messages (InMail drafts), Hiring Assistant (an AI agent for sourcing and outreach), screening questions on job posts, Salary insights, ATS integrations, InMail credits returned when a candidate replies.

| # | Feature | Who | Problem it fixes | What it is | Lens | Exists today? |
|---|---|---|---|---|---|---|
| L1 | **Likely-to-reply ranking** | Recruiter (outbound) | 50 InMails, 5 replies | Search results ranked by the chance of a reply: open to a move, same title for 3+ years (due for a step up), pay fit, past reply rate. It shows the reasons ("open to work · 4 years as PM"), never a score about the person. | Information ⭐ Only us | 🟡 Spotlights and Open to Work exist; no combined ranking |
| L2 | **Private move preferences** | Candidate + recruiter | Candidates get irrelevant InMails; recruiters chase people who won't move | Candidates privately set roles, minimum pay, notice period and locations. InMails that match get a "matches your preferences" tag and go to the top of the inbox. Before sending, the recruiter sees "outside their preferences". | Incentive / Social | 🟡 Open to Work has titles and locations; no pay floor or inbox priority |
| L3 | **Pay-fit check before sending** | Recruiter | Good candidates drop out late over salary | The recruiter enters a hidden pay band on the role. Recruiter compares it with the estimated pay for the candidate's title, company and city: "Likely above your band." | Information ⭐ Only us | ❌ Salary insights exist for job seekers only |
| L4 | **Warm intro finder** | Recruiter, employees | Cold InMails get ignored | Shows which of your employees worked with or are connected to the candidate, with a one-click referral ask in Slack or Teams. | Social ⭐ Only us | 🟡 Connection spotlight exists; no referral ask |
| L5 | **"Why you" fit card in the InMail** | Candidate | InMails feel generic, so people ignore them | The InMail comes with a short card: skills that match, whether the pay range fits their preferences, team size, and the step up from their current title. | Information / Incentive | 🟡 AI drafts the text; no structured card |
| L6 | **Applicant triage** | Recruiter (inbound) | 400 Easy Apply applicants, most not a fit | Groups applicants into strong / maybe / no against the must-haves, with reasons, and flags near-identical AI-written applications. | Automation | 🟡 Screening questions exist; Hiring Assistant partly |
| L7 | **Fit check before Easy Apply** | Candidate | People apply to everything, which floods recruiters | Before applying: "You match 2 of 6 must-haves." Strong matches get a "strong match" badge in the recruiter's list. Fixes the noise where it starts. | Incentive | 🟡 Skills match shown to job seekers |
| L8 | **Hiring manager calibration** | Hiring manager + recruiter | Two weeks of back-and-forth about "what good looks like" | On day 1 the hiring manager gives a yes or no on 10 sample profiles. Search and ranking learn from it, and the recruiter sees what the manager valued. | Automation / Social | ❌ |
| L9 | **Role health forecast** | Recruiter + hiring manager | Roles stall and nobody knows why until month two | "At the current reply rate, this role takes about 70 days. Opening it to remote, or adding 10% to the band, roughly doubles the pool." | Information ⭐ Only us | ❌ |
| L10 | **Close-the-loop messages** | Candidate | Candidates reply, then get ghosted, so they stop replying next time | When a candidate is rejected or the role closes, Recruiter drafts a short, kind closing note. Recruiters who close the loop get a "responsive recruiter" badge, which raises future reply rates. | Social / Incentive | ❌ |
| L11 | **Seat value dashboard** | Buyer (head of talent) | Hard to prove Recruiter is worth it at renewal | Hires per seat, time to fill against the market, and reply rate against similar companies, in one renewal-ready view. | Information (B2B) | 🟡 Usage reports exist |
| L12 | **Shortlist fairness check** | Buyer, admin, candidates | AI ranking can quietly push down people with career gaps or who rarely reply | Compares the shortlist mix with the wider talent pool, flags when a group drops out, and explains the ranking factors. | Trust | 🟡 Some diversity insights exist |

**Deliberately not building:** a visible "likely to switch" score on a person's profile (privacy, and employers would misuse it); bulk-InMail tools that raise volume (more noise, lower replies); selling candidates' preference data to employers.

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **L1 Likely-to-reply ranking** | Attacks the root cause ("the whole ocean") and is only-LinkedIn: no one else has openness, tenure and reply history together. |
| **L2 Private move preferences** | Fixes both sides of the marketplace. It feeds L1 with better data, answers the privacy question, and protects the guardrail (candidates flooded with InMails). |
| **L6 Applicant triage** | Covers the other half of the why-now (the Easy Apply flood), and it's the easiest one to measure in v1. |

**Pick three for the user you chose**
| If your user is… | Use these three (one per lens) |
|---|---|
| Outbound recruiter, mid-size company | L1 (information), L4 (social), L2 (incentive) |
| High-volume inbound recruiter | L6 (automation), L7 (incentive), L8 (social) |
| Buyer / head of talent | L11 (information), L9 (information), L12 (trust) |

**Guardrails to pair with these:** InMail spam-report rate; InMails received per open-to-work candidate per week; the rate at which people turn off Open to Work; shortlist mix compared with the talent pool.

---

## 6. Uber airport trips (arrivals and departures)

**Arrivals focus user:** families with luggage. **Root problem:** 15–20 minutes from booking to in the car, *because* the path has three hops (book, find the Uber zone, find the car) with no guidance.
**Departures root problem:** riders fear missing their flight, *because* early-morning drivers cancel or arrive late.
**North star (arrivals):** median minutes from booking to rider in the car. **Departures:** % of airport drops that arrive on time with no driver cancellation.

**Already exists — build on, don't pitch:** car model, colour and plate in the app; PIN pickup at some airports; Uber Reserve (book ahead, flight tracking in some markets); airport pickup zone guidance at some airports; XL; driver airport queues.

### Arrivals (pickup from the airport)

| # | Feature | Who | What it is | Lens | Exists today? |
|---|---|---|---|---|---|
| U1 | **Flight-linked booking** | Rider | Add your flight once. Uber tracks the landing and the belt, and prompts "Bags on belt 5 — book now?" at the right moment. Fixes "when do I book?". | Automation | 🟡 Reserve tracks flights in some markets |
| U2 | **Timed matching** | Rider, driver | Uber knows the belt-to-zone walk takes about 7 minutes, so it matches a driver to arrive just then. No one waits. | Automation ⭐ Only us | ❌ |
| U3 | **Step-by-step walking directions** | Rider | Exit → Uber zone → pillar → car, with photos of each turn, the walking time and the distance. | Information | 🟡 Some airports |
| U4 | **Photo of the exact spot** | Rider | The driver's app snaps their spot ("Pillar 14, lane B"), shown next to the plate number. | Information | 🟡 Plate and model exist |
| U5 | **Luggage-aware matching** | Families | Enter the number of bags. Uber suggests XL or matches a sedan whose driver confirmed boot space. | Automation | 🟡 XL exists; no bag count |
| U6 | **Book without data** | Foreign visitors, no signal | A QR at the belt that opens a light booking page on airport Wi-Fi, or an SMS booking. | Partner | ❌ |
| U7 | **Same-flight shared ride** | Solo, budget riders | "3 people from your flight are going to Whitefield. Share and save 40%." | Social ⭐ Only us | ❌ |
| U8 | **Wait-time promise** | Rider | If you wait more than 10 minutes after reaching the zone, you get a credit. Builds trust against prepaid counters. | Incentive | ❌ |
| U9 | **Porter and trolley partner** | Families, elderly | Book a porter who meets you at the belt and walks you to the car. | Partner | ❌ |

### Departures (drop to the airport)

| # | Feature | Who | What it is | Lens | Exists today? |
|---|---|---|---|---|---|
| U10 | **Guaranteed early-morning pickup** | Rider | Driver assigned the night before. If they aren't moving 20 minutes before pickup, a backup is assigned automatically. | Automation ⭐ | 🟡 Reserve exists; no automatic backup |
| U11 | **"Leave by" suggestion** | Rider | Add your flight. Uber suggests a leave-by time using traffic, terminal and typical security queues, and books it. | Information ⭐ Only us | 🟡 |
| U12 | **"Will I make it?" ETA** | Rider | During the trip: arrival time against your check-in cut-off, in green or red, shared with family. | Information | ❌ |
| U13 | **Missed-flight protection** | Rider | If a driver cancels on an airport drop, you get priority rematch and Uber covers the fare difference for a premium car. | Incentive | ❌ |
| U14 | **Right terminal, right gate** | Rider | Picks the terminal and departure gate from your airline automatically, so there's no wrong-terminal drop. | Automation | 🟡 |

### Driver and ops side

| # | Feature | Who | What it is | Lens | Exists today? |
|---|---|---|---|---|---|
| U15 | **Drop-to-pickup chaining** | Driver | A driver dropping at departures is matched with a rider landing in 20 minutes, so there's no empty return or 1-hour idle wait. | Automation ⭐ Only us | 🟡 Airport queues exist |
| U16 | **Queue transparency** | Driver | "You're 34th in the queue, expected wait 50 minutes." The driver decides whether to wait or go back to the city. | Information | 🟡 Some airports |
| U17 | **Supply forecast from flight schedules** | Ops manager | Uses arrival schedules to move drivers to the airport before each wave of landings. | Automation ⭐ Only us | 🟡 |
| U18 | **Airport-trip incentive for drivers** | Driver | A bonus or queue priority for early-morning airport drops, so drivers stop cancelling them. | Incentive | 🟡 |

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **U10 Guaranteed early-morning pickup** | Fixes the biggest fear (missing a flight), and a backup driver is something only a platform with live supply can do. |
| **U15 Drop-to-pickup chaining** | Fixes both sides at once: the driver's idle hour and the rider's wait. Strong marketplace answer. |
| **U1 Flight-linked booking** | Removes the "when do I book?" dilemma, and gives the data that timed matching (U2) needs. |

**Guardrails to pair:** driver idle time per airport trip; driver cancellation rate on airport trips; price paid per trip (shouldn't creep up); rider cancellations after matching.

---

## 7. YouTube for learners

**Focus user:** active learners: working professionals upskilling (e.g. learning LLMs, Excel, design). **Root problem:** they quit after 2–3 of 10 videos, *because* a playlist has no plan, no checkpoints and no reward.
**North star:** % of learners who start a learning path and pass the end skill check within 30 days (paired with the number who start).
**Why now:** Shorts pull learners away mid-session; AI assistants now answer "how do I…" questions directly.

**Already exists — build on, don't pitch:** chapters, transcripts, playlists, Courses (some markets), the AI "Ask" button on some videos, "most replayed" moments, continue watching, playback speed, take-a-break reminders.

| # | Feature | Gap it fixes | What it is | Lens | Exists today? |
|---|---|---|---|---|---|
| Y1 | **Plan my program** | No plan | Tell YouTube your goal and free time. It turns the playlist into a schedule with reminders, synced to Google Calendar. | Automation ⭐ Only us | 🟡 Courses have an order; no schedule |
| Y2 | **Turn any playlist into a course** | No plan | AI orders the videos, removes repeats, estimates the hours, and adds checkpoints, for any creator's playlist. | Automation | ❌ |
| Y3 | **Focus mode** | Drift | During a learning session, hide Shorts, comments and side recommendations. Autoplay goes to the next lesson, not a rabbit hole. | Automation | ❌ |
| Y4 | **"Continue your course" card** | No return | The first card on Home: "Python course: lesson 4, 12 minutes." Works across phone, laptop and TV. | Information | 🟡 Continue watching exists |
| Y5 | **In-video skill checks** | No checkpoints | After each chapter, Ask AI writes 2–3 questions from the transcript. You see where you stand. | Information | 🟡 Ask can answer questions on some videos |
| Y6 | **Start and end skill check** | No checkpoints | A short check before and after the course measures how much you gained. It also powers the north star. | Information ⭐ | ❌ |
| Y7 | **Practice tasks** | No checkpoints | For coding courses, a Colab notebook with one exercise per chapter. | Partner ⭐ Only Google | ❌ |
| Y8 | **AI explainers at the hard parts** | Confusion | Uses "most replayed" moments and the questions people ask to find hard parts, then explains them simply. | Information ⭐ | 🟡 |
| Y9 | **Auto notes and flashcards** | Forgetting | Ask AI turns each chapter into notes and flashcards that come back a few days later. | Automation | ❌ |
| Y10 | **Learning cohort** | No reward | Start with others this week, see their progress, and discuss in a shared thread. | Social | ❌ |
| Y11 | **Weekly goals and milestones** | No reward | A weekly goal ("3 lessons this week"), not a daily streak that punishes busy days. | Incentive | ❌ |
| Y12 | **Shareable skill badge** | No reward | Pass the end check and get a badge you can add to LinkedIn. Partner with Google Career Certificates for bigger courses. | Incentive / Partner | ❌ |
| Y13 | **Creator learning dashboard** | Creator side | Creators see where learners fail checks or drop off, and fix those lessons. | Information | 🟡 Retention graphs exist |
| Y14 | **Reward creators for learning** | Creator side | Learning creators earn extra when their viewers pass checks, not just for watch time. | Incentive ⭐ | ❌ |
| Y15 | **"Best course for my level"** | Discovery | "I know Python basics and want to learn LLMs." AI suggests a path across creators, ranked by how often learners pass. | Information ⭐ Only us | ❌ |

**Deliberately not building:** daily streaks that punish busy days; leaderboards that reward speed over understanding; locking free tutorials behind a paywall.

**Top 3 and why**
| Pick | Why it's strong in the room |
|---|---|
| **Y1 Plan my program** | Attacks the main root cause (no plan), and Google Calendar sync is something only Google can do well. |
| **Y5 + Y6 Skill checks** | They fill the "no checkpoints" gap and are what the north star is measured with. Built on Ask. |
| **Y3 Focus mode** | Directly answers the why-now (Shorts pulling learners away), and is cheap to build. |

**Wildcard senior pick:** Y14. It changes what creators are paid for, from watch time to learning. It's bold, and only YouTube can do it.

**Pick three for the gap on your board**
| If your "because" is… | Use these three |
|---|---|
| No plan | Y1, Y2, Y4 |
| No checkpoints | Y5, Y6, Y7 |
| No reward | Y10, Y11, Y12 |
| Confusion | Y8, Y9, Y5 |
| Drift into Shorts | Y3, Y4, Y1 |

**Guardrails to pair:** AI explanation and quiz error rate (sampled by experts); creator watch time and earnings; notification opt-outs; quiz gaming (pass rate up, rewatches down).

---

## How to use this in the room

```
  Pick ONE user  →  root problem with "because"  →  3 ideas for THAT user, from 3 lenses
                 →  pick 1 + reason + reject the others  →  walk the 6-step flow
```

- Say three **one-liners** first. Detail only the one you pick.
- Check the "Exists today?" column out loud: *"Calendar already has Focus time, so I'd go beyond it by…"*
- Look for the ⭐ **Only us** idea. It's usually your strongest pick.
- Never read out all ten. In an interview, a list reads as brainstorming, not deciding.
