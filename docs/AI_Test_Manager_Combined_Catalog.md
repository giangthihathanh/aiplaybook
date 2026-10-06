# AI Test Manager Combined Catalog

## POC summary

| POC | Use cases | Scale target |
|---|---|---|
| POC-01 Test Case Generation | UC-01 to UC-04 | ≥30% effort reduction, ≥90% mapping, duplicates <5%, zero approved critical unsupported behavior |
| POC-02 Test Reporting | UC-05 to UC-07 | Daily report <15 minutes, 100% arithmetic and evidence consistency, zero invalid GO |
| POC-03 Test Data | UC-08 to UC-11 | ≥40% effort reduction, 100% valid conformance, zero unapproved PII, reproducible output |
| Cross-POC Engineering | UC-12 | ≥25% effort reduction, ≥95% final execution success, zero unsafe operation |

## Use cases

| ID | Use case | Domain | Prompt ID | KPI target | Primary risk | Mandatory control |
|---|---|---|---|---|---|---|
| UC-01 | Requirement and Specification Review | Test Design | PR-QA-REQ-001 | Effort ≥25%; traceability 100% | Invented requirements | Source IDs and BA/QA review |
| UC-02 | Traceable Test Case Generation | Test Design | PR-QA-TD-001 | Effort ≥30%; mapping ≥90%; duplicates <5% | Hallucinated behavior | Fixed schema, clarification and maker-checker |
| UC-03 | Exploratory Discovery | Test Design | PR-QA-TD-002 | Accepted scenarios ≥40%; risk uplift ≥15% | Unsafe/security overreach | Authorized scope and exploratory labels |
| UC-04 | BDD and API Test Design | Test Design | PR-QA-BDD-001 / PR-QA-API-001 | AC/status/syntax 100% | Invented contract behavior | Contract-only inputs and parser validation |
| UC-05 | Daily Failure Summary | Reporting | PR-QA-RPT-002 | <15 min; classification ≥95% | Wrong classification or secrets | Stable IDs, controlled categories and scan |
| UC-06 | Weekly Trend Report | Reporting | PR-QA-RPT-003 | Arithmetic/denominator 100% | Incorrect delta or causation | KPI contract and deterministic calculation |
| UC-07 | Release Readiness | Reporting | PR-QA-RPT-001 | Policy/evidence 100%; invalid GO 0 | Blocker masked by pass rate | Approved policy and human release authority |
| UC-08 | Synthetic Functional Data | Test Data | PR-QA-DATA-001 | Effort ≥40%; valid rows 100%; PII 0 | Leakage or wrong invalid rule | Seed, rules, validation and privacy scan |
| UC-09 | Excel Import Test Pack | Test Data | PR-QA-DATA-002 | Reopen/format/preservation 100% | Formatting or rollback assumptions | Save/reopen audit and actual import |
| UC-10 | Relational Synthetic Data | Test Data | PR-QA-DATA-004 | Integrity/reconciliation 100% | Orphans and unreconciled totals | Dependency order and assertions |
| UC-11 | Anonymization Planning | Test Data | PR-QA-DATA-003 | Controls/field coverage 100%; leakage 0 | Re-identification | Do Not Process gate and privacy approval |
| UC-12 | Automation and SQL Assistant | Engineering | PR-QA-ENG-001 | Effort ≥25%; success ≥95%; unsafe ops 0 | Destructive SQL/wrong joins | Read-only, review, scan and isolated testing |

## RACI

| Activity | Sponsor | Program Lead | POC Lead | Prompt Owner | QA Reviewer | Engineer | Product/BA | Security/Privacy | Release Manager |
|---|---|---|---|---|---|---|---|---|---|
| Program scope and budget | A | R | C | C | I | I | C | C | C |
| POC baseline and execution | I | A | R | C | R | R | C | C | I |
| Prompt/workflow development | I | A | C | R | C | R | C | C | I |
| Tool and data approval | I | C | C | C | I | C | I | A/R | I |
| AI artifact approval | I | I | A | C | R | C | C | C | I |
| Release recommendation | I | I | C | C | C | I | C | C | A/R |
| Incident investigation | I | A | R | C | R | R | C | R | C |
| Controlled-use approval | C | A | R | C | R | C | C | C | C |
| Scale decision | A | R | C | C | C | C | C | C | C |

## Implementation plan

| Phase | Timing | Main output | Exit gate |
|---|---|---|---|
| Mobilize | Weeks 1-2 | Charter, RACI, scope, tool/data approval, KPI contract | Named owners and no critical control gap |
| Build POCs | Weeks 3-6 | Baselines, evaluation packs, prompt registry entries | Every run references an approved version |
| Controlled pilot | Weeks 7-12 | Run logs, weekly KPI, incident and change records | Metrics reproducible; no unresolved critical incident |
| Validate | Weeks 13-16 | Independent review, POC score, SOP and decision | ≥80/100 for scale candidate |
| Scale | Months 5-8 | 50% target teams, integrations, dashboard and support | Operational ownership accepted |
| Institutionalize | Months 9-12 | Skill targets, certification, quarterly governance and next-year plan | Sponsor approval |
