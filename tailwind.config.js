/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: '#ed6500',
        secondary: '#4e3338',
        terceary: '#1c1b1b',
        surface: '#ffffff'
      },
      fontFamily: {
        gobernador: ['Gobernadorv1', 'serif'],
        poppins: ['Poppins', 'sans-serif'],
        butler: ['Butler', 'serif']
      },
      backgroundImage: {
        'hero-pattern': "linear-gradient(90deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), linear-gradient(90deg, rgba(78, 51, 56, 0.4) 0%, rgba(78, 51, 56, 0.4) 100%)"
      }
    },
  },
  plugins: [],
}
