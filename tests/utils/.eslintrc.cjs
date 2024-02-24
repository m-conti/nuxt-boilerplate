/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  plugins: ['jest'],
  parserOptions: {
    sourceType: 'module',
  },
  extends: [
    'shared',
  ],
  rules: {
    '@typescript-eslint/no-unused-vars': 0,
    'no-unused-vars': 0,
  },
  env: {
    'jest/globals': true,
  },
};
