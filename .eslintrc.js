module.exports = {
  root: true,
  extends: 'plugin:vue/base',
  parserOptions: {
    parser: 'typescript-eslint-parser',
    ecmaVersion: 2018,
    source: 'module',
    ecmaFeatures: {
      jsx: true
    }
  }
}
