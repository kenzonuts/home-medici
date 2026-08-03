# Rumah Sunat Modern Jati

Production-ready foundation for the Rumah Sunat Modern Jati healthcare company profile website.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Icons:** Lucide React
- **Animation:** Framer Motion
- **Fonts:** Manrope (heading), Inter (body)
- **Package manager:** pnpm
- **Deployment:** Vercel

## Getting started

```bash
pnpm install
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command          | Description                          |
| ---------------- | ------------------------------------ |
| `pnpm dev`       | Start development server (Turbopack) |
| `pnpm build`     | Create production build              |
| `pnpm start`     | Start production server              |
| `pnpm lint`      | Run ESLint                           |
| `pnpm format`    | Format with Prettier                 |
| `pnpm typecheck` | Run TypeScript checks                |

## Project structure

```text
app/                  # App Router routes & layouts
components/
  ui/                 # Primitive UI components
  layout/             # Layout primitives (Container, …)
  sections/           # Page sections
  shared/             # Shared composite components
hooks/                # Custom React hooks
lib/                  # Utilities, fonts, metadata helpers
types/                # Shared TypeScript types
constants/            # Site-wide constants
assets/               # Source assets (imported in code)
styles/               # Global CSS & design tokens
public/               # Static public assets
```

## Environment

Copy `.env.example` and set values as needed:

```bash
cp .env.example .env.local
```

## Notes

This repository currently contains the project foundation only.
Page UI (homepage, navbar, sections, etc.) will be added in later phases.
