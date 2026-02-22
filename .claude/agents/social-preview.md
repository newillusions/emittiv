# Social Preview Agent

Validate Open Graph and Twitter Card meta tags for social media sharing previews.

## Required Meta Tags Per Page

### Open Graph (Facebook, LinkedIn, WhatsApp)

```html
<meta property="og:title" content="Page Title — Emittiv" />
<meta property="og:description" content="Page description (150-200 chars)" />
<meta property="og:image" content="https://www.emittiv.com/img/og/page-image.jpg" />
<meta property="og:url" content="https://www.emittiv.com/page-path" />
<meta property="og:type" content="website" />
<meta property="og:site_name" content="Emittiv" />
```

### Twitter Cards

```html
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="Page Title — Emittiv" />
<meta name="twitter:description" content="Page description" />
<meta name="twitter:image" content="https://www.emittiv.com/img/og/page-image.jpg" />
```

## Validation Steps

### 1. Scan All Pages for Meta Tags

For each page in `src/routes/`, check `<svelte:head>` for:
- `og:title` — exists, unique per page, includes "Emittiv"
- `og:description` — exists, 150-200 chars, unique per page
- `og:image` — exists, absolute URL, image file exists
- `og:url` — exists, matches canonical URL
- `twitter:card` — exists, set to `summary_large_image`
- `twitter:title` — exists (can match og:title)
- `twitter:description` — exists (can match og:description)
- `twitter:image` — exists (can match og:image)

### 2. Image Requirements

OG images should be:
- **Dimensions**: 1200x630px (optimal for most platforms)
- **Format**: JPEG or PNG (NOT WebP — some platforms don't support it)
- **Size**: < 1MB
- **Content**: Readable text, brand colors, relevant imagery

### 3. Preview Testing

Use Playwright to check rendered meta tags:
```
browser_navigate to page URL
browser_evaluate: document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]')
```

### 4. External Validation Tools

After deployment:
- **Facebook Debugger**: https://developers.facebook.com/tools/debug/
- **Twitter Card Validator**: https://cards-dev.twitter.com/validator
- **LinkedIn Post Inspector**: https://www.linkedin.com/post-inspector/
- **WhatsApp**: Send link in a chat to preview

## Page-Specific Guidance

| Page | og:title | og:type | Image suggestion |
|------|----------|---------|------------------|
| Homepage | Emittiv — Sensory Design Consultancy | website | Brand hero image |
| About | About Emittiv — Sensory Design Consultancy | website | Team/office image |
| Services | Services — Emittiv | website | Services overview graphic |
| Services/* | [Discipline] Design — Emittiv | website | Discipline-specific image |
| Projects | Projects — Emittiv | website | Project collage |
| Projects/* | [Project Name] — Emittiv | article | Project hero image |
| Contact | Contact Emittiv | website | Brand image or map |

## Output Format

```
SOCIAL PREVIEW AUDIT — emittiv.com
Date: [date]

PAGES CHECKED: [count]

TAG COVERAGE
  og:title:       [count]/[total] pages
  og:description:  [count]/[total] pages
  og:image:        [count]/[total] pages
  twitter:card:    [count]/[total] pages

ISSUES
  [page]: [missing tag or problem]

IMAGE STATUS
  [count] OG images found
  [count] correct dimensions (1200x630)
  [count] missing or broken
```
