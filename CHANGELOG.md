# Changelog

## 1.2.0 — 2026-10-25
**Fixed**
- Link preview (image, title, description) did not appear when sharing the link. Cause: the preview image used a relative path, but WhatsApp/Facebook/Instagram need a full https address.
**Added**
- Full link-preview tags on every page, including the root `index.html` (the first link you share): `og:url`, `og:image` (+ size, type, alt), `og:locale`, `twitter:card`, canonical links and absolute hreflang.
- `tools/set-domain.py`: one command puts your real domain in every file.

## 1.1.0 — 2026-10-23
**Fixed**
- Mobile menu was cut off (only the top of the drawer showed). Cause: the blurred header became the container of the fixed menu. The blur now lives on a pseudo-element, and the menu is positioned from the real header height.
- Shop page: category chips (All … Wishlist) scrolled sideways and some were hidden on phones. They now wrap, so every category is always visible.
- Header no longer overflows on very small phones (320 px) or on tablets (the header button appears only when there is room).
- No sideways scrolling at any width from 320 px to 1536 px (checked on all pages in both languages).
- Product page now has a single main heading (better accessibility/SEO) and a readable title before the product loads.
- Wishlist view: friendly empty message, and removing an item updates the list immediately.
- Bigger tap targets for header, footer, breadcrumb and contact links on phones.
**Added**
- 26 original illustrations replacing the grey placeholders (products, categories, hero, offer, about, social, avatars, share image).
- `404.html`, `robots.txt`, `sitemap.xml`, `site.webmanifest`, app icons.
- `docs/DEPLOY.md`, `docs/CLIENT-CHECKLIST.md`, `docs/LISTING-COPY.md`.
- Updated image guide, README, quick start and license.

## 1.0.0 — 2026-10-23
- First release: 5 pages × 2 languages, 10 animated home sections, shop, product, about, contact, WhatsApp ordering.
