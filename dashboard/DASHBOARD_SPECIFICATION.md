# Adoption Dashboard Specification

## Pages

1. **Executive Overview:** POCs completed, approved use cases, active users, verified hours saved, critical risks, scale readiness.
2. **Value and Productivity:** baseline effort, AI effort, review effort, net hours saved and output volume by use case.
3. **Quality and Governance:** acceptance, material correction, unsupported behavior, arithmetic consistency, incidents and overdue reviews.
4. **Skills and Adoption:** trained users, monthly active governed users, proficiency coverage and team onboarding.

## Data model

- `DimDate`: Date, Week, Month, Quarter, Year
- `DimTeam`: TeamID, TeamName, BusinessUnit
- `DimUser`: UserID, Role, TeamID, TrainingLevel
- `DimUseCase`: UseCaseID, POCID, Domain, Status, Owner
- `DimWorkflow`: WorkflowID, Version, Tool, Classification, Status
- `FactRun`: RunID, Date, TeamID, UseCaseID, WorkflowID, OutputsReviewed, OutputsApproved, MaterialCorrections, CriticalFindings, Incidents
- `FactEffort`: RunID, BaselineMinutes, PreparationMinutes, GenerationMinutes, ReviewMinutes, ReworkMinutes, PublicationMinutes
- `FactTraining`: UserID, ModuleID, CompletionDate, Score, Passed

## Mandatory denominator rules

- Acceptance rate = Approved without material correction / Reviewed outputs.
- Effort reduction = (Manual baseline - AI-assisted total effort) / Manual baseline.
- Active governed user = unique user completing at least one approved workflow run in period.
- Never combine rates across use cases without showing or weighting their denominators.
