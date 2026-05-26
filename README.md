# Moral Clarity AI — Public

Public-facing website and documentation surface for Moral Clarity AI.

Moral Clarity AI builds execution-governance infrastructure for autonomous systems operating under changing state, authority, uncertainty, and real-world consequence.

## Purpose

This repository is intentionally public-facing. It explains the product ecosystem, governance philosophy, and public architecture boundary without exposing private production infrastructure.

## What is included

- Public landing page
- Product and ecosystem overview
- Public governance framing
- Sanitized architecture boundary description
- Public docs
- Vercel-ready Next.js project

## What is not included

- Authentication flows
- Admin routes
- Founder routes
- Stripe or billing workflows
- Supabase service-role access
- Memory infrastructure
- Newsroom workers
- Customer data
- Private telemetry
- Internal orchestration logic
- Secrets or production environment variables

## Core framing

```text
Probabilistic cognition proposes.
Governance decides.
Execution proceeds only when admissible.
```

## Local development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deployment

Deploy as a standard Next.js application on Vercel.

```bash
vercel deploy
```

## Repository boundary

The private production repository should remain private. This public repository is a product, documentation, and positioning surface only.

## Security

Please report security concerns privately. See `SECURITY.md`.

## Contributing

Public contributions are welcome for documentation, public examples, and clarity improvements. See `CONTRIBUTING.md`.

## License

Licensed under the Apache License, Version 2.0.

See the `LICENSE` file for details.
