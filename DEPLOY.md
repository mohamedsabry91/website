# Deploy checklist (Cloudflare Pages)

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
npm run build        # must end with "Complete!" and 4 pages
npm run preview      # open http://localhost:4321 and click through EN, AR and the case study
```

## 2. Put the code in git (only when Mohamed says go)
Not done yet: the folder is not a git repo. Plan:
```
git init -b main
git add .
git commit -m "Personal website: EN + AR, Riyadh IDF case study"
```
`.gitignore` already excludes `node_modules/`, `dist/` and `.astro/`.
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
1. In `astro.config.mjs`, set `site: 'https://<your-domain>'` (canonical and hreflang links use it).
2. Commit and push. Cloudflare rebuilds on every push to `main`.
3. Check the live site on desktop and phone, then add the URL to the LinkedIn profile (Contact info → Website).
