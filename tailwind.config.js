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
      },
      colors: {
        primary: {
          lighter: colors.green[500],
          default: colors.green[600],
          dark: colors.green[700],
        },
        gray: {
          ...colors.gray,
          '975': '#08090B',
          '950': '#111419',
          '925': '',
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
