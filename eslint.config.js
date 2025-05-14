import js from '@eslint/js';
import globals from 'globals';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import prettier from 'eslint-plugin-prettier';

export default tseslint.config(
  // Global ignore patterns
  {
    ignores: ['dist', '.eslintrc.cjs', 'vite.config.ts'],
  },

  // Main ESLint config for TypeScript + React
  {
    files: ['**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      sourceType: 'module',
      globals: globals.browser,
      parser: tseslint.parser,
    },
    plugins: {
      react,
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
      prettier,
    },
    rules: {
      // From eslint:recommended
      ...js.configs.recommended.rules,

      // From @typescript-eslint/recommended
      ...tseslint.configs.recommended[0].rules,

      // From react-hooks
      ...reactHooks.configs.recommended.rules,

      // From react/recommended
      ...react.configs.recommended.rules,

      // Custom rules
      'react/react-in-jsx-scope': 'off',
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      'prettier/prettier': 'error',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  }
);
