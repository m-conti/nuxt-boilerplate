import type { Linter } from 'eslint';
import globals from 'globals';
import tseslint from 'typescript-eslint';
import js from '@eslint/js';

const baseRules: Linter.RulesRecord = { 'one-var': ['error', 'never'] };

export const baseConfigs: Linter.Config[] = [
  {
    ...js.configs.recommended,
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
  },
  {
    files: ['**/*.{js,mjs,cjs,ts,mts,cts,vue}'],
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    rules: baseRules,
  },
  ...tseslint.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.{ts,mts,cts,vue}'],
  })),
];
