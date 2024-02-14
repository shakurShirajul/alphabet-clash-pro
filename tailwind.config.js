/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['**/*.html'],
  darkMode: 'class',
  theme: {
    extend: {
      backgroundImage: {
        'hero': "url('images/background.png')",
      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    darkTheme: "light"
  },
}

