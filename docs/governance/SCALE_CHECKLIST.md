# Scale Decision Checklist

A use case may move to **Approved for Scale** only when every mandatory item is complete.

## Ownership and scope
- [ ] Business Owner, Technical Owner and Human Reviewer are named.
- [ ] Intended users, approved scope and exclusions are documented.
- [ ] Support owner and incident route are assigned.

## Tool and data
- [ ] Approved AI tool is recorded.
- [ ] Allowed data classification is recorded.
- [ ] Data retention and deletion rules are documented.
- [ ] No secrets, credentials or unapproved production PII are present.

## Workflow control
- [ ] Input contract and output schema are controlled.
- [ ] Prompt/workflow ID and semantic version are retained with every run.
- [ ] Evaluation set covers normal, incomplete, conflicting and adverse inputs.
- [ ] Known limitations and stop conditions are documented.

## Evidence and value
- [ ] Manual baseline uses comparable work.
- [ ] Total AI-assisted effort includes preparation, review, correction and publication.
- [ ] KPI denominators and source systems are explicit.
- [ ] Minimum sample is met: at least 3 representative items or 10 reporting runs.
- [ ] Weighted POC score is at least 80/100.

## Governance gate
- [ ] No unresolved critical privacy incident.
- [ ] No unresolved critical security incident.
- [ ] No unresolved critical release-policy incident.
- [ ] No unresolved critical data-integrity incident.
- [ ] No unresolved critical traceability incident.
- [ ] Independent reviewer reproduced the material KPI results.
- [ ] Governance Gate is PASS.
