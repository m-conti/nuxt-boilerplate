
import {
  destringify,
} from '../../../libraries/String';

export default function<R> (
  this: string,
): ReturnType<typeof destringify<R>> {
  return destringify<R>(this);
}
