module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {
      screens:{
        '3xl': '1770px',
      },
      maxWidth: {
        '8xl': '102rem'
      },
      fontFamily:{
        'main':"Josephin",
      },
      colors:{
        gray:{
          'DEFAULT':'#888787',
          'dark':'#1F1F1F'
        }
      }
    },
  },
  plugins: [],
}
