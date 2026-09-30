# Chunk size decisions

## Experiment results

| Chunk size | Mode | Recall@5 | MRR |
|---|---|---:|---:|
| 256 | bm25 | 0.931 | 0.754 |
| 256 | dense | 0.931 | 0.796 |
| 256 | hybrid | 1.000 | 0.832 |
| 256 | hybrid_rerank | 0.862 | 0.731 |
| 512 | bm25 | 1.000 | 0.925 |
| 512 | dense | 1.000 | 0.925 |
| 512 | hybrid | 1.000 | 0.977 |
| 512 | hybrid_rerank | 0.828 | 0.774 |
| 1024 | bm25 | 0.966 | 0.820 |
| 1024 | dense | 1.000 | 0.836 |
| 1024 | hybrid | 1.000 | 0.905 |
| 1024 | hybrid_rerank | 0.828 | 0.740 |

**Selected: chunk size 512, mode `hybrid`** (highest Recall@5 + MRR).

Answer accuracy @ 512/hybrid: **0.167**
Citation accuracy @ 512/hybrid: **1.000**

## Interview paragraph

I started at 512 tokens with ~12% overlap — a common dense-retrieval default that also matched typical fact-answer length in this 10-doc corpus. I measured BM25, TF-IDF dense, hybrid (RRF), and hybrid+lexical-rerank at 256 / 512 / 1024. Hybrid at 512 won clearly: Recall@5=1.000, MRR=0.977. At 256, hybrid still hit Recall@5=1.000 but MRR dropped to 0.832 because evidence spans were split across neighboring windows. At 1024, Recall@5 stayed high (1.000) but MRR fell to 0.905 as larger chunks diluted ranking. Lexical rerank at 512 actually hurt (Recall@5=0.828, MRR=0.774) by over-weighting query-term overlap versus fused rank. So I kept **512 + hybrid**. Separately, extractive answer accuracy was only 0.167 while citation accuracy was 1.000 — retrieval was solving the problem; phrasing/generation was not. That split is the interview point.

## Stack note

Local TF-IDF + BM25 hybrid (RRF) + lexical rerank + extractive answers (no OPENAI_API_KEY in this environment). Eval harness is ready to swap OpenAI embeddings / cross-encoder / GPT.

