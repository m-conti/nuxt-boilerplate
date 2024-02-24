import type { StorybookConfig } from '@storybook/vue3-vite';


const config: StorybookConfig = {
  stories: [
    '../components/**/*.stories.@(js|tsx|ts|tsx)',
    '../global/**/*.stories.@(js|tsx|ts|tsx)'
  ],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: <'@storybook/vue3-vite'>'@storybook-vue/nuxt',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
};
export default config;
