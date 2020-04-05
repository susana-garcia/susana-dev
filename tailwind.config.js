const { colors } = require('tailwindcss/defaultTheme')

module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
    },
    extend: {
      maxWidth: {
        screen: '100vw',
      },
      minWidth: {
        '24': '6rem',
      },
      minHeight: {
        '24': '6rem',
        '48': '12rem',
      },
      colors: {
        primary: {
          lighter: colors.blue[500],
          default: colors.blue[600],
          dark: colors.blue[700],
        },
        gray: {
          ...colors.gray,
          '975': '#08090B',
          '950': '#111419',
        },
      },
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus'],
    borderColor: ['dark', 'responsive', 'hover', 'focus'],
    textColor: ['dark', 'responsive', 'hover', 'focus'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
