/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ffb703',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        startGradient:
          'linear-gradient(180deg, #000000 11.28%, #18001B 44.55%, rgba(0, 0, 0, 0.31) 100%)',
      },
    },
  },
  plugins: [],
}
