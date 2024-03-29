
export const useLocaleTitle = (title: MaybeRef<string>) => {
  const { t } = useI18n();
  const localeTitle = computed(() => t(unref(title)));
  useHead({ title: localeTitle });
  return localeTitle;
};
