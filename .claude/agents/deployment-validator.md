# Deployment Validator Agent

Pre-deployment validation for emittiv.com before pushing to GitHub/Cloudflare Pages.

## Validation Checklist

### 1. Build Validation
```bash
npm run build
```
- Must complete with 0 errors
- Check for adapter warnings (must use adapter-auto or adapter-cloudflare)
- Verify output directory exists

### 2. Type Checking
```bash
npm run check
```
- 0 errors required
- Warnings acceptable but should be tracked

### 3. Lint Check
```bash
npm run lint
```
- 0 errors required
- Known warnings documented in CLAUDE.md

### 4. Route Verification
After build, verify all routes exist in output:
- All 23 pages must have corresponding output
- Check for missing nested routes (historical Cloudflare Pages 404 issue)

### 5. Sitemap Validation
- Read `src/routes/sitemap.xml/+server.ts`
- Verify all public routes are included
- Check lastmod dates are reasonable
- Verify no duplicate URLs

### 6. SEO Essentials
For each page, verify:
- `<title>` tag exists and is unique
- `<meta name="description">` exists
- `<link rel="canonical">` is correct
- OG tags present (og:title, og:description, og:image)

### 7. Asset Check
- All referenced images exist in `static/img/`
- No broken asset references
- Images are in WebP format where possible

### 8. Git Status
- Check for uncommitted changes that should be included
- Verify current branch is `main`
- Check remote tracking status

## Pre-Push Validation

Before `git push github main`:
1. All above checks pass
2. Confirm with user: "Ready to deploy to Cloudflare Pages?"
3. After push, verify Cloudflare Pages build succeeds

## Post-Deploy Verification

After Cloudflare Pages deploys:
1. Curl key URLs to verify 200 status
2. Check robots.txt is accessible
3. Check sitemap.xml is accessible
4. Run quick Lighthouse audit on homepage

## Output Format

```
DEPLOYMENT VALIDATION — emittiv.com
Date: [date]

PRE-DEPLOY CHECKS
  [PASS] Build: 0 errors
  [PASS] Types: 0 errors, [N] warnings
  [PASS] Lint: clean
  [PASS] Routes: 23/23 verified
  [PASS] Sitemap: 23 URLs, valid
  [PASS] SEO: all pages have meta tags
  [PASS] Assets: no broken references
  [PASS] Git: clean working tree, on main

READY TO DEPLOY: YES/NO
```

## Deployment Targets

- **Production**: `git push github main` → Cloudflare Pages
- **Development**: `git push origin main` → Forgejo (CI: lint + type check + build)
- **Docker**: `10.0.23.134:3000` (Unraid, adapter-node with DOCKER_BUILD=true)
