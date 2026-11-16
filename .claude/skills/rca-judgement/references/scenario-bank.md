# Scenario bank

> **Spoiler warning for learners:** this file holds the hidden answers Claude uses as the interviewer.
> If you read it, pick a scenario you haven't read, or ask Claude for an invented one.

Ready-made RCA scenarios so a mock stays consistent from the first question to the last. Each card has
the prompt, the hidden root cause, the answers to the four doors, the data to reveal **only when
asked**, a red herring, a curveball, and what a strong close looks like.

## How to use a card (interviewer)

- Pick a card before the first line and don't name it. Vary cards across sessions.
- Read the prompt as written. Don't add the definition, the timing or the segments — those are what
  the candidate should ask for.
- Answer only the question asked, using the card's numbers. Answer the observable, not the hypothesis.
- If asked something not on the card, derive an answer that fits the root cause and keep it
  consistent for the rest of the mock. When in doubt, the honest analyst answer is fine ("We don't
  track that weekly", "Which segment?").
- The red herring is real data. Let the candidate investigate it; the answers will not fit.
- Drop the curveball around minute 15, or once they commit to a cause.
- After the close, reveal the root cause and the shortest path to it.

The ten cards cover every bucket: infrastructure (1), product change (2), cohort/mix (3), model
regression (4), measurement (5), competitor (6), seasonality (7), regulation (8), and two
conflicting-metric cards (9, 10).

---

## 1. Spotify — Premium checkout conversion down in India

**Prompt:** "Spotify's Premium checkout conversion in India dropped 20% over the last week. What's
going on?"
**Shape:** rate drop · sudden · concentrated. **Truth bucket:** infrastructure — silent third-party
dependency.

**Hidden root cause:** The UPI payment partner that handles about 70% of Android payments in India
changed its API last Tuesday. Bank approval calls now often time out. Spotify's checkout logs a timeout
as "user cancelled", so no error alert fired. Card and wallet payments are fine.

**Four doors:** External event — none known (no holiday, no competitor promo). Sudden — dropped over
one day, Tuesday. Concentrated — Android, UPI only; iOS and card payments flat. Did we change anything
— no Android release in 10 days; a small checkout copy change on iOS last week.

**Data if asked:**
- Definition: completed Premium payments ÷ users who reached the payment screen. 42% → 34% (7-day
  average vs the prior 4 weeks).
- Users reaching the payment screen: flat, about 1.1M a week.
- By platform: Android 41% → 30%; iOS 45% → 45%.
- By payment method: UPI 44% → 29%; cards 38% → 37%; wallets flat.
- Payment step latency: p50 2.1s → 2.6s; p95 4s → 19s.
- Error-rate dashboard: flat. Alerts: none fired. "User cancelled" events: up 3.4×.
- Partner status page: "minor degradation" posted Wednesday.
- Last year same week: flat. Competitors: no big promo. Checkout events: unchanged.

**Red herring:** the iOS copy change (iOS is flat).
**Curveball:** "The partner says it's fixed as of yesterday, but conversion is only back to 36%." →
Still failing for one large bank's customers (about 30% of UPI volume), and users who failed once
mostly didn't retry.

**Strong close:** Route that bank's UPI traffic to the backup partner now (costs about 0.3 points more
in fees); log timeouts as errors with an alert; send a one-tap retry to users who failed this week.
Owner: payments platform PM with payments on-call; escalate to the partner manager. Asymmetry: the fee
is small and reversible, while a lost subscriber is months of revenue. Reversal: if the backup
partner's success rate is below 40% after 48 hours, move traffic back and escalate.

---

## 2. Instagram — Story replies down

**Prompt:** "Replies to Instagram Stories are down 15% week over week. Why?"
**Shape:** volume drop · sudden · broad (inside one test arm). **Truth bucket:** product/UX change
(experiment).

**Hidden root cause:** An experiment ramped from 5% to 50% of users on Monday. It added a quick
reactions bar and moved the reply box behind a tap. In the treatment arm replies are down 28%; control
is flat. Power users who reply five or more times a day are hit hardest.

