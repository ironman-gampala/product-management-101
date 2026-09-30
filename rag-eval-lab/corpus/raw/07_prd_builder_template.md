# Skill: PRD Builder

## Description
Generates a high-quality, engineering-ready Product Requirement Document (PRD) from raw product context.

Designed for B2B SaaS fintech platform teams (Product Line Engineering).

---

## Input

Raw product context provided by PM. May include:
- Problem description
- Customer impact
- System behavior
- Expected outcome

Input may be incomplete or unstructured.

---

## Output

A fully structured PRD in markdown format following the standard PRD template.

---

## Behavior

- Convert raw context into a structured PRD
- Follow the PRD template strictly
- Ensure clarity, specificity, and engineering readiness
- Think in terms of:
  - System design (APIs, services, operators)
  - Platform vs customer-specific tradeoffs
  - End-to-end lifecycle (Customer → API → Internal → External)

---

## Critical Rules

### Handling Missing Information

- If any information is not available:
  - Write exactly: "Insufficient context"
- Do NOT:
  - Guess metrics
  - Fabricate syehavior
  - Use vague statements (e.g., "improves efficiency")
- For every missing item:
  - Add a clear question in "Open Questions"

---

## PRD Template (STRICT)

# PRD: <Feature Name>

## 1. Overview
- Feature:
- Customer / Segment:
- Author:
- Status:
- Feature Type:
- Priority:
- Reviewers:

## 2. Feature Brief
- Problem:
- Proposed Solution:
- Customer/Business Impact:
- Why Now:

## 3. Problem Statement

### Problem Definition
...

### Workflow Context
...

### Impacted Users/Systems
...

### Problem Severity
- Frequency:
- Impact:

### Evidence
- Qualitative:
- Quantitative:

## 4. Current vs Desired State

**Current State:**
...

**Desired State:**
...

## 5. Goals & Success Metrics

### Product/Business Metrics
| Metric | Baseline | Target | Timeframe |

### Guardrail Metrics
| Metric | Acceptable Range | Risk |

## 6. Dependencies & Impact

- Impacted Teams:
- Systems:
- External Dependencies:
- Regulatory:
- Reusability Assessment:

## 7. Solution Design

### Lifecycle Flow
(Customer → API âernal Services → External Systems)

### Proposed Solution
...

### Required Changes
- Product Center:
- APIs:
- Operator / Provisioning:
- Reports:

### UI/UX Changes
...

## 8. Functional Requirements
- ...

## 9. Acceptance Criteria

### Scenario 1:
Given:
When:
Then:

## 10. Non-Functional Requirements
- Availability:
- Scalability:
- Observability:
- Audit:
- Security:

## 11. Rollout Strategy
...

## 12. Assumptions & Out of Scope
...

## 13. Open Questions
...

## 14. Decision Log
| Decision | Rationale | Alternatives |

---

## Quality Bar

Ensure:
- No section is skipped
- No fabricated data
- Problem is clearly defined
- At least 2–3 functional requirements
- At least 1 Gherkin scenario
- Missing data marked as "Insufficient context"
- Open Questions capture all gaps

---

## Usage

Provide input context and invoke this skill to generate a PRD.

Example:

Input:
"Operator reads stale delta after updates, leading to false success status."

Output:
→ Full PRD
