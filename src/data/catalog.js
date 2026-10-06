export const pocs=[
{id:'POC-01',name:'AI-assisted Test Case Generation',stage:'Validated',target:'≥30% effort reduction; ≥90% requirement mapping',uses:['UC-01','UC-02','UC-03','UC-04'],risk:'Unsupported behavior or duplicate coverage',control:'Traceability, NEED CLARIFICATION, human approval'},
{id:'POC-02',name:'AI Test Summary & Executive Reporting',stage:'Validated',target:'Daily reviewed summary <15 minutes; 100% arithmetic consistency',uses:['UC-05','UC-06','UC-07'],risk:'Incorrect metrics or invalid GO',control:'Deterministic calculation, metric contract, release authority'},
{id:'POC-03',name:'AI Test Data & Excel Generation',stage:'Pilot',target:'≥40% effort reduction; zero unapproved PII',uses:['UC-08','UC-09','UC-10','UC-11'],risk:'Data leakage or integrity failure',control:'Synthetic preferred, fixed seed, validation, privacy review'}];
export const useCases=[
['UC-01','Requirement and Specification Review','Test Design','Ready for Pilot','PR-QA-REQ-001','Review effort ≥25%; traceable findings 100%','Invented requirements','Source IDs, BA/QA review'],
['UC-02','Traceable Test Case Generation','Test Design','Validated','PR-QA-TD-001','Effort ≥30%; mapping ≥90%; duplicates <5%','Hallucinated behavior','Fixed schema, traceability, maker-checker'],
['UC-03','Exploratory and Edge-Case Discovery','Test Design','Ready for Pilot','PR-QA-TD-002','Accepted scenarios ≥40%; high-risk uplift ≥15%','Unsafe security suggestions','Authorized scope, exploratory labels'],
['UC-04','BDD and API Test Design','Test Design','Ready for Pilot','PR-QA-BDD-001 / PR-QA-API-001','AC/status coverage 100%; syntax 100%','Invented contract behavior','Contract-only data, parser, peer review'],
['UC-05','Daily Automated Failure Summary','Reporting','Validated','PR-QA-RPT-002','Summary <15 min; classification ≥95%','Wrong classification or leaked secrets','Stable IDs, controlled categories, scan'],
['UC-06','Weekly Quality Trend Report','Reporting','Ready for Pilot','PR-QA-RPT-003','Arithmetic and denominator disclosure 100%','Incorrect delta or false causation','KPI contract, deterministic calculation'],
['UC-07','Executive Release-Readiness Assessment','Reporting','Validated','PR-QA-RPT-001','Policy consistency 100%; invalid GO 0','Blocker masked by pass rate','Decision policy, DECISION BLOCKED, human authority'],
['UC-08','Synthetic Functional Test Data','Test Data','Validated','PR-QA-DATA-001','Effort ≥40%; valid conformance 100%; PII 0','PII or invalid-rule defects','Seed, Rule_Under_Test, scan, validation'],
['UC-09','Excel Import Test Pack Generation','Test Data','Pilot','PR-QA-DATA-002','Reopen/format/invalid preservation 100%','Formatting or rollback assumptions','Save/reopen audit, actual import'],
['UC-10','Relational Synthetic Dataset','Test Data','Candidate','PR-QA-DATA-004','PK/FK/cardinality/reconciliation 100%','Orphans or unreconciled totals','Dependency order and assertions'],
['UC-11','Privacy-Safe Anonymization Planning','Test Data','Controlled Candidate','PR-QA-DATA-003','Control and field coverage 100%; leakage 0','Re-identification or retention breach','Do Not Process gate, scan, privacy approval'],
['UC-12','Test Automation and SQL Assistant','Engineering','Candidate','PR-QA-ENG-001','Effort ≥25%; final success ≥95%; unsafe ops 0','Destructive SQL or wrong joins','Read-only, peer review, isolated tests']
].map(([id,name,domain,maturity,prompt,kpi,risk,control])=>({id,name,domain,maturity,prompt,kpi,risk,control}));
