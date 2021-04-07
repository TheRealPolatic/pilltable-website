module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
  extends: [
    // 'eslint:recommended',
    // 'plugin:vue/recommended',
    '@nuxtjs',
    'prettier',
    // 'prettier/vue',
    'plugin:nuxt/recommended',
    'prettier',
  ],
  plugins: ['prettier'],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warning' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prettier/prettier': ['error', { printWidth: 120 }],
  },
}
