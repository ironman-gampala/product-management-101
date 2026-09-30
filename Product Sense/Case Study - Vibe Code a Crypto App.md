# Case Study: Vibe Code a Crypto App

> A real vibe coding interview, walked through step by step. What made this candidate stand out wasn't the quality of the prototype — it was how he used his time.

---

## The Setup

Vibe coding interviews are showing up at more companies. You receive a prompt, a time limit, and access to AI tools. You need to scope a product and produce something tangible.

**What made this interview stand out:** The first half was for brainstorming and scoping. The second half was for building. Most candidates make the mistake of jumping straight into code generation.

**The candidate's opening move — declaring the stack before writing a single prompt:**

> *"I'm going to be utilizing Notion. I just want us to brainstorm and validate the ideas together so you can see what I'm doing. I'm going to be using ChatGPT — it's going to be extremely important for us to identify any risks or insights to narrow down the question. And then I'm going to use Lovable. I'm going to try to vibe code and prototype at the end once we refine the MVP and know that's what we actually want to build."*

> **Tip:** In a vibe coding interview, your tools should follow your thinking. Declare your stack up front, explain how each tool fits into your workflow, and resist the urge to start building before you've scoped the problem.

---

## Step-by-Step Walkthrough

### Phase 1 — Research with AI

**First move:** Compare stock ownership and crypto ownership in the US.

ChatGPT surfaced:
- Stock ownership: ~62% of US adults
- Crypto ownership: ~40% of US adults

**That gap became the foundation of the MVP.** There's a large population of people comfortable with investing who haven't yet crossed over into crypto.

Follow-up queries:
- **Regulatory tailwinds** → surfaced the GENIUS Act as a signal that institutional adoption is accelerating and retail will follow
- **Risks** → regulatory fragmentation, unclear token classification, oversight complexity — documented these, too

In under five minutes, the candidate had a data-backed argument for why this product should exist:
- **Opportunity:** ownership gap
- **Timing:** regulatory momentum
- **Constraints:** market fragmentation

> **Tip:** Use AI to build your *case*, not just your product. Market sizing, trend validation, and risk identification can all happen in real time during the interview.

---

### Phase 2 — Making Assumptions Explicit

The candidate had framed the ownership gap as a straightforward opportunity. The interviewer spotted the hidden assumption:

> *"There's an assumption that people who own stocks would potentially want to own crypto."*

They agreed it would need validation in a real product process, but moved forward with it as a stated assumption.

**Why this matters:** The leap from *"people own stocks"* to *"those people want crypto"* is not self-evident. An adversarial interviewer could have spent ten minutes pulling at that thread.

> **Tip:** State your assumptions before someone has to find them for you. When an interviewer surfaces an assumption you missed, acknowledge it cleanly, note what you'd do to validate it with more time, and keep moving. Don't get defensive.

---

### Phase 3 — User Segmentation

Four groups within retail investors were identified:
1. Crypto builders
2. Active traders
3. Meme coiners
4. **Web2 newbies** — never touched crypto

**Chosen segment:** Web2 newbies. Reasons: large TAM, high pain severity, clearest path to the business objective of growing crypto ownership.

**The strategic vulnerability the interviewer flagged afterward:**

> *"You left the door open on meme coiners, active traders, and builders by not showing why you invalidated them. What you could have done is just said, 'For the user segment, I'm going to pick Web2 newbies because they are new to this environment,' and left everyone else out. Then I would have had no questions whatsoever. But because you mentioned all these other people, now I have five questions. I could have completely derailed the whole interview on that."*

> **Tip:** In an interview, every option you mention is a door you open. An adversarial interviewer can walk through any of them. If you show breadth, you also need to show why you're narrowing. If you can't defend the elimination — just state your pick with conviction and move on.

---

### Phase 4 — Pain Points and Solutions

**Three pain points for Web2 newbies:**

| Pain Point | Description |
|---|---|
| **Fear** | Volatility, unknown territory, general anxiety about crypto |
| **Unknown concepts** | Staking, smart contracts, proof of work — nothing resembles their existing experience |
| **Regulatory risk** | *"What if it all gets banned?"* |

**Three solution directions:**

| Solution | Description |
|---|---|
| AI-assisted agent | Helps with crypto interactions end to end |
| Education-driven wallet | Explains every step in simple terms |
| AI-driven news | Personalized crypto news for retail investors |

**Chosen solution:** The AI-assisted agent.

> *"For me, everything starts in crypto when you actually hold a token. Now you have unlimited capabilities — to stake, to transfer it, to do anything that blockchain allows you to do. I picked the AI-assisted agent because it can streamline this conversion to buy your first crypto."*

**The logic:** If you can get someone past their first purchase, they become a holder. Once they're a holder, education, news, and engagement all have somewhere to land.

The interviewer reinforced this by pushing on leading indicators: *"What's an even earlier leading indicator towards somebody who would have a buy conversion?"*

> **Tip:** Pick the solution that unlocks the most downstream value. Then define the funnel so it's clear exactly where your product creates leverage.

---

### Phase 5 — Prototyping

With the problem scoped and the solution chosen, Lovable was finally opened.

**The workflow:**

```
Notion notes → ChatGPT (Lovable plugin) → detailed user journey → Lovable
```

