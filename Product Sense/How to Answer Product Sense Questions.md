# How to Answer Product Sense Questions

> No matter which type of product sense question you face, you can apply the same six-step framework. The steps must be answered **in order** — each one constrains the next.

---

## The Six Steps at a Glance

| Step | Action | What It Constrains |
|---|---|---|
| **1. Clarifying Questions** | Understand what you're being asked to build before designing anything | Defines the technology, scope, and constraints everything else is built on |
| **2. Strategy** | Company mission, competitive landscape, and why this opportunity exists right now | Sets the north star metric that filters your solutions |
| **3. User Types** | Segment the user base and select one group to design for | Determines which pain points are in scope |
| **4. Pain Points** | Identify the specific friction your user experiences and the root problem to solve | Determines which solutions are relevant |
| **5. Solutions** | Generate meaningfully different ideas that map to the pain point | Determines what gets built |
| **6. MVP** | Define the smallest version that delivers real value and name what waits | Translates judgment into a shippable scope |

**Running example throughout:** *"You have technology that can allow humans to understand animals. What do you do?"* — confirmed recent OpenAI interview question.

---

## Step 1 — Clarifying Questions

**Why this step matters:** You cannot design for something you don't understand — especially on novel technology prompts where the technology itself is undefined.

**Your goal:** Ask two kinds of questions:
1. **Questions about the question** — define all terms, understand how the technology works, ask about fidelity and mechanics. These are never assumptions.
2. **Questions about product context** — company size, market, timeline, scope. State these as assumptions and confirm rather than asking the interviewer to decide for you.

> **Example:**
>
> *"Can you help me understand what 'reading minds' means here? Are we talking about precise thoughts and language, or more like emotional states? And does this require any hardware on the animal?"*
>
> The interviewer clarifies: vague emotional states only — things like happy, calm, or uncomfortable. Not precise thoughts or language. Requires a wearable sensor.
>
> **This answer changes everything.** The product cannot translate exact meaning or intent. It can only surface whether the animal is responding positively or negatively to something. Design into that constraint.
>
> Then: *"I'm going to assume we're at OpenAI, not a startup, going after the US market, with a fully staffed team and a goal to ship in the next 3–6 months. Does that sound right?"*

---

## Step 2 — Strategy

**Why this step matters:** This is where your product sense shines. You demonstrate strategic thinking, knowledge of different markets and trends, and why *this company specifically* would build this thing.

**Your goal:** Pick the pieces most relevant to the problem:
- Company mission
- Why they would build this, given their mission and philosophy
- The mission for what you are building
- A high-level north star metric

You do not need all four. Cover the mission and pick a north star metric. **Keep it to 1–2 minutes.**

### Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Names the company mission and picks a relevant north star metric |
| **Senior+** | Adds *why this company specifically*, names the competitive gap, and articulates the longer arc. **This step is often where the interview is decided.** |

> **Example:**
>
> *"OpenAI's mission is the safe and beneficial development of AGI for all of humanity. 'Humanity' includes our relationship with sentient beings who cannot advocate for themselves. This technology is a direct extension of that.*
>
> *Why animals first and not humans? Testing on humans raises ethical and legal questions that would take years to navigate. Animals are a safer proving ground. And there's a longer arc: translating a mind without spoken language is foundational research for AI-mediated communication for humans who cannot speak or write.*
>
> *Mission for this product: deepen humanity's understanding of sentient minds, starting with the species we share our lives with. North star: accuracy of emotional state interpretation validated against observed behavior — not session volume."*

> **Insider insight:** Across OpenAI transcripts, one of the clearest differentiators was whether candidates tied their answers back to the AGI mission unprompted. Interviewers noticed and rewarded it even when they did not explicitly ask for it.

---

## Step 3 — User Types

**Why this step matters:** User segmentation is a critical PM skill. Interviewers want to see you thoughtfully select a distinct, well-defined segment to help identify unique pain points.

**Your goal:** Segment by what *this technology specifically enables* — not segments that could apply to any product. Then prioritize one group.

**Good prioritization criteria:**
- Who has the most acute pain this technology solves?
- Who is the best fit for the company's mission and strategy?
- Who has the clearest path to willingness to pay?
- Which segment gives you the best signal on whether the core product works?

