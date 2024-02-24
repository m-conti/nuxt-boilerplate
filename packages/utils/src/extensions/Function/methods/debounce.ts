import { debounce, throttle } from '../../../libraries/Function';

const actions = {
  single: debounce,
  repeat: throttle,
};

type Actions<F extends(...args: unknown[]) => unknown = () => void> = {
  single: typeof debounce<F>;
  repeat: typeof throttle<F>;
};

type ActionNames = keyof Actions;

/**
 * Creates a debounced function that delays invoking func until after wait milliseconds have elapsed since the last time the debounced function was invoked. The debounced function comes with a cancel method to cancel delayed func invocations and a flush method to immediately invoke them. Provide options to indicate whether func should be invoked on the leading and/or trailing edge of the wait timeout. The func is invoked with the last arguments provided to the debounced function. Subsequent calls to the debounced function return the result of the last func invocation.
 * Note: If leading and trailing options are true, func is invoked on the trailing edge of the timeout only if the debounced function is invoked more than once during the wait timeout.
 * @param action Select the debounce implementation "single": debounce logic | "repeat": throttle logic
 * @returns Returns the new debounced function.
 *
 * @see {@link https://lodash.com/docs/4.17.15#debounce | lodash debounce}
 * @see {@link https://lodash.com/docs/4.17.15#throttle | lodash throttle}
 */
export default function<F extends (...args: unknown[]) => unknown, A extends ActionNames>(
  this: F,
  action: A,
  ...args: ParametersOmitFirst<Actions<F>[A]>
): ReturnType<Actions<F>[A]> {
  return (actions[action] as any)(this, ...args);
}
