# AI Prompt Toolkit for Take-Home Prep

> Seven steps, copy-paste prompts for each. This is the execution workflow. If you haven't read the Introduction to Take-Home Assignments yet, start there — it covers the two formats and what interviewers are actually scoring.

The prompts work for both feature design and roadmap take-homes. **The most important step happens before you open Claude at all.**

---

## The Seven Steps

```
Step 1: Think before you prompt      → Your instincts first, AI second
Step 2: Research the company         → Specific context, not general knowledge
Step 3: Develop your idea            → Named feature + clear hypothesis
Step 4: Pressure-test it             → Harden before you build
Step 5: Build your outline           → Structure before execution
Step 6: Have Claude build it         → Polished draft, not a rough start
Step 7: Interrogate it before they do → Debrief prep before you submit
```

---

## Step 1 — Think Before You Prompt

Before you open Claude, read the brief carefully. Then close the laptop.

Go on a walk. Drive somewhere. Do whatever helps you think without a screen in front of you. **Record a voice memo of your raw reaction to the prompt:**
- What's the company's real problem?
- What would you build?
- Why does that feel right?
- What feels obvious, and what feels more interesting?

Don't filter. Talk through your instincts even when they're half-formed. Then come back and paste that transcript into Claude as the first message of your session.

**This step is not optional.** It's the thing that makes everything that follows yours.

When you start a take-home by asking Claude what to build, you get an answer built entirely from AI priors. When you start by pasting your own messy, specific thinking, the output is grounded in a real perspective. Interviewers who read twenty of these can feel the difference. The AI-first take-homes have a particular texture: thorough, structured, covering the expected ground — and completely without a point of view.

### Prompt 1 — Voice Memo Dump

```
I recorded my raw thinking about this take-home before doing any research. Here's the transcript:

[Paste your voice memo — messy is fine]

Don't clean this up or restructure it yet. First, tell me:
1. What's the strongest instinct in here, even if it's underdeveloped?
2. What assumptions am I making that need to be tested before I commit to this direction?
3. What am I circling around but haven't clearly landed on yet?

Hold this for now. We'll come back to it after I do company research.
```

---

## Step 2 — Research the Company

Now that your thinking is anchored, do the research that will sharpen it. You're not looking for general knowledge. You're looking for the **specific context** that makes your take-home feel like it was built for this team — not any PM role at any company.

### Prompt 2 — Company Research

```
I'm doing a take-home for [role] at [company]. Here's the prompt:

[Paste the full take-home brief]

Research [company] deeply. I want to understand:

1. Their current business model and the metric that matters most to them right now. Not just 
   what their north star is in theory, but what they appear to be actively optimizing for 
   based on recent decisions, launches, and public statements.

2. Their most significant growth challenge right now. What's getting harder? Where is there 
   user friction, retention pressure, or competitive threat?

3. Recent product decisions or strategic shifts in the last 12–18 months. What have they 
   built, killed, or changed? What does that tell me about what they value?

4. What this specific role signals. Who does this person work with? What problems are they 
   likely being hired to solve? What does "success in the first 90 days" probably look like?

5. Known patterns in how this team thinks about product. Do they talk about specific 
   frameworks publicly? Do they have a strong culture around experimentation, data, speed, 
   quality? What tradeoffs do they consistently favor?

When you're done, give me your single most important observation: the one thing I most need 
to understand about this company before I decide what to build.
```

---

## Step 3 — Develop Your Idea

You now have two inputs: your raw instincts from the voice memo, and a specific picture of the company from your research. This step combines them into a **concrete idea** — a named feature or bet with a clear hypothesis.

Don't skip this as a distinct step. A lot of candidates go from research directly to outlining and end up building around a direction that was never explicitly chosen or tested. Naming the idea and its hypothesis before execution keeps you from doing a lot of work in the wrong direction.

### Prompt 3 — Develop the Idea

```
I now have two inputs. Here's my voice memo summary:

[Paste the key instincts from Step 1 — a few sentences is fine]

And here's what I learned from researching [company]:

[Paste the key findings from Step 2, especially the single most important observation]

Using both of these, help me develop a specific, defensible idea for this take-home.

I want you to:

1. Identify the strongest seed across both inputs and explain why it's particularly 
   compelling for this company right now — not just generically.

2. Articulate the sharpest version of that idea. Not a general direction, but a named 
   feature or bet with a specific hypothesis: what does it do, for whom, and why will 
   it move the metric that matters most to this company?

3. Tell me what business outcome this idea most directly serves, and why that's the right 
   outcome to anchor to given what you know about this company's current priorities.

4. Tell me the "interesting" version of this idea: the more ambitious or contrarian angle 
   that goes beyond the obvious answer. Is it worth the risk, or is the straightforward 
   version stronger?

After this, give me a one-paragraph summary of the idea I should carry into Step 4. 
I'll edit it before we move on.
```

