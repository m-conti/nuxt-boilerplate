/* eslint-disable fp/no-mutating-methods */
// https://nuxt.com/docs/api/configuration/nuxt-config
import { join } from 'path';
import { defineNuxtModule } from '@nuxt/kit';

export default defineNuxtModule({
  hooks: {
    'components:dirs'(dirs) {
      dirs.push({ path: join(__dirname, 'components'), pathPrefix: false, extensions: ['.vue']});
      dirs.push({ path: join(__dirname, 'global'), pathPrefix: false, extensions: ['.vue'], global: true });
    },
  },
});
