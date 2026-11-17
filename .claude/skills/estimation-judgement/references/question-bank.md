# Question bank

Use these when the repo's `analytics-and-execution/estimation-introduction.md` examples are used up,
or for speed drills (pick three different families). Add new invented prompts at the bottom under
`### Invented — YYYY-MM-DD`.

Each prompt has a **family** (which tree pattern in `route-and-tools.md` section 4 fits), a
**difficulty**, the **decision** behind it (use it to test the "so what"), and the **swing leaf** —
the assumption the answer is usually most sensitive to (good for the interviewer's challenge).

Difficulty: **E** = one clean chain, good for speed drills. **M** = needs segmentation or a unit
conversion. **H** = several branches, stock vs flow, or an infrastructure chain.

## From the repo notes

The Introduction lists examples such as Google Play Store yearly revenue, YouTube videos watched per
day, the driverless-car market, Airbnb listings in one city, the TAM of Slack, the daily cost of
running YouTube, and the cost of capturing Street View for Manhattan. Use them as written when the
file is present. Update any dated year (e.g. "in 2025") to a future year.

## Consumer count (family A)

| # | Prompt | Diff | Decision behind it | Swing leaf |
|---|---|---|---|---|
| 1 | How many cups of chai are sold at roadside stalls in Mumbai every day? | E | Should a tea brand launch a stall-supply product? | Share of adults who buy outside tea daily |
| 2 | How many people in India take a flight in a year? | M | How big can an airport lounge or travel app get? | Repeat flyers vs one-time flyers |
| 3 | How many food delivery orders are placed in Bengaluru on a Friday night? | M | How many riders to have on shift | Share of homes ordering on a given night |
| 4 | How many people in India will use a paid AI assistant in two years? | H | Is a ₹ subscription tier worth building now? | Share of smartphone users willing to pay at all |

## B2B count (family B)

| # | Prompt | Diff | Decision behind it | Swing leaf |
|---|---|---|---|---|
| 5 | How many kirana stores in India could use a digital billing app? | E | Size of the sales team and field ops | Share with a smartphone and steady footfall |
| 6 | How many restaurants in India would pay for table-booking software? | M | Enter the market or partner with an aggregator | Share of restaurants that take bookings at all |
| 7 | How many companies in the US need a dedicated HR software tool? | M | Which company size to target first | Employee-count cut-off where spreadsheets stop working |

## Revenue / market size (family C)

| # | Prompt | Diff | Decision behind it | Swing leaf |
|---|---|---|---|---|
| 8 | What is the annual market for school tuition classes in India? | M | Is offline-to-online tutoring a big enough market? | Share of school children in paid tuition |
| 9 | What is the yearly market for two-wheeler insurance renewals in India? | M | Worth building a renewal reminder product? | Share of two-wheelers actually insured each year |
| 10 | What is the TAM, SAM and SOM for a video-conferencing tool for Indian schools? | H | Which layer justifies a team | Share of schools with reliable internet and devices |
| 11 | How much do people in India spend on mobile recharges in a year? | E | How valuable is a recharge feature inside a payments app? | Average monthly plan price |
| 12 | What is the global market for noise-cancelling headphones? | M | Should a phone maker enter this category? | Replacement cycle in years |

## Infrastructure (family D)

| # | Prompt | Diff | Decision behind it | Swing leaf |
|---|---|---|---|---|
| 13 | How much new storage does a photo-sharing app with 500M daily users need each day? | M | Budget for storage, and whether better compression pays off | Share of daily users who upload |
| 14 | What peak bandwidth does a cricket final need on a streaming app? | H | How much CDN capacity to book in advance | Peak concurrent viewers, and bitrate mix |
| 15 | How many servers does a chat app need to handle New Year's Eve at midnight? | H | Capacity plan and when to start scaling | Messages per user in the peak minute |
| 16 | What does it cost per month to store every voice note sent in India? | M | Should voice notes expire after a year? | Voice notes per user per day |

## Time / throughput (family E)

| # | Prompt | Diff | Decision behind it | Swing leaf |
|---|---|---|---|---|
| 17 | How many delivery riders does a quick-commerce app need in one city at dinner peak? | M | Hiring plan and promised delivery time | Orders per rider per hour |
| 18 | How many ATMs does a mid-size Indian city need? | E | Where to cut or add ATMs as UPI grows | Cash withdrawals per adult per month |
| 19 | How long would it take to manually review every new seller listing on a marketplace each day? | M | How many reviewers to hire versus automating | Minutes per review |
| 20 | How many EV charging points does a highway between two big cities need? | H | Where to build first and how many per site | Share of traffic that is electric, and charge time |
