import { ECookieKey } from 'models/constants/storage';
import { timeConvert } from 'utils';

import { ENVIRONMENTS, THEMES, ETheme } from 'models/domains/theme';

export const useDisplayStore = defineStore('display-store', () => {
  const environment = useConsistentState(ECookieKey.THEME_ENV, () => ENVIRONMENTS.asfirst());
  const theme = useConsistentState(ECookieKey.THEME_COLOR, () => THEMES.asfirst());
  const isDarkTheme = computed(() => theme.value === ETheme.DARK);

  const switchTheme = () => {
    theme.value = THEMES.asindex(THEMES.indexOf(theme.value!) + 1);
  };

  const switchEnvironment = () => {
    environment.value = ENVIRONMENTS.asindex(ENVIRONMENTS.indexOf(environment.value!) + 1);
  };

  return {
    theme,
    environment,
    isDarkTheme,
    switchTheme,
    switchEnvironment,
  };
});
