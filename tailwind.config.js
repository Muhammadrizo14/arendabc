/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      maxWidth: {
        'custom': '1243px',
      },
      colors: {
        'brand-primary': '#00B6F4',
        'brand-green': '#00C37E'
      }
    },
  },
  plugins: [],
}