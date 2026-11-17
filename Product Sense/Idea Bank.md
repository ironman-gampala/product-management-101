# Idea Bank — Product Sense Practice

> Ten feature ideas per product, grouped so you can pull **three ideas from three different lenses** in the room.
> Use this to stop the "I can only think of one solution" freeze — not to list ten features in an interview.
> Last updated: 2026-11-16

---

## Contents

| # | Product | Practice question it fits | Ideas | My top 3 | Go to |
|---|---|---|---|---|---|
| 1 | Google Calendar | "How would you improve Google Calendar?" | 10 | C1, C5, C7 | [Google Calendar](#1-google-calendar) |
| 2 | Google Maps (parking) | "How would you improve Google Maps for parking?" | 10 | M1, M3, M8 | [Google Maps](#2-google-maps-parking) |
| 3 | Quick commerce price-compare app | "How would you improve a quick commerce compare platform?" | 10 | Q3, Q1, Q9 | [Quick commerce compare](#3-quick-commerce-price-compare-app) |
| 4 | Quick commerce notifications | "Build the notifications product for the compare app" | 10 | N3, N2, N1 | [Notifications](#4-quick-commerce-notifications-product) |

**Related:** [My Profile](../My%20Profile/Profile.md) · [Daily Practice](../My%20Profile/Daily%20Practice/Index.md) · [Sample Product Sense Questions](Sample%20Product%20Sense%20Questions.md)

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

## How to use this in the room

```
  Pick ONE user  →  root problem with "because"  →  3 ideas for THAT user, from 3 lenses
                 →  pick 1 + reason + reject the others  →  walk the 6-step flow
```

- Say three **one-liners** first. Detail only the one you pick.
- Check the "Exists today?" column out loud: *"Calendar already has Focus time, so I'd go beyond it by…"*
- Look for the ⭐ **Only us** idea. It's usually your strongest pick.
- Never read out all ten. In an interview, a list reads as brainstorming, not deciding.
