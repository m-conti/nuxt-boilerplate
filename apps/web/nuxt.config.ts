import path from 'path';

console.log('ENVIRONMENT');
console.log(process.env.BASE_URL);
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // DEV
  devServer: {
    port: 4004,
    host: '0.0.0.0',
  },
  nitro: {
    output: {
      publicDir: path.join(__dirname, '../../dist'),
    },
  },
  vite: {
    base: process.env.BASE_URL,
  },

  // PACKAGES
  extends: ['shared/nuxt.config'],
  modules: [
    [ 'shared/nuxt.ts', { currentPaths: ['~'], types: [ 'utils', 'models', 'shared', 'ui' ]}],
    [ 'nuxt-typed-router', { strict: true }],
    'shared/modules/build-env.ts',
  ],

  plugins: [],

  // BUILD
  ssr: true,

  sourcemap: {
    client: false,
    server: true,
  },
});
