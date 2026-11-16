# Route and tools

The tools behind each step of the 15-minute route. Each one exists to stop a specific freeze or a
specific point loss. Teach the tool, not just the answer, so the learner can reuse it on any question.

## Contents
1. Scope
2. Anchors (global and India)
3. Top-down or bottom-up
4. Tree patterns by question family
5. Estimating a leaf
6. Math and rounding tricks
7. Sanity checks
8. Sensitivity and handling a challenge
9. The "so what"
10. Transition lines
11. Freeze recovery
12. Common point losses

---

## 1. Scope (0–1 min)

Ask 1–3 questions **in one batch**, only ones whose answer changes the number. Then state the scope
in one line, out loud and on the board.

```
  UNIT      users? units sold? rupees or dollars? terabytes?
  PLACE     India / urban India / one city / global
  PERIOD    per day, per year, at peak hour, this year vs in 2030
  WHAT COUNTS   new or total (stock vs flow)? retail price or company revenue? copies and backups?
```

Opening line: *"Before I start, two quick questions so I size the right thing."*
Closing line: *"So I'll estimate annual spend on gym memberships in urban India this year, in rupees.
I'll leave out home equipment and fitness apps."*

If the interviewer says "your call", pick the version that makes the math easier and say so. Note
what you are ignoring; you can come back to it in the sanity step.

## 2. Anchors

An anchor is the one number you trust at the top of the tree. Say why you chose it: *"I'll start
from urban adults, not households, because a gym membership is bought by one person."*

**These are rough, round numbers to sanity-check against, not facts to quote.** They drift every
year. Before a real interview, verify current figures from an official or widely cited source and
update your own copy. In the room, say "roughly" and round further.

### Global (rough)

| Anchor | Round number |
|---|---|
| World population | ~8 billion |
| Internet users worldwide | ~5–5.5 billion |
| Smartphone users worldwide | ~4.5 billion |
| Households worldwide | ~2 billion |
| US population / households | ~330 million / ~130 million (about 2.5 people per home) |
| US smartphone penetration | ~85–90% of adults |
| US average annual income | ~$60,000 per worker |
| EU population | ~450 million |
| China population | ~1.4 billion |
| World GDP | ~$100 trillion a year |
| Average life expectancy (global) | ~73 years |

### India (rough)

| Anchor | Round number |
|---|---|
| Population | ~1.4 billion (use 1.5B or 1B for easy math, and say which) |
| Households | ~300 million (about 4.5–5 people per home) |
| Urban share | ~35% → about 500 million people, ~100–120 million urban homes |
| Working age (15–64) | ~two-thirds → about 900 million–1 billion |
| Internet users | ~850–900 million |
| Smartphone users | ~650–700 million |
| People under 25 | ~40% |
| Births per year | ~23–25 million |
| Cars sold per year / two-wheelers sold per year | ~4 million / ~18–20 million |
| Small businesses (MSMEs, mostly micro) | ~60 million |
| Kirana and small retail shops | ~10–13 million |
| Credit cards in use | ~100 million |
| UPI payments | ~15–20 billion a month, growing fast |
| GDP / per person | ~$4 trillion / ~$2,500–3,000 a year |
| Big metros | Delhi NCR ~30M, Mumbai ~20M, Bengaluru ~13M, Pune ~7M |

### Conversions and units

| Anchor | Round number |
|---|---|
| 1 lakh / 1 crore | 100,000 / 10 million |
| 1 lakh crore | 1 trillion rupees ≈ $12 billion |
| Rupees per dollar | ~85–90 (use 100 for quick math, then adjust) |
| Seconds in a day | 86,400 ≈ 100,000 (10^5) |
| Seconds in a year | ~31 million ≈ 3 × 10^7 |
| Hours in a year / working hours per worker per year | ~8,760 ≈ 10,000 / ~2,000 |
| Working days per year | ~250 |
| Peak-hour traffic vs daily average | ~2–3x the average hour |

### Infrastructure (rough)

| Anchor | Round number |
|---|---|
| Text message / chat message | ~100 bytes–1 KB |
| Compressed phone photo | ~0.5–3 MB (apps often store ~200–500 KB after compression) |
| One minute of HD video (1080p) | ~100 MB stored; streaming ~3–5 Mbps |
| One minute of 4K video | ~300–400 MB; streaming ~15–25 Mbps |
| Song (4 minutes) | ~4–5 MB |
| Copies kept for safety | ~3 (replication), plus thumbnails/resized versions |
| Cloud object storage | ~$20 per TB per month |
| 1 PB | 1,000 TB = 1 million GB |

