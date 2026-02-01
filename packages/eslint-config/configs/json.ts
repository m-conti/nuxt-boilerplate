import json from '@eslint/json';

const jsonRules = {};

export const jsonConfigs = [
  {
    files: ['**/*.{json,jsonc,json5}'],
    plugins: { json },
    language: 'json',
    extends: ['json/recommended'],
    rules: jsonRules,
  },
];
