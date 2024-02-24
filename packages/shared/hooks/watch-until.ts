import { type WatchOptions } from 'vue';


export const watchUntil = <T>(source: Ref<T>, condition: (value: T) => boolean, options: WatchOptions = {}): Promise<T> => new Promise((resolve) => {
  watch(source, (value) => {
    if (condition(value))
      resolve(value);
  }, options);
});