**Four doors:** External — none. Sudden — dropped on Monday. Broad — all countries, iOS and Android.
Did we change anything — yes, three Stories changes that week: the reactions-bar test, a new music
sticker, and a Stories tray ranking tweak.

**Data if asked:**
- Story views: flat (+1%). Reply rate per view: down by the same 15%.
- Reactions-bar test: treatment replies −28%, control flat. Quick reactions in treatment +60%.
- Power users (5+ replies a day) in treatment −45%; light users −10%.
- DM threads started from a Story: treatment −20%. Total DMs: −3%.
- Music sticker: replies on stories with and without the sticker are the same.
- Tray ranking test: no difference in replies between its arms.
- Latency, crash rates, logging: unchanged. Last year same week: flat.

**Red herring:** the tray ranking tweak (its arms are identical on replies).
**Curveball:** "The test owner points out that reactions are up 60%, so total interactions are up 12%
in treatment. They want to ship it." → A conflicting-metric tension: reactions are one tap; replies
start conversations, and DM threads from Stories are down 20%.

**Strong close:** Don't ship as is; don't kill the reactions bar either. Test a variant with the reply
box visible again plus reactions. Owner: the Stories PM who owns the test. Asymmetry: replies feed DMs,
a core retention loop, and lost conversation habits are slow to rebuild; delaying reactions costs a
couple of weeks. Reversal: ship the variant if DM threads from Stories are within 2% of control and
reactions stay at least 40% up after two weeks.

---

## 3. Duolingo — day-7 retention down

**Prompt:** "Duolingo's day-7 retention for new users fell from 55% to 48% over the last six weeks.
What's happening?"
**Shape:** rate drop · gradual · broad at first look, concentrated by channel. **Truth bucket:**
cohort/mix.

**Hidden root cause:** Six weeks ago growth started a short-video ad campaign. That channel went from
5% to 30% of new users, and its day-7 retention is 31%. Every other channel is steady at 54–56%.
Blended: 0.7 × 55 + 0.3 × 31 ≈ 48. Nothing in the product got worse.

**Four doors:** External — none. Gradual — about one point a week. Broad — across countries and
platforms (the campaign runs everywhere); concentrated only if cut by acquisition channel. Did we
change anything — a redesigned streak screen shipped four weeks ago. (The campaign is marketing's; say
so only if asked about acquisition, channels or marketing.)

**Data if asked:**
- Definition: share of a week's new sign-ups who finish a lesson on day 7.
- New sign-ups: up 35% over the six weeks.
- Day-7 by channel: new video-ad channel 31%; organic 56%; app-store search 55%; referral 58%.
- Day-1 by channel: video-ad channel 50%; others about 70%.
- Streak screen: shipped four weeks ago after an A/B test with no day-7 difference.
- Crash rate, lesson load time: flat. Event definitions: unchanged. Last year same window: flat.

**Red herring:** the streak screen. Step-back trap: it shipped after the drop began, its test was
neutral, and older channels are flat — three answers that don't fit.
**Curveball:** "Marketing says that channel's users cost 40% less to acquire." → The decision is
payback per channel, not the blended retention number.

**Strong close:** The product isn't broken; report day-7 by channel. Run an onboarding test for that
channel (set a goal in the first lesson). Owner: growth marketing lead for spend, onboarding PM for the
test. Reversal: if that channel's 60-day paid conversion keeps its payback beyond 12 months, cut its
spend in half.

---

## 4. Netflix — homepage play starts down

**Prompt:** "Play starts from the Netflix homepage, per session, dropped 9% over the last three weeks.
Diagnose it."
**Shape:** rate drop · gradual, in steps · concentrated by language. **Truth bucket:** quality/model
regression.

**Hidden root cause:** A new recommendation model ramped 10% → 50% → 100% over three weeks. It leans
on global popularity, so for profiles whose main language isn't English it shows far fewer
local-language titles in the top rows.

**Four doors:** External — none (no big competitor release). Gradual — three steps, one per week.
Concentrated — non-English-primary profiles; broad across devices. Did we change anything — the
model ramp, a homepage artwork test, and a new Games row.

