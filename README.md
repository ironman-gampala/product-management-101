# Product Management 101 — PM Interview Prep

Notes, frameworks, question banks and **Claude skills** for preparing for Product Manager interviews,
from PM2 / mid-level up to Senior PM (L4–L5).

The repo works in three parts:

```
   1. READ                    2. PRACTISE                    3. TRACK
   ───────────                ───────────────                ─────────────────
   The study folders          Claude skills play the         My Profile/ — who you are,
   teach each question        interviewer, coach you         and Daily Practice/ — one
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
cp -R "My Profile.template" "My Profile"     # your profile and daily practice log
claude                                         # open Claude Code in the repo
```

Then:
1. Fill in `My Profile/Profile.md` (experience, target roles). Five minutes is enough.
2. Read the [Intro](#1-read--the-study-material) folder, then the folder for the question type you want to practise.
3. Ask Claude for a mock, for example *"Let's do a mock: how would you improve Spotify?"*
4. After the scorecard, your day is logged in `My Profile/Daily Practice/`. Open
   `Daily Practice.md` to see where you stand.

---

## Repo structure

```
Product Management 101/
│
├── README.md                     ← you are here
│
│   1. READ — study material (stays the same)
├── Intro/                        how PMs are evaluated, levels, question types, glossary
├── Product Sense/                design / improve a product, idea bank
├── Product Strategy/             strategy, go-to-market, growth, pricing
├── Analytics & Execution/        root cause, metrics, A/B tests, estimation, decisions
├── Leadership & Drive/           stories, signalling level, intro, "why our company"
├── Technical & AI Questions/      AI fluency, system design for PMs
├── Take-Home Assignments/        take-homes and presentations
│
│   2. PRACTISE — Claude skills
├── .claude/skills/               7 interview coach skills (mocks, model answers, scoring)
├── install-skills.sh             install the skills for use in any project
│
│   3. TRACK — your progress (changes every day)
├── My Profile.template/          copy this to My Profile/ to start
│   ├── Profile.md                  about you, experience, target roles, plan
│   └── Daily Practice/
│       ├── Daily Practice.md       where you stand each day + a table of every day's file
│       └── Day template.md         copy for each new practice day
├── My Profile/                   your copy (personal — keep it out of public forks)
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
| [`Intro/`](Intro) | [PM Interview Framework](Intro/PM%20Interview%20Framework.md), [Types of PM Interview Questions](Intro/Types%20of%20PM%20Interview%20Questions.md) | [Understanding Leveling](Intro/Understanding%20Leveling.md), [How AI Labs and FAANG Evaluate PMs](Intro/How%20Frontier%20AI%20Labs%20and%20FAANG%20Evaluate%20PMs.md), [Glossary](Intro/Interview%20Glossary.md) | — |
| [`Product Sense/`](Product%20Sense) | [Introduction](Product%20Sense/Introduction%20to%20Product%20Sense%20Questions.md), [How to Answer](Product%20Sense/How%20to%20Answer%20Product%20Sense%20Questions.md) | Deep dives (users, pain points, ideas, clarifying questions), [Rubric](Product%20Sense/Rubric%20for%20Product%20Sense%20Interviews.md), favourite product, case studies | [Sample Questions](Product%20Sense/Sample%20Product%20Sense%20Questions.md), [Idea Bank](Product%20Sense/Idea%20Bank.md) |
| [`Product Strategy/`](Product%20Strategy) | [Introduction](Product%20Strategy/Introduction%20to%20Product%20Strategy.md), [How to Answer](Product%20Strategy/How%20to%20Answer%20Product%20Strategy%20Questions.md) | Go-to-market, growth, pricing, [Rubric](Product%20Strategy/Rubric%20for%20Product%20Strategy%20Interviews.md), staying up to date | [Sample Questions](Product%20Strategy/Sample%20Product%20Strategy%20Questions.md) |
| [`Analytics & Execution/`](Analytics%20%26%20Execution) | [Introduction](Analytics%20%26%20Execution/Introduction%20to%20Analytical%20and%20Execution%20Questions.md) | Root cause, north star and goal setting, A/B testing, estimation, decisions, trade-offs, [Rubric](Analytics%20%26%20Execution/Rubric%20for%20Analytical%20and%20Execution%20Interviews.md) | Examples inside each how-to |
| [`Leadership & Drive/`](Leadership%20%26%20Drive) | [Introduction](Leadership%20%26%20Drive/Introduction%20to%20Leadership%20and%20Drive%20Questions.md), [How to Find Your Stories](Leadership%20%26%20Drive/How%20to%20Find%20Your%20Stories.md) | Practising stories, signalling level, introducing yourself, "why our company", [Rubric](Leadership%20%26%20Drive/Rubric%20for%20Leadership%20and%20Drive%20Interviews.md) | Your own story bank |
| [`Technical & AI Questions/`](Technical%20%26%20AI%20Questions) | [Introduction](Technical%20%26%20AI%20Questions/Introduction%20to%20Technical%20Questions.md) | [AI Technical Fluency](Technical%20%26%20AI%20Questions/AI%20Technical%20Fluency.md), [System Design for PMs](Technical%20%26%20AI%20Questions/System%20Design%20for%20PMs.md), [Rubric](Technical%20%26%20AI%20Questions/Rubric%20for%20Technical%20and%20AI%20Interviews.md) | — |
| [`Take-Home Assignments/`](Take-Home%20Assignments) | [Introduction](Take-Home%20Assignments/Introduction%20to%20Take-Home%20Assignments.md) | Going above and beyond, AI prompt toolkit, [Rubric](Take-Home%20Assignments/Rubric%20for%20Take-Home%20Assignments.md) | — |

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
cp -R "My Profile.template" "My Profile"
```

| File | What it holds | How often it changes |
|---|---|---|
| `My Profile/Profile.md` | About you, experience, target roles, likely question types, strengths, plan | When your targets or plan change |
| `My Profile/Daily Practice/Daily Practice.md` | **Where you stand each day**, a table linking every day's file, what keeps working, the weak-spot tracker, and what to watch in the next mock | Every practice day |
| `My Profile/Daily Practice/Day N - YYYY-MM-DD - <Question>.md` | One practice day: the question, score, **what went well, what to improve, where you stand today**, step scores, a model turn for your weakest step, drills | One new file per day |

**The daily loop:**

```
  read the folder for today's question type
        ↓
  mock with a skill  →  scorecard
        ↓
  new Day file  +  Daily Practice.md updated (score, where you stand, weak spots)
        ↓
  before the next mock, read "Next mock: watch for"
```

If `My Profile/` exists, every skill reads your profile and `Daily Practice.md` before a session and
watches for your weak spots in its coach notes. After each scorecard it adds the day file and updates
`Daily Practice.md` for you. You can also fill a day in by hand with
[`Day template.md`](My%20Profile.template/Daily%20Practice/Day%20template.md).

> `My Profile/` is personal. Keep it out of public forks.

---

## A simple 3-week plan

| Week | Do | Skills |
|---|---|---|
| 1 | Read Intro and your main question types; daily 10–15 minute drills on your weak spots; one full mock per question type | All, one per day |
| 2 | Three full timed mocks a week in the types your target companies ask most | product-sense, metrics, rca, strategy |
| 3 | Company-specific prep, story bank, intro and "why this company" | leadership, technical-ai, strategy |

Score yourself honestly. Coming in at a level you can crush beats stretching into one you struggle at
(see [`Intro/Understanding Leveling.md`](Intro/Understanding%20Leveling.md)).

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

- Add questions to the sample banks in each folder. The skills append the questions they invent under
  `### Invented — YYYY-MM-DD`.
- Improve a skill by editing its `SKILL.md` or `references/`, then add or update an eval case.
- Keep skills portable: no absolute paths, no personal details.

> Note: `.cursor/skills/` holds symlinks to the original author's personal Cursor skills. They won't
> resolve after cloning; use the Claude skills in `.claude/skills/` instead.
