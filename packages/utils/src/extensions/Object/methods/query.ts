import {
  toQueryParams,
} from '../../../libraries/Dictionary';

/**
 * @description take the given object and turn it into a link
 *      Ex: {a:10, b:"test"}.query(); -> a=10&b%test%22
 * @param this
 * @returns {string} the object in uri format
 */
export default function<
  T extends object,
> (this: T): string {
  return toQueryParams(this);
}
