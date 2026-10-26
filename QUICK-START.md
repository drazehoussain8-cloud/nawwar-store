# Quick Start · البدء السريع

## 1. Preview · المعاينة
Double-click `index.html`. For the most accurate preview use a local server: `python3 -m http.server` then open http://localhost:8000.

## 2. Edit your store in 5 steps · عدّل متجرك في 5 خطوات
1. **`assets/js/config.js`** — store name, WhatsApp number (digits only, e.g. `212612345678`), phone, email, address, Facebook/Instagram links, offer date.
2. **`assets/js/products.js`** — your products (Arabic + English names, price, image file name, sizes).
3. **`assets/images/`** — replace the demo illustrations using the same file names and sizes (`docs/IMAGES.md`).
4. **`assets/css/variables.css`** — change the colors in one place.
5. **HTML text** — edit headings/paragraphs in `ar/*.html` and `en/*.html` (testimonials, numbers, FAQ, story).

## 3. Publish · النشر
Upload the folder to any static host. Step-by-step: `docs/DEPLOY.md`.

## 4. Before you go live · قبل النشر
- [ ] WhatsApp number tested (click an order button)
- [ ] Demo products/prices replaced
- [ ] Demo testimonials and numbers replaced with real ones (or removed)
- [ ] Address/phone/email replaced
- [ ] Photos replaced
- [ ] Real domain set with `python3 tools/set-domain.py https://my-shop.com` (fixes robots.txt, sitemap.xml and the link-preview image)
- [ ] Link preview tested (send the link to yourself on WhatsApp, or use the Facebook Sharing Debugger)
- [ ] Privacy & terms adapted (templates in `docs/`)
