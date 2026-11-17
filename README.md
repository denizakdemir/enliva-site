# Enliva Tecnologías — website

Static site for **ENLIVA TECNOLOGÍAS, S.L.U.** · Málaga, Spain.
Plain HTML, CSS and JavaScript — no build step, no dependencies, no cookies, no tracking.

```
website/
├── index.html              # single-page site (bilingual EN/ES)
├── legal.html              # aviso legal + política de privacidad (ES, with EN summary)
├── 404.html                # self-contained error page
├── robots.txt
├── .nojekyll               # stops GitHub Pages running Jekyll on the files
└── assets/
    ├── css/styles.css      # all styles; theme tokens at the top of the file
    ├── js/main.js          # EN/ES dictionary, nav, scroll effects
    └── img/favicon.svg
```

## Publishing on GitHub Pages

1. Create an empty repository on GitHub, e.g. `enliva-site` (public, no README).
2. From this folder:

   ```bash
   git init -b main
   git add .
   git commit -m "Enliva website"
   git remote add origin https://github.com/<your-username>/enliva-site.git
   git push -u origin main
   ```

3. In the repository: **Settings → Pages → Build and deployment**
   - Source: *Deploy from a branch*
   - Branch: `main`, folder: `/ (root)`
   - Save. The site appears at `https://<your-username>.github.io/enliva-site/` within a minute or two.

4. Optional custom domain (e.g. `enliva.es`): add a file named `CNAME` at the
   repository root containing just the bare domain (`enliva.es`), then set the
   DNS records GitHub shows under **Settings → Pages → Custom domain**
   (`A` records for the apex, `CNAME` for `www`). Tick *Enforce HTTPS* once the
   certificate is issued.

### If you host it as a project site (`username.github.io/enliva-site/`)

Everything works as-is except the two `href="/"` links in [`404.html`](404.html),
which point at the domain root. Change them to `/enliva-site/`, or ignore it if
you use a custom domain. Internal links on `index.html` and `legal.html` are
relative and need no changes.

## Editing content

| What | Where |
|---|---|
| English and Spanish copy | the `I18N` dictionary at the top of `assets/js/main.js` |
| Page title and meta description per language | `I18N.<lang>.meta` in the same file |
| Static HTML (only used before JS runs, and by search engines) | `index.html` — the English text is inlined in the markup |
| Contact email | `EMAIL` constant in `assets/js/main.js`, plus the `mailto:` links in `index.html` and `legal.html` |
| Colours, spacing, radii, fonts | `:root` custom properties at the top of `assets/css/styles.css` |
| Sections and ordering | `index.html`; each `<section>` is independent |

Every translatable element carries a `data-i18n="key"` attribute; the key must
exist in **both** language objects in `main.js`. The language toggle is remembered
in `localStorage` and defaults to Spanish for `es-*` browsers.

No Google Fonts or other third-party requests are made — the site uses the system
font stack, which keeps it fast and avoids sending visitor IPs to a third party.

## Before going live — checklist

- [ ] **Contact email.** The site currently uses `deniz.akdemir.work@gmail.com`.
      If a company address exists (e.g. `info@enliva.es`), replace it in
      `assets/js/main.js` (`EMAIL`), `index.html` and `legal.html`.
- [ ] **Company register data.** Spanish law (art. 10 LSSI-CE) asks for the
      *Registro Mercantil* details — tomo, folio and hoja — in the legal notice.
      They are intentionally left out rather than guessed; add them under
      section 1 of [`legal.html`](legal.html) (there is a TODO comment marking
      the spot) once you have the *escritura de constitución* to hand.
- [ ] **Telephone.** `+34 674 771 859` is published in the contact block and in
      the JSON-LD block of `index.html`. Remove it if you prefer email only.
- [ ] **Employer wording.** The About section deliberately describes clinical
      prediction work without naming the current employer. Keep it that way
      unless you are comfortable publishing it.
- [ ] **Open-source links.** `github.com/denizakdemir/{causaldef,lecam,trainselpy}`
      — confirm the repositories are public before publishing.

## Local preview

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly with `file://` also works, except that the
language toggle cannot use `localStorage` on some browsers.
