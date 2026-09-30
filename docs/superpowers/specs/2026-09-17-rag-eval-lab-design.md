# RAG Eval Lab Design

Date: 2026-09-17  
Status: Approved (user: "do what is required")

## Goal

Index ~10 real documents from Downloads, implement chunking + hybrid search + reranker + citations, then measure retrieval quality separately from answer quality on a 30-question gold set. Document chunk-size experiments for interview narrative.

## Corpus (10 docs, no personal/PII)

1. The-Agent-Playbook-for-Prodigy.pdf
2. The-Ground-Up-AI-Roadmap.pdf
3. PM_Interview_Prep_Context.md
4. Git_Repos_Reference.md
5. product-center-implementation.md
6. product-ai-architecture-decision 3.md
7. prd-builder-template.md
8. Transaction Conversion to EMI_Concept Doc.txt
9. CaseStudy-TachyonCapabilities-Jan2026 (1).pdf
10. PLE Goals.pdf

## Stack

- Python 3
- Text extract: pypdf + plain text/md
- Chunking: fixed token windows at 256 / 512 / 1024 with ~12% overlap
- Sparse: BM25 (`rank_bm25`)
- Dense: OpenAI `text-embedding-3-small`
- Hybrid: Reciprocal Rank Fusion
- Rerank: `sentence-transformers` cross-encoder `cross-encoder/ms-marco-MiniLM-L-6-v2`
- Answers: OpenAI chat with grounded citations

## Eval

- 30 questions with gold answers + gold doc/chunk ids
- Retrieval: Recall@5, MRR (BM25 / dense / hybrid / hybrid+rerank)
- Answer: correctness vs gold + citation presence (only after retrieval fixed)

## Deliverables

- `rag-eval-lab/` runnable project
- `CHUNK_DECISIONS.md` interview paragraph
- `results/` metrics JSON + summary
