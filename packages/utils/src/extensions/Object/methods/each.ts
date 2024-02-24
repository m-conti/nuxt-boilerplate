import {
  each,
  eachRight,
} from '../../../libraries/Dictionary';

const actions = {
  left: each,
  right: eachRight,
};

/**
 * @description Iterates over elements of collection and invokes iteratee for each element. The iteratee is invoked with three arguments: (value, index|key, collection).
 * @param this object to iterate
 * @param {string} direction direction of the foreach
 *      - 'left': does the foreach from the index 0 --> length-1
 *      - 'right': does the foreach from the last index --> 0
 * @param {function} iteratee action that will be made in the foreach
 *
 * @see {@link https://lodash.com/docs/4.17.15#forEach | lodash each}
 * @see {@link https://lodash.com/docs/4.17.15#forEachRight | lodash eachRight}
 */
export default function<
  T extends object,
  A extends keyof typeof actions,
  F extends (value: ValueOf<T>, key: KeyOf<T>, collection: T) => void,
>(
  this: T,
  direction: A = 'left' as A,
  iteratee: F,
): void {
  (actions[direction] as any)(this, iteratee);
}
