import {
  cloneDeep,
} from '../../../libraries/Dictionary';

/**
 * @description Creates a deep clone of value.
 * @returns Returns the deep cloned value.
 *
 * @see {@link https://lodash.com/docs/4.17.15#cloneDeep | lodash cloneDeep}
 */
export default function<T> (
  this: T,
): T {
  return cloneDeep(this);
}
