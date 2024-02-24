import {
  next,
} from '../../../libraries/Function';

export default function<T extends (...args: any[]) => any, R>(
  this: T,
  nextFunc: First<OmitFirst<Parameters<typeof next<T, R>>>>,
): ReturnType<typeof next<T, ReturnType<typeof nextFunc>>> {
  return next(this, nextFunc);
}