## 3. Top-down or bottom-up

| | Top-down | Bottom-up |
|---|---|---|
| Starts from | A big known total (population, households, users) | One unit you can picture (one shop, one server, one customer) |
| Shape | Total × share × share × rate | Units × capacity, or customers × spend |
| Use when | Demand side is easy to picture; consumer counts and markets | Capacity is the real limit (salons, delivery riders, servers), or the segment is tiny |
| Risk | Stacked percentages compound errors | Hard to know how many units exist |

Say the choice and the reason in one line: *"I'll go top-down from urban adults, because joining a gym
is a personal decision. I'll use the supply side — gyms times members per gym — as my cross-check."*

**Demand side vs supply side** is the most useful pair. Solve with one, check with the other.

## 4. Tree patterns by question family

Write the tree as ASCII on the board. Equation on top, branches down to leaves you can estimate,
each leaf with a number and a short reason in brackets. Example shape:

```
Annual gym membership spend, urban India (₹)
 = paying members x fee per member per year
   |
   +-- Paying members = urban adults x share with a paid membership
   |     +-- Urban adults (18-60) ........ 300M   (anchor: ~500M urban people, ~60% aged 18-60)
   |     +-- Share with a paid membership  3%     (about 1 in 30 adults I know; most walk or skip)
   +-- Fee per member per year ........... ₹1,500 x 12 = ~₹18,000

   Math: 300M x 3% = 9M members;  9M x ₹18,000 = ₹162 billion = ~₹16,000 crore
```

### A. Consumer count ("how many people / devices / orders")
```
Count = population (or homes) x share in segment x share who do X x frequency
```
Segment by age, city tier, income or device when behaviour differs.

### B. B2B count ("how many businesses / seats / shops")
```
Count = businesses x share by size band x share who need X x seats (or units) per business
```
Size bands matter: one large firm can equal a thousand small ones. India: start from ~60M MSMEs or
~10–13M kirana shops. US: ~30M small businesses, ~6M with employees.

### C. Revenue / market size ("market for X", "TAM")
```
Market = buyers x purchases per year x price per purchase
       or  users x share paying x price per year
```
Name the layer: **TAM** (everyone who could buy), **SAM** (the part you can reach with this product
and channel), **SOM** (what you can win in 3–5 years). Say which one the question needs. A decision
usually depends on SAM or SOM, not TAM.

### D. Infrastructure ("storage", "bandwidth", "servers", "cost to run")
```
Storage per day = active users x share who upload x items per uploader x size per item x copies
Bandwidth (peak) = data served per day ÷ 86,400 s x peak factor (2–3x)
Servers          = peak requests per second ÷ requests one server handles
Cost             = storage (TB) x price per TB per month, plus compute and bandwidth
```
Separate new data per day (flow) from total stored (stock), and reads from writes.

### E. Time / throughput ("how many riders", "how long", "how many per hour")
```
Units needed = demand per hour ÷ capacity per unit per hour
Capacity per unit = 60 min ÷ minutes per job x utilisation (~60–80%)
Items in the system at once = arrivals per hour x hours each one stays   (Little's law)
```
Size for the peak hour, not the daily average.

## 5. Estimating a leaf

From the repo's strategies, in the order to try them:

| Tool | Use it like this |
|---|---|
| **Anchor fact** | Something from the lists above |
| **Proxy** | Swap the unknown for something familiar, then adjust ("cars track households") |
| **Segment** | Split a diverse group, estimate each part, add up (weighted average) |
| **Personal reference** | "About 1 in 30 adults in my office pays for a gym" — then say how your sample is biased |
| **Bounds** | Lowest and highest believable values, take a middle you can defend |

Gut-check every leaf before moving on. Say the reason in the same breath as the number.

## 6. Math and rounding tricks

- **Round to 1, 2, 5 or 10 times a power of ten.** 1.4B → 1.5B; 86,400 → 100,000; 23% → 25%.
- **Round one number up and the next one down** so the errors cancel. Say you did it.
- **Pull the powers of ten out.** 70M × 40 = (7 × 4) × (10M × 10) = 28 × 100M = 2.8B.
- **Treat big units like words.** 12 million × 8 thousand = 96 million thousand = 96 billion.
- **Split awkward multiplications.** 17 × 120 = 1,700 + 340 = 2,040. 15% = 10% + 5%.
- **Convert lakh and crore at the end, not the middle.** Do the math in millions or billions, then
  convert once: ₹162 billion = ₹16,200 crore. Most 10x errors in Indian sizing are crore slips.
