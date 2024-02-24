import { uniq, uniqBy } from '../../../libraries/Array';

/**
 *
 * The function is to remove same values of an array
 * @param iteratee - one of the value if it's an array of object like id.
 * @param iteratee - function to check the item it return a value comparable with ===
 * @default (v) => v
 *
 * @returns a new array with uniq values
 *
 * @see {@link https://lodash.com/docs/4.17.15#uniq|lodash uniq}
 * @see {@link https://lodash.com/docs/4.17.15#uniqBy|lodash uniqBy}
 */
export default function<
  T extends unknown[],
  V extends ValueOf<T>,
> (
  this: T,
  iteratee?: ((value: V) => unknown) | KeyOf<V>,
): V[] {
  if (!iteratee) return uniq(this) as any;
  return (uniqBy as any)(this, iteratee) as any;
}
