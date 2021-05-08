const OFF = 0;
const WARN = 1;
const ERROR = 2;

module.exports = {
  parser: '@typescript-eslint/parser',
  ignorePatterns: [
    // '*.config.js'
    '.docz/**',
    'doc-site/**',
  ],
  plugins: ['@typescript-eslint'],
  extends: [
    'airbnb',
    'airbnb/hooks',
    'plugin:react-hooks/recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    // 'eslint-config-tencent',
    // 'eslint-config-tencent/ts',
  ],
  env: {
    es2020: true,
    browser: true,
    node: true,
    mocha: true,
  },
  parserOptions: {
    // project: './tsconfig.json',
    // tsconfigRootDir: __dirname,
    ecmaVersion: 11,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  //   globals: {
  //     __inline: true,
  //     IS_SERVER: true,
  //     __uri: true,
  //     plug: true,
  //     Browser: true,
  //     define: true,
  //   },
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'import/no-unresolved': OFF,
    'linebreak-style': WARN,
    'react/jsx-filename-extension': [1, { extensions: ['.tsx', '.ts'] }],
    'no-use-before-define': OFF,
    'import/extensions': OFF,
    'react/prop-types': OFF,
    'react/jsx-props-no-spreading': OFF,
    '@typescript-eslint/no-var-requires': OFF,
    '@typescript-eslint/ban-ts-comment': OFF,
    '@typescript-eslint/no-empty-function': OFF,
    '@typescript-eslint/triple-slash-reference': OFF,
    // '@typescript-eslint/no-unused-vars': 'off',
    // 'import/extensions': [
    //   ERROR,
    //   'ignorePackages',
    //   {
    //     ts: 'never',
    //     tsx: 'never',
    //     json: 'never',
    //     js: 'never',
    //   },
    // ],
  },
};
