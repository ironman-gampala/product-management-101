# System Design for PMs

> System design questions never disappeared. They got quieter recently, pushed aside by the wave of AI-related technical questions. But companies like Amazon, Stripe, Uber, and Roblox still run them.

---

## Why This Matters Now

The assumption that system design is an engineering concern has always been wrong — but it now costs more. PMs are taking on more ownership of technical decisions: scoping features against infra constraints, pushing back on complexity estimates, and making build-vs-buy calls without engineering in the room. Interviewers use system design questions to test exactly that capacity.

**The bar isn't engineering depth — it's product judgment applied to technical constraints.** Those are different things.

> **Note:** Some companies have shifted toward AI-specific system design questions. Google, for example, has asked candidates to design a high-level system for Gemini responding to a user query. This lesson focuses on traditional system design. The AI Technical Fluency lesson covers AI-specific questions separately.

---

## What Interviewers Are Scoring

Your recruiter will flag if a system design round is in your loop. When it appears, the interviewer is **not** checking for code, implementation details, or infrastructure expertise. They're scoring four things:

| Signal | What It Means |
|---|---|
| **User needs → system requirements** | Can you translate what users need into what the system must do? |
| **Component identification** | Can you identify which components matter and explain why each is there? |
| **Proactive tradeoffs** | Do you reason about tradeoffs before being asked, or only when pushed? |
| **Engineering credibility** | Are you credible enough on technical constraints to be a real partner to engineering? |

> **System design in a PM loop is fundamentally a scoping exercise dressed as a technical one.** The interviewer wants to see how you decide what matters — not how deep you know a particular component.

---

## The Five-Step Framework

These steps work for almost any system design prompt. The order is deliberate: each step builds the foundation for the next. **The most common failure mode is skipping straight from prompt to architecture and spending ten minutes designing the wrong system.**

All five steps are illustrated using a real question from a Roblox APM loop:

> *"Roblox has users in different languages and a machine learning system for auto-translation. Design a system that would automatically translate between different people on different servers."*

> **Context:** A candidate who went through this loop noted that *"the product and system questions both kept tying back to the Roblox ecosystem instead of feeling like generic PM cases."* Knowing what the platform does (real-time multiplayer, young audience, creator economy) changes what requirements you surface in Step 2.

---

### Step 1 — Clarify and Scope

This is the step most candidates rush, and it's where interviews are lost.

Before drawing anything, ask questions:
- Who are the users and what are they trying to accomplish?
- Are there constraints worth knowing about: scale, latency requirements, data sensitivity?
- What functionality should be in scope, and what should be explicitly excluded?

Summarizing your understanding back to the interviewer before you start serves two purposes: it signals that you think before you build, and it gives the interviewer a chance to course-correct before you're ten minutes in.

**Good clarifying questions for the Roblox prompt:**
- *"Does translation need to happen in real time during live gameplay, or is some delay acceptable?"*
- *"Are we translating chat messages only, or also in-game text like item names and UI elements?"*
- *"Should the system support all Roblox languages or a prioritized subset?"*

> **These questions change the architecture significantly.** Real-time chat translation in a live game is a very different system from batch translation of UI text. Establish this before you draw anything.

---

### Step 2 — Define Requirements from User Needs

Translate your product understanding into concrete requirements using a **user journey**: walk through what the user does step by step, then convert each step into a system requirement.

This step comes before architecture for a specific reason: requirements give you a principled basis for deciding which components belong in your diagram. If a component doesn't trace back to a requirement, it probably shouldn't be there. Candidates who skip this step almost always over-engineer or miss something obvious.

**Simple user journey:**
1. Player A (Portuguese speaker) types a message in shared game chat
2. Player B (English speaker) is in the same session
3. Player B should see a translated version of that message in near-real time

**Four requirements that emerge from this journey:**
- The system detects the source language of each incoming message
- The system translates the message into the recipient's preferred language
- Translation happens fast enough to feel real-time in a gameplay context (under ~300ms)
- User language preferences are stored and retrievable

---

### Step 3 — Identify System Attributes

Beyond what the system does, define **how it should feel**. These are qualities, not features. Common attributes in PM loops: speed, accuracy, reliability, privacy/security.

This step comes before architecture because your attributes determine your tradeoffs. Two systems with identical requirements but different attributes can look completely different in practice.

**Example — Roblox:**

> *"Given the gameplay context, speed is the priority. A translated message that arrives three seconds late has lost all conversational meaning. Accuracy matters, but imperfect translation is preferable to no translation — players are used to imperfect cross-language communication. Privacy is also relevant because chat content is user-generated and potentially sensitive, especially on a platform with a young user base."*

---

### Step 4 — Build the Basic Architecture

Now draw the diagram. Cover:
- Every component needed to satisfy your requirements
- What each component does
- How components communicate with each other

Stay at the right altitude. You're not writing pseudocode or specifying a schema. You're showing that you understand the pieces, why they're each there, and how data flows between them.

**Roblox translation system — high-level architecture:**

