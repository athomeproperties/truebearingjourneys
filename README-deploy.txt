TrueBearing Journeys site. Upload this folder (or the zip) to the Cloudflare Pages project "truebearingjourneys" via Create deployment.

--- Update: languages, gallery, links ---
Site now has /es/ (Spanish) and /fr/ (Canadian French) copies of every page, with an EN/ES/FR switcher.
A visitor's language choice is remembered (localStorage) and English URLs redirect to it; "EN" resets it.
Each destination page has a photo gallery (Unsplash, hotlinked, photographer credited) and "Visit website" links on things to do.
Edit gallery photos / links in tb_build/gallery.py and rerun build2.py (or edit HTML directly).

--- Ads prep ---
/privacy.html, /es/privacy.html, /fr/privacy.html (linked in every footer; have a lawyer skim it).
/lp/<destination>.html = 9 English ad landing pages (noindex, not in sitemap). Point each ad group at its page.
To add Google Ads tracking: set GTAG = "AW-xxxxxxxxx" at the top of tb_build/build2.py and rebuild; the thank-you page is the conversion event.
