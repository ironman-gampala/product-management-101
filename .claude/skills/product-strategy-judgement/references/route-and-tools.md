# Route and tools

The tools behind each step of the 30–35 minute route. Each one exists to stop a specific freeze or a
specific point loss. Teach the tool, not just the answer, so the learner can reuse it on any
strategy question. For how the route bends by subtype (GTM, growth, pricing, market entry,
competitive response, "what should X build"), read `subtypes.md`.

## Contents
1. Clarify
2. Business goals (follow the money)
3. Landscape (why now + competitor postures)
4. Guiding principles
5. Generate and filter options
6. Argue and close
7. Summary
8. Transition lines
9. Freeze recovery
10. Common point losses

---

## 1. Clarify (0–3 min)

Ask 2–4 questions **in one batch**, then state assumptions. Strategy prompts are vague on purpose;
the interviewer is watching how you scope. Ask only what would change your answer.

The three that matter almost every time:
- **Horizon** — a 6-month decision or a 3-year strategy? Threats and options look completely
  different on each.
- **Success** — what does winning look like, and who measures it? Revenue, share, users, margin?
- **Constraints** — budget, regulation, existing bets or partners we can't upset?

Plus one **framing question** that shows your hypothesis forming:
> *"Is the goal to defend the core business or to find a new line of revenue? Those lead to very
> different options."*
> *"Is the goal early traction or defensible scale? A community motion that takes a year to
> compound makes no sense if we need revenue in 90 days."*

Opening line: *"Before I dive in, I'd like to ask a few quick questions so I solve the right problem."*
Closing line: *"Great. I'll assume a two-year horizon, success measured as ___, and ___ as the main
constraint. Let me start with how this company actually makes money."*

If the interviewer says "you decide", decide out loud in one sentence and move on. Don't ask again.

## 2. Business goals — follow the money (3–7 min)

Mission statements are not business analysis. Three questions, about 30 seconds each:

```
  MONEY        where does the revenue actually come from? (rough mix, biggest line first)
  STAGE        what does growth look like for this business now? (hyper-growth, mature, defending)
  REVEALED     where is the company actually investing? (hiring, capex, acquisitions, launches)
```

Then say the **tension** in one sentence — where what they say and how they earn pull apart:
> *"[Company] says its goal is ___, but its business runs on ___, and those pull in different
> directions when ___."*

Examples of the shape (say it in your own words):
- Meta says connection, but it is paid for attention; AI-generated content can lift engagement
  while weakening the social signal that makes its ads work.
- A marketplace says it serves buyers, but it earns from sellers' ads; more ad slots can hurt the
  buyer trust that makes the ads worth buying.

End the step with the **anchor**: *"So for this question, the thing the company really optimises
for is ___. I'll judge every option against that."*

### Rough revenue shapes (check before the interview; numbers move)

| Company | Where the money mostly comes from | Useful tension |
|---|---|---|
| Alphabet / Google | Search ads are the majority; YouTube ads and Cloud are the growing lines | AI answers help users but can remove the ad click |
| Meta | Almost all ads (well above 90%) | Engagement vs. quality of social signal; heavy AI capex |
| Amazon | Retail by revenue; AWS earns most of the operating profit; ads fast-growing | Ads in search results vs. shopper trust |
| Apple | iPhone about half; Services smaller but far higher margin | Privacy positioning vs. ads and App Store fees |
| Microsoft | Cloud (Azure) and Microsoft 365 subscriptions | Bundling (Teams, Copilot) as distribution |
| Netflix | Subscriptions; ad tier growing | Price rises vs. churn; ads vs. premium feel |
| Spotify | Mostly Premium subscriptions; about two-thirds of music revenue goes to rights holders | Growth that pays royalties per stream grows margin slowly |
| Uber | Take rate on rides and delivery; ads growing | Driver supply vs. rider price |
| Airbnb | Service fees from guests and hosts | Supply quality vs. supply growth |
| Duolingo | Mostly subscriptions | Gamified engagement vs. real learning |
| OpenAI / Anthropic | Consumer subscriptions plus API and enterprise; compute is a large cost | Every query costs money — power users can lose margin |