> *"There's a nice trick: go into ChatGPT, use the Lovable plugin, and define the user journey really fast. It saves you tens of minutes of trying to define a step-by-step user journey. It just spits it out."*

**Live test:** Asked the AI copilot to compare Bitcoin and Solana, and where to invest $1,000.

**The Robinhood move:** Found a crypto app design screenshot online, uploaded it to Lovable, and asked it to restyle the prototype to look like Robinhood. In ~30 seconds, the entire UI was transformed.

> *"If I ask customers what fintech apps they use, and then they see an exact mimic of that for crypto, that gives them confidence. That's something they're really familiar with."*

This wasn't a cosmetic choice. It was a **behavioral science decision** to reduce friction by connecting to something users already trust.

> **Tip:** Don't build from scratch when you can build from reference. Using existing design patterns that your target users already trust is a product decision. Use ChatGPT to generate the prompt, Lovable to generate the prototype — it's faster than trying to do everything in one place.

---

### Phase 6 — Handling the Hardest Challenge

The interviewer raised a sharp challenge:

> *"You have a system where people are afraid of crypto. You're integrating AI, which people fear. And you're also integrating to use a credit card online. So now you stack three fears. How do you mitigate that?"*

**The candidate's answer — one fear at a time:**

| Fear | Mitigation |
|---|---|
| **AI fear** | Personalize the agent; let it ask questions at the start so the interaction feels like a conversation, not a black box |
| **Payment fear** | Partner with a regulated custodian; support familiar payment methods (ACH, Plaid); make it feel no different from depositing into a stock brokerage |
| **Crypto fear** | Put guardrails on what the AI can recommend; make the user the one who performs the action (*"AI gave me the context, but I'm the one clicking buy"*); connect the experience to stock investing concepts they already know |

**The design principle:** The user stays in control. The AI educates and recommends. The human decides and acts. That separation builds trust.

> **Tip:** When your product combines multiple unfamiliar elements, address each fear individually. And always keep the user in the driver's seat for the highest-stakes action.

---

## The Most Valuable Feedback

After the interview, the interviewer gave a key observation:

> *"Because we rushed through the beginning part, I pushed you in a way that actually opened you up to get rejected in an interview because of the doors that we left open."*

> *"I've been in interviews where the interviewer just didn't like the person, and they purposefully went after open doors. They'd say, 'This person didn't think about this.' But the candidate was just focused on where they were going."*

**In the real world:** Showing multiple options and then narrowing is exactly the right approach.

**In an interview:** Every option you mention without invalidating is an invitation for the interviewer to question your judgment.

The candidate's own reflection:

> *"You have to catch the intent the interviewer has. If you catch the intent that they're allowing you to go and fix yourself, that's one thing. If they allow you to proceed and move forward with your pace, that's another. Try to have a brainstorm session with them. It's not only about you saying 'I'm the best, I'm picking this and that.' You give objective arguments, but at the same time you're asking, 'What do you actually think?'"*

---

## What Made This Candidate Stand Out

From the interviewer's perspective:

> *"He jumped in and was himself. He showed off his skills. He showed his workflow. There was a point where I jumped ahead, and he was like, 'Yeah, I have this, it's right here.' He handled it so smoothly. I felt the slap on my wrist, but it was so nicely handled. It was very vibey and collaborative."*

The candidate didn't panic or abandon his structure. He politely redirected the interviewer back to his outline.

---

## Personal Self-Evaluation Framework

Four dimensions to evaluate your own vibe coding performance:

| Dimension | Question to Ask | This Interview |
|---|---|---|
| **Originality** | What unique insight or mechanism am I creating? | The insight that the first purchase unlocks everything else gave the AI agent strategic depth |
| **Impact** | What's the quantified impact? | Tied everything to the business objective (double crypto ownership) and defined the conversion funnel |
| **Cross-domain bridging** | How am I connecting tech, business, and design? | The Robinhood-style UI was a behavioral science decision — not a cosmetic one |
| **Influence** | How does this work influence stakeholders? | The prototype becomes a communication tool — higher-definition than a PRD, faster to iterate than a full build |

---

## Interview Tips by Phase

### Before the Interview
- Decide on your tool stack and know how the tools connect
- Rehearse the full workflow end to end at least once
- Practice the pipeline: *Notion → ChatGPT → Lovable* (or your own equivalent)

### During the Scoping Phase
- Use AI as a live research partner
- Document everything in a shared workspace so the interviewer can follow your thinking
- Make assumptions explicit and move forward — don't wait for permission to decide

### When Narrowing Options
- Only open doors you intend to walk through
- If you list alternatives, explain why you're eliminating them
- If you can't defend the elimination, just state your pick and commit

### During the Build Phase
- Layer your tools: use ChatGPT/Claude to generate detailed prompts, then feed them to your code generator
- Use reference designs from products your target users already trust
- Don't try to make the prototype perfect

### When the Interviewer Pushes Back
- Read the intent: are they trying to help you close gaps, or stress-testing your conviction?
- Acknowledge the challenge, add nuance, and keep driving
- The worst thing you can do is freeze or abandon your direction at the first sign of resistance

> **The interviewer isn't evaluating whether you can vibe code a perfect app. They're evaluating whether you can think clearly under pressure, make deliberate product bets, and use AI tools to accelerate your judgment.**
