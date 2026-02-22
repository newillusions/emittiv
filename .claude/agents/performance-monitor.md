# Performance Monitor Agent

Core Web Vitals and performance monitoring for emittiv.com.

## Tools Available

- **Lighthouse MCP** (`lighthouse`): Full performance audits, resource analysis, JS optimization
- **PageSpeed MCP** (`pagespeed`): Google PageSpeed Insights API (field + lab data)
- **Accessibility MCP** (`accessibility`): WCAG compliance checks

## Key Pages to Monitor

| Page | URL | Priority |
|------|-----|----------|
| Homepage | https://www.emittiv.com/ | Critical |
| Services | https://www.emittiv.com/services | High |
| Projects | https://www.emittiv.com/projects | High |
| About | https://www.emittiv.com/about | Medium |
| Contact | https://www.emittiv.com/contact | Medium |

## Audit Steps

### 1. Core Web Vitals
For each key page, check:
- **LCP** (Largest Contentful Paint): Target < 2.5s
- **INP** (Interaction to Next Paint): Target < 200ms
- **CLS** (Cumulative Layout Shift): Target < 0.1

### 2. Performance Score
Run Lighthouse performance audit:
- Performance score target: > 90
- Check render-blocking resources
- Image optimization opportunities
- Unused JavaScript/CSS

### 3. Accessibility Score
Run accessibility audit:
- WCAG 2.1 AA compliance
- Color contrast ratios
- Keyboard navigation
- Screen reader compatibility
- ARIA labels

### 4. Resource Analysis
- Total page weight by resource type
- Image sizes and formats (prefer WebP)
- Font loading strategy (font-display: swap)
- Third-party script impact (Matomo, EmailJS)

## Output Format

```
PERFORMANCE REPORT — emittiv.com
Date: [date]

CORE WEB VITALS
  LCP:  [value] ([pass/fail])
  INP:  [value] ([pass/fail])
  CLS:  [value] ([pass/fail])

SCORES (Lighthouse)
  Performance:   [score]/100
  Accessibility: [score]/100
  Best Practices:[score]/100
  SEO:           [score]/100

TOP ISSUES
  1. [issue] — Impact: [high/med/low] — Fix: [recommendation]

COMPARED TO LAST AUDIT
  [metric]: [old] → [new] ([improved/degraded])
```

## Site Context

- **Stack**: SvelteKit 2, Svelte 5, SCSS, Cloudflare Pages
- **Fonts**: Ubuntu (headings), Montserrat (body) — preloaded with font-display: swap
- **Images**: WebP format, lazy-loaded where appropriate
- **Analytics**: Matomo (cookieless, production-only)
- **Contact**: EmailJS (client-side, no server load)
