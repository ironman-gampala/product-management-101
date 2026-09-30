# RAG Eval Lab Implementation Plan

> **For agentic workers:** Implement end-to-end; run evals; write CHUNK_DECISIONS.md.

**Goal:** Working RAG lab with hybrid retrieval, rerank, citations, and split metrics.

## File map

- `rag-eval-lab/requirements.txt`
- `rag-eval-lab/src/ingest.py` — copy + extract text
- `rag-eval-lab/src/chunk.py` — token chunking variants
- `rag-eval-lab/src/index.py` — BM25 + embeddings index
- `rag-eval-lab/src/retrieve.py` — hybrid + RRF + rerank
- `rag-eval-lab/src/answer.py` — grounded answers + citations
- `rag-eval-lab/src/eval_set.py` — build/load 30 Qs
- `rag-eval-lab/src/run_eval.py` — metrics + chunk sweep
- `rag-eval-lab/CHUNK_DECISIONS.md`
- `rag-eval-lab/README.md`

## Tasks

1. Scaffold + copy corpus + extract text
2. Chunk + index + hybrid retrieve + rerank
3. Author 30 gold questions from extracted text
4. Run chunk-size sweep; pick winner; write decisions
5. Run answer eval on winning config
