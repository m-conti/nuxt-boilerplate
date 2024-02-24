import { negate } from '../../../libraries/Function';
import {
  isEmpty,
  isMatch,
  every,
  some,
} from '../../../libraries/Check';

const actions = {
  every: every,
  some: some,
  none: negate(some),
  match: isMatch,
  empty: isEmpty,
};

type Actions<T extends object = object> = {
  every: (predicate?: (value: ValueOf<T>, key: KeyOf<T>, collection: T) => boolean) => boolean;
  some: (predicate?: (value: ValueOf<T>, key: KeyOf<T>, collection: T) => boolean) => boolean;
  none: (predicate?: (value: ValueOf<T>, key: KeyOf<T>, collection: T) => boolean) => boolean;
  match: (object: object) => boolean;
  empty: () => boolean;
};

type ActionNames = keyof Actions;

/**
 * @description Check if the selected condition is true or false by an iteration or a match
 * @param select The select of the logic :
 *
 * - "every": iterate and each step need to be true
 *
 * - "some": iterate and one step need to be true
 *
 * - "none": iterate and each need to be false
 *
 * - "match": match the given Dictionary with the one pass on argument
 *
 * - "empty": match if the give Dictionary is empty
 *
 * @returns true or false depend of the select conditions
 *
 * @see {@link https://lodash.com/docs/4.17.15#every | lodash every}
 * @see {@link https://lodash.com/docs/4.17.15#some | lodash some}
 * @see {@link https://lodash.com/docs/4.17.15#isMatch | lodash isMatch}
 * @see {@link https://lodash.com/docs/4.17.15#isEmpty | lodash isEmpty}
 */
export default function<T extends object, A extends ActionNames> (
  this: T,
  select: A,
  ...args: Parameters<Actions<T>[A]>
): ReturnType<Actions<T>[A]> {
  return (actions[select] as any)(this, ...args as any[]);
}
