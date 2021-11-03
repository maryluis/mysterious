module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
  ],
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 8,
    sourceType: 'module',
    babelOptions: {
      presets: ['@babel/preset-react'],
    },
  },
  plugins: ['react'],
  rules: {
    'linebreak-style': 0,
    'react/jsx-filename-extension': 0,
    'import/named': 0,
    'object-curly-newline': 0,
    'arrow-parens': 0,
    'arrow-body-style': 0,
    'no-debugger': 0,
    'no-undef': 0,
    'react/jsx-one-expression-per-line': 0,
    'jsx-a11y/label-has-associated-control': 0,
  },
};