**Data if asked:**
- Definition: sessions with a play start from a homepage row ÷ homepage sessions.
- Non-English-primary profiles −21%; English-primary −2%.
- Ramp dates line up with each step down.
- Share of local-language titles in the top three rows for Hindi profiles: 48% → 22%.
- Thumbs-down on homepage titles in affected regions: +30%. Search usage there: +18%.
- Total viewing hours worldwide: −1%.
- Artwork test and Games row: no difference between arms. Latency, logging: unchanged. Last year: flat.

**Red herring:** the artwork test.
**Curveball:** "Total viewing hours are only down 1%. People find shows through search. Is this even a
problem?" → Users are paying in effort, satisfaction is down, and cancellations lag by weeks.

**Strong close:** Roll back to the old model for non-English-primary profiles now (cheap to reverse);
the ML team retrains with language preference as a feature. Owner: recommendations PM with the ML
lead. Asymmetry: a rollback costs a few weeks of model gains; quiet dissatisfaction shows up later as
churn. Reversal: ramp the new model again when a 10% test shows homepage play starts within 1% of the
old model in affected regions; watch cancellations there for four weeks.

---

## 5. Amazon — cart conversion rate down

**Prompt:** "Amazon's cart conversion rate dropped 11% over the last two weeks. What's going on?"
**Shape:** rate drop · sudden (over three days) · broad. **Truth bucket:** measurement artifact —
denominator inflated by an AI agent.

**Hidden root cause:** Two weeks ago the AI shopping assistant launched "compare in cart" in the US. It
adds candidate items to the cart so users can compare side by side. Carts created rose 13%; orders are
flat. Carts created by a person's own tap convert exactly as before.

**Four doors:** External — none (the big summer sale was six weeks ago). Sudden — stepped down over
three days. Broad — all categories, slightly bigger in electronics. Did we change anything — "We ship
hundreds of changes a week. Which area?" If asked about cart or checkout: a checkout redesign test at
5%, and the assistant's "compare in cart" launched to 100% of US users.

**Data if asked:**
- Definition: orders ÷ carts created (a cart with at least one item). 9.0% → 8.0%.
- Carts created: +13%. Orders: +0.5%. Revenue: flat.
- Checkout starts → orders: flat at 62%.
- Carts with assistant-added items: 14% of carts, converting at 2%. Person-created carts: 9.1%.
- Cart-abandonment emails sent: +15%.
- Checkout redesign test: arms identical. Latency, errors: flat. Last year: flat. Competitors: no sale.

**Red herring:** the checkout redesign test.
**Curveball:** "The email team says unsubscribes from cart-abandonment emails are up 25%." → The real
user harm hidden inside the artifact: people get reminders for items they never chose.

**Strong close:** No product rollback for conversion — the metric changed, not the experience.
Redefine it to person-created carts (or orders ÷ shopping sessions). Within 72 hours, exclude
assistant-added items from abandonment emails. Owners: the analytics owner of the metric, the
assistant PM, and the lifecycle email PM. Reversal: if unsubscribes aren't back to baseline two weeks
after the exclusion, or person-created cart conversion falls, reopen.

---

## 6. Uber — trips down in one city

**Prompt:** "Uber trips in one large Latin American city are down 10% over the last four weeks. Other
cities are flat. Why?"
**Shape:** volume drop · gradual · concentrated. **Truth bucket:** competitor.

**Hidden root cause:** A local competitor launched 25% off trips under 5 km four weeks ago. Uber's
short trips are down 22%; long trips are flat. Supply and reliability are fine.

**Four doors:** External — "Marketing mentioned a competitor is running ads, not sure of the details."
Gradual — fell over two weeks, then flat. Concentrated — this city, short trips, economy product.
Did we change anything — the booking fee rose by $0.30 five weeks ago.

