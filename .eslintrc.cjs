module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint/eslint-plugin'],
  extends: ['noftalint/typescript'],
  ignorePatterns: ['node_modules/', './dist'],
  reportUnusedDisableDirectives: true,
  parserOptions: {
    project: './tsconfig.eslint.json',
  },
  env: {
    node: true,
  },
  rules: {
    'import/extensions': 'off',
  },
  overrides: [{
    files: ['*rc.cjs', '*.config.mjs'],
    rules: {
      'import/no-commonjs': 'off',
      'node/no-unpublished-import': 'off',
      'node/no-unpublished-require': 'off',
      'import/no-extraneous-dependencies': 'off',
    },
  }],
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.js', '.ts'],
      },
    },
  },
};
