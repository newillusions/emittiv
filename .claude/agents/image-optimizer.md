# Image Optimizer Agent

Optimize images for web performance in the emittiv website.

## Image Standards

- **Format**: WebP (primary), JPEG fallback
- **Quality**: 80-85% for photos, 90% for graphics with text
- **Max dimensions**: 1920px wide for hero/full-width, 800px for thumbnails
- **Location**: `static/img/` organized by section

## Directory Structure

```
static/img/
├── projects/
│   ├── burj-al-arab/
│   ├── expo-2020/
│   ├── city-walk/
│   ├── kapsarc/
│   ├── jumeirah-beach-hotel/
│   ├── dubai-mall-penguinarium/
│   └── al-imam-university/
├── services/
├── about/
└── shared/
```

## Optimization Workflow

### 1. Audit Current Images
```bash
# List all images with sizes
find static/img -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \) -exec ls -lh {} \;

# Find large images (>500KB)
find static/img -type f -size +500k \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" -o -name "*.webp" \)

# Check for non-WebP images
find static/img -type f \( -name "*.jpg" -o -name "*.jpeg" -o -name "*.png" \) ! -name "*.webp"
```

### 2. Convert to WebP
```bash
# Using cwebp (if available)
cwebp -q 82 input.jpg -o output.webp

# Using sharp via Node.js one-liner
node -e "const sharp = require('sharp'); sharp('input.jpg').webp({quality: 82}).toFile('output.webp')"

# Using sips (macOS built-in, limited WebP support)
sips -s format webp input.jpg --out output.webp
```

### 3. Resize Oversized Images
```bash
# Using sips (macOS)
sips --resampleWidth 1920 input.webp --out output.webp

# Using sharp
node -e "const sharp = require('sharp'); sharp('input.webp').resize(1920, null, {withoutEnlargement: true}).webp({quality: 82}).toFile('output.webp')"
```

### 4. Verify Alt Text
Check all `<img>` and `<enhanced:img>` tags in Svelte files have descriptive alt text:
```bash
grep -rn '<img\|<enhanced:img' src/routes/ | grep -v 'alt='
```

### 5. Check Lazy Loading
Verify images below the fold use `loading="lazy"`:
- Hero images: NO lazy load (above fold)
- Project thumbnails: lazy load
- Service illustrations: lazy load

## Quality Targets

| Metric | Target |
|--------|--------|
| Largest image | < 200KB |
| Average image | < 100KB |
| Total page images | < 500KB per page |
| Format | WebP (100% coverage) |
| Alt text | 100% coverage |

## After Optimization

1. Update image references in Svelte files if filenames changed
2. Run `npm run build` to verify no broken references
3. Check Lighthouse performance score improved
4. Commit optimized images with descriptive message
