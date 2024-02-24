import {
  upperFirst,
  camelCase,
  snakeCase,
} from 'lodash-es';
import { destr, safeDestr } from 'destr';

export {
  camelCase,
  snakeCase,
  kebabCase,
  startCase,
  lowerCase,
  upperCase,
  capitalize,

  pad,
  padStart,
  padEnd,

  trim,
  trimStart,
  trimEnd,
} from 'lodash-es';

export const pascalCase = (s: string) => upperFirst(camelCase(s));
export const macroCase = (s: string) => snakeCase(s).toUpperCase();

export const destringify = <T>(s: string, safe: boolean = true) => (safe ? safeDestr<T>(s) : destr<T>(s));
