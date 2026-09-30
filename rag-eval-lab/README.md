# RAG Eval Lab

Index 10 real Downloads docs → chunk → hybrid search → rerank → citations → 30-q eval with **retrieval metrics separate from answer metrics**.

## Quick start

```bash
cd rag-eval-lab
python3 -m venv .venv && source .venv/bin/activate
pip install -r requirements.txt
# optional local deps if venv install is restricted:
# pip install --target vendor scikit-learn && export PYTHONPATH=vendor:$PYTHONPATH

python src/ingest.py
python src/chunk.py
python src/run_eval.py
```

## What you get

| Artifact | Purpose |
|---|---|
| `eval/questions.json` | 30 gold questions + evidence spans |
| `results/retrieval.json` | Recall@5 / MRR by chunk size × mode |
| `results/answers.json` | Answer + citation accuracy |
| `results/summary.json` | One-page numbers |
| `CHUNK_DECISIONS.md` | Interview paragraph with real numbers |

## Corpus (10 docs)

Copied from `~/Downloads` (no boarding passes / 1:1 notes / other people’s resumes):

Agent Playbook, AI Roadmap, PM Interview Prep, Tachyon codebase index (file was named Git_Repos_Reference.md on disk), Product Center implementation, Product Center AI architecture, PRD Builder skill, EMI concept doc, Tachyon case study, PLE Goals.

## Latest run (local TF-IDF stack)

- **Winner:** chunk size **512**, mode **hybrid** (RRF) — Recall@5 **1.00**, MRR **0.977**
- Lexical rerank **hurt** vs plain hybrid (honest finding)
- Answer accuracy (extractive) **0.17** vs citation accuracy **1.00** → retrieval OK, generation needs an LLM

Set `OPENAI_API_KEY` later to swap embeddings / cross-encoder / GPT answers; keep the same eval harness.
