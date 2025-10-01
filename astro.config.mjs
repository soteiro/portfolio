import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  vite:{
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],
  adapter: netlify(),
  output: 'server'
});