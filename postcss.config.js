module.exports = {
  plugins: [
    'tailwindcss',
    ...(process.env.NODE_ENV === 'production'
      ? [
          [
            '@fullhuman/postcss-purgecss',
            {
              content: ['./pages/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
              defaultExtractor: content => content.match(/[A-Za-z0-9-_:/]+/g) || [],
              whitelist: ['html', 'body'],
            },
          ],
        ]
      : []),
    'postcss-preset-env',
    'postcss-nested',
  ],
}
