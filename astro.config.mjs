import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';
import tailwindcss from "@tailwindcss/vite";
import netlify from '@astrojs/netlify';


// https://astro.build/config
export default defineConfig({
  site: 'https://diegoignaciosoto.tech', // Cambia esto por tu dominio real
  
  vite:{
    plugins: [tailwindcss()]
  },

  integrations: [mdx(), sitemap()],
  adapter: netlify(),
  output: 'static'
});