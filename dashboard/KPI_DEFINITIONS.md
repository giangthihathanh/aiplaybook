# KPI Definitions

| KPI | Formula | Source | Refresh | Owner |
|---|---|---|---|---|
| Verified hours saved | Sum(max(Baseline minutes - AI total minutes, 0)) / 60 | FactEffort | Weekly | Program Lead |
| Acceptance rate | Approved without material correction / Reviewed | FactRun | Weekly | QA Lead |
| Critical unsupported behavior | Count of critical fabricated outputs | FactRun and incident register | Immediate | POC Lead |
| Monthly active governed users | Distinct users with approved workflow run | FactRun | Monthly | Program Lead |
| Scale-ready use cases | Count where value and governance gates pass | Use-case review | Monthly | Governance Board |
