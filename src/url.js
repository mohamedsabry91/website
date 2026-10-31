// Prefix an internal path with the site base ('/website' on GitHub Pages, '' on a custom domain).
// u('/ar/') -> '/website/ar/'. Anchors (#...), mailto: and full URLs pass through unchanged.
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

export function u(path = '/') {
  if (!path.startsWith('/')) return path;
  return `${BASE}${path}`;
}