**Pick one and make the rationale explicit.**

> **Example:**
>
> User types to consider:
> - Pet owners wanting to understand a companion animal
> - Researchers and veterinarians who need ground-truth cognitive data
> - Conservation organizations tracking animal well-being
>
> **Prioritization:** *"We're going with pet owners. They are the largest addressable market, their need to understand their pet's emotional life is completely unmet by anything that exists today, and the use case maps directly to what this technology can actually deliver: vague emotional signals are enough to tell an owner something meaningful about how their animal is feeling."*

---

## Step 4 — Pain Points

**Why this step matters:** Interviewers are looking for evidence that you can genuinely understand the people you're building for — not just name a problem, but *feel* it. The depth you bring here determines the quality of everything that follows: shallow problem definition produces shallow solutions.

**Your goal:** Start by painting a picture of what it is to be this user. Walk through their life: daily routines, what they care about, what they worry about, what they wish they knew. The problems should surface naturally from that portrait, not from a checklist. **Aim for at least three distinct pain points, then prioritize one.**

> **Example:**
>
> *"Three key problems for pet owners:*
>
> **Separation anxiety:** The owner leaves for work and has no idea if the dog is calm or distressed all day. The dog has no sense of when they're coming back. Both sides are stuck in uncertainty with no way to close the gap.
>
> **Emotional bonding:** The owner wants to know their pet is genuinely happy, not just tolerating them. They read behavioral signals as best they can, but are never sure if what they're doing is actually good for the animal.
>
> **Training:** They try to correct or reinforce behaviors but can't tell whether the animal is responding out of understanding, fear, or just habit. Every attempt is a guess."*
>
> **Prioritization:** *"I'd like to focus on separation anxiety. It's the most acute of the three, affects the broadest share of pet owners, and it leans directly into what the technology can actually do: we don't need precise thoughts — just a reliable read on whether the animal is calm or distressed. It's also lower risk than training, which would require a level of precision and behavioral nuance the technology doesn't yet support."*

---

## Step 5 — Solutions

**Why this step matters:** This is where product taste shows. A list of features is not brainstorming. Generate at least **three meaningfully different ideas** that map directly to the problem — and show genuine excitement about at least one.

**Your goal:** After generating ideas, prioritize explicitly.

**Good prioritization criteria:**
- Which solution most directly addresses the root pain point you identified?
- Which is feasible given your assumptions about team and timeline?
- Which is most differentiated from what already exists?
- Which best maps to the north star metric from Step 2?

> **Example:**
>
> *"Three ideas targeted at separation anxiety:*
>
> **1. Real-time emotional check-in:** An app that shows the owner how their pet is doing while they're away. *"Your dog has been calm all morning."* Simple read on calm vs. distressed, updated throughout the day. Directly addresses the owner's helplessness and guilt without requiring precise thought translation.
>
> **2. Departure pattern detection:** The app learns the emotional pattern around the owner's departure and surfaces a calming routine or a flag. Over time, it can tell the owner whether their specific departure behaviors (crate, music, treat) are actually helping the animal settle.
>
> **3. Moonshot — Return signal:** A conditioned cue that the pet learns to associate with the owner coming back. Not language, but a pattern or sound tied to the emotional state the owner sends from their phone. Reduces uncertainty on both sides.
>
> **Prioritization:** The real-time check-in is the strongest starting point: it's directly feasible with vague emotional signals, it creates a daily habit, and it addresses the core pain without requiring behavioral modeling we can't yet do reliably. Departure detection is compelling but requires enough data to establish a baseline first. The moonshot is the long-term vision."*

---

## Step 6 — MVP

**Why this step matters:** Anyone can list features. This step is about judgment — what is essential before anything else, and what should wait.

**Your goal:** Start with the prerequisite. What must be true before this product can work at all? Then define the smallest version that delivers real value. **Name what you are cutting and explain why specifically.** Vague deprioritization signals avoidance. Specific deprioritization signals judgment.

### Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Picks the strongest solution and scopes it to something buildable with a clear core loop. MVP is realistic and the logic for what's included is sound. |
| **Senior+** | Ties every included feature back to the north star metric from Step 2 — making the scoping feel like a strategic decision, not a feasibility call. Deprioritized items get named explicitly with specific reasons: not *"too complex"* or *"out of scope"*, but a clear articulation of why including them would dilute focus or optimize for the wrong thing at this stage. |

