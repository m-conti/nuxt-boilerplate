import type { Locale, LocaleObject } from 'models/domains/locale';


interface UseLocalesReturn {
  locales: ComputedRef<LocaleObject[]>;
  locale: ComputedRef<Locale>;
  setLocale: (language: Locale) => void;
  t: (key: string, params?: Record<string, any>) => string;
  td: (key: string, text?: string) => string;
  te: (key: string) => boolean;
}

export const useLocales = (): UseLocalesReturn => {
  const i18n = useI18n();

  return {
    locales: <UseLocalesReturn['locales']>i18n.locales,
    locale: <UseLocalesReturn['locale']>i18n.locale,
    setLocale: i18n.setLocale,
    t: i18n.t,
    td: (key: string, text?: string) => (i18n.te(key) ? i18n.t(key) : text ?? key),
    te: i18n.te,
  };
};
