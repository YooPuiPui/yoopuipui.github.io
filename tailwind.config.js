/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        brandBlue: {
          100: '#B7D3E3',
          200: '#A4C8E1',
          300: '#8FB8D8',
          400: '#6FA3D8',
          500: '#4A8BBE',
        },
      },
    },
  },
  plugins: [],
}

