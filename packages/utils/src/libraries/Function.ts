export {
  once,
  debounce,
  throttle,
  delay,
  ary,
  negate,
} from 'lodash-es';

export const next = <
  F extends ((...args: any) => any),
  R = unknown
>(func: F, nextFunc: (ret: ReturnType<F>) => R) => (...args: Parameters<F>[]): R => nextFunc(func(...args));
