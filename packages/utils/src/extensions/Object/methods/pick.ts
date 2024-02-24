
import {
  pick,
  pickBy,
} from '../../../libraries/Dictionary';

/**
 * @description Creates an object composed of the picked object properties.
 * @param this source object
 * @param {function} predicate The function invoked per property.
 * @param {string | string[]} args  The property paths to pick.
 * @returns Returns the new object only with the field picked.
 *
 * @see {@link https://lodash.com/docs/4.17.15#pick | lodash pick}
 * @see {@link https://lodash.com/docs/4.17.15#pickBy | lodash pickBy}
 */
export default function <
  T extends object,
  P extends Many<KeyOf<T>> | ((value: ValueOf<T>, key: KeyOf<T>) => boolean),
  K extends (P extends KeyOf<T> ? KeyOf<T>[] : never[]),
>(
  this: T,
  predicate: P,
  ...args: K
): P extends KeyOf<T>[] ? PickProtected<T, Union<P>> : (P extends KeyOf<T> ? PickProtected<T, P | Union<K>> : ReturnType<typeof pickBy<T>>) {
  if (typeof (predicate) === 'function')
    return (pickBy as any)(this, predicate) as any;
  return (pick as any)(this, predicate, ...args as KeyOf<T>[]);
}
