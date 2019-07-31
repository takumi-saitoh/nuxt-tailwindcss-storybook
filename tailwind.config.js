/*
TailwindCSS Configuration File
**
** Docs: https://tailwindcss.com/docs/configuration
** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
*/
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#FF7E00',
        secondary: '#FFC600',
        tertiary: 'F2BC00',
        dividor: '#F3F3F4',
        'gray-lighter': '#F0F4F6'
      },
      fontFamily: {
        display: ['Noto Sans JP', 'sans-serif']
      },
      borderColor: {
        default: '#DBDBDB'
      },
      textColor: {
        default: '#333333',
        supply: '#989898'
      },
      backgroundColor: {
        default: '#F0F4F6'
      }
    }
  },
  variants: {},
  plugins: []
}
