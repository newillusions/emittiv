# Security Headers Agent

Audit HTTP security headers for emittiv.com on Cloudflare Pages.

## Headers to Check

### Critical Headers

| Header | Expected | Purpose |
|--------|----------|---------|
| `Strict-Transport-Security` | `max-age=31536000; includeSubDomains` | Force HTTPS |
| `X-Content-Type-Options` | `nosniff` | Prevent MIME sniffing |
| `X-Frame-Options` | `DENY` or `SAMEORIGIN` | Prevent clickjacking |
| `Referrer-Policy` | `strict-origin-when-cross-origin` | Control referrer leakage |
| `Permissions-Policy` | Restrict unused APIs | Limit browser features |

### Recommended Headers

| Header | Expected | Purpose |
|--------|----------|---------|
| `Content-Security-Policy` | See CSP section | XSS protection |
| `X-XSS-Protection` | `0` (rely on CSP instead) | Legacy XSS filter |
| `Cross-Origin-Opener-Policy` | `same-origin` | Isolate browsing context |
| `Cross-Origin-Resource-Policy` | `same-origin` | Restrict resource loading |

### CSP Policy for Emittiv

Recommended Content-Security-Policy considering the tech stack:

```
default-src 'self';
script-src 'self' https://cdn.jsdelivr.net https://matomo.emittiv.online;
style-src 'self' 'unsafe-inline' https://fonts.googleapis.com;
font-src 'self' https://fonts.gstatic.com;
img-src 'self' data: https://matomo.emittiv.online;
connect-src 'self' https://api.emailjs.com https://matomo.emittiv.online;
frame-ancestors 'none';
base-uri 'self';
form-action 'self' https://api.emailjs.com;
```

Third-party services requiring exceptions:
- **Matomo**: `matomo.emittiv.online` (analytics)
- **EmailJS**: `api.emailjs.com` (contact form)
- **Google Fonts**: `fonts.googleapis.com`, `fonts.gstatic.com`

## How to Audit

### 1. Check Current Headers
```bash
curl -sI https://www.emittiv.com/ | grep -iE "^(strict|x-content|x-frame|referrer|permissions|content-security|x-xss|cross-origin)"
```

### 2. Full Header Dump
```bash
curl -sI https://www.emittiv.com/
```

### 3. Check All Key Pages
```bash
for path in "/" "/about" "/services" "/projects" "/contact"; do
  echo "=== $path ==="
  curl -sI "https://www.emittiv.com$path" | grep -iE "^(strict|x-content|x-frame|referrer|content-security)"
done
```

## Implementation

Security headers for Cloudflare Pages are configured via:

### Option A: `_headers` file (recommended)
Create `static/_headers`:
```
/*
  Strict-Transport-Security: max-age=31536000; includeSubDomains
  X-Content-Type-Options: nosniff
  X-Frame-Options: DENY
  Referrer-Policy: strict-origin-when-cross-origin
  Permissions-Policy: camera=(), microphone=(), geolocation=()
  Content-Security-Policy: default-src 'self'; script-src 'self' https://cdn.jsdelivr.net https://matomo.emittiv.online; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://matomo.emittiv.online; connect-src 'self' https://api.emailjs.com https://matomo.emittiv.online; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://api.emailjs.com
```

### Option B: Cloudflare Dashboard
Dashboard → Pages → emittiv → Settings → Headers

## Output Format

```
SECURITY HEADERS AUDIT — emittiv.com
Date: [date]

HEADER STATUS
  [PASS] Strict-Transport-Security: present, max-age=31536000
  [FAIL] Content-Security-Policy: MISSING
  [PASS] X-Content-Type-Options: nosniff
  [WARN] Permissions-Policy: not set

GRADE: [A-F based on securityheaders.com criteria]

RECOMMENDATIONS
  1. Add Content-Security-Policy header
  2. Add Permissions-Policy header
```

## External Validation

After implementing headers, validate at:
- https://securityheaders.com/?q=emittiv.com
- https://observatory.mozilla.org/analyze/emittiv.com
