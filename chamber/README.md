# WDD 231 — W02 Chamber Directory Page

## Where to drop this
Copy the `chamber` folder into your existing `wdd231` repo (alongside your `index.html` from week 1). Do not overwrite your week 1 files.

## Before you submit, handle these

**Images — required, not yet included**
You need 7 real image files (one per business) inside `chamber/images/`, matching the filenames in `chamber/data/members.json`:
- `adire-house.webp`, `lekki-logistics.webp`, `yaba-code.webp`, `eko-bank.webp`, `surulere-suya.webp`, `vi-realty.webp`, `ikeja-craft.webp`
- Any royalty-free stock photo works (Pexels/Unsplash) — just rename to match, and keep each under 125 KB
- Also add `og-directory.webp` (used in the Facebook meta tag) — a wide banner-style image representing the directory page

**Open Graph URL**
In `directory.html`, the `og:url` and `og:image` tags currently point to `https://naomioginni.github.io/wdd231/chamber/...` — confirm this matches your actual GitHub Pages URL once live.

**Nav links**
The nav includes a `join.html` link (for a future page in your site plan) — this will 404 until you build it in a later week, same as `chamber`/`final` did in week 1. Adjust nav items if your actual site plan lists different page names.

**Content — all placeholder/fictional**
Business names, addresses, and phone numbers in `members.json` are fictional but Lagos-themed. Replace with real or more specific fictional businesses if you prefer — just keep the same JSON structure (7+ entries, all required fields).

## What's already built and matches the rubric
- `chamber/directory.html` with full head: title, description, author, Open Graph tags, favicon
- `normalize.css` linked first, then `small.css` (mobile-first), then `larger.css` (media query) — same pattern as week 1
- Responsive hamburger nav (small) → horizontal flex nav (700px+), no horizontal scroll 320px and up
- Footer with contact info, name, "WDD 231", dynamic last-modified date, dynamic copyright year
- `data/members.json` with 8 businesses (name, address, phone, website, image, membership tier 1–3, category)
- `scripts/members.js` uses `fetch` + `async/await` to load JSON and render cards
- Grid/List view toggle buttons with `aria-pressed` state management
- Signature design element: membership tier badges styled as danfo-bus-style route plates (Gold/Silver/Member)

## Testing checklist
1. Run with Live Server (not `file://` — `fetch()` will fail to load local JSON without a server)
2. Check DevTools console for errors
3. Verify grid/list toggle works and updates `aria-pressed`
4. Run Lighthouse (mobile + desktop, incognito): target 95+ Accessibility, Best Practices, SEO
5. Test the Open Graph tags with Facebook's Sharing Debugger once live
