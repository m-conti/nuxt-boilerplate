import type { CookieRef, CookieOptions } from 'nuxt/app';
import { LocalStorage, CookieConfig } from 'utils';

export const useConsistentState = <T>(key: string, init?: (() => T | Ref<T>) | undefined): Ref<T> => {
  const _state = useState<T>(`locale-storage-${key}`, init);

  const state = computed({
    get: () => _state.value,
    set: (value) => {
      LocalStorage.set(key, value);
      _state.value = value;
    },
  });

  if (process.client)
    onMounted(() => { _state.value = LocalStorage.getorset<T>(key, _state.value) ?? _state.value; });

  return state;
};

export const useServerConsistentState = <T>(key: string, init?: (() => T | Ref<T>) | undefined, options?: CookieOptions<T>): CookieRef<T | undefined> => useCookie(key, {
  domain: useRuntimeConfig().public.cookie.domain,
  encode: CookieConfig.write,
  decode: CookieConfig.read,
  default: init,
  ...CookieConfig.default,
  ...options,
});

export const useSharedConsistentState = <T>(key: string, init?: (() => T | Ref<T>) | undefined, options?: CookieOptions<T>): Ref<T | undefined> => {
  const data = process.server ? ref(init?.()) as any : useServerConsistentState(key, init, options);
  const value = computed<T>({
    get: () => data.value,
    set: (v) => { data.value = v; },
  });
  return value;
};