**Data if asked:**
- Completed trips by distance: under 5 km −22%; 5 km and over −1%.
- App opens: −3%. Request rate after open on short trips: −20%.
- ETAs, surge, cancellations, driver hours: flat.
- New rider sign-ups: −8%. Premium products: flat.
- Booking fee: raised in this city and three others five weeks ago; the other three are flat.
- App-download estimates: competitor installs about 3× in this city.
- Last year same window: flat. Logging: unchanged.

**Red herring:** the booking fee rise.
**Curveball:** "Your city GM wants to match with 25% off every trip in the city starting tomorrow." →
The pressure move.

**Strong close:** Don't match everywhere — a blanket discount is easy to start, hard to withdraw, and
invites a price war. Test a targeted short-trip price for riders who opened and didn't request, in two
zones, for two weeks. Owner: city GM with the pricing PM. Reversal: if short trips fall another 5
points or long trips start falling, widen the response.

---

## 7. LinkedIn — job applications down

**Prompt:** "Job applications on LinkedIn dropped 14% over the last two weeks. What happened?"
**Shape:** volume drop · gradual · broad. **Truth bucket:** seasonality.

**Hidden root cause:** The last two weeks of December. Applications dip every year in this window.
Nothing is wrong.

**Four doors:** External — "Which two weeks? The 18th to the 31st of December." (Give dates only if
asked about timing or external events.) Gradual — over about ten days. Broad — all regions, larger in
the US and Europe (−16%), smaller in India (−6%). Did we change anything — an Easy Apply redesign
test at 10%.

**Data if asked:**
- Same window in the last three years: −12%, −16%, −13%.
- Job postings: −20%. Job views: −10%. Applications per view: −4%.
- Easy Apply test: treatment and control both down by the same amount.
- Latency, errors, logging: unchanged. Competitors: nothing notable.

**Red herring:** the Easy Apply test.
**Curveball:** "Your VP saw the dashboard and wants an 'apply now' email campaign this week." → The
pressure move; mailing into a seasonal dip spends attention for little gain.

**Strong close:** No action. Annotate the dashboard and switch it to year-over-year. Owner: jobs
analytics lead. Reversal: if applications aren't within 3 points of the November baseline by the
second week of January, reopen the investigation.

---

## 8. Airbnb — nights booked down in one city

**Prompt:** "Airbnb nights booked in one large US city fell 25% this quarter compared with last year.
Why, and what would you do?"
**Shape:** volume drop · sudden (a step on one date) · concentrated. **Truth bucket:** regulation.

**Hidden root cause:** The city began enforcing a short-term rental law on the first day of the
quarter. Stays under 30 nights now need a registered host who lives on site. About 70% of short-stay
listings were delisted on that date.

**Four doors:** External — "There was a local regulation change at the start of the quarter." (Only
if asked about external events.) Sudden — a step on one date. Concentrated — this city, stays under 30
nights. Did we change anything — only the compliance delisting the law required.

**Data if asked:**
- Searches for the city: flat. Search → booking: −30%.
- Bookable listings for stays under 30 nights: −65%. Stays of 30+ nights: +40%.
- Average nightly price for remaining short stays: +20%.
- Bookings in nearby towns: +30%.
- Other cities: flat. Logging: unchanged. Last year: flat.

**Red herring:** none needed; the trap is panic — treating it as a product failure.
**Curveball:** "Hosts want us to fight the law, and your team wants a banner on every search in the
city explaining it." → Separate policy from product.

**Strong close:** Nothing to fix in the product; the job is mitigation. Show nearby-town and 30+ night
options to guests searching the city, and give hosts a simple registration flow. Escalate the policy
question to the public policy team. Owners: market GM, search PM, policy lead. Reversal: if
re-routed searches convert at under half the old city rate after six weeks, stop the re-route and put
the effort into host registration.

---

## 9. Uber Eats — orders up, gross profit down

**Prompt:** "Uber Eats orders are up 6% month over month, but gross profit is down 9%. What's going
on, and what would you do?"
**Shape:** conflicting metrics · step change · concentrated in small baskets. **Truth bucket:** our own
pricing change shifting the mix toward unprofitable orders.

