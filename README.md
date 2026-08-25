# GoTaxi Express — landing site (gotaxiexpress.uz)

Static trilingual (uz/ru/en) landing site for the GoTaxi Express taxi service.
No build step — plain HTML/CSS/JS, served by Apache on cPanel shared hosting.

## Pages
- `index.html` — landing page (hero, features, how it works, drivers CTA, contact)
- `privacy.html` — privacy policy (required by Play Store / App Store)
- `terms.html` — terms of service
- `support.html` — support/contact + FAQ (App Store requires a support URL)
- `delete-account.html` — account deletion instructions (Play Data Safety URL)
- `styles.css`, `app.js` (language switcher), `favicon.svg`
- `robots.txt`, `sitemap.xml`, `.htaccess` (HTTPS redirect + pretty URLs)

Language switching: buttons set `data-lang` on `<html>`; CSS shows only the
active language's `.l-uz` / `.l-ru` / `.l-en` blocks. Choice persists in
localStorage; `?lang=ru` etc. also works. Default is Uzbek.

## Company details (filled 2026-08-25)
- Legal name: «GO TAXI EXPRESS» MChJ / ООО «GO TAXI EXPRESS» / "GO TAXI EXPRESS" LLC
- Address: 28 Moturidiy Street, Apartment 17, Fergana 150100, Uzbekistan
  (Farg'ona sh., Moturidiy ko'chasi, 28-uy, 17-xonadon, 150100)
- Registered: 02 December 2021

## PLACEHOLDERS still to replace
(INN intentionally omitted; phone filled: +998 (99) 220-11-77.)
5. **Email** — currently `info@gotaxiexpress.uz`; confirm this mailbox exists
6. **Telegram** — `@gotaxiexpress` link on support page
7. **Store links** — `href="#"` on the two hero badges in `index.html`; also remove
   the "SOON / TEZ KUNDA / СКОРО" pills when the app is live
8. **Legal dates** — "Last updated" dates on privacy/terms if the text changes

## Deploy (cPanel, testone.uz shared server)
Document root: `/home/tesoneuz/gotaxiexpress.uz`

First time, in the cPanel Terminal:

    cd ~/gotaxiexpress.uz
    git init
    git remote add origin https://github.com/jaloliddin99/gotaxiexpress-site.git
    git fetch origin
    git reset --hard origin/main

Updates afterwards:

    cd ~/gotaxiexpress.uz && git pull

DNS: A records for `@` and `www` → 37.153.159.11 (ahost panel).
SSL: cPanel AutoSSL issues the certificate automatically after DNS propagates.
