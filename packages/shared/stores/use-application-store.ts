import type { PublicRuntimeConfig } from 'nuxt/schema';

export const appInitialized = ref<Promise<boolean>>();

export const useApplicationStore = defineStore('application', () => {
  const urls = useState<PublicRuntimeConfig['baseUrls']>('urls');
  const version = useState<PublicRuntimeConfig['version']>('version');
  return {
    urls,
    version,
  };
});

