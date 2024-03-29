/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution');

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript/recommended',
    '@vue/eslint-config-prettier',
    './.eslintrc-auto-import.json'
  ],
  env: {
    'vue/setup-compiler-macros': true
  },
  parserOptions: {
    parser: '@typescript-eslint/parser',
    ecmaVersion: 2020
  },
  rules: {
    'prettier/prettier': 'off',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-unused-vars': 'off',
    'vue/multi-word-component-names': 'off', //关闭命名规则,不校验组件名称
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    semi: 0, // 去掉结尾的分号
    singleQuote: 0, // 单引号替代双引号
    'no-const-assign': 2, //禁止修改const声明的变量
    'no-dupe-args': 2, //函数参数不能重复
    'no-func-assign': 2, //禁止重复的函数声明
    'no-multi-spaces': 1,//不能用多余的空格
    "no-undef":0, //检查未声明的变量是否被使用(ts中关掉)
    'no-empty':'off'
  }
};
