# Introduction to Take-Home Assignments

> Take-home assignments have become one of the most common additions to PM interview loops at top companies. This module covers what take-homes are, how they're evaluated, and how to approach them effectively.

> **Verified — Uber:** The Uber take-home (called the "Uber Jam") is a deck plus live presentation. One senior PM candidate described it as "the most time-consuming part" of the entire loop: *"I spent about 15 hours thinking through the problem before I even worried about slide polish."* The debrief followed the presentation immediately, with back-and-forth questions from interviewers who had read the work closely.

---

## Why Take-Homes Matter More Now

Anyone can ship something in a day using AI tools, so companies need to assess judgment, craft, and strategic thinking in a more controlled setting.

**The format has gotten harder to fake.** Everyone preparing for PM interviews has access to the same AI tools and the same research on what "good" looks like. Take-homes that stand out in hiring committees are usually the ones that feel *specific*: specific to this company, this team, this problem space, this candidate's point of view — and their defense of that point of view.

---

## The Two Types of Take-Homes

### Type 1 — Feature Design

You're given a company, a user problem, or a growth challenge and asked to design a new feature. The deliverable is typically a structured presentation or doc covering: the problem, what you'd build, how you'd test it, and how you'd measure success.

**The best feature take-homes are anchored to a specific metric from the start.** The feature exists to move something that matters to the company, and every design decision traces back to that.

**Weak pattern:** Introduces a solution before establishing the problem, or measures success with metrics that don't connect to the business.

**Example prompts:**
- *"Propose a new Cowork or Claude Tag feature that helps teams solve more complex and/or larger problems. Focus on bitter-lesson-pilled big bets achievable by a small team of strong engineers in a 2-month timeframe."* — Anthropic
- *"We want to grow the adoption of Claude Code among Fortune 2000 companies. Propose a feature that would increase the virality of the product within an organization. Choose a direction that is a compelling market (from a size, product-market fit, and competitive landscape perspective) and achievable by a small team of 5 engineers in a 3-month timeframe."* — Anthropic
- *"Pick any role in any enterprise industry. Design an AI-powered product that would fundamentally transform how that role creates value (think: 10x in what they can accomplish vs. just automating how they do work today). Build a prototype using modern design/prototyping tools. Accompany the prototype with a brief PRD."* — Glean

---

### Type 2 — Roadmap

You're given a role at a specific company and asked to produce a prioritized set of bets across time horizons. The deliverable leads with a crisp analysis of where the company is now, then lays out what you'd build in order of confidence and timeline: typically a quick win (a few days), a medium bet (a few weeks), and a strategic bet (several months).

**Roadmap take-homes are about strategic judgment.** The question they're really asking: given everything you know about this company, what would you actually do — in what order, and why?

**Example prompt:**
> *"We are working with a large global airline that launched its first Sierra Agent approximately three months ago. Today, Sierra's chat agent supports: FAQs (policies, flight status, baggage rules), Account lookups (reservation retrieval), and Routing to live agents.*
>
> *The airline considers the launch stable but early, and leadership is now evaluating where to invest next. The airline has asked Sierra to help determine which single new journey the agent should expand into next:*
> - *Reservations: booking or changing flights, seat selection, paid upgrades*
> - *Loyalty Program Advisor: points balances, expiration, redemption, tier benefits*
> - *Airport Concierge: real-time airport support — gate info, transfer timing, dining, disruption guidance*
>
> *Note: Only one of these initiatives will be funded over the next two quarters."* — Sierra

> **Verified — Sierra:** A candidate described the take-home as *"very close to the actual job."* The prompt said to spend about 3 hours, but they spent significantly more: *"It was a dense prioritization and customer-management problem with real deployment pressure baked in."*

---

## What Interviewers Are Looking For

| Signal | What It Means |
|---|---|
| **A real position** | Commit to a defensible point of view — not a well-organized survey of options |
| **Company-specific thinking** | Something that could not be submitted anywhere with the company name swapped |
| **Rigorous experiment design** | Metrics that connect to the business; tradeoffs named explicitly, not implied |
| **Scope matching the level** | Junior: well-scoped feature. Senior+: cross-team, sequencing-aware, dependency-aware thinking |
| **Debrief readiness** | Every claim you made should be one you can defend live and in detail |

---

## Meeting the Senior Bar

| Level | What the Take-Home Looks Like |
|---|---|
| **Strong** | Clear, well-structured submission with a defensible idea anchored to the right metric. Can speak to every design choice under direct follow-up without hesitation. |
| **Senior+** | Reflects a non-obvious read on the company's current priorities. Names tradeoffs explicitly rather than implying them. Shows awareness of dependencies and stakeholders across the organization. The debrief is as strong as the written work — every claim was built from the candidate's own thinking, not borrowed from surface-level research. |

---

## For Take-Homes With a POC Deliverable

One of the most common debrief questions: *"If you were going to release this proof-of-concept into production, what would you change?"*

**The strongest candidates answer this proactively in their take-home.** Include a few bullets outlining production improvements — error handling, security, scale considerations, monitoring — and you'll signal a more thoughtful, real-world approach without being asked.

---

## The Debrief

Almost every take-home concludes with a live presentation and Q&A. While the assignment itself matters, **the discussion is often where interviewers get the strongest signal**.

**Expect questions like:**
- Why did you choose this metric over [alternative]?
- What would you do if the experiment failed?
- Who might disagree with this recommendation internally, and how would you handle that?
- What did you intentionally leave out, and why?
- What assumption are you least confident in?

The strongest candidates can speak confidently about every decision they made because they thought through the tradeoffs, assumptions, and potential objections themselves — rather than relying on AI to generate the answer. Follow-ups feel easy because the thinking is real.

---

## After You Finish Your Take-Home

**Before submitting:** Have someone push back on every major claim. If you're preparing alone, use AI to run that interrogation. The questions that make you hesitate are the ones you need to prepare for.

**The stress-test prompt:**
```
Here is my take-home for [company] for a [level] PM role:

[Paste your work]

Act as a tough interviewer from this company. Do three things:

1. Challenge my top recommendation — what's the strongest case against it?
2. Identify the two claims in my work that feel least supported. What evidence would you want?
3. Ask me the three follow-up questions you'd ask in the live debrief that would be hardest for me to answer.
```

Run this before you finalize anything.

---

## Quick Reference

```
TWO TYPES
→ Feature design: problem → solution → test → metric (anchored from the start)
→ Roadmap: analysis of now → quick win → medium bet → strategic bet → why this order

WHAT MAKES A TAKE-HOME STAND OUT
→ Takes a real position — not a survey of options
→ Specific to this company, this problem, this moment
→ Tradeoffs named explicitly, not implied
→ Every metric connects to the business
→ Could not be submitted anywhere else with the name swapped

DEBRIEF PREP
→ For every major claim: "What's the strongest case against this?"
→ For every metric: "Why this one and not [alternative]?"
→ For every decision left out: "What did you deliberately exclude and why?"
→ Run the stress-test prompt before you submit

SENIOR+ SIGNALS
→ Non-obvious read on company priorities (shows real research)
→ Cross-team dependencies and sequencing awareness
→ Proactively addresses production considerations for POC work
→ Debrief is as strong as the written work
```
