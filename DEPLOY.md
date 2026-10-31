# Deploy checklist

## Now: GitHub Pages (no domain needed)
The site builds and deploys itself from `.github/workflows/deploy.yml` (official `withastro/action` + `actions/deploy-pages`, Node 20) on every push to `main`.

Live address: https://mohamedsabry91.github.io/website/

One-time setup (Mohamed, on GitHub):
1. Repo **Settings → Pages → Build and deployment → Source: GitHub Actions**.
2. Merge the PR to `main` (or run the workflow by hand: **Actions → Deploy to GitHub Pages → Run workflow**).
3. Open the link above and click through EN, AR and both case studies.

Because the site lives in the `/website/` sub-folder, `astro.config.mjs` sets `site: 'https://mohamedsabry91.github.io'` and `base: '/website'`. Every internal link, image and the language switcher go through `u()` in `src/url.js`, which adds the base. Write new internal links as `u('/path/')`, never as a bare `/path/`.

**When the custom domain is added later: remove `base` from `astro.config.mjs` and set `site` to the domain.** Nothing else needs to change; `u()` then adds nothing. On GitHub Pages, add the domain under Settings → Pages → Custom domain. Or move to Cloudflare Pages (below).

---

## Later option: Cloudflare Pages + custom domain

Use this once the domain and accounts exist. Mohamed creates the accounts, buys the domain and signs in himself.

## 0. Before you start (Mohamed)
- [ ] Domain bought (any registrar, or Cloudflare Registrar)
- [ ] GitHub account created
- [ ] Cloudflare account created (free plan is enough)
- [ ] Email to show on the site chosen → `CONTACT_EMAIL` in `src/i18n.js`
- [ ] GitHub profile URL → `GITHUB_URL` in `src/i18n.js`

## 1. Local check
```
npm install
npm run build        # must end with "Complete!" and 6 pages
npm run preview      # open http://localhost:4321/website/ and click through EN, AR and both case studies
```

## 2. Put the code on GitHub (only when Mohamed says go)
Done locally on 29 Oct 2026: the folder is a git repo on `main` with a first commit.
`.gitignore` excludes `node_modules/`, `dist/` and `.astro/`.
Before a **public** repo, decide whether `CLAUDE.md` (internal working notes) should stay in it.
Then on GitHub: **New repository** (e.g. `msabry-site`, public or private, no README), and:
```
git remote add origin https://github.com/<github-user>/msabry-site.git
git push -u origin main
```
GitHub asks Mohamed to sign in in his browser. Claude never enters the password or token.

## 3. Connect Cloudflare Pages
1. Cloudflare dashboard → **Workers & Pages** → **Create** → **Pages** → **Connect to Git**.
2. Authorise GitHub (Mohamed) and pick the repo.
3. Build settings:
   - Framework preset: **Astro**
   - Build command: `npm run build`
   - Build output directory: `dist`
   - Environment variable (optional): `NODE_VERSION` = `20`
4. **Save and Deploy**. Check the `*.pages.dev` link: EN `/`, AR `/ar/`, case study `/case-studies/riyadh-idf/`.

## 4. Custom domain
1. Pages project → **Custom domains** → **Set up a custom domain** → enter the domain (and `www.` if wanted).
2. If the domain is on Cloudflare DNS, records are added automatically. If not, add the CNAME the dashboard shows at the registrar.
3. Wait for the certificate (usually minutes).

## 5. Point the site at the real domain
1. In `astro.config.mjs`, remove `base` and set `site: 'https://<your-domain>'` (canonical and hreflang links use it).
2. Commit and push. Cloudflare rebuilds on every push to `main`.
3. Check the live site on desktop and phone, then add the URL to the LinkedIn profile (Contact info → Website).
