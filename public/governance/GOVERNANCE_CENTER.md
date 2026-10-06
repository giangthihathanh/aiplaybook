# AI Test Manager Governance Center

## Governance principles

1. AI output is a candidate artifact until a qualified reviewer approves it.
2. Every approved output must retain source, use-case ID, prompt/workflow ID, version, reviewer and disposition.
3. Deterministic calculation precedes AI interpretation for KPI and release reporting.
4. Sensitive data is minimized and processed only in an approved environment.
5. A critical privacy, security, release, data-integrity or traceability incident can suspend a workflow immediately.
6. Productivity benefit never overrides a failed governance gate.

## Use-case lifecycle

`Candidate → Ready for Pilot → Pilot → Validated → Approved for Controlled Use → Approved for Scale → Suspended / Retired`

### Entry and exit criteria

| Status | Entry criteria | Exit criteria | Approval |
|---|---|---|---|
| Candidate | Business problem and owner identified | Inputs, outputs, KPI, risk and controls drafted | Program Lead |
| Ready for Pilot | Tool and data classification approved | Evaluation set and human review process ready | POC Lead and QA Lead |
| Pilot | Representative workflows selected | Minimum sample completed and KPI evidence reproducible | POC Lead |
| Validated | KPI and control checks pass | Independent review finds no material discrepancy | Program Lead |
| Approved for Controlled Use | SOP, support and incident route documented | Stable operation in approved teams | Governance Board |
| Approved for Scale | Value gate and governance gate pass | Quarterly review maintained | Sponsor / QA Director |
| Suspended | Critical incident or control failure | Corrective action and revalidation completed | Program Lead and control owner |
| Retired | Replaced, stale or no longer valuable | Evidence retained and dependencies removed | Program Lead |

## Prompt lifecycle

`Draft → Evaluation → Pilot → Approved → Changed → Re-evaluated → Suspended / Retired`

A behavior-changing prompt update requires a new semantic version and regression evaluation. Changes to wording that do not change behavior may use a patch version.

## Human review gates

- **Gate 1, Input readiness:** sources approved, IDs present, classification allowed.
- **Gate 2, Output quality:** traceability, completeness, duplicates, unsupported behavior and observable expected results reviewed.
- **Gate 3, Control approval:** privacy, security, data integrity and release-policy checks completed where applicable.
- **Gate 4, Publication:** qualified reviewer approves the final artifact and evidence is retained.
- **Gate 5, Scale:** weighted POC score is at least 80/100 and Governance Gate is PASS.

## Incident severity

| Severity | Example | Required response |
|---|---|---|
| Critical | Secret exposure, unapproved PII, invalid GO with blocker, destructive SQL executed | Suspend workflow immediately; notify Program Lead and control owner; preserve evidence |
| High | Critical unsupported behavior proposed, material metric error, broken data integrity | Stop affected run; correct; re-evaluate affected version |
| Medium | Duplicate output, unsupported non-critical behavior, material reviewer rework | Log, correct and include in next regression set |
| Low | Formatting, wording or non-material usability issue | Correct in normal change cycle |

## Review cadence

- Prompt/workflow review: quarterly or after a behavior-changing update.
- Use-case review: quarterly.
- Critical incident review: immediate.
- POC scorecard: weekly during pilot, monthly during controlled use.
- Scale decision: after minimum sample and independent validation.
