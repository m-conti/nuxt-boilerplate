import {
  filter,
} from '../../../libraries/Dictionary';

/**
 * @description Iterates over elements of collection, returning an array of all elements predicate returns truthy for. The predicate is invoked with three arguments: (value, index|key, collection).
 * @param this object to filter
 * @param {function} predicate filter that will be applied
 * @returns {array} an array of all field that corresponds to the filter, if nothing found return an empty array.
 *
 * @see {@link https://lodash.com/docs/4.17.15#filter | lodash filter}
 */
export default function <T extends Dictionary> (
  this: T,
  predicate: ((value: ValueOf<T>, key: KeyOf<T>, collection: T) => boolean),
): Array<ValueOf<T>> {
  return (filter as any)(this, predicate);
}
