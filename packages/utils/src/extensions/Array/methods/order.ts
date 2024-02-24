import { orderBy } from '../../../libraries/Array';

/**
 * This method sort the array by values by the functions or the keys given in the iteratees parameter.
 * If orders is unspecified, all values are sorted in ascending order.
 * Otherwise, specify an order of "desc" for descending or "asc" for ascending sort order of corresponding values.
 * @returns Return the array sorted
 *
 * @see {@link https://lodash.com/docs/4.17.15#orderBy | lodash orderBy}
 * @see {@link https://lodash.com/docs/4.17.15#sortBy | lodash sortBy}
 */
export default function<
T extends WithReadonly<unknown[]>,
P extends Many<KeyOf<ValueOf<T>>> | ((value: ValueOf<T>, key: KeyOf<T>) => unknown),
>(
  this: T,
  iteratee: P,
  order?: Many<boolean | 'asc' | 'desc'>,
): T {
  return (orderBy as any)(this, iteratee, order);
}
