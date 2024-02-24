import {
  map,
  mapKeys,
  mapValues,
} from '../../../libraries/Dictionary';

const actions = {
  value: mapValues,
  key: mapKeys,
  array: map,
};

type ActionTypes<T extends object, R = unknown> = {
  value: { ret: Record<KeyOf<T>, R>; val: ValueOf<T>; key: KeyOf<T> };
  key: { ret: Record<string, ValueOf<T>>; val: ValueOf<T>; key: `${KeyProtected<KeyOf<T>>}` };
  array: { ret: R[]; val: ValueOf<T>; key: KeyOf<T> };
};

type ActionNames = keyof typeof actions;

/**
 * @description Iterate on every item of the array an create a new array with the return values
 * @param action is the logic you want to adopt
 * @param iteratee the function pass to iterate each element
 * @return a new array/object done with the iterate function
 *
 * @see {@link https://lodash.com/docs/4.17.15#map | lodash map}
 * @see {@link https://lodash.com/docs/4.17.15#mapKeys | lodash mapKeys}
 * @see {@link https://lodash.com/docs/4.17.15#mapValues | lodash mapValues}
 */
export default function<
  T extends object,
  F extends (value: ActionTypes<T, unknown>[A]['val'], key: ActionTypes<T, unknown>[A]['key']) => unknown,
  R extends ActionTypes<T, ReturnType<F>>[A]['ret'],
  A extends ActionNames = ActionNames,
>(
  this: T,
  action: A,
  iteratee: F,
): R {
  return (actions[action] as any)(this, iteratee);
}
