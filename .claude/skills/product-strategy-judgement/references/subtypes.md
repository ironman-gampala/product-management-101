# Subtypes

The six-step spine stays the same for every strategy question. What changes is what goes into the
landscape step, which option generator you use, and what the close must contain. Name the subtype
out loud in the first minute: *"This is a growth question, so I'll diagnose the constraint before I
suggest anything."* It tells the interviewer you know what is being tested.

## Spot the subtype

| The question says… | Subtype | The decision the interviewer wants |
|---|---|---|
| "What should X build?", "What's your strategy for X next year?", "Which product would you work on?" | What should X build | One bet for the company, argued from the business |
| "Go to market", "launch", "you've invented X", "you're a startup with X" | GTM / launch | Who first, which motion, in what order |
| "Grow", "2x / 10x", "increase transactions / revenue / users" | Growth | Which part of the equation is stuck, and the one loop to fix it |
| "Price", "monetise", "should we add ads", "Prime Lite", "how much should they pay" | Pricing / monetisation | Approach, structure, and a specific number |
| "Should X enter Y?", "X wants to build an education product" | Market entry | Whether to enter at all, and how (build / partner / buy) |
| "Respond to", "competing with", "biggest threat to", "you're the CPO of X facing Y" | Competitive response | What kind of threat it is, and the posture to take |

Mixed questions are common ("design a roadmap for Netflix Ads" is part monetisation, part what to
build). Pick the subtype that matches the decision, say it, and move on.

---

## 1. What should X build

The senior version of a product sense question. The trap is to treat it as product sense — jump to
users and features — and skip the strategy that should take up the first half.

- **Clarify:** horizon and success are everything here. "Build for the next 12 months to grow
  revenue" and "a 5-year bet on a new category" are different answers.
- **Business goals:** the anchor decides the answer. Name the growth line the company most needs.
- **Options:** generate across *where to play* — strengthen the core, an adjacency that uses an
  existing asset, a new business. At least one option should use an asset only this company has.
- **Close:** one bet, then **one level down** into product: who it's for first and the v1 — enough
  to show it's real, not a full product sense answer. Say what you're deliberately not building.
- **Trap:** a feature list. "What should X build" wants a bet, not a roadmap.

## 2. GTM / launch

From the repo's GTM framework: the real test is that distribution is the moat, not the technology.

- **Clarify:** product, stage (pre-launch, early traction, scaling), success and horizon,
  constraints (budget, geography, partners). Framing question: traction or scale?
- **Landscape becomes customer + status quo + timing:**
  - **Customer** — a person with an acute pain, not a demographic. "Indie video creators already
    paying for stock music" beats "content creators".
  - **Status quo** — what they do today. That is the real competitor and shapes the message.
  - **Timing** — why would they switch now and not six months ago?
- **Principles** often come from the stage: *"No paid acquisition until we have conversion data,
  because it's expensive and noisy for new AI tools."* That kills a paid-first launch.
- **Option generator — the five motions:** product-led (output is shareable), community-led (a
  community cares deeply), content-led (new category needs education), sales-led (big contracts,
  many buyers), ecosystem / API-led (lives inside a bigger platform).
- **Close:** **sequence** motions, don't just pick one — "content to educate, then community for
  trust, with product-led sharing built in from day one". Then the phases:
  ```
    PRIVATE BETA    ~50–100 high-fit users      goal: learning — do they actually use the output?
    LIMITED LAUNCH  a curated community         goal: first organic referral loop
    BROAD LAUNCH    public                      goal: scale what works; paid only if organic is proven
  ```
  Three metrics: one acquisition (activated sign-ups), one retention (second use within 7 days),
  one product-specific. Name the go / no-go signal between phases.
- **Traps:** starting with channels ("Product Hunt and TikTok"); targeting everyone; ignoring why
  people would switch; a marketing plan that stops at awareness and forgets activation.

## 3. Growth

From the repo's growth framework: diagnose before you prescribe.

- **Clarify:** which number exactly (paid subscribers, new users, transactions, revenue) and over
  what time.
- **Business goals becomes "model the goal" — write an equation and confirm it:**
  - `DAU = MAU × (DAU / MAU)`
  - `Paid subs = trial users × conversion + team expansion − churn`
  - `Revenue = users × orders per user × order value × take rate`
  Then use context to say which term is stuck. **Retention signal decides:** strong retention →
  the constraint is acquisition or distribution; weak retention → fix it first, because new users
  will leak out.
- **Option generator — the four loops:** acquisition, activation (sign-up to first value),
  retention, community / distribution (users become the channel). Pick the loop that moves the
  stuck term, then the most specific bet inside it.
- **Filter on:** impact on the equation, durability (compounding vs one-time bump), feasibility,
  and whether it makes the next bet easier.
- **Close:** the bet, and **a counter-metric unprompted** — e.g. pushing team plans could make
  individual users feel ignored and kill the word of mouth that feeds acquisition.
