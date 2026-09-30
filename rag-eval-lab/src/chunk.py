"""Token-window chunking with configurable size and overlap."""
from __future__ import annotations

import json
from dataclasses import asdict, dataclass
from pathlib import Path

import tiktoken

ROOT = Path(__file__).resolve().parents[1]
TEXT = ROOT / "corpus" / "text"
ENC = tiktoken.get_encoding("cl100k_base")


@dataclass
class Chunk:
    chunk_id: str
    doc_id: str
    title: str
    text: str
    start_token: int
    end_token: int


def chunk_text(
    doc_id: str,
    title: str,
    text: str,
    size: int,
    overlap: int,
) -> list[Chunk]:
    tokens = ENC.encode(text)
    if not tokens:
        return []
    step = max(size - overlap, 1)
    chunks: list[Chunk] = []
    i = 0
    idx = 0
    while i < len(tokens):
        window = tokens[i : i + size]
        piece = ENC.decode(window).strip()
        if piece:
            chunks.append(
                Chunk(
                    chunk_id=f"{doc_id}#c{idx:03d}",
                    doc_id=doc_id,
                    title=title,
                    text=piece,
                    start_token=i,
                    end_token=i + len(window),
                )
            )
            idx += 1
        if i + size >= len(tokens):
            break
        i += step
    return chunks


def load_docs() -> list[tuple[str, str, str]]:
    docs = []
    meta_path = ROOT / "data" / "docs.jsonl"
    metas = {}
    if meta_path.exists():
        for line in meta_path.read_text().splitlines():
            if line.strip():
                m = json.loads(line)
                metas[m["doc_id"]] = m["title"]
    for path in sorted(TEXT.glob("doc_*.txt")):
        doc_id = path.stem
        title = metas.get(doc_id, doc_id)
        docs.append((doc_id, title, path.read_text(encoding="utf-8")))
    return docs


def build_chunks(size: int, overlap: int | None = None) -> list[Chunk]:
    if overlap is None:
        overlap = max(int(size * 0.12), 16)
    all_chunks: list[Chunk] = []
    for doc_id, title, text in load_docs():
        all_chunks.extend(chunk_text(doc_id, title, text, size, overlap))
    return all_chunks


def save_chunks(chunks: list[Chunk], size: int) -> Path:
    out = ROOT / "data" / f"chunks_{size}.jsonl"
    with out.open("w", encoding="utf-8") as f:
        for c in chunks:
            f.write(json.dumps(asdict(c), ensure_ascii=False) + "\n")
    return out


if __name__ == "__main__":
    for size in (256, 512, 1024):
        chunks = build_chunks(size)
        path = save_chunks(chunks, size)
        print(f"size={size}: {len(chunks)} chunks → {path}")
