# Emittiv Website

Production company website for **Emittiv L.L.C-FZ** — a sensory design consultancy based in Dubai, UAE.

## Tech Stack

- **Framework:** SvelteKit 2.51, Svelte 5.51, TypeScript
- **Styling:** SCSS (Sass 1.97)
- **Build:** Vite 7.3, adapter-auto (or adapter-node when `DOCKER_BUILD=true`)
- **Linting:** ESLint 10, Prettier 3.8
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

## Key Decisions

- **Forgejo primary, GitHub secondary:** `origin` → Forgejo for development, `github` → GitHub for Cloudflare Pages deployment
- **SCSS over Tailwind:** Project uses Sass for styling, not Tailwind
- **Svelte 5 runes:** Use `$state`, `$derived`, `$effect` — not legacy `$:` syntax
- **Matomo SPA tracking:** Implemented in `transitions.svelte` via `afterNavigate`, production-only
- **Business model:** Emittiv is design and consultancy ONLY — does not sell or install products

## Known Issues

- 3 pre-existing TS errors: EmailForm null check, Playwright test types (not regressions)
- 108 svelte-check warnings: `element_invalid_self_closing_tag` in service pages (fix during content work)
- ipvlan L2 on br0: Unraid host can't curl its own containers — test from Mac
