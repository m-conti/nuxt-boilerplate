import type { Locale } from 'models/interfaces/locale';


interface UseLocalesReturn {
  locales: ComputedRef<Locale[]>;
  locale: ComputedRef<Locale>;
  setLocale: (language: Locale) => void;
}

export const useLocales = (): UseLocalesReturn => {
  const i18n = useI18n();

  return {
    locales: <UseLocalesReturn['locales']>i18n.locales,
    locale: <UseLocalesReturn['locale']>i18n.locale,
    setLocale: i18n.setLocale,
  };
};
