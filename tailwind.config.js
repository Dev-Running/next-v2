/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#ff512f',
        dark: '#111111',
        dark0: '#0c0c0c',
        dark1: '#131313',
        dark2: '#171717',
        dark3: '#212121',
        darkLogo: '#18181b',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
        roboto: ['Roboto', 'sans-serif'],
        poppins: ['Poppins', 'sans-serif'],
        pacifico: ['Pacifico', 'cursive'],
      },
      backgroundImage: {
        startGradient:
          'linear-gradient(180deg, #000 11.28%, #18001B 44.55%, #000 100%)',
      },
    },
  },
  plugins: [],
}
