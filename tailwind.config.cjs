const config = {
  mode: "jit",
  purge: ["./src/**/*.{html,js,svelte,ts}"],

  theme: {
    extend: {
      colors:{
        orange:'#EB5C27',
        yellow:'#F39221',
        black:'#191D26',
        tropcial:'#EC4B1E',
        leaf:'#567435'
      },
      fontFamily:{
        'barlow':['"Barlow-Regular"']
      }
    }
  },

  plugins: []
};

module.exports = config;