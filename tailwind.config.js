module.exports = {
  theme: {
    darkSelector: '.dark-mode',
    container: {
      center: true,
    },
  },
  variants: {
    backgroundColor: ['dark', 'dark-hover', 'responsive', 'hover', 'focus'],
    borderColor: ['dark', 'responsive', 'hover', 'focus'],
    textColor: ['dark', 'responsive', 'hover', 'focus'],
  },
  plugins: [require('tailwindcss-dark-mode')()],
}
