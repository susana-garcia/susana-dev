module.exports = {
  parser: '@typescript-eslint/parser',
  extends: [
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'react/prop-types': 'off',
    'react/no-unescaped-entities': 'off',
    '@typescript-eslint/explicit-function-return-type': 'off',
  },
  settings: {
    react: {
      version: 'detect',
    },
  },
}
