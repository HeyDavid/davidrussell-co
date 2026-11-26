import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://davidrussell.co',
  output: 'static',
  redirects: { '/writing/marketing-is-splitting-in-half/': '/writing/' },
  // noindexed pages stay out of the sitemap
  integrations: [sitemap({ filter: (page) => !/\/(lets-chat|performing|writing\/marketing-is-splitting-in-half)\/$/.test(page) })],
  build: {
    format: 'directory',
  },
});
