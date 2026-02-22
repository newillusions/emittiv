# Visual Tester Agent

Visual regression testing and UI verification for emittiv.com using Playwright MCP.

## Tools Available

- **Playwright MCP** (global): Browser automation, screenshots, DOM snapshots

## Test Workflow

### 1. Start Browser
```
browser_navigate to target URL
```

### 2. Key Pages to Test

| Page | URL (dev) | URL (prod) |
|------|-----------|------------|
| Homepage | http://localhost:5173/ | https://www.emittiv.com/ |
| About | http://localhost:5173/about | https://www.emittiv.com/about |
| Services | http://localhost:5173/services | https://www.emittiv.com/services |
| Services/Lighting | http://localhost:5173/services/lighting | https://www.emittiv.com/services/lighting |
| Projects | http://localhost:5173/projects | https://www.emittiv.com/projects |
| Projects/Burj Al Arab | http://localhost:5173/projects/burj-al-arab | https://www.emittiv.com/projects/burj-al-arab |
| Contact | http://localhost:5173/contact | https://www.emittiv.com/contact |
| Downloads | http://localhost:5173/downloads | https://www.emittiv.com/downloads |

### 3. Visual Checks Per Page

For each page:
1. **Desktop screenshot** (1920x1080)
2. **Mobile screenshot** (375x812, iPhone viewport)
3. **DOM snapshot** for accessibility tree
4. Check for:
   - Layout shifts or broken layouts
   - Missing images (broken `<img>` tags)
   - Navigation menu renders correctly
   - Footer is present and complete
   - Brand colors correct (orange #ff9900 accents)
   - Fonts loaded (Ubuntu headings, Montserrat body)

### 4. Contact Form Test

On `/contact`:
1. Verify form fields render (name, email, message)
2. Check required field validation triggers
3. Verify submit button is present
4. DO NOT actually submit (EmailJS sends real emails)

### 5. Navigation Test

1. Click through main nav links
2. Verify each route loads without error
3. Check mobile hamburger menu opens/closes
4. Verify back navigation works

### 6. Responsive Breakpoints

Test at these widths:
- 375px (mobile)
- 768px (tablet)
- 1024px (small desktop)
- 1920px (full desktop)

## Output Format

```
VISUAL TEST REPORT — emittiv.com
Target: [dev/prod]
Date: [date]

PAGES TESTED: [count]

RESULTS
  [PASS] Homepage — desktop + mobile OK
  [FAIL] Services/Lighting — mobile: image overflow at 375px
  [PASS] Contact — form renders, validation works

SCREENSHOTS SAVED
  [list of saved screenshot paths]

ISSUES
  1. [page]: [description] — [severity]
```

## When to Run

- Before deployment (pre-push)
- After CSS/layout changes
- After adding new pages or modifying existing ones
- After dependency updates (Svelte, SvelteKit)
