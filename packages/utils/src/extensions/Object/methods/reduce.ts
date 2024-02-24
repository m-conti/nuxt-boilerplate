import {
  reduce,
  reduceRight,
} from '../../../libraries/Dictionary';


const actions = {
  left: reduce,
  right: reduceRight,
};

type ActionNames = keyof typeof actions;

/**
 * @description Reduces collection to a value which is the accumulated result of running each element in collection thru iteratee, where each successive invocation is supplied the return value of the previous. If accumulator is not given, the first element of collection is used as the initial value. The iteratee is invoked with four arguments:
(accumulator, value, index|key, collection).
 * @param this source object
 * @param {function} callback  The function invoked per iteration.
 * @param {any} accumulator The initial value.
 * @param {string} direction direction of the reduce
 *      - 'left': does the reduce from the index 0 --> length-1
 *      - 'right': does the reduce from the last index --> 0
 * @returns Returns the accumulated value.
 *
 * @see {@link https://lodash.com/docs/4.17.15#reduce | lodash reduce}
 * @see {@link https://lodash.com/docs/4.17.15#reduceRight | lodash reduceRight}
 */
export default function <
  T extends object,
  F extends (acc: R, value: ValueOf<T>, key: KeyOf<T>) => R,
  A extends ActionNames = 'left',
  R = unknown
>(
  this: T,
  callback: F,
  accumulator?: R,
  direction: A = 'left' as A,
): ReturnType<F> {
  return (actions[direction] as any)(this, callback, accumulator);
}
