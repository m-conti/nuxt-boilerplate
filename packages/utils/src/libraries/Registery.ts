import {
  each,
  cloneDeep,
} from './Dictionary';

interface MemoryRegistery {
  timeouts: number[];
  intervals: number[];
  events: Map<EventTarget, Record<keyof HTMLElementEventMap, ((...args: any[]) => any)[]>>;
}

const registry: MemoryRegistery = {
  timeouts: [],
  intervals: [],
  events: new Map(),
};

/*
**  TIMEOUTS
*/

const setTimeout = (action: Function, timeout?: number, ...params: any[]): number => {
  const timeoutId = window.setTimeout(() => { clearTimeout(timeoutId); action(); }, timeout, ...params);
  registry.timeouts.push(timeoutId);
  return timeoutId;
};

const clearTimeout = (timeoutId: number) => {
  if (!registry.timeouts.includes(timeoutId))
    return console.warn('Clear Timeout\n', `ID ${timeoutId} not found`);
  registry.timeouts = registry.timeouts.filter(id => id !== timeoutId);
  window.clearTimeout(timeoutId);
};

const clearTimeouts = () => {
  registry.timeouts.forEach(timeoutId => { clearTimeout(timeoutId); });
};

/*
**  INTERVALS
*/

const setInterval = (action: Function, interval: number, ...params: any[]): number => {
  const intervalId = window.setInterval(action, interval, params);
  registry.intervals.push(intervalId);
  return intervalId;
};

const clearInterval = (intervalId: number) => {
  if (!registry.intervals.includes(intervalId))
    return console.warn('Clear Interval\n', `ID ${intervalId} not found`);
  registry.intervals = registry.intervals.filter(id => id !== intervalId);
  window.clearInterval(intervalId);
};

const clearIntervals = () => {
  registry.intervals.forEach(intervalId => { clearInterval(intervalId); });
};

/*
**  EVENTS
*/

const addEventListener = <E extends keyof HTMLElementEventMap>(
  target: EventTarget | undefined,
  event: E,
  handler: (this: EventTarget, ev: HTMLElementEventMap[E]) => any,
  options?: boolean | EventListenerOptions,
) => {
  if (!target) return;

  target.addEventListener(event, handler as any, options);
  if (!registry.events.has(target)) registry.events.set(target, {} as any);
  const targetEvents = registry.events.get(target)!;
  targetEvents[event] = targetEvents[event] ?? [];
  targetEvents[event].push(handler);
};

const unprotectedRemoveEventListener = <E extends keyof HTMLElementEventMap>(
  target: EventTarget,
  event: E,
  handler: (this: EventTarget, ev: HTMLElementEventMap[E]) => any,
  targetEvents?: Record<string, EventListener[]>,
  options?: boolean | EventListenerOptions,
) => {
  if (!targetEvents)
    // eslint-disable-next-line no-param-reassign
    targetEvents = registry.events.get(target)!;
  targetEvents[event] = targetEvents[event].filter((fn) => fn !== handler);
  target.removeEventListener(event, handler as any, options);

  if (targetEvents[event].length === 0) {
    delete targetEvents[event];
    if (Object.keys(targetEvents).length === 0)
      registry.events.delete(target);
  }
};

const removeEventListener = <E extends keyof HTMLElementEventMap>(
  target: EventTarget | undefined,
  event: E,
  handler: (this: EventTarget, ev: HTMLElementEventMap[E]) => any,
  options?: boolean | EventListenerOptions,
) => {
  if (!target) return;

  if (!registry.events.has(target))
    return console.warn('Remove Event\n', 'Target not found\n', 'Target : ', target, `\nEvent : ${event}`, '\nHandler : ', handler.toString());
  const targetEvents = registry.events.get(target)!;
  if (!targetEvents[event])
    return console.warn('Remove Event\n', 'Event not found\n', 'Target : ', target, `\nEvent : ${event}`, '\nHandler : ', handler.toString());
  if (!targetEvents[event].includes(handler))
    return console.warn('Remove Event\n', 'Handler not found\n', 'Target : ', target, `\nEvent : ${event}`, '\nHandler : ', handler.toString());

  unprotectedRemoveEventListener(target, event, handler, targetEvents, options);
};

const removeEventListeners = <E extends keyof HTMLElementEventMap>(target?: EventTarget, event?: E): void => {
  // step 1
  if (!target) return registry.events.forEach((_, target) => removeEventListeners(target));
  // protection target
  if (!registry.events.has(target))
    return console.warn('Remove Events', 'Target not found\n', 'Target : ', target, `\nEvent : ${event}`);
  const targetEvents = registry.events.get(target)!;
  // step 2
  if (!event) return void each(targetEvents as any, (_, name) => removeEventListeners(target, name as keyof HTMLElementEventMap));
  // protection event
  if (!targetEvents[event])
    return console.warn('Remove Events', 'Event not found\n', 'Target : ', target, `\nEvent : ${event}`);
  // step 3
  targetEvents[event].forEach((fn) => { unprotectedRemoveEventListener(target, event, fn, targetEvents); });
};

/*
**  CLEAR
*/

const clear = () => {
  clearTimeouts();
  clearIntervals();
  removeEventListeners();
};

/*
**  DEBUG
*/

const dump = () => {
  console.log(cloneDeep(registry));
};

const Registery = {
  // Timeouts
  setTimeout,
  clearTimeout,
  clearTimeouts,

  // Intervals
  setInterval,
  clearInterval,
  clearIntervals,


  // Event listeners
  addEventListener,
  removeEventListener,
  removeEventListeners,

  // Clear everything (to be called upon app close for proper cleanup)
  clear,

  // debug
  dump,
};

export default Registery;
