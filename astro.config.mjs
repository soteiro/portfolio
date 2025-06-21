import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import netlify from "@astrojs/netlify";
import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  site: 'https://portfolio4432.netlify.app',
  integrations: [
    sitemap({
      changefreq: 'monthly',
      priority: 0.8,
      lastmod: new Date(),
    })
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  adapter: netlify(),
  
  // Optimizaciones de SEO y rendimiento
  compressHTML: true,
  build: {
    inlineStylesheets: 'auto',
  },
});