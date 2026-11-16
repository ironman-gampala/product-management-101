# Question bank

Real asked questions live in the repo notes when the working directory has them — use those first:
`Technical & AI Questions/Introduction to Technical Questions.md` (recently asked questions),
`Technical & AI Questions/AI Technical Fluency.md` and `System Design for PMs.md` (questions quoted
inside each lesson), and the Technical section of `Intro/Types of PM Interview Questions.md`.

The prompts below are practice questions written for this skill, not attributed to any company.
Tags: **[Fluency]** AI fluency · **[AI design]** AI product design + evaluation · **[System]**
system design for PMs · **[Trade-off]** technical trade-off decision. Each has the probe to expect
and the most common trap.

## AI fluency

1. **[Fluency]** Explain RAG to a non-technical head of sales who wants to know why our assistant
   "knows" our latest pricing.
   *Probe:* "So why not just train the model on our pricing?" *Trap:* calling RAG "fine-tuning at
   runtime".
2. **[Fluency]** What is a context window, and what happens to the user when we run out of it?
   *Probe:* "Should we just buy the model with the biggest window?" *Trap:* no cost trade-off.
3. **[Fluency]** Explain embeddings to a new designer on your team.
   *Probe:* "Why would search fail on our product codes?" *Trap:* "vectors in high-dimensional
   space" with no analogy.
4. **[Fluency]** When would you use prompting, RAG or fine-tuning? Walk me through how you'd decide.
   *Probe:* "We have 500 examples. Fine-tune?" *Trap:* jumping to fine-tuning first.
5. **[Fluency]** What is an AI agent, and how is it different from a chatbot? Explain it to your CFO.
   *Probe:* "What stops it from spending money it shouldn't?" *Trap:* no mention of approvals,
   limits or logs.

## AI product design + evaluation

6. **[AI design]** Design an AI feature that drafts replies for customer support agents at a
   mid-size online store. How would you know it's good?
   *Probe:* "How do you know it's not hallucinating a refund policy?" *Trap:* "measure accuracy"
   with no golden set.
7. **[AI design]** Users say our AI assistant is "confident but wrong". What do you do?
   *Probe:* "Is this a training-time or inference-time problem?" *Trap:* "lower the temperature".
8. **[AI design]** Design an AI meeting summariser for a video-call product. What does success look
   like in the first three months?
   *Probe:* "Your judge model and your raters disagree." *Trap:* only thumbs up/down as the metric.
9. **[AI design]** Design an AI agent that can reschedule a user's meetings on their behalf. How do
   you make it safe?
   *Probe:* "Which actions can it take without asking?" *Trap:* no approval for messages to others.
10. **[AI design]** Design an AI search answer box for a large help centre with content in eight
    languages. How do you evaluate it before and after launch?
    *Probe:* "Which language does it work worst for?" *Trap:* reporting only the average.

## System design for PMs

11. **[System]** Design a system that shows live delivery-driver location to a customer on a map.
    *Probe:* "What breaks at 10x on a festival day?" *Trap:* naming database brands instead of
    reasoning about update frequency.
12. **[System]** Design the notification system for a social app that sends billions of
    notifications a day.
    *Probe:* "How do you stop sending the same notification twice?" *Trap:* skipping user
    preferences and rate limits.
13. **[System]** Design the high-level system behind an AI chat assistant answering a user's
    question, from tap to streamed answer.
    *Probe:* "Where does time to first word go?" *Trap:* one box labelled "LLM".
14. **[System]** Design a document-upload-and-ask feature: users upload a PDF and ask questions
    about it.
    *Probe:* "What if the PDF is 600 pages?" *Trap:* no chunking, no async processing.
15. **[System]** Walk me through a system you've built or worked closely on — architecture, data
    flow, one trade-off, one thing you'd change. (reverse system design)
    *Probe:* "Why that and not the alternative?" *Trap:* describing the product, not the system.

## Technical trade-offs

16. **[Trade-off]** A newer, larger model is 15% better on our evals but twice as slow and three
    times the cost. Do we ship it?
    *Probe:* "Who pays for the difference?" *Trap:* yes/no without a quality floor or routing option.
17. **[Trade-off]** Our AI feature's latency doubled last month. Engineering suggests a smaller
    model. What do you do?
    *Probe:* "Where would you look first?" *Trap:* agreeing before diagnosing.
18. **[Trade-off]** Build or buy: should we host an open-weight model or keep using a hosted API?
    *Probe:* "At what volume does that flip?" *Trap:* ignoring team skill and total cost of
    ownership.
19. **[Trade-off]** Our content-moderation classifier: should we tune it for precision or recall?
    *Probe:* "What does a false positive cost the user?" *Trap:* "balance both" with no call.
20. **[Trade-off]** Our support chatbot sends the full conversation history on every turn and costs
    are climbing. What would you change?
    *Probe:* "How do you know the cheaper version isn't worse?" *Trap:* cutting context with no eval.

### Invented — YYYY-MM-DD
(Append new questions here during mocks, with tag, probe and trap.)
