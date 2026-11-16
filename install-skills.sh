#!/usr/bin/env bash
# Install this repo's PM interview skills into your personal Claude Code skills folder,
# so they work in any project — not only when this repo is open.
#
# Usage:
#   ./install-skills.sh            # symlink each skill (updates when you git pull)
#   ./install-skills.sh --copy     # copy instead of symlink
#   ./install-skills.sh --force    # replace skills that already exist with the same name
#   ./install-skills.sh --uninstall
#
# Target folder: ${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}

set -euo pipefail

REPO_DIR="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
SRC="$REPO_DIR/.claude/skills"
DEST="${CLAUDE_SKILLS_DIR:-$HOME/.claude/skills}"

mode="link"; force=0; uninstall=0
for arg in "$@"; do
  case "$arg" in
    --copy) mode="copy" ;;
    --force) force=1 ;;
    --uninstall) uninstall=1 ;;
    -h|--help) sed -n '2,12p' "$0"; exit 0 ;;
    *) echo "Unknown option: $arg" >&2; exit 1 ;;
  esac
done

[ -d "$SRC" ] || { echo "No skills found at $SRC" >&2; exit 1; }
mkdir -p "$DEST"

for skill in "$SRC"/*/; do
  name="$(basename "$skill")"
  [ -f "$skill/SKILL.md" ] || continue
  target="$DEST/$name"

  if [ "$uninstall" -eq 1 ]; then
    if [ -L "$target" ] || [ -d "$target" ]; then rm -rf "$target"; echo "removed  $name"; fi
    continue
  fi

  if [ -e "$target" ] || [ -L "$target" ]; then
    if [ "$force" -eq 1 ]; then rm -rf "$target"
    else echo "skipped  $name (already exists — use --force to replace)"; continue; fi
  fi

  if [ "$mode" = "link" ]; then ln -s "${skill%/}" "$target"; echo "linked   $name"
  else cp -R "${skill%/}" "$target"; echo "copied   $name"; fi
done

echo
echo "Done. Skills folder: $DEST"
echo "Restart Claude Code (or start a new session) to pick them up."