---

## Step 4 — Pressure-Test It

Before you commit, have Claude challenge the idea hard. This step isn't about finding a better idea — it's about **hardening the one you have**. A take-home that has survived real pushback is much harder to pull apart in the debrief.

**This step is a conversation, not a single prompt.** Run the prompt below, respond to the pushback yourself, then have Claude push back again. Go back and forth until the idea feels genuinely solid — or you've discovered a real flaw worth addressing.

### Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Strong** | Lands on a clear idea and defends it against the most obvious objections. Reasoning is coherent and holds up under scrutiny. |
| **Senior+** | The idea reflects a non-obvious read on the company's current priorities. The tradeoff is explicit: here's what this optimizes for, here's what it knowingly deprioritizes, and here's why that's the right call for this company right now. The pressure-test conversation changed or sharpened something real. |

### Prompt 4 — Pressure Test

```
Here's the idea I'm taking into my take-home:

[Paste your one-paragraph idea summary from Step 3]

I want you to stress-test this hard. Play the role of a skeptical senior PM at [company] 
who has seen a lot of take-homes and knows this product well.

Challenge me on:

1. The core assumption. What's the weakest thing I'm assuming to be true? What would have 
   to be false for this whole idea to fall apart?

2. The "why hasn't this been built" question. If this is a good idea, why hasn't [company] 
   already done it? What do I think I know or see that the team inside doesn't?

3. The internal resistance. Who at [company] would push back on this idea, and what would 
   they say? Think about engineering, growth, safety, legal, or leadership — whoever the 
   most credible skeptic would be.

4. The failure mode. What's the realistic version of this that doesn't work? Not a 
   catastrophic failure, but the quiet one where it ships, people don't adopt it, and 
   in six months it's deprioritized.

5. The simpler alternative. Is there a meaningfully simpler or lower-risk version of this 
   that captures most of the upside? If yes, which one should I build?

Ask these as real questions, not rhetorical ones. I'll respond, and then push back again 
on my answers. We keep going until the idea is either solid or I've found something worth 
changing.
```

---

## Step 5 — Build Your Outline

Now you're ready to structure the take-home. The goal of this step is to get a **full outline with enough detail in each section** that you know exactly what you're arguing before Claude writes anything.

Use the appropriate prompt below depending on your take-home type.

### Prompt 5a — Feature Take-Home Outline

```
Here's the idea I've pressure-tested and landed on:

[Paste your refined idea from Steps 3 and 4]

Build me a full outline for a feature design take-home. For each section, give me 2–3 
sentences of guidance on what I should be thinking about and what a strong answer looks 
like. I'll fill in the substance.

The outline should cover:

- Business outcome: what company-level goal does this serve?
- Primary KPI: the single metric this feature is designed to move, and why that's the right one
- User problem: the specific user, their specific friction — not a generic pain point, 
  but something grounded in behavior
- Opportunity: why this problem is worth solving now, and what the unlock is
- Core feature: what it actually is, how it works, what the user experience looks like 
  at a level of detail that feels real
- Engagement mechanics: how do users discover, create, and stay engaged with this feature 
  over time?
- Notification strategy: what triggers a notification, what does the copy do, how often, 
  through what channel?
- Experiment design: hypothesis, test vs. control, rollout approach, what I'm watching 
  for in the first two weeks
- Metrics: primary KPI, supporting adoption and engagement metrics, guardrail metrics, 
  and what movement in each signals success or a problem
- What success looks like at 30, 60, and 90 days

After you build the outline, flag the 2–3 sections where my idea is currently 
underdeveloped and I'll need to do more thinking before Claude can build it.
```

### Prompt 5b — Roadmap Take-Home Outline

