module.exports = {
    content: [
      './public/**/*.html',
      './src/**/*.{astro,js,jsx,svelte,ts,tsx,vue}',
    ],
    theme: {
        extend: {
          colors: {
            'main': {
                'light':'#007859',
                'DEFAULT': '#4FB08D',
                'dark':'#8aebc5'
            },
            'grey': '#888787',
            'black':'#242324'
          },
          fontFamily:{
            'main': ['Comfortaa'],
          }
        }
      }
  };