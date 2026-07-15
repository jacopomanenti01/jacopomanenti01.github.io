import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

import icon from 'astro-icon';

export default defineConfig({
  site: 'https://jacopomanenti01.github.io',

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [icon()]
});