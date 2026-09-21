// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  devToolbar: {
    enabled: false,
  },
  prefetch: true,
  site: 'https://pebble-showcase.github.io',
  integrations: [sitemap()],
  experimental: {
    svg: true,
  },
});