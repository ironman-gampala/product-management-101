"""Hybrid retrieval (BM25 + TF-IDF + RRF) and lexical rerank."""
from __future__ import annotations

import numpy as np

from index import load_index, tokenize

RRF_K = 60


def embed_query(vectorizer, query: str) -> np.ndarray:
    v = vectorizer.transform([query]).toarray().astype(np.float32)[0]
    n = np.linalg.norm(v) + 1e-9
    return v / n


def rrf_fuse(rank_lists: list[list[int]], k: int = RRF_K) -> list[tuple[int, float]]:
    scores: dict[int, float] = {}
    for ranks in rank_lists:
        for rank, idx in enumerate(ranks):
            scores[idx] = scores.get(idx, 0.0) + 1.0 / (k + rank + 1)
    return sorted(scores.items(), key=lambda x: x[1], reverse=True)


def lexical_rerank(
    query: str,
    pool: list[tuple[int, float]],
    chunks: list[dict],
) -> list[tuple[int, float]]:
    """Simple cross-check rerank: query-term coverage + original fused score."""
    qtoks = set(tokenize(query))
    scored = []
    for idx, base in pool:
        ctoks = set(tokenize(chunks[idx]["text"]))
        overlap = len(qtoks & ctoks) / max(len(qtoks), 1)
        scored.append((idx, 0.65 * overlap + 0.35 * base))
    scored.sort(key=lambda x: x[1], reverse=True)
    return scored


def retrieve(
    size: int,
    query: str,
    mode: str = "hybrid_rerank",
    top_k: int = 5,
    candidate_k: int = 20,
    client=None,
) -> list[dict]:
    """mode: bm25 | dense | hybrid | hybrid_rerank"""
    idx = load_index(size)
    chunks = idx["chunks"]
    bm25 = idx["bm25"]
    embeddings = idx["embeddings"]
    vectorizer = idx["vectorizer"]

    bm25_scores = bm25.get_scores(tokenize(query))
    bm25_ranks = list(np.argsort(bm25_scores)[::-1][:candidate_k])

    qv = embed_query(vectorizer, query)
    dense_scores = embeddings @ qv
    dense_ranks = list(np.argsort(dense_scores)[::-1][:candidate_k])

    if mode == "bm25":
        ranked = [(i, float(bm25_scores[i])) for i in bm25_ranks]
    elif mode == "dense":
        ranked = [(i, float(dense_scores[i])) for i in dense_ranks]
    else:
        ranked = rrf_fuse([bm25_ranks, dense_ranks])

    if mode == "hybrid_rerank":
        pool = ranked[: max(candidate_k, top_k * 4)]
        ranked = lexical_rerank(query, pool, chunks)

    results = []
    for rank, (i, score) in enumerate(ranked[:top_k]):
        c = chunks[i]
        results.append(
            {
                "rank": rank + 1,
                "score": score,
                "chunk_id": c["chunk_id"],
                "doc_id": c["doc_id"],
                "title": c["title"],
                "text": c["text"],
            }
        )
    return results
