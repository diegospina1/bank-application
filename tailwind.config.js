/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'aqua-30': '#031716',
      'aqua-20': '#032f30',
      'aqua-10': '#0a7075',
      'aqua': '#0c969c',
      'cyan': '#6ba3be',
      'cyan-dark': '#274D60',
      'white': '#ffffff',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },
    extend: {},
  },
  plugins: [],
}

