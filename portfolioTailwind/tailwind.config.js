/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: ["./*.html"],
  theme: {
    extend: {
      height:{
        "screen/2": "50vh",
        "screen/3": "calc(100vh / 3)",
        "screen/4": "calc(100vh / 4)",
        "screen/5": "calc(100vh / 5)",
      },
      screens:{
        "sm":"480px",
        "md":"768px",
        "lg":"1024px",
        "xl":"1280",
      },
      spacing:{
        "big":"42rem"
      }
    },
    fontFamily:{
      nunito:['Nunito', 'sans-serif']
    }
  },
  plugins: [],
}
