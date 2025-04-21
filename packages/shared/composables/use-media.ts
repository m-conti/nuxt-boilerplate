import mediaQuery from 'ui/postcss/media-query';
import type { WatchOptions } from 'vue';
import type { MediaKey } from 'shared/interfaces/display';

export const useMedia = (key: MediaKey) => {
  const isMedia = ref(useDisplayStore().mediaQuery === key);
  const clientMedia = useMediaQuery(mediaQuery[`media-query-${key}`]);
  onMounted(() => { isMedia.value = clientMedia.value; });
  watch(clientMedia, (newValue) => { isMedia.value = newValue; });
  return isMedia;
};

export const useMediaComputed = <T>(key: MediaKey, callback: ((value: boolean) => T)): ComputedRef<T> => {
  const value = useMedia(key);
  return computed(() => callback(value.value));
};

export const useMediaWatch = (key: MediaKey, callback: ((value: boolean) => void), options?: WatchOptions): void => {
  watch(useMedia(key), (newValue) => callback(newValue), options);
};
