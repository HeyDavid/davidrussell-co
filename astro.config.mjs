import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidrussell.co',
  output: 'static',
  // noindexed pages stay out of the sitemap
  integrations: [sitemap({ filter: (page) => !/\/(lets-chat|performing)\/$/.test(page) })],
  build: {
    format: 'directory',
  },
});
