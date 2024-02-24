
import {
  find, findKey,
} from '../../../libraries/Dictionary';

const actions = {
  value: find,
  key: findKey,
};

/**
 * @description Iterates over elements of collection, returning the first element predicate returns truthy for. The predicate is invoked with three arguments:.
 * @param {T[]} this object to iterate in
 * @param {function} iteratee The function invoked per iteration
 * @param {string} action defines if will iterate on 'value' or on 'keys', default value = 'value'
 * @returns {T} Returns the matched element, else undefined.
 *
 * @see {@link https://lodash.com/docs/4.17.15#find | lodash find}
 * @see {@link https://lodash.com/docs/4.17.15#findKey | lodash findKey}
 */
export default function <
  T extends object,
  A extends keyof typeof actions = 'value',
> (
  this: T,
  iteratee: (value: ValueOf<T>, key: If<'value', A, KeyOf<T>, ToString<KeyOf<T>>>, collection: T) => boolean,
  action: A = 'value' as A,
): A extends 'value' ? ValueOf<T> : ToString<KeyOf<T>> {
  return (actions[action] as any)(this, iteratee);
}
