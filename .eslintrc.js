module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
     'plugin:vue/essential',
      "eslint:recommended"
     // 'prettier',
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-useless-escape':'off',
    'no-unused-expressions': ["error", { "allowShortCircuit": true,"allowTernary": true }],//允许短路
      'vue/multi-word-component-names':"off",
      // "hoist": "never",//允许变量作用域
    'camelcase': 'off',
    'import/extensions': 'off',
    'prefer-destructuring': 'off',
    'max-len': 'off',
    'no-plusplus': 'off',
    'vue/no-use-v-if-with-v-for': 'off',
    'no-underscore-dangle': 'off',
    'consistent-return': 'off',
    'no-param-reassign': 'off',
    'no-undef': 'off',
    'vue/no-unused-components': 'off',
    'no-unused-vars': 'off',
    'vue/no-side-effects-in-computed-properties': 'off',
    'no-tabs': 'off',
    'vue/require-valid-default-prop': 'off',
    'vue/return-in-computed-property': 'off',
    'class-methods-use-this': 'off',
    'vue/require-prop-type-constructor': 'off',
    'vue/require-v-for-key': 'off',
    'prefer-promise-reject-errors': 'off',
    'no-case-declarations': 'off',
    'import/prefer-default-export': 'off',
    'global-require': 'off',
    'comma-dangle': 'off',
    'linebreak-style': 'off',
    "import/no-dynamic-require": 'off',
     'semi':0,
  },
  parserOptions: {
    parser: 'babel-eslint',
  },
};
