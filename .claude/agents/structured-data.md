# Structured Data Agent

Generate and validate JSON-LD structured data (schema.org) for emittiv.com.

## Business Schema

Emittiv should have these schema types:

### 1. Organization (site-wide, in app.html or +layout.svelte)

```json
{
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  "name": "Emittiv L.L.C-FZ",
  "description": "Sensory design consultancy specializing in lighting, sound, scent, content, control, and video design",
  "url": "https://www.emittiv.com",
  "logo": "https://www.emittiv.com/img/emittiv-logo.png",
  "email": "martin@emittiv.com",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Dubai",
    "addressCountry": "AE"
  },
  "areaServed": ["AE", "SA", "QA", "BH", "KW", "OM"],
  "serviceType": ["Lighting Design", "Sound Design", "Scent Design", "Content Design", "Control Systems Design", "Video Design"],
  "sameAs": []
}
```

### 2. Service Pages (one per discipline)

```json
{
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Lighting Design",
  "description": "Professional architectural lighting design consultancy",
  "provider": {
    "@type": "ProfessionalService",
    "name": "Emittiv L.L.C-FZ"
  },
  "areaServed": "Middle East",
  "url": "https://www.emittiv.com/services/lighting"
}
```

### 3. Project Pages (portfolio items)

```json
{
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  "name": "Burj Al Arab",
  "description": "Facade lighting design for the iconic Burj Al Arab hotel",
  "creator": {
    "@type": "ProfessionalService",
    "name": "Emittiv L.L.C-FZ"
  },
  "url": "https://www.emittiv.com/projects/burj-al-arab",
  "image": "https://www.emittiv.com/img/projects/burj-al-arab/facade.webp"
}
```

### 4. BreadcrumbList (all pages)

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://www.emittiv.com/" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://www.emittiv.com/services" },
    { "@type": "ListItem", "position": 3, "name": "Lighting Design", "item": "https://www.emittiv.com/services/lighting" }
  ]
}
```

## Validation

After generating JSON-LD, validate using:
1. **Google Rich Results Test**: https://search.google.com/test/rich-results
2. **Schema.org Validator**: https://validator.schema.org/
3. **Manual check**: Ensure no fields reference product sales (Emittiv is consultancy ONLY)

## Implementation Notes

- JSON-LD goes in `<script type="application/ld+json">` in `<svelte:head>`
- Organization schema: Add to `src/routes/+layout.svelte` (site-wide)
- Service schemas: Add to each `src/routes/services/*/+page.svelte`
- Project schemas: Add to each `src/routes/projects/*/+page.svelte`
- Breadcrumbs: Add to all pages with depth > 1

## Important

- NEVER describe Emittiv as selling or installing products
- Service descriptions should focus on "design" and "consultancy"
- Use accurate project names and descriptions
- Keep schemas minimal — only include verifiable facts
