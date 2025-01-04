/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow': '0 4px 6px -1px rgba(10, 25, 47, 1)',
      },
      colors:{
        "primary":"#0A192F",
        "secondary":"#F97316",
        "tertiary":"#54D688"
      }
    },
    screens: {
      'lg': {'max': '1023px'},

      'sm': {'max': '1000px'},
      
    }
  },
  plugins: [],
}