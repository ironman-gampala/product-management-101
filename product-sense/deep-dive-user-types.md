# Deep Dive: User Types

> The user you pick shapes every answer that follows. A generic choice produces generic problems and generic solutions. A too-specific one limits your creativity for the rest of the problem.

When you commit to a specific user, the rest of the answer follows: the pain point is theirs, the feature is built for them, and the success metric reflects whether it actually worked for them. When you stay generic, everything downstream is generic too.

> **Example — OpenAI product sense:** At OpenAI, product sense prompts are frequently intentionally under-specified. One candidate described *"a brutal product-sense interview with an under-specified memory-machine prompt and almost no feedback."* The lack of structure is part of the test. Your user choice is what gives the rest of the answer structure.

---

## What Interviewers Are Scoring

- Are the segments genuinely distinct, or do they overlap?
- Are they specific to what *this technology* enables, or could they appear on a list for a completely different product?
- Does the prioritization show judgment, or did you just pick the biggest group?
- **At Senior+:** Does the choice reflect company strategy, not just user need?

---

## How to Generate Your Segments

### Step 1 — Start with People, Not Categories

Ask: *who would actually benefit from this product?* Not in the abstract. Picture real people whose lives this changes.

For the animal mind-reading technology, that might be:
- A dog owner anxiously checking their phone at work
- A vet trying to assess a patient who cannot describe pain
- A conservation researcher watching an elephant herd from a distance

Let those people surface naturally before you start organizing them into buckets.

### Step 2 — Give Them Names

Once you have a sense of who they are, **name them.** Not labels — names.

- The Worried Dog Owner
- The Field Researcher
- The Conservation Scientist

This is not a stylistic flourish. Naming your user types forces you to actually picture a person, which makes the pain points you surface in Step 4 feel specific and earned. Interviewers notice the difference between a candidate who says *"pet owners"* and one who says *"the Worried Dog Owner who has no idea whether their dog is calm or distressed while they are at work."*

### Step 3 — If You're Stuck, Use a Lens

If real people aren't coming to mind, four lenses can help:

| Lens | How It Works | Best For |
|---|---|---|
| **By use case** | What is the user trying to accomplish? Maps to intent rather than surface attributes. | Novel products with no established user base |
| **By product usage stage** | New vs. casual vs. power users | Growth-stage products with usage history; less useful when the product is brand new |
| **By demographics** | Age, life stage, professional role | The most familiar lens — and the most overused. *"Kids, young adults, elderly couples"* could apply to any product. If your segments could belong to anything, go deeper. |
| **By consumption behavior** | What kind of value they want to extract | Media and content products: movie watchers vs. episodic TV viewers vs. old-catalog browsers |

---

## The Sharpening Test

After generating your segments, ask: **would any of these groups appear on a segmentation list for a completely different product?** If yes, they are still generic.

There is also a ceiling on the other side. A segment that is *too* narrow effectively pre-solves the pain point — when you get to Step 4, there is only one problem left to name.

**A useful rule of thumb:**
> Your segment should be specific enough that you can picture their daily rhythm, but not so specific that it describes just one part of their day.

| Too Broad | Right Level | Too Narrow |
|---|---|---|
| *"Dog owners"* | *"Dog owners with full-time jobs"* | *"Dog owners dealing with separation anxiety"* — has already named the problem |
| Can't picture their day | Can picture mornings, commutes, evenings | Step 4 collapses — only one pain point left |

---

## Prioritize One

Score each segment against three criteria — then commit to one.

| Criterion | Question to Ask |
|---|---|
| **Breadth** | How many people have this problem? |
| **Depth** | How acute is the pain? |
| **Mission fit** | How well does this segment fit what this company is trying to do? |

You don't need to work through every cell. Glance at the scores, say which segment is standing out and why, and commit. The goal is a clear, reasoned choice — not a full analysis.

### Meeting the Senior Bar

| Level | What It Looks Like |
|---|---|
| **Solid** | Produces distinct, sensible segments. Prioritization choice backed by clear rationale — typically the largest or most accessible group. The logic holds up. |
| **Senior+** | Segments are specific to what *this technology* enables. Prioritization names a criterion tied to the **company's mission or the technology's actual constraints**, and states what the chosen segment gives you that others do not. |

---

## Running Example — Animal Mind-Reading at OpenAI

**Prompt:** *"Our researchers have developed new technology that can read the minds of animals. How would you think about what to build?"*

**After clarification:** vague emotional states only — calm, distressed, engaged. Requires a wearable sensor.

**Three candidate segments:**
1. Pet owners trying to understand a companion animal
2. Researchers and veterinarians needing ground-truth cognitive data
3. Conservation organizations tracking animal wellbeing

**Apply the sharpening test:** All three could appear on lists for different products. *"Pet owners"* is closer — tied to companion animals. But still too broad. *"Dog owners"* is right: specific enough that it reflects what the technology actually enables (a wearable emotional signal for a daily companion), broad enough to surface multiple distinct pain points in Step 4: separation anxiety, uncertainty about whether the dog is genuinely happy, confusion about whether training is working.

> **Example prioritization:**
>
> *"I'm going with dog owners. They have a daily, intimate relationship with an animal whose emotional life is largely invisible to them. Vague emotional signal — calm versus distressed — is sufficient to be genuinely useful here, without requiring precision the technology doesn't yet have. It maps to OpenAI's mission of extending understanding to sentient beings who cannot speak for themselves, and it gives us fast, observable feedback on whether the core signal is trustworthy."*

---

## Common Pitfalls

**Generic cuts.**
*"Casual users, regular users, power users"* describes engagement levels, not people. It tells the interviewer nothing about this specific product.

**Picking the largest group without a criterion.**
The biggest group is often the hardest to design for — their needs are the most diffuse. Name why large and right are the same thing *here*.

**Leaving the segments open.**
Pick one. If you keep all three alive, your pain points will be as generic as your segmentation.

**Weak prioritization.**
*"This group seems like the right fit"* is a missed opportunity. Name the criterion, name what this segment gives you that others don't, and tie it to something specific about the company or the technology.

> **Tip:** Doing research on the company you're interviewing at goes a long way. A Shopify PM candidate noted the product sense interview *"was specific to Shopify's business line, so I had to understand their user segments."* Knowing the company's actual users before you walk in is not optional at this level.

---

## Quick Reference

```
GENERATE
1. Picture real people whose lives this product changes
2. Name them (not labels — names)
3. If stuck: use a lens (use case / usage stage / demographics / consumption behavior)

SHARPEN
→ "Would this segment appear on a list for a completely different product?"
   If yes — go more specific
→ "Is this segment so narrow it pre-solves the pain point?"
   If yes — go slightly broader

PRIORITIZE
Score by: Breadth × Depth × Mission fit
Commit to one — and say explicitly what this segment gives you that others don't
```
