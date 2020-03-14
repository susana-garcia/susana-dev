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
      colors: {
        primary: {
          lighter: colors.blue[500],
          default: colors.blue[600],
          dark: colors.blue[700],
        },
        secondary: {
          lighter: colors.teal[400],
          default: colors.teal[500],
          dark: colors.teal[600],
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
