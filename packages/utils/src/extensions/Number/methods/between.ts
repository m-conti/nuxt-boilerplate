import { inRange } from '../../../libraries/Number';

/**
 * Return if the number is in range.
 * @param lower — The lower bound.
 * @param upper — The upper bound.
 * @returns — Returns if the number is between.
 *
 * @see {@link https://lodash.com/docs/4.17.15#clamp | lodash clamp}
 */
export default function (
  this: number,
  first: number,
  second: number = 0,
): ReturnType<typeof inRange> {
  if (first > second)
    return (inRange as any)(this, second, first);
  return (inRange as any)(this, first, second);
}
