import { defineNuxtModule } from '@nuxt/kit';
import { merge } from 'utils';
import packageJson from '../../../package.json';

const version = packageJson.version;

export default defineNuxtModule({
  setup(_, nuxt) {
    merge(nuxt.options.runtimeConfig.public, {
      urls: {},
      cookie: {
        domain: process.env.COOKIE_DOMAIN,
      },
      version,
    });
  },
});
