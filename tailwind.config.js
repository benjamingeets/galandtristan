module.exports = {
  content: ["./src/**/*.{html,js,astro}"],
  theme: {
    extend: {

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
