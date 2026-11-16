---
tags: [skill-creator]
max_turns: 20
timeout_seconds: 600
allowed_tools: [Read, Glob, Grep, Skill, Write, Edit, Bash]
---

explain it simply drill. concept is RAG, audience is a non-technical VP of Sales who asked why our new sales assistant knows our latest pricing. here's what i'd say, score me:

"So RAG, retrieval-augmented generation, is basically an architecture where we take the user query, embed it into a high-dimensional vector space using an embedding model, run an ANN search over our vector DB to pull the top-k chunks, and stuff those into the context window so the LLM can do in-context learning and generate a grounded response. It eliminates hallucinations and it's way cheaper than fine-tuning. Basically it's like fine-tuning but at inference time."
