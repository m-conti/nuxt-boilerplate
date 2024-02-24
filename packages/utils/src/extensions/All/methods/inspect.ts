
import {
  inspect,
  type InspectOptions,
} from '../../../libraries/Debug';

export default function<T> (
  this: T,
  options?: InspectOptions,
): string {
  return inspect(this, {
    depth: 10,
    ...options,
  });
}
