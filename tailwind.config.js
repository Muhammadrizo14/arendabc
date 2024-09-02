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
      container: {
        screens: {
          // sm: '600px',
          // md: '728px',
          // lg: '984px',
          xl: '1235px',
          '2xl': '1235px',
        },
        center: true,
        padding: '1rem'
      },

      colors: {
        'brand-primary': '#00B6F4',
        'brand-green': '#00C37E',
        'brand-bright': '#f5f5f5',
        'brand-grey': '#4B4B4B',
        'brand-blue': '#00B6F4',
        'brand-dark': '#020202',
        'brand-input': '#EBEDF0'
      }
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}