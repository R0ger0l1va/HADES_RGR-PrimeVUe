/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef


const primeUi = import("tailwindcss-primeui")

export default {
  content: ['./index.html','./src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [primeUi],
}

