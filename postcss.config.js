module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer')
  ],

  theme: {
    extend: {
      colors: {
        'overlap-color': '#000000b3',
      },
    }
  }
};
