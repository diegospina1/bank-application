/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    colors: {
      'blue-chill': {
        '50': '#f0fdfc',
        '100': '#cbfcf7',
        '200': '#98f7f1',
        '300': '#5cece8',
        '400': '#2bd6d6',
        '500': '#12b7ba',
        '600': '#0c969c',
        '700': '#0e7177',
        '800': '#105a5f',
        '900': '#124b4f',
        '950': '#042a2f',
      },
      'white': '#ffffff',
      'black': '#000000',
      'gray-light': '#E2E2E2',
      'gray': {
        '50': '#f9fafb',
        '100': '#f3f4f6',
        '200': '#e5e7eb',
        '300': '#d1d5db',
        '400': '#9ca3af',
        '500': '#6b7280',
        '600': '#4b5563',
        '700': '#374151',
        '800': '#1f2937',
        '900': '#111827',
        '950': '#030712',
      },
      'success': '#04AA6D',
    },
    fontFamily: {
      sans: ['Poppins', 'sans-serif']
    },

    extend: {
      translate: {
        'reverse-half': '-50%',
      }
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

