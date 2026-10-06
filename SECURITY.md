# Security Policy

## Supported versions

| Version | Supported |
|---|---|
| 1.4.x | Yes |
| 1.3.x and earlier | Upgrade required |

## Do not commit

- API keys, access tokens, passwords, certificates or connection strings.
- Production logs containing secrets or personal data.
- Personal data, restricted business records or unapproved production extracts.
- Full prompt content owned by an external contributor without explicit reuse approval.
- Private incident evidence that belongs in an approved restricted system.

## Reporting a security or governance issue

Do not open a public GitHub issue for secrets, personal data or exploitable security defects. Notify the repository owner or organizational security channel privately. Include:

- Affected repository path, POC, use case and prompt/workflow version.
- Data classification and severity.
- Reproduction steps that do not expose restricted content.
- Immediate containment already performed.
- Evidence location in an approved restricted system.

## Immediate containment

A Critical incident requires the affected workflow to be suspended. Rotate exposed credentials, remove public access to affected artifacts, preserve audit evidence and notify the Program Lead plus Security/Privacy control owner.
