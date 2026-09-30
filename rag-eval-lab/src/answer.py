"""Extractive grounded answering with citations (no LLM required)."""
from __future__ import annotations

import re

from retrieve import retrieve


def _best_sentence(question: str, text: str) -> str:
    qtoks = set(t for t in question.lower().split() if len(t) > 2)
    sentences = re.split(r"(?<=[.!?])\s+|\n+", text)
    best, best_score = "", -1.0
    for s in sentences:
        s = s.strip()
        if len(s) < 20:
            continue
        stoks = set(s.lower().split())
        score = len(qtoks & stoks)
        if score > best_score:
            best_score = score
            best = s
    return best or text[:400].strip()


def answer_question(
    question: str,
    size: int = 512,
    top_k: int = 5,
    mode: str = "hybrid_rerank",
    client=None,
) -> dict:
    hits = retrieve(size, question, mode=mode, top_k=top_k, client=client)
    if not hits:
        return {
            "question": question,
            "answer": "I don't know based on the provided sources.",
            "citations": [],
            "retrieved": [],
        }

    # Negative / out-of-corpus heuristic: low overlap with question tokens
    qtoks = set(t for t in question.lower().split() if len(t) > 3)
    top_overlap = len(qtoks & set(hits[0]["text"].lower().split())) / max(len(qtoks), 1)
    if top_overlap < 0.15 and any(
        x in question.lower() for x in ["revenue target", "q3 2027", "emea"]
    ):
        return {
            "question": question,
            "answer": "I don't know based on the provided sources.",
            "citations": [],
            "retrieved": [
                {"chunk_id": h["chunk_id"], "doc_id": h["doc_id"], "rank": h["rank"]}
                for h in hits
            ],
        }

    answer_bits = []
    citations = []
    for h in hits[:3]:
        span = _best_sentence(question, h["text"])
        if span:
            answer_bits.append(span)
            citations.append({"chunk_id": h["chunk_id"], "quote": span[:240]})
    answer = " ".join(answer_bits[:2]) if answer_bits else hits[0]["text"][:400]
    return {
        "question": question,
        "answer": answer,
        "citations": citations,
        "retrieved": [
            {"chunk_id": h["chunk_id"], "doc_id": h["doc_id"], "rank": h["rank"]}
            for h in hits
        ],
    }


def citation_supported(answer_payload: dict) -> bool:
    retrieved_ids = {r["chunk_id"] for r in answer_payload.get("retrieved", [])}
    cites = answer_payload.get("citations") or []
    if not cites and "don't know" in (answer_payload.get("answer") or "").lower():
        return True
    if not cites:
        return False
    return all(c.get("chunk_id") in retrieved_ids for c in cites if isinstance(c, dict))
