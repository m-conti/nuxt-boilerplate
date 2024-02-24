import {
  pad,
  padStart,
  padEnd,
} from '../../../libraries/String';

const actions = {
  center: pad,
  start: padStart,
  end: padEnd,
};

type Actions = typeof actions;

/**
 * @description Add the given char (at the beginning, end or both) to make the string reach the given length
 *
 * @param {string} this the string that will be modified
 *
 * @param {A} select the type of pad the function should do :
 *    - 'center' : to add character at the beginning and the end of the string
 *    - 'start' : to add character at the beginning of the string
 *    - 'end' : to add character at the end of the string
 *
 * @param {array[string|number|undefined]} args params of the pad method:
 *    - {number} length: length that the string has to reach
 *    - {string} chars: char that will be added to make the string reach the length
 *
 * @returns {string} Return the string filled with the given char at the length given
 *
 * @see {@link https://lodash.com/docs/4.17.15#pad | lodash pad}
 * @see {@link https://lodash.com/docs/4.17.15#padStart | lodash padStart}
 * @see {@link https://lodash.com/docs/4.17.15#padEnd | lodash padEnd}
 */
export default function <A extends keyof Actions = 'center'> (
  this: string,
  select: A = 'center' as A,
  ...args: ParametersOmitFirst<Actions[A]>
): ReturnType<Actions[A]> {
  return (actions[select]?.(this, ...args as any) ?? this) as any;
}
