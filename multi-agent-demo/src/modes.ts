import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AgentDef, ModeId } from "./types.js";

const root = path.join(path.dirname(fileURLToPath(import.meta.url)), "..");

function skill(agentId: string): string {
  return path.join(root, "skills", agentId, "SKILL.md");
}

function agent(id: string, name: string): AgentDef {
  return { id, name, skillPath: skill(id) };
}

export type ModeConfig =
  | { kind: "pipeline"; agents: AgentDef[] }
  | { kind: "debate"; agents: AgentDef[]; moderator: AgentDef; rounds: number };

export function getModeConfig(mode: ModeId, roles?: string[]): ModeConfig {
  switch (mode) {
    case "research":
      return {
        kind: "pipeline",
        agents: [
          agent("researcher", "Researcher"),
          agent("synthesizer", "Synthesizer"),
          agent("critic", "Critic"),
        ],
      };
    case "product-planning":
      return {
        kind: "pipeline",
        agents: [
          agent("problem-framer", "Problem Framer"),
          agent("ideator", "Ideator"),
          agent("prioritizer", "Prioritizer"),
        ],
      };
    case "code-helpers":
      return {
        kind: "pipeline",
        agents: [
          agent("planner", "Planner"),
          agent("coder", "Coder"),
          agent("reviewer", "Reviewer"),
        ],
      };
    case "open-ended": {
      const cleaned = (roles ?? [])
        .map((r) => r.trim())
        .filter(Boolean)
        .slice(0, 3);
      if (cleaned.length < 2 || cleaned.length > 3) {
        throw new Error("open-ended mode requires 2 or 3 role names");
      }
      return {
        kind: "debate",
        agents: cleaned.map((name, i) => ({
          id: `role-${i + 1}`,
          name,
          skillPath: skill("moderator"), // placeholder replaced in orchestrator
        })),
        moderator: agent("moderator", "Moderator"),
        rounds: 2,
      };
    }
    default: {
      const _exhaustive: never = mode;
      throw new Error(`Unknown mode: ${_exhaustive}`);
    }
  }
}

export function buildOpenEndedRoleSkill(roleName: string): string {
  return `# ${roleName} Skill

You are **${roleName}** in an open debate with other agents.

## Job
Argue clearly from this role's perspective. Respond to others in the transcript. Be concrete.

## Tools
- Use \`scratchpad_write\` / \`scratchpad_read\` to share lasting points
- Use \`calculator\` or \`fetch_url\` when they help your case

## Output
State your position, key arguments, and one rebuttal to another speaker if relevant.
`;
}
