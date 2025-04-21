import type { LocaleObject as LocalObjectI18n } from 'vue-i18n-routing';
import type { I18nLocales } from '@typed-router/__i18n-router';

declare module 'models/interfaces/locale' {
  type Locale = I18nLocales;
  interface LocaleObject extends LocalObjectI18n {
    code: Locale;
  }
}
