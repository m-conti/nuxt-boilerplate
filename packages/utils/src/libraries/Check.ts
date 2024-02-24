export {
  isArguments,
  isArray,
  isBoolean,
  isDate,
  isSafeInteger,
  isPlainObject,
  isElement,
  isEmpty,
  isEqual,
  isEqualWith,
  isFinite,
  isFunction,
  isInteger,
  isLength,
  isMap,
  isNil,
  isObject,
  isNumber,
  isRegExp,
  isSet,
  isString,
  isMatch,

  every,
  some,
} from 'lodash-es';

export const isNumeric = (n: string) => !isNaN(parseFloat(n));
