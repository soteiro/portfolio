/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
  theme: {
    extend: {
      // Aquí puedes extender tu tema si lo necesitas
      colors: {
        'primary': '#111827', // Ejemplo
        'secondary': '#38bdf8', // Ejemplo
      }
    },
  },
  plugins: [],
}