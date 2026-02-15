# Emittiv Website

Production company website for **Emittiv L.L.C-FZ** — a sensory design consultancy based in Dubai, UAE.

## Tech Stack

- **Framework:** SvelteKit 2.51, Svelte 5.51, TypeScript
- **Styling:** SCSS (Sass 1.97)
- **Build:** Vite 7.3, adapter-auto (or adapter-node when `DOCKER_BUILD=true`)
- **Linting:** ESLint 10 (flat config), Prettier 3.8
- **Contact Form:** EmailJS (@emailjs/browser)
- **Analytics:** Matomo (cookieless, matomo.emittiv.online)

## Commands

```bash
npm run dev          # Dev server (localhost:5173)
npm run build        # Production build
npm run preview      # Preview production build
npm run check        # Svelte type checking
npm run lint         # Lint + format check
npm run format       # Auto-format
```

Note: `npm install` requires `--legacy-peer-deps` due to vite-plugin-svelte-inspector peer dep.

## Project Structure

```
src/
├── routes/
│   ├── +page.svelte          # Homepage
│   ├── about/                # About page
│   ├── contact/              # Contact form (EmailJS)
│   ├── downloads/            # Downloadable resources
│   ├── privacy/              # Privacy policy
│   ├── projects/             # Project portfolio
│   ├── services/             # Services overview + 6 discipline pages
│   │   ├── content/          # Content design
│   │   ├── control/          # Control systems
│   │   ├── lighting/         # Lighting design
│   │   ├── scent/            # Scent design
│   │   ├── sound/            # Sound design
│   │   └── video/            # Video design
│   ├── sitemap.xml/          # Dynamic sitemap
│   └── terms/                # Terms of service
├── lib/                      # Shared components and utilities
└── app.html                  # HTML shell
```

## Deployment

- **Production:** Cloudflare Pages via GitHub (`github` remote → `github.com/newillusions/emittiv`)
- **Development:** Forgejo (`origin` remote → `forge.mms.name/emittiv/emittiv-website`)
- **Docker:** Available at `10.0.23.134:3000` (Unraid primary, br0 ipvlan L2)

## MCP Servers

Configured in `.mcp.json` (gitignored), using credential wrapper:

| Server | Package                    | Purpose                          |
| ------ | -------------------------- | -------------------------------- |
| svelte | @sveltejs/mcp              | Official Svelte docs + autofixer |
| gsc    | mcp-server-gsc             | Google Search Console data       |
| matomo | @mj-kiwi/matomo-mcp-server | Matomo analytics                 |

Credentials loaded via `~/.claude/scripts/mcp-with-creds.sh` from `~/.claude/.credentials.env`.

## CI/CD

- **Forgejo Actions** workflow at `.forgejo/workflows/ci.yml`
- Runner: `forgejo-runner` on AI server (10.0.20.11), labels: `ubuntu-latest`, `docker`
- Pipeline: lint → type check → build
- Build uses `DOCKER_BUILD=true` env var to select adapter-node

## ESLint Configuration

Flat config at `eslint.config.js` (ESLint 10, migrated from legacy `.eslintrc.cjs`).

Key rule overrides:
- `svelte/no-at-html-tags: warn` — `{@html}` is used intentionally for structured content (not user input)
- `svelte/require-each-key: warn` — good practice, not enforced yet
- `svelte/no-navigation-without-resolve: off` — site deploys to root, no base path needed

Packages: `typescript-eslint`, `eslint-plugin-svelte`, `eslint-config-prettier`

## Key Decisions

- **Forgejo primary, GitHub secondary:** `origin` → Forgejo for development, `github` → GitHub for Cloudflare Pages deployment
- **SCSS over Tailwind:** Project uses Sass for styling, not Tailwind
- **Svelte 5 runes:** Use `$state`, `$derived`, `$effect` — not legacy `$:` syntax
- **Matomo SPA tracking:** Implemented in `transitions.svelte` via `afterNavigate`, production-only
- **Business model:** Emittiv is design and consultancy ONLY — does not sell or install products
- **`.claude/` in .prettierignore:** Session artifacts are excluded from formatting checks

## Known Issues

- 108 svelte-check warnings: `element_invalid_self_closing_tag` in service pages (cosmetic, fix during content work)
- ipvlan L2 on br0: Unraid host can't curl its own containers — test from Mac
