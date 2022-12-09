/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: '#F17C11',
        dark: '#111111',
        dark2: '#131313',
        dark3: '#171717',
        dark4: '#212121',
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
          'linear-gradient(180deg, #090909 11.28%, #18001Baa 44.55%, #090909 100%)',
      },
    },
  },
  plugins: [],
}
