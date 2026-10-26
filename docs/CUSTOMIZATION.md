# Customization Guide

## Change the store name
Edit `name` in `assets/js/config.js`. Also search & replace "Nawwar" / "نوّار" in the HTML files (page titles, meta tags) and in `assets/images/logo.svg` if you want a new logo.

## Change colors
`assets/css/variables.css` → `--c-primary` (main), `--c-accent` (buttons/highlights), `--c-terra` (sale badges), `--c-bg` (page background). Everything updates automatically.

## Add / edit a product
Open `assets/js/products.js`, copy one product block, change `id` (unique number), names, descriptions, `price`, `old` (0 = no discount), `image`, `sizes` (`[]` = none), `featured: true` to show it on the home page. Put the photo in `assets/images/`.

## Add a category
Add an item to `CATEGORIES` in `products.js` (and a `cat-xxx.jpg` image), then use its `id` in the product's `cat`. For the home-page category grid and footer, copy a category block in `ar/index.html` / `en/index.html` and the footer list.

## WhatsApp
`whatsapp` in `config.js`: international format, digits only (Morocco: `2126…`, drop the first 0). Message wording is in `messages`.

## Offer countdown
`offerAnchor` + `offerCycleDays` in `config.js`. After the date passes it restarts automatically. Edit the offer text/code in the "Special offer" section of the home pages (default code word: WELCOME20 — honor it or change it).

## Things you MUST replace (demo content)
- Phone, email, address, hours → `config.js` (+ default text in HTML)
- Products, prices, ratings, review counts → `products.js`
- Testimonials (names, cities, texts) and the "2,500+ customers / 98%" numbers → home & about pages
- "Our story" timeline years/text → about page
- FAQ answers (delivery time, return period 7 days) → home page
- Facebook/Instagram links → `config.js`
- Photos and avatars → `assets/images/`
Never publish invented reviews or numbers as if they were real.

## Deploying
See `docs/DEPLOY.md`. Run `python3 tools/set-domain.py https://my-shop.com` (it updates `robots.txt`, `sitemap.xml` and the link-preview tags).

## Add a language
Copy the `en/` folder, translate the text, add `data` for the new language in `config.js`, `products.js` and the `UI` object in `main.js`.

## Content policy tip
The demo content is family-friendly and halal-only. Keep your own products and images in line with the values of your audience.

## Languages & direction
Arabic pages use `dir="rtl"` plus `assets/css/rtl.css`. Layout uses logical CSS properties, so spacing flips automatically.

## Hosting
Any static host works. After changing domain, run `python3 tools/set-domain.py https://new-address.com --old https://old-address.com`. To change the link-preview picture, replace `assets/images/og-image.jpg` (1200×630 px, under 1 MB).
