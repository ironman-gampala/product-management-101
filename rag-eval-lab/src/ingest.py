"""Extract text from corpus/raw into corpus/text/*.txt + docs.jsonl metadata."""
from __future__ import annotations

import json
import re
from pathlib import Path

from pypdf import PdfReader

ROOT = Path(__file__).resolve().parents[1]
RAW = ROOT / "corpus" / "raw"
TEXT = ROOT / "corpus" / "text"
META = ROOT / "data" / "docs.jsonl"


def clean(text: str) -> str:
    text = text.replace("\x00", " ")
    text = re.sub(r"[ \t]+", " ", text)
    text = re.sub(r"\n{3,}", "\n\n", text)
    return text.strip()


def extract_pdf(path: Path) -> str:
    reader = PdfReader(str(path))
    parts = []
    for page in reader.pages:
        parts.append(page.extract_text() or "")
    return clean("\n".join(parts))


def extract_file(path: Path) -> str:
    if path.suffix.lower() == ".pdf":
        return extract_pdf(path)
    return clean(path.read_text(encoding="utf-8", errors="ignore"))


def main() -> None:
    TEXT.mkdir(parents=True, exist_ok=True)
    META.parent.mkdir(parents=True, exist_ok=True)
    docs = []
    for i, path in enumerate(sorted(RAW.iterdir()), start=1):
        if path.name.startswith("."):
            continue
        doc_id = f"doc_{i:02d}"
        title = path.stem
        text = extract_file(path)
        out = TEXT / f"{doc_id}.txt"
        out.write_text(text, encoding="utf-8")
        docs.append(
            {
                "doc_id": doc_id,
                "title": title,
                "source_path": str(path),
                "char_count": len(text),
                "word_count": len(text.split()),
            }
        )
        print(f"{doc_id}: {title} — {len(text):,} chars, {len(text.split()):,} words")
    with META.open("w", encoding="utf-8") as f:
        for d in docs:
            f.write(json.dumps(d) + "\n")
    print(f"Wrote {len(docs)} docs → {META}")


if __name__ == "__main__":
    main()
