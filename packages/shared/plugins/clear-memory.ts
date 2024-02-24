import { Registery } from 'utils';

export default defineNuxtPlugin({
  order: 15,
  setup: (nuxtApp) => {
    nuxtApp.hook('vue:setup', () => {
      window.addEventListener('unload', () => {
        Registery.clear();
      }, { once: true });
    });
  },
});
