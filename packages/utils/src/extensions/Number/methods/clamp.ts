import { clamp } from '../../../libraries/Number';

/**
 * Clamps number within the inclusive lower and upper bounds.
 * @param lower — The lower bound.
 * @param upper — The upper bound.
 * @returns — Returns the clamped number.
 *
 * @see {@link https://lodash.com/docs/4.17.15#clamp | lodash clamp}
 */
export default function (
  this: number,
  limit1: number,
  limit2?: number,
): ReturnType<typeof clamp> {
  return (clamp as any)(this, limit1, limit2);
}
