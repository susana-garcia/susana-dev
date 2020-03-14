module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: [
                './pages/**/*.{css,ts,tsx}',
                './components/**/*.{css,ts,tsx}',
              ],
              defaultExtractor: content =>
                content.match(/[A-Za-z0-9-_:/]+/g) || [],
              whitelist: ['html', 'body', 'dark-mode'],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
    'postcss-nested',
  ],
}
