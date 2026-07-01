# WDD 231 — W01 Course Home Page

## Before you submit, replace these placeholders:

**index.html**
- `<meta name="author">` — your real name
- `YOUR NAME` (appears 3 times: header span, welcome text, footer)
- `YOUR STATE OR COUNTRY` (2 places)
- `YOUR-GITHUB-USERNAME` in the GitHub link
- `YOUR-LINKEDIN` in the LinkedIn link
- `YOUR-CODEPEN` in the third social link (swap for whatever platform you actually use — Twitter/X, Dribbble, etc.)
- Add a real photo at `images/profile-placeholder.jpg` (rename + update the `src`), optimized under 125 KB
- `chamber/index.html` and `final/index.html` links are placeholders for week 2 and week 6 — fine to leave as-is for now, they'll 404 until those pages exist

**scripts/courses.js**
- Replace the `courses` array with your actual program's course list (copy from the course list array your instructor provided)
- Set `completed: true/false` accurately for each course you've finished

## What's already built and matches the rubric
- Mobile-first responsive layout, no horizontal scroll 320px–1200px+
- Hamburger nav on small screens, horizontal flex nav with underline hover on large screens (`larger.css` media query)
- `small.css` (mobile-first/base) + `larger.css` (media query) as required
- One Google Font (Space Grotesk) loaded via the Fonts API
- Dynamic copyright year + `document.lastModified` in the footer (`scripts/date.js`)
- Course cards rendered from a JS array, with a "Completed" stamp badge for finished courses
- All/WDD/CSE filter buttons using `Array.filter`
- Live credit total using `Array.reduce`, recalculated per filter
- Semantic HTML: header/nav/main/footer, h1 + three h2 sections
- Visible keyboard focus states and `prefers-reduced-motion` support

## Before you turn it in
1. Open with a local server (e.g. VS Code Live Server), not `file://`
2. Check DevTools console for errors
3. Run Lighthouse (mobile + desktop, incognito) — target 95+ on Accessibility, Best Practices, SEO
4. Double check no element touches the screen edge and nothing overflows at narrow widths
