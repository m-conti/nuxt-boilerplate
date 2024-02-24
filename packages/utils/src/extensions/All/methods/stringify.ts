
import {
  stringify,
} from '../../../libraries/Dictionary';

export default function<T> (
  this: T,
): string {
  return stringify(this);
}