**Identity:** GP = Σ orders × (revenue per order − cost per order). Revenue per order = commission on
the basket + delivery fee + service fee + small-order fee. Cost per order = courier pay + payment
fees + promo cost + refunds.

**Hidden root cause:** Four weeks ago the growth team removed the $2 small-order fee on baskets under
$15 to grow order frequency. Small orders jumped, but a courier costs the same for an $11 order as for
a $40 one, so each small order now makes about zero. About three-quarters of the profit drop is simply
the $2 no longer charged on small orders people were already placing; the rest is new break-even
orders plus a few big orders that got split into small ones.

**Four doors:** External — none (no weather events, no competitor promo). Sudden — stepped down four
weeks ago, steady since. Concentrated — orders under $15; profit per order on bigger baskets is flat.
Members and non-members are affected alike. Did we change anything — the small-order fee change, a
courier pay change in two cities, and new restaurant onboarding.

**Data if asked:**
- Orders: +6%. Orders under $15: +80%. Orders of $15 and over: −2%.
- Share of orders under $15: 10% → 17%. Average basket: $33.50 → $31.75.
- Revenue per order: $9.28 → $8.85. Cost per order: $6.38 → $6.37. GP per order: $2.90 → $2.48.
- GP per order on baskets under $15: $1.95 → about −$0.05. On $15 and over: $3.00, flat.
- Users placing two or more orders in a day: 3% → 7%.
- Courier pay change: two cities, 4% of orders, about $0.20 more per order there.
- Refunds and payment fees: flat. GP definition: unchanged (finance confirmed). Last year: flat.

**Red herring:** the courier pay change (it explains well under a tenth of the drop).
**Curveball:** "The growth team says users who placed a small order this month are ordering 20% more
often overall, including bigger orders. They say this builds the habit." → A real tension: frequency
and habit now versus margin on every small order.

**Strong close:** Don't restore the full fee everywhere, and don't leave it off unexamined. Test a $1
small-order fee in half the cities for two weeks, and track 60-day profit per user, not just orders.
Owner: the growth PM who made the change, with finance. Asymmetry: restoring the fee is easy to undo;
a habit that never forms is not, but a margin leak on 17% of orders compounds every week. Reversal:
if the $1 arm keeps at least two-thirds of the frequency lift, roll it out everywhere; if it loses
more, keep the fee off for two more months only if 60-day profit per small-order user beats the old
baseline.

---

## 10. Instagram — notification engagement up, time spent down

**Prompt:** "Notification engagement on Instagram has gone up every week for six weeks — all users,
all geographies, all apps. But time spent is flat or declining. What do you do?"
**Shape:** conflicting metrics · gradual · broad. **Truth bucket:** product change with a
second-order effect.

**Identity:** time spent = users × sessions per user × minutes per session.

**Hidden root cause:** Six weeks ago a notification ranking update raised comment notifications ("X
replied to your comment"). Users tap, reply, and leave. These sessions are short and replace some
organic sessions.

**Four doors:** External — none. Gradual — growing over six weeks as volume ramped. Broad — all users,
stronger in heavy commenters. Did we change anything — the notification ranking update six weeks ago.

**Data if asked:**
- Notifications sent: +30% (comment notifications +35%; others flat). Click rate: up.
- Sessions per user: +8%. Minutes per session: −9%. Organic (non-notification) sessions: −3%.
- Sessions that start from a comment notification: about 40 seconds on average; organic sessions about
  6 minutes.
- Notification disable rate: +12%.
- Daily users: flat. Logging: unchanged. Last year: flat.

**Red herring:** none; the trap is reading higher clicks as success.
**Curveball:** "It's specifically comment notifications. Users click, leave a comment, then leave the
app immediately."

**Strong close:** Pause any further increase in comment notifications and cap them per user per day.
Owner: notifications PM. Asymmetry: training users to dismiss notifications degrades the channel for
every team and is hard to undo; pausing costs some clicks. Reversal: if the time-spent decline turns
out to sit only in users already at high churn risk, revisit; if the disable rate rises another 5%,
cut comment notification volume back to the old level regardless of clicks.
