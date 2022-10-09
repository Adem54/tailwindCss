/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],//tum html file llarda kullanilsin diye yapiyoruz
  theme: {
    extend: {},
    colors: {
      'blue': '#1fb6ff',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': '#13ce66',
      'gray-dark': '#273444',
      'gray': '#8492a6',
      'gray-light': '#d3dce6',
    },
  },
  plugins: [],
}
/*
Eger customize yapmak istersek configimiz bunu yapabiliyoruz..
Ozel style vermek istersek bu sekilde yapabiliriz ve bu stilleri de su sekilde kullaniriz
bg-gray-light (arka plan icin)
Ayrica custome class da olustruabiliriz...
*/