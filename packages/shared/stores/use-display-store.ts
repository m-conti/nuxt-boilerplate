import { ECookieKey } from 'models/constants/storage';
import { timeConvert } from 'utils';
import { ENVIRONMENTS } from 'models/interfaces/theme';
import { type ScreenMedia, type Theme, THEMES } from 'shared/interfaces/display';


export const useDisplayStore = defineStore('display', () => {
  // ENV
  const environment = useConsistentState(ECookieKey.THEME_ENV, () => ENVIRONMENTS.asfirst());

  const switchEnvironment = () => {
    environment.value = ENVIRONMENTS.asindex(ENVIRONMENTS.indexOf(environment.value!) + 1);
  };

  // THEME
  const _theme = useServerConsistentState<Theme | undefined>(ECookieKey.THEME_COLOR, () => undefined, { maxAge: timeConvert(1, 'year') });
  const forceTheme = ref<Theme>();

  const theme = computed({
    get: () => forceTheme.value ?? _theme.value ?? THEMES.asfirst(),
    set: (value) => { _theme.value = value; },
  }) as Ref<Theme>;
  const hasTheme = computed(() => Boolean(_theme.value));

  const isDarkTheme = computed(() => theme.value === 'dark-mode');

  const switchTheme = () => {
    theme.value = THEMES.asindex(THEMES.indexOf(theme.value!) + 1);
  };


  // MEDIA QUERY
  const mediaQuery = useServerConsistentState<ScreenMedia>(ECookieKey.MEDIA_QUERY, () => 'desktop', { maxAge: timeConvert(1, 'year') });
  useMediaWatch('desktop', (value) => { if (value) mediaQuery.value = 'desktop'; });
  useMediaWatch('tablet', (value) => { if (value) mediaQuery.value = 'tablet'; });
  useMediaWatch('mobile', (value) => { if (value) mediaQuery.value = 'mobile'; });

  // SCROLL
  const scrollContainer = ref<Element | ComponentPublicInstance | null>(null);

  return {
    // ENV
    environment,
    switchEnvironment,

    // THEME
    hasTheme,
    theme,
    forceTheme,
    isDarkTheme,
    switchTheme,

    // MEDIA QUERY
    mediaQuery,

    // SCROLL
    scrollContainer,

    // HEIGHT
  };
});