- **Traps:** acquisition as the default lever; "increase marketing spend" with no word on cost;
  "grow through word of mouth" with no mechanism; treating retention as separate from growth.
  Frame retention as a moat that feeds acquisition.
- **Likely probe:** two metrics moving in opposite directions ("engagement up, time spent flat").
  Practise reasoning through it calmly.

## 4. Pricing / monetisation

From the repo's pricing framework. Keep four facts in mind: price moves revenue and margin; *how*
you charge is a decision of its own; early products are often priced for adoption; and price is
positioning.

- **Landscape ends in one synthesis sentence:** *"This company launched this because ___, so
  pricing should prioritise ___ (adoption, margin or share), and the key constraints are ___."*
  Factors: competition, country (willingness to pay varies 3–5x), price sensitivity, backlash risk.
  For AI products, **cost per use is real** — heavy users can lose money.
- **Two decisions, in order:**
  1. **Approach:** everyone pays | free with indirect money (ads, data, ecosystem) | part free,
     part paid. Say why the other two are out.
  2. **Structure** inside it: flat, usage-based, tiered, hybrid; or feature-, usage- or
     time-gating. For usage-gating, set the free allowance so users reach a **finished result**
     before the wall.
- **The number — three anchors, then commit:**
  ```
    VALUE CEILING     what the outcome is worth (cost of doing it manually, hiring someone, a rival)
    COST FLOOR        what it costs us per user at scale (for AI: compute per user)
    COMPETITION       where customers' expectations sit inside that range
  ```
  Then one specific number and why it sits where it does in the range.
- **Stress-test before they ask:** cannibalisation (does a cheaper tier pull people down from the
  full one?), what the price signals about quality, and launch price vs steady state (how you'll
  raise it later without churn).
- **Monetisation questions** ("should we add a homepage ad?", "monetise Google Flights") use the
  same steps, plus a guardrail on what the new revenue could damage — trust, the core experience,
  the existing revenue line.
- **Traps:** jumping to structure before the approach; one anchor only (usually competitors);
  "it should be cheap to drive adoption" with no cost floor; never naming a number.

## 5. Market entry

"Should X enter Y?" — **no** is a valid answer, and a well-argued no is often more senior than an
eager yes.

- **Business goals:** what does the company need that this market would give it? Revenue, data,
  defending a core habit, keeping users in the ecosystem? If there's no link, say so early.
- **Landscape:** market attractiveness (size, growth, margins), who is there and how they win, why
  now, and the status quo. A thin-margin, operations-heavy market (grocery, furniture delivery)
  is very different from a software-margin one.
- **Right to win:** the core of the answer. What asset does the company bring that incumbents lack
  — users, data, distribution, brand, technology? Has it tried before, and what did that teach?
- **Option generator — the ladder of commitment:**
  ```
    STAY OUT → PARTNER / PLATFORM (enable others) → ENTER ONE NICHE → BUY → BUILD FULL-SCALE
  ```
  Usually the best answer enters at the level that uses the company's advantage and avoids its
  weakness (e.g. be the place people *start* shopping, let partners do the warehouses).
- **Close:** the level of commitment, the first niche, the milestone that would earn the next level
  of investment, and the signal to stop.
- **Traps:** assuming "big market" means "should enter"; ignoring past failed attempts; building
  operations the company has no edge in.

## 6. Competitive response

"You're the CPO of X facing Y. What would you do?" / "What's the biggest threat to X?"

- **Landscape is the heart of it:** classify the threat before responding.
  ```
    DISTRIBUTION / BUNDLE   a giant includes a good-enough version in something customers already pay for
    ARCHITECTURE            a new entrant rebuilds the job a different way (often AI-native)
    PRICE                   someone is much cheaper for the same job
    SUBSTITUTE              the job itself moves somewhere else (behaviour shift)
  ```
  Then say which customers are actually at risk — rarely all of them. Who is loyal, and why?
- **Option generator — postures:**
  ```
    IGNORE / HOLD        the threat hits customers we don't need
    MATCH                close the gap where it costs us deals (only where parity matters)
    DIFFERENTIATE        go where the rival can't follow (quality, focus, openness, a niche)
    REPOSITION / EXPAND  change what we are (a platform, a broader suite, a new buyer)
    PARTNER / BUY        team up with others threatened by the same rival
  ```
- **Principle that usually does the work:** *"We won't fight a bundle on features, because they give
  them away free."* That kills a feature race.
- **Close:** the posture, the customer segment you'll defend first, the first move, and the metric
  that shows the threat is contained (retention in the segment that matters, win rate in deals).
- **"Biggest threat" variant:** list three or four threats, rank them by size × likelihood × how
  hard to respond, **pick one** as the biggest, then spend the rest on how you'd respond.
- **Traps:** treating every competitor as "more competition"; a feature-by-feature comparison;
  copying the rival; defending every customer equally.
