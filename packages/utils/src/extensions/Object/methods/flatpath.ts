import {
  reduce,
} from '../../../libraries/Dictionary';

// FUNCTIONS
const flatten = <T extends object>(obj: T, delimiter = '.', prefix = '') => (reduce as any)(obj, (acc: Record<string, ValueOf<T>>, elem: unknown, key: KeyProtected<KeyOf<T>>) => {
  const path = prefix ? `${prefix}${delimiter}${key}` : `${key}`;
  const value = elem instanceof Object && !(elem instanceof Date) ? flatten(elem, delimiter, path) : { [path]: elem };
  return { ...acc, ...value };
}, {});

/**
 * return a new dictionary flat and set key as the path of the old object
 *
 * @param delimiter the string delimiter of path the new key default set at '.', it will give a key like: 'user.data.lang'
 * @returns Return the flat Dictionary
 *
 * @see {@link https://lodash.com/docs/4.17.15#flatten | lodash flatten}
 */
export default function<T extends object, D extends string = '.'> (this: T, delimiter: D = '.' as D): DeepFlat<T, D> {
  return flatten(this, delimiter);
}
