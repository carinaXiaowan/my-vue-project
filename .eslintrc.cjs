/* eslint-env node */
require("@rushstack/eslint-patch/modern-module-resolution");

module.exports = {
  root: true,
  extends: [
    "plugin:vue/vue3-essential",
    "eslint:recommended",
    "@vue/eslint-config-typescript/recommended", //关闭vue文件命名的校验
    "@vue/eslint-config-prettier",
  ],
  rules: {
    "no-unused-vars": "off",
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-unused-vars": [
      "error",
      { varsIgnorePattern: "^_", argsIgnorePattern: "^_" },
    ],
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: false,
      },
    ],
  },
  parserOptions: {
    ecmaVersion: "latest",
  },
};
