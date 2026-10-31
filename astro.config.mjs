import { defineConfig } from 'astro/config';

// Served from GitHub Pages at https://mohamedsabry91.github.io/website/.
// When the custom domain is added: set site to it and remove base (see DEPLOY.md).
export default defineConfig({
  site: 'https://mohamedsabry91.github.io',
  base: '/website',
});