If the learner doesn't know the revenue mix, the coach move is: *"Say what you'd expect, label it as
an assumption, and use it."* A labelled guess beats skipping the step.

## 3. Landscape — why now (7–11 min)

A strategy question always has a trigger. Find it with the **why-now checklist** — run down it and
name the one or two that actually apply:

```
  TECHNOLOGY    a capability became good or cheap enough (quality threshold, cost per query)
  COST          a cost curve moved (compute, acquisition cost, shipping, content)
  REGULATION    a rule changed (privacy, competition, platform fees, AI rules)
  COMPETITOR    someone moved (launched, bundled, cut price, acquired, exited)
  BEHAVIOUR     users changed habits (where they search, watch, buy, work)
  DISTRIBUTION  a channel opened or closed (app store rules, search traffic, a partner)
  COMPANY       our own event (growth stalled, new leader, a big bet failing, earnings pressure)
```

**Specificity test:** what changed, roughly when, and who exactly does it hurt or help? If a sentence
could be said about any company, rewrite it.

### Competitor posture card

For the two or three competitors that matter, say one line each:
```
  THEORY OF WIN   how do they believe they win? (bundle, price, quality, network, data)
  POSTURE         attacking or defending? going broad or deep?
  THREAT MODEL    distribution threat | architecture threat | price threat | bundle threat
```
- A giant bundling a "good enough" version into something customers already pay for is a
  **distribution / bundle threat**. You won't win on features alone.
- An AI-native startup rebuilding the job from scratch is an **architecture threat**. You may need
  to change how the product works, not add a feature.

### Status quo

Say what customers do today without you — often a spreadsheet, a person, a habit, or doing nothing.
That is the real competitor in GTM and market-entry questions.

End the step with a decision: *"So the trigger is ___, and the threat that matters most is ___, not
___, because ___."*

## 4. Guiding principles (11–14 min)

Principles are not values. They are **constraints that close doors**. The repo's recipe:

```
  1. Take your sharpest BUSINESS point   → what does it rule out?            → principle 1
  2. Take your sharpest LANDSCAPE point  → what response does it make useless? → principle 2
  3. Take the biggest TENSION            → turn it into a tiebreaker           → principle 3
```

Template — say all three parts:
> *"We will / won't ___, because ___. That rules out ___."*

| Weak (rules out nothing) | Strong (closes a door) |
|---|---|
| "Put users first." | "We won't add any ad format that sits between the user and the answer, because trust in the answer is what the paid tier sells. That rules out sponsored answers." |
| "Be innovative." | "We won't compete on features with a bundled rival, because they give it away free. That rules out a feature race." |
| "Focus on AI." | "We'll prefer bets that use data only we have, because a model alone is copied in months. That rules out a generic chatbot." |
| "Grow revenue." | "We'll prefer revenue that doesn't pay a royalty on every unit, because that's what lifts margin. That rules out just raising the music price." |

**Test:** read each principle and name the option it kills. If you can't, cut it or sharpen it.
Two strong principles beat three soft ones.

## 5. Generate and filter options (14–20 min)

This is the only generative step. Two stages, out loud.

### Generate (60–90 seconds, no judging)
Say: *"Let me brainstorm quickly before I judge anything."* Aim for five or more one-liners. Use a
generator so you don't freeze:

```
  WHERE TO PLAY   defend the core | go deeper with existing users | new segment | new geography
                  | adjacent product | new business
  HOW TO WIN      build | partner | buy | bundle | change the price or model | open a platform / API
  WHO PAYS        users | businesses | advertisers | partners | nobody yet (adoption first)
```
Pick across rows so the options are genuinely different. Use the Ansoff shape (penetration,
market development, product development, diversification) to *label* options, not generate them.
Subtype generators are in `subtypes.md`.

Number them out loud: "Option one… option two…". When the learner says "and we could also…", that
is a new option — number it.

### Filter (out loud, by name)
> *"Option two breaks my first principle because it ___. Option four fails the second because ___.
> That leaves three."*

