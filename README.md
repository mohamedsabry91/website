# Personal website (EN + AR)

Static Astro site: English at `/`, Arabic (RTL) at `/ar/`.
Live on GitHub Pages at https://mohamedsabry91.github.io/website/ (base path `/website`).

## Edit content
All text is in `src/i18n.js` (one block per language). Items in `[BRACKETS]` still need real content:
- `CONTACT_EMAIL`, `LINKEDIN_URL`, `GITHUB_URL` at the top of `src/i18n.js`
- project images and demo results in `work`
- the domain in `astro.config.mjs` (`site`; remove `base` at the same time)

Rule: public or self-made data only. Never employer or client data.

## Run locally
```
npm install
npm run dev      # http://localhost:4321/website/
npm run build    # output in dist/
```

## Internal links
Always wrap internal paths with `u()` from `src/url.js` (e.g. `u('/ar/')`), so they work under the `/website` base.

## Deploy
GitHub Pages via `.github/workflows/deploy.yml` on every push to `main`. One-time: Settings → Pages → Source: GitHub Actions.
Full checklist, including the later move to a custom domain: `DEPLOY.md`.
