import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://davidrussell.co',
  output: 'static',
  build: {
    format: 'directory',
  },
});
