import markdown from '@eslint/markdown';
import { Linter } from 'eslint';

const mdRules = {};

export const mdConfigs: Linter.Config[] = [
  ...markdown.configs.recommended.map((config) => ({
    ...config,
    files: ['**/*.md'],
  })),
  {
    files: ['**/*.md'],
    plugins: { markdown },
    language: 'markdown/gfm',
    rules: mdRules,
  },
];
