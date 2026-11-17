# Deep Dive: Clarifying Questions

> Most candidates ask clarifying questions because it is Step 1. That is the wrong reason.
>
> **The only reason to ask a clarifying question: the answer will change what you build.**

If the interviewer's answer would not shift your direction, your user type, your problem definition, or your solution set — do not ask it. Asking it wastes time and signals you are going through motions.

**The fast test:** Before you ask anything, finish this sentence in your head:

> *"If the answer is X, I go one direction. If the answer is Y, I go a different direction."*

If you cannot complete that sentence, skip the question.

> **Tip:** The most common waste is asking constraint questions on open-ended strategic prompts. *"Is there a hard deadline I should keep in mind?"* is fine for a startup prompt, but not for a long-horizon vision question. Read the type of problem, not a checklist of question categories.

---

## Part 1 — Define the Terms

This is where most candidates underinvest. When you receive a prompt, write it down, underline every load-bearing word, and **define each one out loud before designing anything.**

### Two modes for handling a term

| Mode | When to Use It | How |
|---|---|---|
| **Ask directly** | Terms that describe the technology, the core mechanic, or words with multiple valid meanings | These are not assumptions. They are definitions you need. |
| **State and confirm** | Terms that describe product context: company stage, geography, timeline, scope | Form an opinion, state it as your assumption, and invite correction. Do not make the interviewer do your scoping work for you. |

> **Example — Meta product sense prompt:** *"Build an app that helps people play sports together."*
>
> Load-bearing words: **app, sports, together**
>
> - *"Should I assume this lives within Facebook or Instagram, or are we thinking standalone? I'll assume standalone unless you'd prefer otherwise."*
> - *"I'm going to assume physical sports by default, but I want to flag that digital and esports could also be in scope. Any reason to exclude those?"*
> - *"I'm assuming two or more people coordinating, not a solo experience. I'll also assume we're not designing for live digital play between users, unless you want me to."*

**What you are doing here is not pedantry.** You are visibly expanding the problem space. A candidate who never defines *"sports"* will design a basketball court-booking app. A candidate who defines it opens the door to digital competition, broader activity categories, and social organizing that goes beyond any one sport. That expanded scope gives you more interesting user types, sharper pain points, and better solutions downstream.

> **The candidates who struggle most in user segmentation are almost always the ones who never defined their terms in Step 1.** They locked themselves into a narrow reading of the prompt and ran out of interesting directions to go. Define the terms early and your Step 3 almost writes itself.

> **Verified — Meta L5 PM candidate on a "Design a solution for contractors" prompt:**
> *"I first asked a clarifying question on whether they wanted the solution on a specific Meta platform or whether I should think more broadly. Once they clarified that it could be built on an existing Meta platform, I chose Facebook as the initial platform and built from there."*
>
> That single clarifying question changed the entire design direction. Without it, the candidate would have either over-scoped (building standalone) or under-scoped (assuming Facebook without confirming).

### Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Identifies the key terms worth defining, disambiguates them cleanly, and establishes a working scope before moving on. |
| **Senior+** | Works through every load-bearing word in the prompt without rushing past any of them. Explicitly names what is now in scope as a result of that unpacking, and tells the interviewer directly that the expanded space will shape the options explored in Step 3. |

---

## Part 2 — Set Scope with Assumptions

After defining the terms, address the product constraints: market, deadline, resources, hardware or software, and whether standalone or within an existing product. **For most prompts, these belong in your assumptions rather than your questions.**

> **Example:**
>
> *"I'm going to assume we are targeting the US market first, have a standard full-stack team, and are working toward a six-to-twelve month horizon. We are open to hardware or software solutions. Does that work?"*
>
> That takes thirty seconds. It signals strong product judgment and lands very differently from asking the interviewer to decide each of those for you.

### Common scope assumptions to state and confirm

- Market and geography
- Timeline and deadline
- Team size and resources
- Hardware or software
- Standalone product or within an existing platform

> **Tip:** On startup prompts, deadline and resources matter more because the tradeoffs are sharper. On large-company prompts, skip the resource questions and spend your assumption-setting on scope and market.

---

## Novel Technology Prompts — A Different Level of Rigor

On standard product prompts, defining terms is table stakes. **On novel technology prompts, the clarifying questions section is the interview.**

