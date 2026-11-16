# Metric bank — worked examples

Fifteen well-known products, each with a defensible north star, why it passes the tests, the
runner-up it beat, two guardrails that could get worse while it rises, and one second-order effect.

These are **practice picks, not the companies' official metrics.** Two strong candidates can pick
different north stars for the same product; what matters is the reasoning from scope and stage. Use
them to calibrate, to seed a mock, or to show the shape of a good answer — never as something to
recite. In a mock, prefer asking the learner first and using the bank to check their pick.

## How to read each entry

- **Stage** → the bucket that drives the pick.
- **North star** → one number, with who / what / window.
- **Beat** → the most tempting alternative and why it lost.
- **Guardrails** → each one can worsen *while* the north star rises (never the NSM flipped).
- **Second-order** → the effect to name before the interviewer does.

---

## Consumer

### 1. Spotify — mature, subscription + ads media
- **North star:** weekly listening hours per monthly active listener, counting only time the listener
  chose or let continue (excluding playback left running on a muted or idle device).
- **Why:** listening time is the value moment for both free (ad inventory) and paid (reason to renew)
  users, and the recommendations teams can move it.
- **Beat:** songs saved per week — strong discovery signal, but misses happy lean-back listeners who
  never save.
- **Guardrails:** skips in the first 30 seconds per hour listened (filler autoplay can raise hours);
  premium monthly churn.
- **Second-order:** more autoplay hours but less discovery, so libraries stop growing and retention
  softens months later.

### 2. YouTube — mature, ad-supported video
- **North star:** daily watch time per logged-in viewer on videos watched past the first 30 seconds.
- **Why:** time watched maps to ad inventory and is hard to fake with a click.
- **Beat:** views — rewards clickbait thumbnails, not videos worth watching.
- **Guardrails:** share of viewers saying a video was "not worth my time" in in-app surveys; creator
  upload rate (supply health).
- **Second-order:** watch time shifting to a few big channels while new creators stop uploading.

### 3. Instagram Reels — growth surface inside a mature app
- **North star:** daily Reels watch time per Instagram daily user.
- **Why:** it is the growth bet against short-video rivals, scoped to Reels so the team can see it move.
- **Beat:** Reels views — inflated by fast swipes that mean nothing.
- **Guardrails:** share of daily users who post or send a message to a friend (the social core);
  "not interested" taps per 100 Reels.
- **Second-order:** Reels time up, friends' posts down, so the network that makes Instagram different
  quietly weakens.

### 4. WhatsApp — mature messaging
- **North star:** daily users who send at least one message that gets a reply within 24 hours.
- **Why:** a reply means a real conversation happened, not a forward into the void.
- **Beat:** messages sent — spam and forwards inflate it.
- **Guardrails:** block or spam reports per 1,000 conversations; failed or delayed message delivery rate.
- **Second-order:** business messages grow and users start muting business chats, weakening that channel.

### 5. Uber (rides) — mature two-sided marketplace
- **North star:** completed trips per week.
- **Why:** a completed trip is value for the rider, earnings for the driver and revenue for Uber.
- **Beat:** ride requests — counts demand that was never served.
- **Guardrails:** p90 rider wait time from request to pickup; driver earnings per online hour.
- **Second-order:** promotions lift trips while drivers earn less per hour, so supply shrinks and waits
  grow next quarter.

### 6. Airbnb (stays) — mature two-sided marketplace
- **North star:** nights stayed per month (completed stays, not bookings).
- **Why:** a completed stay is the outcome for guest and host; cancellations don't count.
- **Beat:** bookings — counts stays that later cancel.
- **Guardrails:** share of stays with a complaint or refund; host 90-day retention.
- **Second-order:** nights rise from discounting, hosts earn less and leave, and supply in key cities thins.

### 7. DoorDash — mature delivery marketplace
- **North star:** orders delivered per active customer per week.
- **Why:** order frequency responds to product work (search, recommendations, checkout); GMV swings
  with things the team can't control.
- **Beat:** GMV — moves with prices, seasons and restaurant deals.
- **Guardrails:** share of orders late or wrong; Dasher earnings per active hour.
- **Second-order:** cheap delivery promos raise orders but train customers to wait for promos.

### 8. Duolingo — mature consumer learning
- **North star:** daily active learners who complete at least one lesson.
- **Why:** completing a lesson is the closest daily signal to learning that the team can move in a
  two-week test.
- **Beat:** streak length — measures the method (the streak), and streak freezes inflate it. True
  proficiency is the real outcome but moves too slowly; check it quarterly as a long-term guardrail.
