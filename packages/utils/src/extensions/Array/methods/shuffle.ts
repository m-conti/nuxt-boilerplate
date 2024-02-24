import { shuffle } from '../../../libraries/Array';

/**
 * Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
 * @return Returns the new shuffled array.
 *
 * @see {@link https://lodash.com/docs/4.17.15#shuffle | lodash shuffle}
 */
export default function<T = unknown> (
  this: Array<T>,
): ReturnType<typeof shuffle> {
  return shuffle(this);
}
