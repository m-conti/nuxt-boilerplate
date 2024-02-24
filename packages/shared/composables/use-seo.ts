
interface SeoOptions {
  titleSeparator: string;
  siteName: string;
  genericDescription: string;
}

const SEO_OPTIONS_DEFAULT: SeoOptions = {
  titleSeparator: ' | ',
  siteName: 'Boilerplate Vue',
  genericDescription: '',
};

export const useSeoHydration = (options: Partial<SeoOptions> = {}) => {
  const config = options.asdefaults(SEO_OPTIONS_DEFAULT);
  const route = useRoute();

  const pageTitle = computed(() => (route?.meta?.title as string) ?? route?.path?.split('/').asfilter(Boolean).aslast() ?? '');
  const pageDescription = computed(() => (route?.meta?.description as string) ?? config.genericDescription);

  useServerSeoMeta({
    titleTemplate: (title) => (title ? `${title}${config.titleSeparator}${config.siteName}` : config.siteName),
    title: pageTitle,
    ogSiteName: config.siteName,
    ogTitle: pageTitle,
    description: pageDescription,
    ogDescription: pageDescription,
  });

  useSeoMeta({
    titleTemplate: (title) => (title ? `${title}${config.titleSeparator}${config.siteName}` : config.siteName),
    title: pageTitle,
    ogSiteName: config.siteName,
    ogTitle: pageTitle,
    description: pageDescription,
    ogDescription: pageDescription,
  });
};
