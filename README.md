# AI Test Manager Hub

A governed repository and Vite + React website for the AI Test Management Program.

## Included deliverables

- Official AI Playbook
- Three POC evidence structures and templates
- Twelve-use-case catalog
- Prompt Registry in JSON, CSV and Markdown
- Dashboard specification, data schema and KPI definitions
- Mermaid architecture and governance diagrams
- RACI and implementation plan
- GitHub Pages deployment workflow
- Responsive Vite + React website

## Ownership

The AI Playbook and program catalog are program assets. POC evidence belongs to the relevant team. Prompt implementations retain named owners and versions. Hải's Prompt Library is linked only as an independent contributor-owned reference and its prompt content is not copied here.

## Quick start

```bash
npm install
npm run dev
```

Production validation:

```bash
npm run build
npm run preview
```

## GitHub Pages

1. Upload all files to the repository root.
2. Push to `main`.
3. Open **Settings → Pages**.
4. Select **GitHub Actions** as the source.
5. The included workflow builds and deploys `dist`.

## Repository structure

```text
.github/workflows/     Deployment automation
dashboard/             Dashboard specification and data model
docs/                  Playbook, catalog and Mermaid diagrams
pocs/                  POC evidence folders and templates
prompt-registry/       Prompt metadata and governance
src/                   React application
use-cases/             Individual use-case records
```

## Lifecycle

`Candidate → Ready for Pilot → Pilot → Validated → Approved for Controlled Use → Approved for Scale → Suspended/Retired`

A critical privacy, security, release, data-integrity or traceability incident can suspend a use case regardless of productivity benefit.