```
Game Client
    ↓ [sends chat message]
API Gateway
    ↓ [routes request]
Translation Service
    ↓ [checks first]
Language Cache ──────────────────────── [HIT: serve translation immediately]
    ↓ [MISS]
Language Detection Module
    ↓ [identifies source language]
ML Translation Model
    ↓ [translates]
Language Cache ←──────────────────────── [stores result for future use]
    ↓
User Preferences Database ─── [fetches recipient's preferred language]
    ↓
Game Client ← [delivers translated message]
```

---

### Step 5 — Surface Tradeoffs and Improvements

Close by proactively raising the tensions in your design. **Don't wait to be asked.** This is where senior candidates set themselves apart — not because they built a perfect system, but because they already know where it bends.

Ask yourself:
- What in this architecture is at odds with the attributes I defined?
- What are the failure modes?
- What would I change if scale doubled or latency requirements tightened?

Candidates who only describe what they built look like they're presenting. Candidates who also say *"here's what I'd worry about and why"* look like they're thinking.

**Example — Roblox:**

> *"A few tensions worth flagging. Chat is colloquial — players use slang and game-specific shorthand that doesn't cache well, so cache hit rates will be lower than expected and the ML model will be called frequently. We need fallback behavior: show the original message while translation loads rather than blocking the conversation. And if Roblox is using a third-party translation API, there are two concerns: cost at scale and data privacy for user-generated content on a platform with a young audience. Those are conscious tradeoffs, not flaws."*

---

## Meeting the Senior Bar

| Level | What the Answer Looks Like |
|---|---|
| **Solid** | Identifies one or two tradeoffs when prompted and explains them clearly, connecting them to user impact |
| **Senior+** | Surfaces tradeoffs before being asked, connects them explicitly back to the system attributes defined in Step 3, and closes with a recommendation rather than a list of options. Also raises the second-order concern — not just "the cache can be stale" but what stale data means for a user mid-game, and the specific mitigation for it |

> **From the Roblox loop:** Interviewers wanted *"both high-level product thinking and some technical/system thinking — different interviewers seem to want different levels of detail."* Anchor in the product layer, but be ready to go deeper on any component when pushed.

---

## Variation — Reverse System Design

Many companies (Stripe, in particular) run a **reverse system design round**. The prompt is simply: *"Walk me through a system you've previously designed. Describe the architecture, components, and how data flows through it."*

They're testing whether you've actually shipped something technical and can articulate it precisely. You need to know:
- The architecture and data flow
- The key tradeoffs you made
- One concrete technical decision you'd make differently in hindsight

> **A candidate who went through this at Stripe:** *"Go in with one system you know cold and be ready to whiteboard the architecture, the data flow, and one concrete technical tradeoff like conflict handling."*

If you've led a technically complex product, this is your moment. If your background is lighter on technical ownership, pick the most technical project you've touched and reconstruct it at this level of detail before your interview.

---

## Common Pitfalls

**Don't try to be an engineer.**
The moment you start speculating about infrastructure tools or implementation details you're not confident about, you lose credibility. Stay at the product-architecture level. If the interviewer wants more depth, they'll push.

**Don't get intimidated by broad prompts.**
If they say *"Design ChatGPT"* with no other guidance, they're stress-testing your composure. You don't need to build something as complex as ChatGPT — that took many people months. You need to come up with a plan for an MVP in 45 minutes. It doesn't have to be fancy. It just has to hold together.

**Cut scope aggressively.**
The more senior a candidate, the more scope they cut. Abstract away components: *"Let's keep that as a black box for now and come back to it later."* This is a feature of your judgment, not a gap. You have 45 minutes — make the scope manageable.

**Don't name a specific technology unless you know its alternatives.**
Don't say "Let's use Redis here" unless you're ready for "Why not Memcached?" If you throw out a brand name, that follow-up is almost certain. Safer approach: *"Let's use a cache here."*

**Don't skimp on clarifying questions, even if the prompt seems clear.**
Good system design interviewers purposefully withhold information — the only way to unlock it is to ask. Requirements gathering is where good designs come from. Ask away.

---

## Quick Reference

```
THE FIVE STEPS (in order — don't skip)
1. Clarify and scope:   Who, what's in scope, what latency/scale constraints exist?
2. User journey → requirements: Walk the user path, convert each step to a system need
3. System attributes:   Speed? Accuracy? Privacy? Reliability? (defines your tradeoffs)
4. Architecture:        Components + what each does + how data flows
5. Tradeoffs:           Proactively surface tensions — don't wait to be asked

WHAT TO AVOID
→ Jumping from prompt to architecture (skips Steps 1–3, designs the wrong thing)
→ Naming specific technologies without knowing the alternatives
→ Speculating about implementation details you're not confident about
→ Over-engineering — cut scope before adding components

REVERSE SYSTEM DESIGN PREP
→ Pick one system you know cold
→ Be ready to whiteboard: architecture, data flow, key tradeoffs, one thing you'd change
```
