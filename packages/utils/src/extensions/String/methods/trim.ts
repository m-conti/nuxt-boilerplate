import {
  trim,
  trimStart,
  trimEnd,
} from '../../../libraries/String';

const actions = {
  center: trim,
  start: trimStart,
  end: trimEnd,
};

type Actions = typeof actions;

/**
 * @description Remove the given character (at the beginning, end, or both) of the given string
 *
 * @param {string} this the string that will be modified
 *
 * @param {A} select the type of trim the function should do :
 *    - "center" : to remove character at the beginning and the end of the string
 *    - "start" : to remove character at the beginning of the string
 *    - "end" : to remove character at the end of the string
 *
 * @param {string} char the char to remove from the string. Default value is a whitespace
 *
 * @returns {string} Return a string without the given character following the action given
 *
 * @see {@link https://lodash.com/docs/4.17.15#trim | lodash trim}
 * @see {@link https://lodash.com/docs/4.17.15#trimStart | lodash trim}
 * @see {@link https://lodash.com/docs/4.17.15#trimEnd | lodash trim}
 */
export default function<A extends keyof Actions = 'center'> (
  this: string,
  select: A,
  char?: string,
): string {
  return (actions[select]?.(this, char) ?? this) as any;
}
