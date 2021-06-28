module.exports = {
  env: {
    es2021: true,
    node: true,
    jest: true
  },
  overrides: [
    {
      files: ['.eslintrc.js']
    }
  ],
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: ['@typescript-eslint', 'prettier', 'import'],
  rules: {
    'prettier/prettier': 'error',
    'import/extensions': 'off',
    'import/no-unresolved': 'error',
    'no-console': 'off'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts']
    }
  }
}
