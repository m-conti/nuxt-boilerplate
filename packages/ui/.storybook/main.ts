import type { StorybookConfig } from '@nuxtjs/storybook';

const config: StorybookConfig = {
  stories: ['../app/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: [],
  framework: {
    name: '@storybook-vue/nuxt',
    options: {},
  },
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    docsMode: false,
  },
};
export default config;
