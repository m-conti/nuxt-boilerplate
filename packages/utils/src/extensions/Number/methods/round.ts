import {
  round,
  ceil,
  floor,
} from '../../../libraries/Number';


const actions = {
  nearest: round,
  up: ceil,
  down: floor,
};

/**
 * Calculates n rounded (near|down|up) to precision.
 * @param action "nearest" give the nearest number | "up" the next number | "down" the previous number
 * @param precision The precision to round to.
 * @returns Returns the rounded number.
 *
 * @see {@link https://lodash.com/docs/4.17.15#round | lodash round}
 * @see {@link https://lodash.com/docs/4.17.15#ceil | lodash ceil}
 * @see {@link https://lodash.com/docs/4.17.15#floor | lodash floor}
 */
export default function<A extends keyof typeof actions> (
  this: number,
  action: A = 'nearest' as A,
  precision: ParametersOmitFirst<(typeof actions)[A]>[0],
): number {
  return actions[action](this, precision);
}
