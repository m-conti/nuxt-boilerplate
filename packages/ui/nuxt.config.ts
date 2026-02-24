// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: 'shared/nuxt.config',
  modules: [
    '@nuxtjs/storybook',
    '@nuxt/ui',
    '@nuxt/image',
  ],
  storybook: {
    host: 'http://localhost',
    port: 6006,
  },
  css: ['~/assets/css/main.css'],
});
