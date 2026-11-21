# Technical and AI — Senior (SNR) and Senior+ (SNR+) Bar

Technical rounds test **AI fluency** (explain RAG, agents, fine-tuning), **AI product design and
evaluation** ("how do you know the AI is good?"), **system design for PMs**, and **technical
trade-offs** (latency vs cost vs quality, build vs buy). The level is decided by whether you are
precise, think about failure before you're asked, and tie every technical choice back to the user.

[← All question types](README.md)

---

## Sample questions

| # | Question | Subtype | Good practice for |
|---|---|---|---|
| 1 | "Explain RAG to our CEO in two minutes." | AI fluency | Any AI-first company |
| 2 | "Our support bot must know our latest pricing. RAG or fine-tuning?" | Trade-off | Any |
| 3 | "How would you evaluate an LLM support bot before and after launch?" | AI evaluation | Any |
| 4 | "Users say our AI assistant is confident but wrong. What do you do?" | AI failure | Any |
| 5 | "How would you make sure Eightfold's match scores aren't biased against any group?" | AI fairness | Eightfold AI |
| 6 | "Design single sign-on for a company with 300 apps. What are the main pieces?" | System design | Okta |
| 7 | "When an employee leaves, how would Rippling remove their access to every app and device?" | System design (B2B) | Rippling |
| 8 | "Our AI feature is too slow and too expensive. How do you decide what to trade off?" | Latency vs cost vs quality | Any |

More: [introduction-to-technical-questions.md](../technical-and-ai-questions/introduction-to-technical-questions.md).

---

## The level ladder

```
  PM2 / L4   →  Knows the terms, but mixes them up under follow-up (calls RAG "fine-tuning at
                runtime"). Names generic risks ("it might hallucinate"). Ends with "it depends".

  SNR / L5   →  Uses concepts correctly, explains them simply, names failure modes specific to this
                product, makes a clear recommendation with the condition that would change it,
                and has an evaluation plan.

  SNR+ / L6  →  Starts from the user and derives the technical choice. Raises failure modes and
                second-order costs before being asked. Gives rough numbers (latency, cost per
                request). Knows what breaks at 10× scale, and covers governance, security and rollout.
```

---

## Step by step: what to say

| Step | SNR (must say) | SNR+ (add this) | Example line |
|---|---|---|---|
| **Start from the user** | Say who uses it and what a good outcome looks like for them. | Make the user's requirement the reason for every later technical choice. | "Support agents need the right refund policy in under 2 seconds. That decides the design." |
| **Explain simply** | Explain the concept in plain words with an everyday analogy. | Connect it to what it means for the product's cost, speed or risk. | "RAG is like giving the model an open-book exam. It looks up our docs before it answers." |
| **Options** | Name 2–3 approaches (prompting, RAG, fine-tuning, a rules engine, buying a tool). | Start with the simplest approach that could work, and say what would push you to the next one. | "I'd start with prompting plus RAG. I'd fine-tune only if tone stays wrong after 500 graded examples." |
| **Recommendation** | Make one clear call and give the condition that would change it. | Give the second-order reason: maintenance, data freshness, cost at scale. | "RAG, because pricing changes monthly. Fine-tuning would need retraining every month." |
| **Architecture** | Sketch the main pieces and the data flow on the board. | Point out the bottleneck and what breaks at 10× traffic. | "At 10× load, the vector search is the slow part, so I'd cache common questions." |
| **Failure modes** | Name failure modes specific to this product (wrong answers, stale data, bias, prompt injection). | Raise them before being asked, link each to user harm, and give a mitigation. | "The worst failure is a made-up refund. So the bot must quote the policy and cite the source." |
| **Evaluation** | Offline: a test set graded against a rubric. Online: task success, escalations, user feedback. | Calibrate the judge model against humans, check by segment (language, region), and gate the launch on a threshold. | "We launch only if 95% of answers on the 300-question set are correct, and no language is below 90%." |
| **Trade-offs** | Name the latency vs cost vs quality trade-off for this use case. | Give rough numbers and choose different models for different steps. | "A small model routes the question in 100 ms. The large model only handles the hard 20%." |
| **Safety + rollout** | Human review for risky actions, and a staged rollout. | Governance: who can approve what, audit logs, and access controls for agents. | "The agent can draft a refund but can't send one above ₹5,000 without approval." |

---

## Checklist

**SNR — say all of these:**
1. The user and their outcome, first.
2. A plain-English explanation with an analogy.
3. Two or three options, from simplest to most complex.
4. One recommendation, plus the condition that would change it.
5. Failure modes specific to this product.
6. An offline and an online evaluation plan.
7. A latency, cost and quality trade-off.

**SNR+ — add these:**

8. The technical choice derived from the user's needs.
9. Failure modes raised before being asked, each with a mitigation.
10. Rough numbers for latency, cost or scale.
11. What breaks at 10×.
12. Evaluation by segment and a launch threshold.
13. Governance, security and approvals for agents.

---

## Red flags

| Red flag | Why it costs you |
|---|---|
| Jargon with no plain explanation | It sounds memorised. |
| Mixing up RAG and fine-tuning | It fails the accuracy bar straight away. |
| "Just lower the temperature" for hallucinations | It shows you don't know the cause. |
| Thumbs up/down as the only evaluation | It's too weak for a senior answer. |
| Jumping to fine-tuning first | Seniors start simple. |
| Reporting only the average | The worst segment is often where the harm is. |
| Drifting into implementation and losing the user | Especially a risk for ex-engineers. |

---

## Read next

- [AI technical fluency](../technical-and-ai-questions/ai-technical-fluency.md)
- [System design for PMs](../technical-and-ai-questions/system-design-for-pms.md)
- [Latency, cost and quality trade-offs](../analytics-and-execution/latency-cost-and-quality-tradeoffs.md)
- [Rubric for technical and AI interviews](../technical-and-ai-questions/rubric-for-technical-and-ai-interviews.md)
- Practise: *"How would you evaluate an LLM support bot? Mock me."* ([`technical-ai-judgement`](../.claude/skills/technical-ai-judgement/SKILL.md))
