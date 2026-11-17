# Interview Glossary

> Having trouble with some concepts? Here's a list of common vocabulary used by product managers, organized by the question types you'll face in interviews.

---

## Table of Contents

- [Product Strategy](#product-strategy)
- [Product Sense](#product-sense)
- [Analytical / Execution](#analytical--execution)
- [Behavioral / Leadership and Drive](#behavioral--leadership-and-drive)
- [Technical](#technical)

---

## Product Strategy

> Strategy questions test long-term product thinking: competitive dynamics, go-to-market approaches, market entry, and pricing. These terms cover how PMs frame markets, segments, and launches.

**Beta Test**
A trial phase of a product launch scoped to a select group of early users, typically before full public release.

**Breakeven**
The point at which total revenue equals total costs. In product management, breakeven analysis helps determine when a product or feature will become profitable.

**Customer Segment**
A group of users divided by shared characteristics so a company can design and market to each group more effectively.

**Early Adopters**
Users who try a product as soon as it becomes available, often before bugs are fully resolved. Commonly used as beta testers.

**Go-to-Market Strategy**
The plan for launching a product to users, including decisions about pricing, distribution, positioning, and rollout sequence.

**Low-Hanging Fruit**
A product or feature change that is easy to implement but delivers meaningful metric improvement.

**OKR (Objectives and Key Results)**
A goal-setting framework where an Objective is a qualitative goal, and Key Results are the specific, measurable milestones that define success. PMs use OKRs to align team work with company priorities.

**Product-Market Fit (PMF)**
The degree to which a product satisfies real, strong market demand — evidenced by users actively seeking it out, retaining, and referring others.

**Product Roadmap**
A high-level view of a product's direction and priorities over time, showing what will be built and in what sequence.

---

## Product Sense

> Product sense questions test how you identify user needs, scope solutions, and communicate product thinking. These terms come up when framing users, problems, and what a solution actually looks like.

**MVP (Minimum Viable Product)**
The simplest version of a product that delivers core value and can be tested with real users to gather feedback.

**Pain Point**
A problem that users are experiencing. Identifying a specific, underserved pain point is a core step in product sense interviews.

**UI (User Interface)**
The visual layer through which users interact with a product, including buttons, layouts, screens, and controls.

**Use Case**
A scenario describing how a specific user would interact with a product to accomplish a goal.

**UX (User Experience)**
The full experience a user has with a product, encompassing UI design, onboarding, reliability, and any friction encountered along the way.

**Value Proposition**
The answer to: *What specific problem does this product solve, and why is it the right solution for this user?*

**Vibe Coding**
Using AI tools to rapidly build working software prototypes through conversational prompting, with little to no manual coding. Meta introduced a vibe coding component into its AI Product Sense round, where candidates build a prototype live using a Llama interface.

---

## Analytical / Execution

> These questions test whether you can define the right metrics, root-cause a problem with structured reasoning, and navigate ambiguity when data is messy. Metric fluency is table stakes here.

**A/B Test**
A method of comparing two versions of a product experience to determine which performs better, typically by splitting users 50/50 between variant A and variant B.

**Bounce Rate**
The percentage of visitors to a website who leave after viewing only one page.

**Churn Rate**
The percentage of users who stop using a product over a given time period. The inverse of retention.

**Cohort Analysis**
A method of tracking the behavior of a specific group of users over time, typically grouped by when they signed up. Useful for understanding whether retention is improving across different user groups.

**Conversion Rate**
The percentage of users who complete a desired action, such as signing up or making a purchase.

**CTR (Clickthrough Rate)**
The percentage of users who click on a specific link or element after seeing it.

**DAU / MAU (Daily Active Users / Monthly Active Users)**
A high DAU/MAU ratio indicates users return frequently, not just occasionally.

**Funnel**
The series of steps a user takes toward a desired action, such as signing up or making a purchase. Users drop off at each step, creating a narrowing shape that PMs analyze to find where to improve.

**Impression**
An instance of an ad or piece of content being seen on a user's screen.

**KPI (Key Performance Indicator)**
A quantifiable metric that tracks progress toward a specific business objective.

**Lagging Indicators**
Outcome-based metrics (like revenue or retention) that reflect past performance rather than predicting future results.

**Leading Indicators**
Predictive metrics (like sign-ups or feature adoption) that provide early signals about whether a product is headed in the right direction.

**North Star Metric**
The single metric that best captures the core value a product delivers to users, and the top-level signal a PM would defend as the best proxy for long-term product health.

**Retention**
The percentage of users who continue using a product over a given time period. Often tracked by cohort to understand whether engagement is improving over time.

**ROI (Return on Investment)**
Used to evaluate whether the expected value of a product initiative justifies its cost.

---

## Behavioral / Leadership and Drive

> These questions assess how you've handled real situations: conflict, ambiguity, failure, and leadership. Interviewers are scoring the scope of what you owned and how you tell the story — not just what happened.

**Bottom Line Up Front (BLUF)**
Opening a story with one or two sentences that state the project and its impact before any context-setting. Signals confidence and gives the interviewer a reason to lean in, instead of burying the outcome at the end.

**Downleveling**
Being offered a role at a lower seniority level than the one you interviewed for. Common in employer-driven markets, and structurally hard to reverse once it happens, since not every team has open headcount at both levels.

**STAR (Situation, Task, Action, Result)**
A structured framework for answering behavioral interview questions. Still the enforced standard at Amazon; replaced by narrative-driven storytelling at Meta, Netflix, and OpenAI.

**Stakeholder**
Any person or group with an interest in or influence over a product, including engineering, design, legal, finance, marketing, and leadership. PMs drive alignment across stakeholders without direct authority over them.

---

## Technical

> Technical questions now mean understanding AI at a working level — not as an engineer, but as an informed product owner. This is the largest category, covering both classic engineering process terms and the AI vocabulary interviewers increasingly expect.

**Agentic AI / AI Agents**
AI systems that can take sequences of actions and complete multi-step tasks autonomously, rather than just responding to a single prompt. Common in product sense prompts and take-home assignments at top companies today.

**API (Application Programming Interface)**
Allows other products or developers to access a product's functionality — for example, using Facebook's API to authenticate users in another app.

**Code Complete vs. Ready to Launch**
*Code complete* means development is finished but testing is still needed. *Ready to launch* means the product has passed all QA and is prepared for release.

**Context Window**
The maximum amount of text an LLM can process in a single interaction, including both the input and output. Relevant for designing AI features that involve long documents or multi-turn conversations.

**Dogfood**
To use a product internally before releasing it publicly, in order to catch issues and gather early feedback.

**Evals (Model Evaluation)**
The process of measuring how well an AI model performs on a task, typically using metrics like accuracy, precision, or recall. PMs use evals to define what "good" looks like for an AI feature and track whether model changes help or hurt.

**Feature Flag**
A technique that lets engineers turn a feature on or off without deploying new code, enabling staged rollouts, A/B tests, and quick rollbacks.

**Fine-tuning**
The process of taking a pre-trained foundation model and training it further on a smaller, task-specific dataset to improve its performance for a particular use case.

**Foundation Model**
A large AI model trained on broad, general-purpose data that can be adapted for many tasks — such as GPT-4, Claude, or Gemini. Most product teams build on top of foundation models rather than training from scratch.

**Hallucination**
When an AI model generates output that is factually incorrect or fabricated, but presents it confidently as true. A core risk category in AI product design that PMs are expected to know how to mitigate.

**Inference / Inference Compute**
The process of running a trained AI model to generate a real-time response. Inference compute refers to the processing cost of doing this at scale, which affects pricing, latency, and product architecture decisions.

**LLM (Large Language Model)**
An AI model trained on large amounts of text data that can generate, summarize, and reason about language. ChatGPT, Claude, and Gemini are examples — and LLMs are the foundation of most AI-native product features at top companies today.

**Mobile Web vs. Native**
*Native* refers to apps downloaded to a device. *Mobile web* refers to experiences accessed through a mobile browser. The Facebook app is native; Facebook.com in a mobile browser is mobile web.

**Precision and Recall**
Two metrics for evaluating AI classification models. *Precision* measures how often the model is right when it flags something. *Recall* measures how often it catches what it's supposed to catch. Increasing one often reduces the other — the right balance depends on the use case.

**Prompt Engineering**
The practice of designing and refining instructions given to an AI model to improve the quality or format of its outputs. Useful both as a prep tool and as a product design consideration.

**QA (Quality Assurance)**
The process of testing a product before release to identify bugs and confirm it works as intended.

**RAG (Retrieval-Augmented Generation)**
A technique that combines an LLM with a retrieval system, where relevant documents are fetched from a knowledge base and passed to the model along with the user's query. This allows the model to answer based on current or proprietary information, reducing hallucinations.

**Refactor**
A restructuring of existing code that improves its quality or maintainability without changing what it does externally.

**Sprint**
A fixed development cycle, typically one to four weeks, during which a team plans, builds, and delivers a defined set of work.

**Synthetic Data**
Artificially generated data used to train or test AI models when real data is scarce, sensitive, or biased.

**Tech Requirements (Acceptance Criteria)**
The specific conditions a feature must meet to be considered complete, defined before development begins.

**Technical Approach**
The high-level strategy for solving a technical problem, including choices about technologies, frameworks, and architecture.

**Technical Debt**
The accumulated cost of shortcuts taken during development that slow future work and increase maintenance burden over time.

**Token / Token Optimization**
A token is the basic unit of text that an LLM processes — roughly a word or word fragment — and also the unit of cost in most AI APIs. Token optimization means designing prompts and outputs to use fewer tokens without sacrificing quality.

---

## Quick-Scan Index

| Term | Category |
|---|---|
| A/B Test | Analytical |
| Agentic AI | Technical |
| API | Technical |
| Beta Test | Strategy |
| BLUF | Behavioral |
| Bounce Rate | Analytical |
| Breakeven | Strategy |
| Churn Rate | Analytical |
| Code Complete | Technical |
| Cohort Analysis | Analytical |
| Context Window | Technical |
| Conversion Rate | Analytical |
| CTR | Analytical |
| Customer Segment | Strategy |
| DAU/MAU | Analytical |
| Dogfood | Technical |
| Downleveling | Behavioral |
| Early Adopters | Strategy |
| Evals | Technical |
| Feature Flag | Technical |
| Fine-tuning | Technical |
| Foundation Model | Technical |
| Funnel | Analytical |
| Go-to-Market Strategy | Strategy |
| Hallucination | Technical |
| Impression | Analytical |
| Inference | Technical |
| KPI | Analytical |
| Lagging Indicators | Analytical |
| Leading Indicators | Analytical |
| LLM | Technical |
| Low-Hanging Fruit | Strategy |
| Mobile Web / Native | Technical |
| MVP | Product Sense |
| North Star Metric | Analytical |
| OKR | Strategy |
| Pain Point | Product Sense |
| PMF | Strategy |
| Precision & Recall | Technical |
| Product Roadmap | Strategy |
| Prompt Engineering | Technical |
| QA | Technical |
| RAG | Technical |
| Refactor | Technical |
| Retention | Analytical |
| ROI | Analytical |
| Sprint | Technical |
| Stakeholder | Behavioral |
| STAR | Behavioral |
| Synthetic Data | Technical |
| Tech Requirements | Technical |
| Technical Approach | Technical |
| Technical Debt | Technical |
| Token / Token Optimization | Technical |
| UI | Product Sense |
| Use Case | Product Sense |
| UX | Product Sense |
| Value Proposition | Product Sense |
| Vibe Coding | Product Sense |
