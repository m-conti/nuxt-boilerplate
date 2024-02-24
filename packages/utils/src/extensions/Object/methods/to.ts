import {
  keys,
  values,
} from 'lodash-es';


const actions = {
  values,
  keys,
};

/**
 * @description return the keys or the values of an Object
 * @param {T[]} this object to iterate in
 * @param {string} action defines if will iterate on 'values' or on 'keys'
 * @returns {T} Returns the matched element, else undefined.
 *
 * @see {@link https://lodash.com/docs/4.17.15#find | lodash find}
 * @see {@link https://lodash.com/docs/4.17.15#findKey | lodash findKey}
 */
export default function <
  T extends object,
  A extends keyof typeof actions,
> (
  this: T,
  action: A,
): A extends 'values' ? ValueOf<T>[] : ToString<KeyOf<T>>[] {
  return (actions[action] as any)(this);
}
