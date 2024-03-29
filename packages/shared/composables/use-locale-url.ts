import type { Locale } from 'models/domains/locale';
import type { RoutesNamedLocations, RoutesNamesList } from '@typed-router/__routes';


export const useLocaleUrl = (encode = true) => {
  const { origin } = storeToRefs(useApplicationStore());
  const localePath = useLocalePath();
  return (to: RoutesNamesList | RoutesNamedLocations, locale?: Locale): Url => (
    (`${origin.value}${encode ? localePath(to as any, locale) : decodeURI(localePath(to as any, locale) as any)}`)
  );
};
