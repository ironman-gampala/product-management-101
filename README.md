# Product Management 101 — PM Interview Prep

Notes, frameworks, question banks and **Claude skills** for preparing for Product Manager interviews,
from PM2 / mid-level up to Senior PM (L4–L5).

The notes teach the frameworks. The skills make you **practise them out loud, on the clock**, with
Claude playing the interviewer, coaching you between turns, and scoring you against the senior bar.

---

## Quick start

```bash
git clone --recurse-submodules <this-repo-url> "Product Management 101"
cd "Product Management 101"
cp -R "My Profile.template" "My Profile"     # optional, but makes coaching personal
claude                                         # open Claude Code in the repo
```

Then just ask, for example:

- *"Let's do a mock: how would you improve Spotify?"*
- *"Give me a proper transcript for: what should Airbnb build next?"*
- *"DAU dropped 8% last week. Interview me on it."*
- *"How would you measure success for Google Maps parking? Check my north star."*
- *"Help me build my story bank for behavioural rounds."*
- *"Explain RAG to me like I'm the CEO, then score my explanation."*

Claude Code loads skills from this repo's `.claude/skills/` automatically when you work inside the repo.

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

## The skills

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

### Modes

| Mode | What happens | Say |
|---|---|---|
| **Mock interview** (default) | Claude plays a real interviewer, one stage at a time. After each of your turns you get a short coach note (what landed, what to fix, one model line) and a time check. | "Mock me on…", "Interview me", or just paste a question |
| **Model answer** | A realistic spoken Interviewer/Candidate transcript you can read out loud, with board notes and interviewer push-back | "Show me", "proper transcript", "how would you answer…" |
| **Review** | Scores your written or pasted answer and rewrites your weakest step as a spoken model turn | "Score my answer: …" |
| Skill-specific extras | Idea banks (product sense), metric check (metrics), speed drills (estimation), story bank builder and intro coaching (leadership), "explain it simply" drills (technical) | See each SKILL.md |

**Stuck mid-mock?** Type `hint` (names the tool), `hint` again (asks the right questions), or
`show me` (writes the model turn for that stage, then hands it back to you).

### What "judgement" means here

The frameworks are the route. The skills grade **judgement**: at every step you make a call, give the
reason, and say what you rejected — on the clock, without the interviewer pulling you along. Each
skill lists the specific judgement rules where candidates at the L4/L5 line usually lose the round.

### Your profile and progress

If a `My Profile/` folder exists at the repo root, every skill reads your background and target roles
(`Profile.md`) and where you stand (`Daily Practice/Index.md`) before a session, and watches for your
weak spots in its coach notes. After each scorecard it adds a day file to `Daily Practice/` and updates
the index: your score from day to day, the weak-spot tracker and what to watch in the next mock.
Start from [`My Profile.template/`](My%20Profile.template). `My Profile/` is personal — keep it out of
public forks.

---

## Repo map

| Folder / file | What's inside |
|---|---|
| [`Intro/`](Intro) | How PMs are evaluated, leveling (L3–L7), question types, glossary, the overall framework |
| [`Product Sense/`](Product%20Sense) | How to answer, rubric, deep dives (users, pain points, ideas, clarifying questions), sample questions, [Idea Bank](Product%20Sense/Idea%20Bank.md) |
| [`Product Strategy/`](Product%20Strategy) | Strategy, go-to-market, growth, pricing, rubric, sample questions |
| [`Analytics & Execution/`](Analytics%20%26%20Execution) | Root cause, north star and goal setting, A/B testing, estimation, decisions, trade-offs, rubric |
| [`Leadership & Drive/`](Leadership%20%26%20Drive) | Finding and practising stories, signalling level, introductions, "why our company", rubric |
| [`Technical & AI Questions/`](Technical%20%26%20AI%20Questions) | AI technical fluency, system design for PMs, rubric |
| [`Take-Home Assignments/`](Take-Home%20Assignments) | How to approach take-homes, going above and beyond, AI prompt toolkit, rubric |
| [`.claude/skills/`](.claude/skills) | The interview-practice skills described above |
| [`My Profile.template/`](My%20Profile.template) | Template for your profile and daily practice log (copy it to `My Profile/`) |
| [`install-skills.sh`](install-skills.sh) | Installs the skills into `~/.claude/skills` |
| [`rag-eval-lab/`](rag-eval-lab) | Hands-on lab: chunking, hybrid search, reranking and evaluating a RAG system |
| [`multi-agent-demo/`](multi-agent-demo) | Hands-on lab: LLM → agent → multi-agent orchestration, with a visible timeline |
| `cloud-daily-mail/` | Git submodule: a daily PM practice-question email on a GitHub Actions schedule |

---

## A simple 3-week plan

| Week | Do | Skills |
|---|---|---|
| 1 | Daily 10–15 minute drills on your weak spots; one full mock per question type | All, one per day |
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
