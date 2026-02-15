import { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';
import type { RuleOptions } from 'eslint-plugin-vue/dist/eslint-typegen';

const vueRules: Linter.RulesRecord = {} satisfies RuleOptions;

export const vueConfigs: Linter.Config[] = [
  ...pluginVue.configs['flat/recommended-error'].map((config) => ({
    ...config,
    files: ['**/*.vue'],
    rules: vueRules,
  })),
];
