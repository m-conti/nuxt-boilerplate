import { Linter } from 'eslint';
import pluginVue from 'eslint-plugin-vue';

const vueRules = {};

export const vueConfigs: Linter.Config[] = [
  ...pluginVue.configs['flat/recommended-error'].map((config) => ({
    ...config,
    files: ['**/*.vue'],
    rules: vueRules,
  })),
];
