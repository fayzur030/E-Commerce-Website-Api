/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#6EAF7D',
        accent: '#F29C50',
        cream: '#FFF9F1',
        dark: '#333333',
        soft: '#DEC1B3',
        olive: '#5D9C6B',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: ['light', 'dark', 'cupcake', 'synthwave'],
    darkTheme: 'dark',
  },
}