- **Guardrails:** first-try accuracy per lesson (lessons made easier would raise completion); push
  notification opt-out rate.
- **Second-order:** streak pressure leads learners to repeat the easiest lesson, so completion rises
  while learning stalls.

### 9. Google Maps (navigation) — mature utility
- **North star:** share of navigated trips that arrive within 5 minutes of the first ETA shown.
- **Why:** it measures the user's outcome — getting there when they were told — not how many times
  they opened navigation.
- **Beat:** navigation sessions started — a usage count that says nothing about the trip.
- **Guardrails:** actual trip time versus the fastest known route (padding ETAs would "improve" the
  north star); share of routes sent through small residential streets.
- **Second-order:** routing many drivers down the same shortcut makes that shortcut slow for everyone.

### 10. ChatGPT — growth-stage AI assistant
- **North star:** weekly tasks completed per active user, where "completed" means the user copies,
  exports or acts on an answer without regenerating or rephrasing the same request.
- **Why:** it counts value delivered, not messages typed. Message count rises when answers are bad.
- **Beat:** messages per user — more messages can mean more confusion.
- **Guardrails:** hallucination rate on a sample of conversations reviewed offline; cost per completed task.
- **Second-order:** confident wrong answers raise "completion" until users get burned and leave.
  Behaviour can't see this — that's the offline/online gap. For model-quality metrics in depth, use
  technical-ai-judgement.

---

## B2B

In B2B the buyer, the admin and the end user are different people, and consumer metrics (DAU,
sessions) rarely fit. Reach for these families instead:

| Family | Example metric |
|---|---|
| Activation / time to value | Days from contract signed to first real use by 50% of seats |
| Adoption | Share of paid seats active weekly on the core workflow |
| Admin effort | Admin hours spent per month on setup and upkeep |
| Retention and expansion | Logo retention, net revenue retention, modules per customer |
| Trust and risk | Security incidents, audit failures, wrong-access events |

Remember the renewal decision is made by the buyer, often on admin and end-user evidence.

### 11. Slack — mature team messaging (SaaS)
- **North star:** paid workspaces where at least 70% of seats send a message in a week.
- **Why:** a team that routes its work through Slack renews; it ties to per-seat revenue.
- **Beat:** messages sent — bots and integrations inflate it.
- **Guardrails:** notifications per user per day (overload drives people to mute or leave); net
  revenue retention.
- **Second-order:** more channels and pings feel like engagement but lead to burnout and "Slack-free"
  policies at customers.

### 12. Zoom (for business) — mature video meetings
- **North star:** share of scheduled meetings that start on time and run without a major audio or video
  drop.
- **Why:** a meeting that just works is the job Zoom is hired for, and the product team can move it.
- **Beat:** meeting minutes — rises when meetings run long or people just leave tabs open.
- **Guardrails:** meetings per active paid seat (the quality rate can look great while teams quietly
  move their meetings to a bundled competitor); p95 time to join a meeting.
- **Second-order:** stricter quality settings use more bandwidth and hurt users on weak connections.

### 13. Stripe (payments) — mature developer platform
- **North star:** successful payment volume per month from merchants live for 90+ days.
- **Why:** volume from established merchants reflects real value and drives revenue; it excludes
  one-off sign-ups.
- **Beat:** new merchant sign-ups — activation, not value.
- **Guardrails:** chargeback and fraud rate; false-decline rate (good payments blocked).
- **Second-order:** loosening fraud rules lifts volume now and chargebacks 60 days later — a lagging
  guardrail you must wait for.

### 14. Figma — growth/mature collaborative design (SaaS)
- **North star:** files with two or more people editing or commenting in the same week.
- **Why:** collaboration is what makes Figma different from a single-user design tool and what spreads
  seats inside a company.
- **Beat:** files created — a solo user creating files shows little of Figma's value.
- **Guardrails:** p95 load time for large files; seat downgrades at renewal (bill shock as editors are
  added).
- **Second-order:** more collaborators means more paid editor seats, which can push finance to cut seats.

### 15. Okta (workforce identity) — mature B2B security
- **North star:** share of a customer's employees signing in to work apps through Okta with MFA on.
- **Why:** protected employees are the outcome the security buyer pays for, and admins can see it.
- **Beat:** daily sign-ins — rises with re-prompts, which is friction, not value.
- **Guardrails:** help-desk tickets for lockouts and resets per 1,000 employees; p90 sign-in time.
- **Second-order:** forcing MFA everywhere raises coverage while employees find workarounds (shared
  accounts, saved passwords) that weaken security.
- **Supporting (activation):** days from contract to 80% of employees enrolled; admin hours to set up.
