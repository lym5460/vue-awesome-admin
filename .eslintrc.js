import { defineConfig } from 'eslint-define-config';

module.exports = defineConfig({
  root: true,
  env: {
    es6: true,
    es2021: true,
    browser: true,
    node: true,
  },
  parser: 'vue-eslint-parser',
  parserOptions: {
    parser: '@typescript-eslint/parser',
  },
  globals: {},
  extends: [
    'plugin:vue/base',
    'plugin:vue/vue3-recommended',
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'prettier',
    'plugin:prettier/recommended',
  ],
  rules: {
    // 自定义你的规则
  },
});
