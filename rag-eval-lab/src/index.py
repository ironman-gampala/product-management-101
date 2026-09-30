"""Build BM25 + TF-IDF (local dense) indexes for a chunk size."""
from __future__ import annotations

import json
import sys
from pathlib import Path

import numpy as np
from rank_bm25 import BM25Okapi
from sklearn.feature_extraction.text import TfidfVectorizer

ROOT = Path(__file__).resolve().parents[1]
_INDEX_CACHE: dict[int, dict] = {}


def load_chunks(size: int) -> list[dict]:
    path = ROOT / "data" / f"chunks_{size}.jsonl"
    return [json.loads(l) for l in path.read_text().splitlines() if l.strip()]


def tokenize(text: str) -> list[str]:
    return [t for t in text.lower().split() if t]


def _fit(chunks: list[dict]):
    bm25 = BM25Okapi([tokenize(c["text"]) for c in chunks])
    vectorizer = TfidfVectorizer(
        stop_words="english", max_features=40000, ngram_range=(1, 2)
    )
    matrix = vectorizer.fit_transform([c["text"] for c in chunks])
    dense = matrix.toarray().astype(np.float32)
    norms = np.linalg.norm(dense, axis=1, keepdims=True) + 1e-9
    dense = dense / norms
    return bm25, vectorizer, dense


def build_index(size: int) -> dict:
    chunks = load_chunks(size)
    bm25, vectorizer, dense = _fit(chunks)
    out = ROOT / "data" / f"index_{size}.npz"
    np.savez_compressed(out, embeddings=dense)
    meta = {
        "size": size,
        "n_chunks": len(chunks),
        "emb_model": "tfidf-local",
        "index_path": str(out),
        "dim": int(dense.shape[1]),
    }
    (ROOT / "data" / f"index_{size}_meta.json").write_text(json.dumps(meta, indent=2))
    idx = {
        "chunks": chunks,
        "bm25": bm25,
        "embeddings": dense,
        "meta": meta,
        "vectorizer": vectorizer,
    }
    _INDEX_CACHE[size] = idx
    return idx


def load_index(size: int) -> dict:
    if size in _INDEX_CACHE:
        return _INDEX_CACHE[size]
    return build_index(size)


if __name__ == "__main__":
    sys.path.insert(0, str(ROOT / "vendor"))
    for size in (256, 512, 1024):
        info = build_index(size)
        print(f"Indexed size={size}: {info['meta']['n_chunks']} chunks dim={info['meta']['dim']}")
