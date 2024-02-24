import { delay } from '../../../libraries/Function';

/**
 * Invokes func after wait milliseconds. Any additional arguments are provided to func when it's invoked.
 * @param wait The number of milliseconds to delay invocation.
 * @returns Returns the timer id.
 *
 * @see {@link https://lodash.com/docs/4.17.15#delay | lodash delay}
 */
export default function<T extends (...args: unknown[]) => unknown = (...args: unknown[]) => unknown>(
  this: T,
  wait: ParametersOmitFirst<typeof delay>[0],
  ...args: ParametersOmitFirst<OmitFirstArg<typeof delay>>
): ReturnType<typeof delay> {
  return delay(this, wait, ...args);
}
