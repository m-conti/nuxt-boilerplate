import type { Theme } from 'shared/interfaces/display';

const getSystem = (): Theme => (window && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark-mode' : 'light-mode');

export const ThemeLib = {
  getSystem,
};
