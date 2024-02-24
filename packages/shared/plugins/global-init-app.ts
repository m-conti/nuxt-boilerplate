import { CookieConfig } from 'utils';

export default defineNuxtPlugin({
  order: 14,
  setup: () => {
    const applicationStore = useApplicationStore();
    applicationStore.urls = useRuntimeConfig().public.baseUrls;
    applicationStore.version = useRuntimeConfig().public.version;

    CookieConfig.instance = CookieConfig.instance.withAttributes({ domain: useRuntimeConfig().public.cookie.domain });
  },
});
