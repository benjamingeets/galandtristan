module.exports = {
  content: ["./src/**/*.{html,astro,svelte,js}"],
  theme: {
    extend: {
      fontFamily: {
        'main': "Josephin",
      },

      colors: {
        loakgrey: {
          'DEFAULT': '#888787',
          'dark': '#1F1F1F'
        },
        background: {
          'DEFAULT': '#151515'
        },
        black: {
          'DEFAULT': '#313131'
        }
      }
    },
  },
  plugins: [],
}