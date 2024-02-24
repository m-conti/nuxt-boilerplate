import {
  mergeWith,
  merge,
} from '../../../libraries/Dictionary';

/**
 * @description merge the source object with all the given ones, with the customizer if given
 * @param this source object
 * @param args object to merge to the source one, last arg would be a function
 * @returns all the args merged into one, with a customizer specified
 *
 * @see {@link https://lodash.com/docs/4.17.15#merge | lodash merge}
 * @see {@link https://lodash.com/docs/4.17.15#mergeWith | lodash mergeWith}
 */
export default function <
  T extends object,
  P extends object,
  F extends (value: ValueOf<T>, srcValue: ValueOf<P>, key: KeyOf<T & P>, object: T, source: P) => unknown,
>(
  this: T,
  ...args: [P] | [P, F]
): T & UnionToIntersection<P> {
  if (typeof args.aslast() === 'function') return mergeWith(this, ...args);
  return merge(this, ...args);
}
