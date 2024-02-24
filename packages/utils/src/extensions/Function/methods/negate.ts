import {
  negate,
} from '../../../libraries/Function';

/**
 * Creates a function that negates the result of the predicate func. The func predicate is invoked with the this binding and arguments of the created function.
 * @returns Returns the new negated function.
 *
 * @see {@link https://lodash.com/docs/4.17.15#negate | lodash negate}
 */
export default function<T extends (...args: unknown[]) => boolean = (...args: unknown[]) => boolean>(
  this: T,
): ReturnType<typeof negate> {
  return negate(this);
}