> **Example:**
>
> *"The prerequisite is a reliable enough emotional signal to distinguish calm from distressed. Without that baseline, nothing else works."*
>
> **MVP:** *"A consumer app paired with the collar wearable that shows the owner a simple emotional read on their pet while they're away. Calm or distressed, updated throughout the day, with a rough sense of when and how long distress episodes last. Start with dogs. Cat support and departure pattern detection come after the core signal is validated."*
>
> *"The question the MVP answers: Is the read reliable enough that owners actually trust it and change their behavior based on it?"*

---

## Showing the MVP

**Why this step matters:** Many interviewers want to see your design sense, not just your product thinking. Showing the product — even roughly — demonstrates that you can translate a concept into something real and that you have a point of view on what the experience should actually feel like.

**Your goal:** Surface the most important and interesting parts of the product. This is not about completeness — it's about choosing the right screen or moment to show and making every design decision visible and deliberate.

### Drawing vs. Vibe-Coding

**If asked to sketch or draw:** Use a whiteboard or paper to show the core screen or user flow. Focus on the one or two moments that carry the most product value — not a full UI walkthrough.

**If asked to prototype:** You should have been taking notes throughout the interview. Copy and paste those notes directly into Claude and give it a specific, well-structured prompt. **The quality of your prototype is largely determined by the quality of your prompt.**

> **Insider insight — Meta AI Product Sense round:** Across transcripts, the candidates who struggled most tried to build something polished. The ones who advanced thought out loud about system tradeoffs, started functioning fast, and proactively discussed production-readiness before being asked. Interviewers followed up with questions about token usage, latency, and retrieval strategy — so narrating your choices as you build is part of the signal.
>
> *"I had already practiced with Cursor and Claude Code. I work at an AI startup. But I had never been asked that in an interview before, and now it's definitely becoming the norm."*
>
> Candidates who had practiced with Cursor, Claude Code, or Lovable beforehand had a meaningful advantage.

### Example Prototype Prompt

```
You are a senior product designer building a mobile app prototype. The product is 
a consumer app for dog owners that shows them whether their dog is calm or distressed 
while they are away from home. The emotional data comes from a collar wearable.

Build two screens:
(1) A home screen showing the dog's current emotional state (calm or distressed) 
    with a timeline of emotional states throughout the day
(2) A notification or alert screen that surfaces when a distress episode starts or ends

Design principles: warm, clean, consumer iOS feel. Should feel like a real app a 
pet owner would actually use, not a dashboard.
```

**Walk through every decision as you present it:** why those two screens, what the empty states would look like, what happens when the dog is consistently calm vs. when distress spikes. The prototype is a prop. Your narration is the interview.

---

## Common Pitfalls

**Under-asking on novel technology prompts.**
*"Read minds"* is undefined until you define it. The questions you ask are part of the signal on novel tech questions.

**Skipping strategy.**
Most candidates jump straight to users. Two minutes on mission and a competitive position make everything downstream feel grounded rather than generic.

**Generic segmentation.**
Segments that could apply to any product signal you haven't thought carefully about what this specific technology enables.

**Treating the question as the end of the round.**
Prepare for two transitions that happen consistently in interviews:

| Company | Common Follow-up |
|---|---|
| **OpenAI** | Ethical follow-ups: *"How do you prevent reinforcing harmful biases?"* / *"Design the safeguards for an AI that takes actions on the user's behalf."* OpenAI has a dedicated legal/ethics round for this. |
| **Meta** | Conflicting-metric trade-off: metric A is moving in the right direction, metric B is moving in the wrong direction — what do you do? This appeared in nearly every Meta loop analyzed, making it the dominant analytical follow-up in 2026. |

---

## Framework at a Glance

```
1. CLARIFY     → Define the technology; state assumptions about scope and context
2. STRATEGY    → Mission → why this company → north star metric (1–2 min)
3. USERS       → Segment by what this tech enables → prioritize one group
4. PAIN POINTS → Portrait first, problems second → prioritize one root problem
5. SOLUTIONS   → 3 meaningfully different ideas → prioritize against north star
6. MVP         → Prerequisite first → smallest version → name what waits and why
```