```
Here's the idea I've pressure-tested and landed on:

[Paste your refined idea and company context]

Build me a full outline for a roadmap take-home. For each section, give me 2–3 sentences 
of guidance on what to consider. I'll fill in the substance.

The outline should cover:

- Company analysis: where is [company] right now? What's the growth challenge, competitive 
  pressure, or strategic moment that makes this roadmap necessary?
- Prioritization rationale: what framework am I using to prioritize, and why does it fit 
  this company's situation?
- Quick win (under one week): what's the highest-confidence, lowest-risk bet? Why does it 
  matter enough to do first?
- Medium bet (roughly four weeks): what's the bet that requires real execution but has a 
  clear hypothesis? What does it unlock if it works?
- Strategic bet (18–24 weeks): what's the high-risk, high-ceiling move? What has to be 
  true for it to be worth doing?
- Dependencies and sequencing: does the order matter? Does the quick win set up the medium 
  bet, or are they independent?
- Success metrics per bet: how do I know each one worked?
- What I'd stop or deprioritize to make room for this roadmap

Flag which sections are currently underspecified so I know where to do more thinking 
before we build.
```

---

## Step 6 — Have Claude Build the Take-Home

Once your outline is solid and you've filled in your own thinking for each section, have Claude build the full take-home. The goal is a **polished, complete document** you can take directly into a slide deck or prototype — not a rough draft you then rewrite from scratch.

> **On format:** If your take-home will be presented as a deck, use Claude to build it directly in presentation format, or use a tool like Gamma or v0 to turn the output into a visual prototype. A take-home that looks like a real product spec or polished presentation carries more weight than a document with headers and bullets.

### Prompt 6 — Build the Take-Home

```
Here's my complete outline with my notes filled in for each section:

[Paste your outline with your own thinking for each section]

Build the full take-home from this. A few rules:

- Where I've given you specific language, a specific claim, or a specific example — use it. 
  Don't smooth it into something generic.
- Where I've given you a direction but not the details, make reasonable choices and flag 
  each one clearly so I can review and override.
- The tone should be direct and confident. This is a PM making a real recommendation, 
  not hedging every claim.
- Write it section by section, in the order of the outline.
- Format this as slide-by-slide deck content (title + 3–5 bullets per slide) or a written 
  spec with headers and full paragraphs — whichever format I'm submitting in.

When you're done, give me:
- A list of every assumption you made that I need to verify or add my own thinking to
- The 2–3 places where the argument is currently thinnest and needs more support
```

> **After Claude builds the first draft:** Read the whole thing out loud before making any edits. You'll immediately hear the sections that sound like AI and the sections that sound like you. Rewrite the AI-sounding ones in your own voice before moving to Step 7.

---

## Step 7 — Interrogate It Before They Do

Every take-home ends with a debrief. The hiring team will push hard on every claim: why this metric, why not X instead, what happens if the test fails, what did you not consider?

**Don't run this prompt on a first draft. Run it on the version you think is ready to submit.**

The candidates who stumble during debriefs aren't the ones with weak ideas — they let Claude build sections they didn't fully own and couldn't speak to under pressure.

### Prompt 7 — Debrief Prep

```
Here's my complete take-home:

[Paste]

I have to present this to the hiring team, and they will challenge everything. I want you 
to interrogate this the way a skeptical hiring committee would.

Go section by section. For each claim I'm making:
- Ask me the hardest follow-up question an interviewer would ask
- Tell me if my evidence or reasoning is thin, or if I'm making an assumption I haven't 
  supported
- Flag anything that sounds generic, that could have been written for any company, or that 
  doesn't hold up if you push one level deeper

After going through the sections, give me a list of the five questions I'm most likely to 
get in the debrief. For each one:
- Tell me what a strong answer looks like
- Tell me whether my current take-home sets me up to answer it well, or whether I need to 
  add or change something before I submit
```

---

## Quick Reference — All Seven Prompts

| Step | What You're Doing | Key Input |
|---|---|---|
| **1. Voice memo dump** | Anchor your own thinking before AI touches anything | Raw transcript of your instincts |
| **2. Company research** | Get the specific context that makes this feel like *this* company | Full take-home brief |
| **3. Develop the idea** | Combine instincts + research into a named, hypothesized bet | Voice memo summary + research findings |
| **4. Pressure test** | Harden the idea against the strongest objections before you build | Refined one-paragraph idea |
| **5a/5b. Build the outline** | Structure before execution — know what you're arguing in each section | Pressure-tested idea |
| **6. Build the take-home** | Full polished draft from your filled-in outline | Outline with your own notes in each section |
| **7. Debrief prep** | Interrogate your own work before they do | Final submitted version |

```
THE CARDINAL RULE
→ Your instincts first. AI second.
→ If you can't defend a sentence in the debrief, it shouldn't be in the take-home.
→ Read the full draft out loud before submitting — rewrite anything that sounds like AI.
→ The strongest take-homes feel like only one person could have written them.
```
