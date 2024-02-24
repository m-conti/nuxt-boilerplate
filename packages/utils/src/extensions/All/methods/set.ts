
import { set } from '../../../libraries/Dictionary';


/**
 * @description Sets the value at path of object. If a portion of path doesn't exist, it's created.
 *              Arrays are created for missing index properties while objects are created for all other missing properties.
 * @param this The object to modify.
 * @param path The path of the property to set.
 * @param value The value to set.
 * @returns
 *
 * @see {@link https://lodash.com/docs/4.17.15#set | lodash set}
 */
export default function<T extends object> (
  this: T extends unknown[] ? T : T extends ReadonlyArray<unknown> ? never : T,
  path: ParametersOmitFirst<typeof set<T>>[0],
  value: ParametersOmitFirst<typeof set<T>>[1],
): ReturnType<typeof set<T>> {
  return set(this, path, value);
}
