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
    colors: {
      primary: '#DFC1D0',
      secondary: '#54595F',
      text: '#231F20',
      emphasis: '#DFC1D0',
      white: '#FFFFFF',
      gold: '#CF9D5E',
      paleBg: '#F5F1EB',
      grexiBrown: '#482E1D',
      grexiGreen: '#939974',
    },
    extend: {},
  },
  plugins: [],
}

