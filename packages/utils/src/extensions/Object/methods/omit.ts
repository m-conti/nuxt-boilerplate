import {
  omit,
  omitBy,
} from '../../../libraries/Dictionary';

/**
 * @description This method creates an object composed of the own and inherited enumerable property paths of object that are not omitted.
 * @param this source object
 * @param {function} predicate The function invoked per property.
 * @param {string[]} args fields that have to be omitted
 * @returns {object} return the object without the field asked
 *
 * @see {@link https://lodash.com/docs/4.17.15#omit | lodash omit}
 * @see {@link https://lodash.com/docs/4.17.15#omitBy | lodash omitBy}
 */
export default function<
  T extends object,
  P extends Many<KeyOf<T>> | ((value: ValueOf<T>, key: KeyOf<T>) => boolean),
  K extends (P extends KeyOf<T> ? KeyOf<T>[] : never[])
>(
  this: T,
  predicate: P,
  ...args: K
): P extends Array<KeyOf<T>> ? OmitProtected<T, Union<P>> : P extends KeyOf<T> ? OmitProtected<T, P | Union<K>> : ReturnType<typeof omitBy<T>> {
  if (typeof(predicate) === 'function')
    return omitBy<T>(this, predicate as any) as any;
  return (omit as any)(this, predicate, ...args as KeyOf<T>[]);
}
