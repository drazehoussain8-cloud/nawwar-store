# Publishing the site · نشر الموقع

The template is plain HTML/CSS/JS — no server, database or build step.

## Option A — Netlify (free, easiest)
1. Go to app.netlify.com → **Add new site → Deploy manually**.
2. Drag the **whole template folder** onto the page. You get a link like `https://your-store.netlify.app`.
3. Settings → **Domain management** to connect your own domain.

## Option B — GitHub Pages (free)
1. Create a repository and upload all files (keep the folder structure).
2. Settings → Pages → Branch: `main` / root → Save.

## Option C — cPanel / any shared hosting
1. Open File Manager → `public_html`.
2. Upload the folder contents (so `index.html` sits directly in `public_html`) or upload the .zip and extract it.

## After publishing (2 minutes)
- Put your real domain everywhere with ONE command (robots.txt, sitemap.xml, link-preview tags, canonical links):
  `python3 tools/set-domain.py https://my-shop.com`
  (no Python? open the folder in any editor and use Find & Replace: `https://your-domain.com` → your address).
- **Link preview** (the image + title shown when you send the link on WhatsApp / Facebook / Instagram / Telegram): it only works with the full address above and once the site is online. The image is `assets/images/og-image.jpg` (1200×630). After publishing, test at https://developers.facebook.com/tools/debug/ and press **Scrape Again** (apps remember the old preview for a while).
- Open the site on your phone, tap an order button, and confirm WhatsApp opens with **your** number.
- Share the link in your Facebook / Instagram bio and WhatsApp status.

## Notes
- The site works from any sub-folder, except `404.html` which expects the domain root.
- Fonts load from Google Fonts. To host them yourself, download Cairo, Poppins and Playfair Display (SIL OFL) and add `@font-face` rules to `assets/css/refinements.css`.