Google has asked: *"Teleportation technology has been invented. What do you build?"* OpenAI consistently uses single-sentence prompts on technologies that don't yet exist. The test is not your product instincts. It is **whether you understand what is actually possible before you start designing.**

**Treat the technology like a system. Interrogate it from every angle before forming any opinion about the product.**

### For a teleportation prompt, a strong candidate covers

| Dimension | Example Questions |
|---|---|
| **Mechanics** | How does it work? What does the physical setup look like? |
| **Constraints** | What can be teleported? What size or mass? Any limitations? |
| **Safety** | Is anything lost or changed in transit? Has it been tested on humans? |
| **Geography** | Can you go anywhere, or only between fixed installations? |
| **Cost** | What does it cost to build and operate? Who can afford it? |

> **Example — what the answers reveal:**
>
> The interviewer tells you: teleportation goes booth to booth, fixed locations, about the size of a phone booth, not yet tested on humans.
>
> **That answer changes everything.** You are not designing personal teleportation devices. You are designing city-scale infrastructure. That shifts your user types, pain points, solution set, and MVP. If you had started designing without asking, your answer would collapse the moment the interviewer revealed the constraints.

> **Watch out for:** Treating *"I'll just make reasonable assumptions"* as a substitute for understanding the technology. On novel-tech prompts, your assumptions are not reasonable if they are based on a technology you never defined. This is exactly what the interviewer is testing.

### Meeting the Senior Bar — Novel Tech

| Level | What It Looks Like |
|---|---|
| **Solid** | Asks two or three clarifying questions, catches the obvious gaps, and establishes enough grounding to move forward confidently. |
| **Senior+** | Treats clarifying questions as a **structured interrogation of the technology itself** — working through mechanics, constraints, cost, and testing status before forming any product opinion. The payoff: an answer that flows directly from the constraints rather than being assembled around them. When the interviewer probes, there's nothing to adjust because the technology was fully defined before the product thinking started. |

> **Verified — OpenAI principal PM candidate** on the prompt *"You have technology that translates speech or text into animal language. You're a startup. What do you do?"*
>
> Described treating it *"like a normal product design question, even though the prompt was wild."* That composure comes from having actually interrogated the technology first.
>
> Across OpenAI product sense rounds, the most common failure is candidates who ask one or two surface questions and move on. The interviewer probes the technology later, and the answer falls apart.

---

## Knowing When You've Asked Enough

You have asked enough when: **you can now defend the product direction you are about to take based on what you know.**

### Timing guidance

| Prompt Type | Time Budget |
|---|---|
| **Standard prompt** | 60–90 seconds |
| **Novel-tech prompt** | 3–4 minutes |

**One signal you are over-asking:** the interviewer answers *"up to you"* more than once. That means you have moved from definitions into design decisions — and those belong to you.

---

## Common Pitfalls

**Asking questions that don't change what you build.**
The question only earns its place if the answer shifts your direction. Run the test before you ask it.

**Defining only the obvious terms.**
*"Sports"* gets flagged. *"Together"* does not. Most candidates stop at the first load-bearing word they notice. Work through every one.

**Treating all questions the same.**
Questions about the technology or core mechanics go directly to the interviewer. Questions about product context are stated as assumptions and confirmed. Conflating them signals you don't have a point of view.

**Moving too fast on novel-tech prompts.**
The most common failure on teleportation, mind-reading, and similar prompts is a candidate who asks one question and starts designing. The technology section is not a formality. It is the test.

**Not connecting your definitions to what comes next.**
The best candidates make the connection explicit: *"Because we defined 'sports' broadly, in the next step I want to look at a few user segments that take advantage of that."* This tells the interviewer that Step 1 was deliberate, not mechanical.

---

## Quick Reference

```
STANDARD PROMPT (60–90 sec)
├── Define every load-bearing word in the prompt
├── Ask directly → technology / core mechanics / ambiguous terms
└── State + confirm → market, timeline, team, platform

NOVEL-TECH PROMPT (3–4 min)
├── Treat the technology like a system
├── Cover: mechanics → constraints → safety → geography → cost
└── Form no product opinion until the technology is fully defined

FAST TEST (before every question)
"If the answer is X, I go one direction.
 If the answer is Y, I go a different direction."
→ If you can't complete it, skip the question.
```
