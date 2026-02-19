// @ts-check
import eslint from '@eslint/js';
import globals from 'globals';
import tseslint from 'typescript-eslint';

export default tseslint.config(
  {
    ignores: ['dist', 'node_modules'],
  },

  eslint.configs.recommended,

  ...tseslint.configs.recommended,

  {
    languageOptions: {
      globals: {
        ...globals.node,
        ...globals.jest,
      },
      sourceType: 'module',
    },
  },

  {
    rules: {
      // 🔹 Regras relaxadas (mais tranquilo)
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': 'warn',
      '@typescript-eslint/no-floating-promises': 'off',
      '@typescript-eslint/no-unsafe-argument': 'off',
      '@typescript-eslint/explicit-function-return-type': 'off',

      // 🔹 Evita poluição visual
      'no-console': 'off',
    },
  },
);
