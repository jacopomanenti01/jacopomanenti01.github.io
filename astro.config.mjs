import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jacopomanenti01.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});