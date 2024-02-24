
import { get } from '../../../libraries/Dictionary';

/**
 *
 * @param paths is array of paths or just one path
 * @param defaultValue is the value return if no path are found
 * @returns the first value matching with the paths given or the default value
 *
 * @see {@link https://lodash.com/docs/4.17.15#get | lodash get}
 */
export default function<
  T extends object,
  K extends string,
  R,
> (
  this: T,
  paths: Many<K>,
  defaultValue?: R,
): R {
  if (!(paths instanceof Array)) return get(this, paths, defaultValue) as any;
  for (const path of paths) {
    const value = get(this, path);
    if (value) return value as any;
  }
  return defaultValue as any;
}
