# Release Checklist

## Content
- [ ] Changed content has an owner and reviewer.
- [ ] POC, Use Case and Prompt IDs are consistent.
- [ ] No synthetic sample is presented as real evidence.
- [ ] Status, version and next-review fields are current.

## Governance
- [ ] Data classification is allowed.
- [ ] No secret, credential, personal data or restricted record is committed.
- [ ] Behavior-changing prompt/workflow changes have a new version and evaluation evidence.
- [ ] Critical incidents are resolved or the affected workflow remains suspended.

## Website quality
- [ ] `npm run check` passes.
- [ ] `npm run build` passes.
- [ ] Search, filters, mobile navigation and downloads work.
- [ ] Prompt Registry displays the expected record count.
- [ ] Keyboard focus is visible and heading order is logical.

## Deployment
- [ ] GitHub Pages source is GitHub Actions.
- [ ] Build and deploy jobs pass.
- [ ] Published website is smoke-tested.
- [ ] Changelog and release tag are updated.
