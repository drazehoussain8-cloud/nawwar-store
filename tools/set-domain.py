#!/usr/bin/env python3
"""
set-domain.py — put your REAL website address into the template.

Why: link previews (the image + title shown when you send the link on WhatsApp,
Facebook, Instagram, Telegram...) only work with a full address such as
https://my-shop.com/assets/images/og-image.jpg

Usage (from the template folder):
    python3 tools/set-domain.py https://my-shop.com
    python3 tools/set-domain.py https://my-shop.com --old https://your-domain.com   (optional)

It replaces the old address in every .html, .xml, .txt, .webmanifest and .md file.
Run it again later with --old if you change domain. Make a backup copy first if unsure.
"""
import os, sys

args = sys.argv[1:]
if not args or args[0].startswith("-"):
    sys.exit(__doc__)
new = args[0].rstrip("/")
old = "https://your-domain.com"
if "--old" in args:
    old = args[args.index("--old") + 1].rstrip("/")
if not new.startswith(("http://", "https://")):
    sys.exit("Error: the address must start with https://  (example: https://my-shop.com)")

root = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
exts = (".html", ".xml", ".txt", ".webmanifest", ".md")
changed = 0
for folder, dirs, files in os.walk(root):
    dirs[:] = [d for d in dirs if d not in (".git", "node_modules")]
    for name in files:
        if not name.endswith(exts):
            continue
        path = os.path.join(folder, name)
        try:
            text = open(path, encoding="utf-8").read()
        except UnicodeDecodeError:
            continue
        if old in text:
            open(path, "w", encoding="utf-8").write(text.replace(old, new))
            changed += 1
print(f"Done: {old}  ->  {new}   ({changed} files updated)")
print("Next: upload the files, then test the link at https://developers.facebook.com/tools/debug/ and press 'Scrape Again'.")