- **Keep units on every line** (per day, per month, per home) so a missing "× 12" shows up.
- **Answer to one or two significant figures.** "About ₹16,000 crore", never "₹16,237 crore".

## 7. Sanity checks

Do at least one, out loud. Two is better.

| Check | Example |
|---|---|
| **Gut check** | "9 million members is 1 in 33 urban adults. That feels about right." |
| **Second method** | Demand side vs supply side: ~50,000 gyms × ~200 members ≈ 10M members. Close to 9M. |
| **Per-unit reframe** | "₹16,000 crore is about ₹300 per urban person a year. Plausible." |
| **Known company** | "The biggest player's revenue is X; the market should be a few times that, not 100x." |
| **Bounds** | "It can't be more than every urban adult paying even the cheapest fee." |

Rule of thumb: within 2–3x of the second method is fine. If you are 10x off, find the leaf — look at
units, periods (day vs month vs year) and crore conversions first.

## 8. Sensitivity and handling a challenge

Ask: **which leaf has the widest believable range compared to its size?** That is the assumption
the answer is most sensitive to. Usually a share (5% or 20%?) or a frequency, rarely the anchor.

Say it and give a range: *"The number that moves this most is the share of adults who pay for a gym. At
2% I get about ₹11,000 crore; at 5%, about ₹27,000 crore. So I'd say ₹10,000–25,000 crore, most
likely around ₹15,000 crore."*

When the interviewer challenges a number:
1. Take their number seriously: "That's fair, let me redo it with 1%."
2. Recompute only that branch, on the board.
3. Say what changes and what doesn't: "The market drops to about ₹5,000 crore. That's still big
   enough for a focused chain, so my conclusion holds." Or: "At that size I'd change my answer."

Don't cave without math, and don't defend a number just because you said it first.

## 9. The "so what"

End with what the number means for the decision behind the question.

| Question | So what |
|---|---|
| Market for X | Big enough to enter? For a startup or for us? Which segment first? |
| How many X | How many to build, stock, hire or serve; is the bottleneck demand or supply? |
| Storage / bandwidth | Cost per month; does compression or tiering matter more than more disks? |
| Riders / servers | How many at peak; what happens when we're short |

*"About ₹15,000 crore a year. That's large enough for a national chain. The swing factor is how many
adults pay at all, not the fee, so a cheaper format that brings in first-timers matters more than a
premium one."*

## 10. Transition lines

- "Before I start, two quick questions so I size the right thing."
- "I'll start from ___, because ___."
- "I'll go top-down here, and use the supply side as my check."
- "Let me write the equation first, then break each piece down."
- "Here I'm assuming ___, because ___."
- "Let me round that to ___ to keep the math clean."
- "Let me sanity-check this another way."
- "The number this is most sensitive to is ___."
- "So what does this mean for the decision?"
- "To summarise…"

## 11. Freeze recovery

| Freeze | What to say | What to do in your head |
|---|---|---|
| No idea where to start | "Let me start from what I know for sure: how many people or homes." | Pick an anchor from section 2 |
| Can't estimate a leaf | "Let me picture one example and scale up." | Personal reference, then name the bias |
| Leaf feels like pure guess | "Let me set a low and a high, and take the middle." | Bounds |
| Math is getting messy | "Let me round to easier numbers." | Pull out powers of ten |
| Final number looks crazy | "That feels off. Let me check my units." | Day vs year, lakh vs crore, % vs fraction |
| Lost the thread | "Let me read the tree back from the top." | Read the board |

## 12. Common point losses

- Jumping to a number without scoping the unit, place or period.
- A starting number with no anchor ("say 20 million gym-goers").
- Prose arithmetic instead of a tree; the interviewer can't see the structure.
- One average for a diverse group instead of segments.
- Assumptions said silently, or not at all.
- Messy math with unrounded numbers, and a 10x slip from lakh/crore or day/year.
- False precision in the final answer.
- No sanity check, or a "sanity check" that repeats the same method.
- Caving the moment a number is challenged, or refusing to recompute.
- Ending on the number, with no range and no "so what".
