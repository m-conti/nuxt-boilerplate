import {
  once,
} from '../../../libraries/Function';

/**
 * Creates a function callable only once time.
 * @this {T} The function to change.
 * @returns {T} Returns the new function.
 *
 * @see {@link https://lodash.com/docs/4.17.15#once | lodash once}
 */
export default function<T extends (...args: any[]) => any>(
  this: T,
): T {
  return once(this);
}