Then compare the shortlist (≤ 3) on four criteria, in a sentence each, not a scoring grid:
- **Impact** on the goal from clarify.
- **Durability** — does it compound (a moat, a loop), or is it a one-time bump?
- **Right to win** — the distribution question: why do *we* win when a rival can ship it in a month?
- **Sets up the next bet** — does it make the next move easier or harder?

## 6. Argue and close (20–28 min)

### The call
Two sentences. What, over what horizon, why over the runner-up.
> *"Because ___ and ___, the option that survives is ___. Over the next ___ I'd do ___ rather than
> ___, because ___."*
Write it on the board.

### Steelman the counter (before they ask)
Pick the **strongest** case for the runner-up, not a straw man. Ask: *"What would the smartest person
in the room who disagrees with me say?"* Usual sources: it's cheaper, it's faster to revenue, it's
lower risk, it doesn't cannibalise, we already have the capability.
> *"The strongest argument against me is ___. That's a real point: ___ is true."*

### Defeat it on the merits
Concede the true part, then use one of these:
- **It matters less here** — the counter's advantage is real but doesn't touch the goal we set.
- **Cost of waiting** — the window closes; doing it later means doing it from a weaker position.
- **It's reversible later** — the runner-up can follow once the pick is working; the reverse isn't true.
- **Safe isn't safe** — the low-risk option doesn't change our position, so it's a slow loss.

### First move, metric, and the signal
```
  FIRST 90 DAYS    the first concrete step, and who owns it
  SUCCESS METRIC   one number that shows the strategy working
  COUNTER-METRIC   what could get worse while it works (cannibalisation, churn, trust, margin)
  CHANGE MY MIND   "I'd revisit if ___ by ___."
```
Example: *"The signal that I'm wrong is if licensing revenue keeps growing through next year. That
would mean outside AI companies still need our data, and I'd revisit the build decision then."*

## 7. Summary (28–30 min)

*"To summarise: [company] really optimises for ___. What changed is ___. So I'd ___ over ___ because
___. The biggest risk is ___, and I'll know I'm wrong if ___."* Thirty seconds, no new ideas.

## 8. Transition lines

Saying the next step's name out loud buys thinking time and makes the chain visible:
- "Before I dive in, I'd like to ask a few quick questions."
- "Let me start with how this company actually makes money."
- "So what changed that makes this a question now?"
- "Let me turn that into two or three principles that rule things out."
- "Let me brainstorm quickly before I judge anything."
- "Now let me filter those against the principles."
- "Because of all that, here's my recommendation."
- "The strongest argument against me is…"
- "I'd change my mind if…"
- "To summarise…"

## 9. Freeze recovery

| Freeze | What to say | What to do in your head |
|---|---|---|
| Don't know the business | "I'll assume the money mostly comes from ___ — tell me if that's off." | Labelled guess, then use it |
| No why-now | "Let me ask what changed in the last 18 months." | Run the why-now checklist |
| Principles feel empty | "Let me turn that into what we won't do." | Recipe: business point → what it rules out |
| Only one option | "That's one path. Let me look at where else we could play." | Generator rows: where to play × how to win |
| Can't choose | "If I had to bet the team on one, it's ___, because ___." | Pick the one that best fits principle 1 |
| Can't find the counter | "The best case for the runner-up is that it's cheaper and faster." | Cost, speed, risk, cannibalisation |
| Lost the thread | "Let me quickly read back the board." | Business → trigger → principles → shortlist |

## 10. Common point losses

- Anchoring on the mission statement instead of the revenue model.
- "AI is changing everything" as the landscape.
- Listing competitors' features instead of how they plan to win.
- Principles that rule nothing out ("user trust", "innovation").
- Jumping to options at minute four; or still on landscape at minute fifteen.
- Seven options on the shortlist, or none cut by name.
- "It depends", "a combination of these", or "the team could explore…" as the close.
- Waiting for the interviewer to raise the counter-argument.
- Paid acquisition as the growth plan with no word on cost.
- Pitching something the company already has as new.
- An answer five other candidates could have given word for word.
- Ending a turn with "so yeah" or "that's it".
