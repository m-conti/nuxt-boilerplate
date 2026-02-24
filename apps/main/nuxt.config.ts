import { EnvConfig } from 'env-config';

EnvConfig.initialize();

const port = process.env.APPLICATION_URL_MAIN?.replace(/.*:(\d+)/, '$1');

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  extends: 'shared/nuxt.config',
  devServer: {
    port: port ? parseInt(port) : undefined,
    host: '0.0.0.0',
  },
});
