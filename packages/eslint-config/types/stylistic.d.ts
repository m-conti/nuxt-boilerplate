import { type RuleOptions } from '@stylistic/eslint-plugin';

export {};

declare module '@stylistic/eslint-plugin' {
  type Severity = 'off' | 'warn' | 'error';
  type StyleRules = Partial<{ [K in keyof RuleOptions]: [Severity, ...RuleOptions[K]] }>;
}
