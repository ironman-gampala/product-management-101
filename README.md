# Product Management 101 — PM Interview Prep

Notes, frameworks, question banks and **Claude skills** for preparing for Product Manager interviews,
from PM2 / mid-level up to Senior PM (L4–L5).

The repo works in three parts:

```
   1. READ                    2. PRACTISE                    3. TRACK
   ───────────                ───────────────                ─────────────────
   The study folders          Claude skills play the         my-profile/ — who you are,
   teach each question        interviewer, coach you         and daily-practice/ — one
   type: how to answer,       between turns and score        file per day: question,
   rubrics, sample            you against the L4 / L5        score, what went well,
   questions.                 bar.                           what to improve, where
                                                             you stand.
   Stays the same.            Every session.                 Changes every day.
```

---

## Quick start

```bash
git clone --recurse-submodules <this-repo-url> "Product Management 101"
cd "Product Management 101"
cp -R my-profile-template my-profile         # your profile and daily practice log
claude                                         # open Claude Code in the repo
```

Then:
1. Fill in `my-profile/profile.md` (experience, target roles). Five minutes is enough.
2. Read the [Intro](#1-read--the-study-material) folder, then the folder for the question type you want to practise.
3. Ask Claude for a mock, for example *"Let's do a mock: how would you improve Spotify?"*
4. After the scorecard, your day is logged in `my-profile/daily-practice/`. Open
   `daily-practice.md` to see where you stand.

---

## Repo structure

```
Product Management 101/
│
├── README.md                     ← you are here
│
│   1. READ — study material (stays the same)
├── intro/                        how PMs are evaluated, levels, question types, glossary
├── product-sense/                design / improve a product, idea bank
├── product-strategy/             strategy, go-to-market, growth, pricing
├── analytics-and-execution/      root cause, metrics, A/B tests, estimation, decisions
├── leadership-and-drive/         stories, signalling level, intro, "why our company"
├── technical-and-ai-questions/   AI fluency, system design for PMs
├── take-home-assignments/        take-homes and presentations
├── senior-bar/                   what a Senior (SNR) and Senior+ answer must say, per question type
│
│   2. PRACTISE — Claude skills
├── .claude/skills/               7 interview coach skills (mocks, model answers, scoring)
├── install-skills.sh             install the skills for use in any project
│
│   3. TRACK — your progress (changes every day)
├── my-profile-template/          copy this to my-profile/ to start
│   ├── profile.md                  about you, experience, target roles, plan
│   └── daily-practice/
│       ├── daily-practice.md       where you stand each day + a table of every day's file
│       └── day-template.md         copy for each new practice day
├── my-profile/                   your copy, same layout (personal — keep it out of public forks)
│   └── daily-practice/
│       ├── daily-practice.md
│       └── day-01-2026-11-14-google-maps-parking.md, day-02-…, day-03-…
│
│   Extras
├── rag-eval-lab/                 hands-on lab: chunking, hybrid search, reranking, RAG evaluation
├── multi-agent-demo/             hands-on lab: LLM → agent → multi-agent orchestration
└── cloud-daily-mail/             submodule: daily PM practice-question email
```

---

## 1. Read — the study material

Suggested order: **Intro first**, then the folder for each question type you'll face. In each folder,
read the *Introduction*, then *How to Answer*, then the *Rubric*, then practise with the *Sample Questions*.

| Folder | Read first | Then | Practise with |
|---|---|---|---|
| [`intro/`](intro) | [PM Interview Framework](intro/pm-interview-framework.md), [Types of PM Interview Questions](intro/types-of-pm-interview-questions.md) | [Understanding Leveling](intro/understanding-leveling.md), [How AI Labs and FAANG Evaluate PMs](intro/how-frontier-ai-labs-and-faang-evaluate-pms.md), [Glossary](intro/interview-glossary.md) | — |
| [`product-sense/`](product-sense) | [Introduction](product-sense/introduction-to-product-sense-questions.md), [How to Answer](product-sense/how-to-answer-product-sense-questions.md) | Deep dives (users, pain points, ideas, clarifying questions), [Rubric](product-sense/rubric-for-product-sense-interviews.md), favourite product, case studies | [Sample Questions](product-sense/sample-product-sense-questions.md), [Idea Bank](product-sense/idea-bank.md) |
| [`product-strategy/`](product-strategy) | [Introduction](product-strategy/introduction-to-product-strategy.md), [How to Answer](product-strategy/how-to-answer-product-strategy-questions.md) | Go-to-market, growth, pricing, [Rubric](product-strategy/rubric-for-product-strategy-interviews.md), staying up to date | [Sample Questions](product-strategy/sample-product-strategy-questions.md) |
| [`analytics-and-execution/`](analytics-and-execution) | [Introduction](analytics-and-execution/introduction-to-analytical-and-execution-questions.md) | Root cause, north star and goal setting, A/B testing, estimation, decisions, trade-offs, [Rubric](analytics-and-execution/rubric-for-analytical-and-execution-interviews.md) | Examples inside each how-to |
| [`leadership-and-drive/`](leadership-and-drive) | [Introduction](leadership-and-drive/introduction-to-leadership-and-drive-questions.md), [How to Find Your Stories](leadership-and-drive/how-to-find-your-stories.md) | Practising stories, signalling level, introducing yourself, "why our company", [Rubric](leadership-and-drive/rubric-for-leadership-and-drive-interviews.md) | Your own story bank |
| [`technical-and-ai-questions/`](technical-and-ai-questions) | [Introduction](technical-and-ai-questions/introduction-to-technical-questions.md) | [AI Technical Fluency](technical-and-ai-questions/ai-technical-fluency.md), [System Design for PMs](technical-and-ai-questions/system-design-for-pms.md), [Rubric](technical-and-ai-questions/rubric-for-technical-and-ai-interviews.md) | — |
| [`take-home-assignments/`](take-home-assignments) | [Introduction](take-home-assignments/introduction-to-take-home-assignments.md) | Going above and beyond, AI prompt toolkit, [Rubric](take-home-assignments/rubric-for-take-home-assignments.md) | — |

**Before a mock, check the senior bar.** [`senior-bar/`](senior-bar/README.md) has one page per question
type: sample questions, what a Senior (SNR) answer must say, what Senior+ (SNR+) adds, a checklist and
red flags. Start with [product sense](senior-bar/product-sense.md).

---

## 2. Practise — the Claude skills

Claude Code loads the skills from this repo's `.claude/skills/` automatically when you work inside the repo.
Just ask, for example:

- *"Let's do a mock: how would you improve Spotify?"*
- *"Give me a proper transcript for: what should Airbnb build next?"*
- *"DAU dropped 8% last week. Interview me on it."*
- *"How would you measure success for Google Maps parking? Check my north star."*
- *"Help me build my story bank for behavioural rounds."*
- *"Explain RAG to me like I'm the CEO, then score my explanation."*

| Skill | Use it for | Try saying |
|---|---|---|
| [`product-sense-judgement`](.claude/skills/product-sense-judgement/SKILL.md) | Design or improve a product | "Mock: improve Google Calendar" · "10 features for Spotify" |
| [`product-strategy-judgement`](.claude/skills/product-strategy-judgement/SKILL.md) | What should X build, go-to-market, growth, pricing, market entry, competitive response | "What should Netflix do about short video? Interview me." |
| [`rca-judgement`](.claude/skills/rca-judgement/SKILL.md) | A metric moved — find the root cause and decide what to do | "Uber rides are up but revenue is down. Mock me." |
| [`metrics-judgement`](.claude/skills/metrics-judgement/SKILL.md) | North star, success metrics, goals, A/B test design and ship decisions | "Check my north star: weekly active users of the app." |
| [`estimation-judgement`](.claude/skills/estimation-judgement/SKILL.md) | Market sizing and back-of-the-envelope estimates | "Speed drill: 3 estimation questions." |
| [`leadership-judgement`](.claude/skills/leadership-judgement/SKILL.md) | Behavioural rounds, experience deep dive, "tell me about yourself", "why this company" | "Build my story bank." · "Deep-dive me on a product I built." |
| [`technical-ai-judgement`](.claude/skills/technical-ai-judgement/SKILL.md) | AI fluency, AI product evaluation, system design for PMs, technical trade-offs | "How would you evaluate an LLM support bot? Mock me." |

Every skill follows the same pattern, so once you know one you know them all.

| Mode | What happens | Say |
|---|---|---|
| **Mock interview** (default) | Claude plays a real interviewer, one stage at a time. After each of your turns you get a short coach note (what landed, what to fix, one model line) and a time check. | "Mock me on…", "Interview me", or just paste a question |
| **Model answer** | A realistic spoken Interviewer/Candidate transcript you can read out loud, with board notes and interviewer push-back | "Show me", "proper transcript", "how would you answer…" |
| **Review** | Scores your written or pasted answer and rewrites your weakest step as a spoken model turn | "Score my answer: …" |
| Skill-specific extras | Idea banks (product sense), metric check (metrics), speed drills (estimation), story bank builder and intro coaching (leadership), "explain it simply" drills (technical) | See each SKILL.md |

**Stuck mid-mock?** Type `hint` (names the tool), `hint` again (asks the right questions), or
`show me` (writes the model turn for that stage, then hands it back to you).

**What "judgement" means here:** the frameworks are the route. The skills grade **judgement**: at every
step you make a call, give the reason, and say what you rejected — on the clock, without the interviewer
pulling you along.

### Use the skills in any project

```bash
./install-skills.sh            # symlinks every skill into ~/.claude/skills (stays in sync with git pull)
./install-skills.sh --copy     # copy instead of symlink
./install-skills.sh --force    # replace skills with the same name
./install-skills.sh --uninstall
```

Start a new Claude Code session afterwards. In the Claude apps, where custom skills are supported, you
can also zip a single skill folder (for example `.claude/skills/rca-judgement`) and upload it.

---

## 3. Track — your profile and daily practice

This is the part **you change every day**. Start by copying the template:

```bash
cp -R my-profile-template my-profile
```

| File | What it holds | How often it changes |
|---|---|---|
| `my-profile/profile.md` | About you, experience, target roles, likely question types, strengths, plan | When your targets or plan change |
| `my-profile/daily-practice/daily-practice.md` | **Where you stand each day**, a table linking every day's file, what keeps working, the weak-spot tracker, and what to watch in the next mock | Every practice day |
| `my-profile/daily-practice/day-NN-YYYY-MM-DD-<question-slug>.md` | One practice day: the question, score, **what went well, what to improve, where you stand today**, step scores, a model turn for your weakest step, drills | One new file per day |

**The daily loop:**

```
  read the folder for today's question type
        ↓
  mock with a skill  →  scorecard
        ↓
  new Day file  +  daily-practice.md updated (score, where you stand, weak spots)
        ↓
  before the next mock, read "Next mock: watch for"
```

If `my-profile/` exists, every skill reads your profile and `daily-practice.md` before a session and
watches for your weak spots in its coach notes. After each scorecard it adds the day file and updates
`daily-practice.md` for you. You can also fill a day in by hand with
[`day-template.md`](my-profile-template/daily-practice/day-template.md).

> `my-profile/` is personal. Keep it out of public forks.

---

## A simple 3-week plan

| Week | Do | Skills |
|---|---|---|
| 1 | Read Intro and your main question types; daily 10–15 minute drills on your weak spots; one full mock per question type | All, one per day |
| 2 | Three full timed mocks a week in the types your target companies ask most | product-sense, metrics, rca, strategy |
| 3 | Company-specific prep, story bank, intro and "why this company" | leadership, technical-ai, strategy |

Score yourself honestly. Coming in at a level you can crush beats stretching into one you struggle at
(see [`intro/understanding-leveling.md`](intro/understanding-leveling.md)).

---

## Testing the skills

Each skill has test cases in its `evals/` folder: a prompt, what a good result looks like, and one
check per file in `graders/`. With Claude Code (v2.1.269 or later) you can run them from a skill
folder:

```bash
cd .claude/skills/product-sense-judgement
claude plugin eval . --allow-tools Write,Edit,Bash
```

These are real, billed model runs. They compare each case with and without the skill.

---

## Contributing

- Name every file and folder in lowercase with hyphens and no spaces, for example
  `product-sense/how-to-answer-product-sense-questions.md` or
  `my-profile/daily-practice/day-04-2026-11-18-improve-zoom.md`. Only `README.md` and `SKILL.md` keep
  their standard names.
- Add questions to the sample banks in each folder. The skills append the questions they invent under
  `### Invented — YYYY-MM-DD`.
- Improve a skill by editing its `SKILL.md` or `references/`, then add or update an eval case.
- Keep skills portable: no absolute paths, no personal details.

> Note: `.cursor/skills/` holds symlinks to the original author's personal Cursor skills. They won't
> resolve after cloning; use the Claude skills in `.claude/skills/` instead.
