module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es2021: true,
  },
  extends: 'airbnb-base',
  overrides: [
    {
      env: {
        node: true,
      },
      files: [
        '.eslintrc.{js,cjs}',
      ],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
    camelcase: ['error', { ignoreDestructuring: true }],
    'linebreak-style': ['error', 'windows'],
    'no-console': 'off',
  },
  camelcase: ['error', { ignoreDestructuring: true }],
};
