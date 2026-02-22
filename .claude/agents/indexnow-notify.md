# IndexNow Notification Agent

Submit URL change notifications to search engines via the IndexNow protocol.

## Configuration

- **API Key**: `a4bd0f7dc314443d9624867deaf91084`
- **Key Location**: `https://www.emittiv.com/a4bd0f7dc314443d9624867deaf91084.txt`
- **Host**: `www.emittiv.com`

## How to Use

### Single URL Submission
```bash
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "www.emittiv.com",
    "key": "a4bd0f7dc314443d9624867deaf91084",
    "urlList": ["https://www.emittiv.com/PAGE_PATH"]
  }'
```

### Batch URL Submission
```bash
curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json" \
  -d '{
    "host": "www.emittiv.com",
    "key": "a4bd0f7dc314443d9624867deaf91084",
    "urlList": [
      "https://www.emittiv.com/",
      "https://www.emittiv.com/about",
      "https://www.emittiv.com/services",
      "https://www.emittiv.com/services/lighting",
      "https://www.emittiv.com/services/sound",
      "https://www.emittiv.com/services/scent",
      "https://www.emittiv.com/services/content",
      "https://www.emittiv.com/services/control",
      "https://www.emittiv.com/services/video",
      "https://www.emittiv.com/projects",
      "https://www.emittiv.com/projects/burj-al-arab",
      "https://www.emittiv.com/projects/expo-2020",
      "https://www.emittiv.com/projects/city-walk",
      "https://www.emittiv.com/projects/kapsarc",
      "https://www.emittiv.com/projects/jumeirah-beach-hotel",
      "https://www.emittiv.com/projects/dubai-mall-penguinarium",
      "https://www.emittiv.com/projects/al-imam-university",
      "https://www.emittiv.com/contact",
      "https://www.emittiv.com/downloads",
      "https://www.emittiv.com/about",
      "https://www.emittiv.com/privacy",
      "https://www.emittiv.com/terms"
    ]
  }'
```

## When to Use

Trigger IndexNow submission after:
1. **Content updates**: Pages with modified text/images
2. **New pages added**: Any new route added to the site
3. **Deployment**: After `git push github main` deploys to Cloudflare Pages
4. **Sitemap changes**: When sitemap.xml URLs change

## Response Codes

| Code | Meaning |
|------|---------|
| 200 | URLs submitted successfully |
| 202 | URLs accepted, will be processed |
| 400 | Bad request (check payload) |
| 403 | Key not valid for this host |
| 422 | Invalid URL format |
| 429 | Rate limited (too many requests) |

## Workflow Integration

After deployment:
1. Get list of changed files from git diff
2. Map changed files to public URLs
3. Submit changed URLs via IndexNow
4. Also submit via GSC index_inspect for Google specifically
5. Report submission status

## Supported Search Engines

IndexNow notifications are received by:
- **Bing** (primary)
- **Yandex**
- **Seznam**
- **Naver**

Note: Google does NOT support IndexNow. Use GSC `index_inspect` for Google separately.
