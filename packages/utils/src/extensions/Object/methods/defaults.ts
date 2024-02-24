import {
  defaultsDeep,
} from '../../../libraries/Dictionary';

/**
 * @description Assigns own and inherited enumerable string keyed properties of source objects to the destination object for all destination properties that resolve to undefined. Source objects are applied from left to right. Once a property is set, additional values of the same property are ignored.
 * @param this source object
 * @param args default objects
 * @returns returns a new object which is the result of a merge of the source object and the args.
 *
 * @see {@link https://lodash.com/docs/4.17.15#defaults | lodash defaultsDeep}
 */
export default function<
  T extends object,
  S extends object[],
> (
  this: T,
  ...args: S
): T & Intersection<S> {
  return defaultsDeep(this, ...args);
}
