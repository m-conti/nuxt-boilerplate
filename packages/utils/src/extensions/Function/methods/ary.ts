import {
  ary,
} from '../../../libraries/Function';

/**
 * Creates a function that invokes func, with up to n arguments, ignoring any additional arguments.
 * @param n — The arity cap. default = 1
 * @returns Returns the new capped function.
 *
 * @see {@link https://lodash.com/docs/4.17.15#ary | lodash ary}
 */
export default function<T extends (...args: any[]) => any, N extends number = 1>(
  this: T,
  n: N = 1 as N,
): ((...args: PickN<Parameters<T>, N>) => ReturnType<T>) {
  return ary(this, n);
}
