# Enliva Tecnologías — website

Static site for **ENLIVA TECNOLOGÍAS, S.L.U.** · Málaga, Spain.

**Live:** <https://denizakdemir.github.io/enliva-site/> · repository:
<https://github.com/denizakdemir/enliva-site>

**Short link:** <https://denizakdemir.github.io/enliva> redirects here. That is a
one-file stub (`enliva/index.html`) living in the *personal* blog repo
`denizakdemir/denizakdemir.github.io`, not in this one — if the site ever moves,
update the redirect there too.
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

## Publishing on GitHub Pages — step by step

The repository is already initialised and committed on branch `main`. Only the
push and the Pages switch remain.

### Step 1 — create the empty repository on GitHub

1. Open <https://github.com/new> in your browser (signed in as `denizakdemir`,
   or as whichever account should own the site).
2. **Repository name:** `enliva-site`
3. **Visibility:** Public — Pages on a private repo needs a paid plan.
4. **Do not** tick *Add a README*, *Add .gitignore* or *Choose a license*.
   The repo must start empty or the first push is rejected.
5. Click **Create repository**. GitHub then shows a page titled
   *"…or push an existing repository from the command line"*.

### Step 2 — push this folder

Copy the two lines GitHub shows you (they already contain the right URL), or run:

```bash
cd ~/Dropbox/MasterFolder/BUSINESS/ENLIVA2025/website
git remote add origin https://github.com/denizakdemir/enliva-site.git
git push -u origin main
```

If Git asks for a password, it wants a **personal access token**, not your
GitHub password: *Settings → Developer settings → Personal access tokens →
Tokens (classic) → Generate new token*, scope `repo`, then paste the token as
the password. (Or use `gh auth login` if you install the GitHub CLI.)

Expected result: `Branch 'main' set up to track remote branch 'main'` and no
errors. Refresh the GitHub repo page — the nine files should be listed.

### Step 3 — switch Pages on

1. In the repository: **Settings** (top bar) → **Pages** (left sidebar).
2. **Source:** *Deploy from a branch*.
3. **Branch:** `main`, **folder:** `/ (root)` → **Save**.
4. Wait 30–90 seconds, then reload the Pages settings. A banner appears:
   *"Your site is live at https://denizakdemir.github.io/enliva-site/"*.
5. Open that URL. You should see the English homepage; click **ES** and it
   switches to Spanish. `…/legal.html` and any wrong URL (the 404 page) should
   also work.

Every future `git push` to `main` republishes automatically in under a minute.

> **Why not a GitHub Actions workflow?** Tried it: a workflow using
> `actions/configure-pages` with `enablement: true` fails with *"Create Pages
> site failed. Error: Resource not accessible by integration"* — GitHub does not
> let the workflow token create a Pages site, so the first enable must be done by
> a human in the settings. After a manual first enable, either mode works; the
> branch deploy above is simpler and has no Node runtime to deprecate.

### Step 4 (optional, ~€10–15/year) — own domain

`enliva.com`, `enliva.net` and `enliva.es` are already registered by other
companies, so they are not available. Checked and apparently free at the time of
writing: **`enliva.dev`**, **`enliva.io`**, **`enlivatecnologias.com`**,
**`enlivatecnologias.es`** — confirm at the registrar before paying, and prefer a
`.es`/`.com` if one of those clears.

1. Buy the domain (any registrar: Namecheap, Cloudflare, Gandi, Dinahosting,
   Arsys…). Cloudflare Registrar sells at cost and gives free DNS + HTTPS.
2. Add a file named `CNAME` (no extension) at the repository root containing only
   the bare domain, e.g. `enliva.dev`, and commit + push it.
3. At the registrar's DNS panel, point the domain at GitHub Pages:
   - apex/root (`enliva.dev`): four `A` records →
     `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - optional IPv6: `AAAA` → `2606:50c0:8000::153`, `2606:50c0:8001::153`,
     `2606:50c0:8002::153`, `2606:50c0:8003::153`
   - `www` → `CNAME` → `denizakdemir.github.io`
4. Back in **Settings → Pages → Custom domain**, enter the same domain and
   **Save**; wait for the DNS check to go green, then tick **Enforce HTTPS**.
5. Note the IPs above can change — GitHub prints the current values in the Pages
   settings under *"Learn more about configuring custom domains"*.

### Step 5 (optional) — a company email that matches the domain

Most registrars forward mail for free: create `hola@enliva.dev` (and
`deniz@enliva.dev`) forwarding to your Gmail, then replace
`deniz.akdemir.work@gmail.com` in `assets/js/main.js` (`EMAIL`), `index.html`
and `legal.html`. That is the single biggest step towards separating the company
from your personal identity.

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
      Replace with a company address once the domain is bought (Step 5) — in
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

## Keeping the company separate from the personal profile

The site is written to stand on the Enliva name, not on Deniz's personal
accounts. Current state:

| Item | Where it points | Separate? |
|---|---|---|
| Contact email | `deniz.akdemir.work@gmail.com` | No — swap for a company address (Step 5) |
| LinkedIn | `/in/deniz-akdemir-phd` (personal profile, confirmed 2026-11-17) | Partly — swap to a *company* page when one exists; a comment in `index.html` marks where |
| GitHub (footer + open-source card) | `github.com/denizakdemir` | Acceptable — it is the code, not the personal profile |
| Phone | personal mobile `+34 674 771 859` | No — consider a virtual number before scaling up |
| Founder section | names Deniz as founder | Yes — normal for a small consultancy |

To link a company LinkedIn page later: create the page at
<https://www.linkedin.com/company/setup/new/>, then add it as a second row in the
contact card (a comment in `index.html` marks the spot) — the personal profile
can then move down to the founder section.

> **LinkedIn status (2026-11-17).** Deniz confirmed his profile is
> `linkedin.com/in/deniz-akdemir-phd-50735314a`; the old
> `linkedin.com/in/deniz-akdemir--` slug recorded in
> `LifeOS/profile/profile.md` did not resolve and has been corrected there. The
> confirmed profile is linked from the contact card and as `sameAs` on the
> founder in the structured data. Next step for full separation: create the
> Enliva company page and promote it to the contact card, keeping the personal
> profile in the founder section only.

## Local preview

```bash
cd website
python3 -m http.server 8000
# open http://localhost:8000
```

Opening `index.html` directly with `file://` also works, except that the
language toggle cannot use `localStorage` on some browsers.
