import type { THEMES } from 'shared/interfaces/display';

export {};

declare module 'shared/interfaces/display' {
  type Theme = ValueOf<typeof THEMES>;
}