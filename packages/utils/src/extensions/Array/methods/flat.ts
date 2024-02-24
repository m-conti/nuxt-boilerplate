import {
  flattenDeep,
  flattenDepth,
} from '../../../libraries/Array';

/**
 * Recursively flatten array up to depth times.
 * @param depth The maximum recursion depth. Infinite if undefined
 * @returns Returns the new flattened array.
 *
 * @see {@link https://lodash.com/docs/4.17.15#flattenDepth | lodash flattenDepth}
 * @see {@link https://lodash.com/docs/4.17.15#flattenDeep | lodash flattenDeep}
 */
export default function<R = any, T extends object = object> (
  this: T,
  depth?: number,
): R {
  if (depth !== undefined) return (flattenDepth as any)(this, depth);
  return (flattenDeep as any)(this);
}
