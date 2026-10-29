# Personal website (EN + AR)

Static Astro site: English at `/`, Arabic (RTL) at `/ar/`.

## Edit content
All text is in `src/i18n.js` (one block per language). Items in `[BRACKETS]` still need real content:
- `CONTACT_EMAIL`, `LINKEDIN_URL`, `GITHUB_URL` at the top of `src/i18n.js`
- project images and demo results in `work`
- the domain in `astro.config.mjs` (`site`)

Rule: public or self-made data only. Never employer or client data.

## Run locally
```
npm install
npm run dev      # http://localhost:4321
npm run build    # output in dist/
```

## Deploy (Cloudflare Pages)
1. Push this folder to a GitHub repo.
2. Cloudflare dashboard → Workers & Pages → Create → Pages → Connect to Git → pick the repo.
3. Framework preset: Astro · Build command: `npm run build` · Output directory: `dist`.
4. Custom domains → add your domain.
5. Update `site` in `astro.config.mjs` to the real domain and push again.
