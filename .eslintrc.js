module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    '@nuxtjs',
    'prettier'
  ],
  plugins: [
    'prettier'
  ],
  // add your custom rules here
  rules: {
    'prefer-const': 2,
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-console': process.env.NODE_ENV === 'production' ? 2 : 0,
    'no-irregular-whitespace': 0,
    'vue/max-attributes-per-line': [2, {
      singleline: 1
    }]
  }
}
