import {
  size,
} from '../../../libraries/Dictionary';

/**
 * @description Gets the size of collection by returning its length for array-like values or the number of own enumerable string keyed properties for objects.
 * @param this source object
 * @returns {number} Returns the collection size.
 */
export default function<T extends object> (this: T): T extends WithReadonly<unknown[]> ? Length<T> : number {
  return size(this) as any;
}
