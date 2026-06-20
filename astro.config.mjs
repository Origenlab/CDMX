import { defineConfig } from 'astro/config';

// Lift-and-shift de sitio estático a Astro 6 (Directorio CDMX — cdmx.site).
// Salida a dist/ (la que Cloudflare Pages despliega). URLs limpias folder/.
export default defineConfig({
  site: 'https://cdmx.site',
  build: { format: 'directory' },
});
