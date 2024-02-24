import Registery from '../../../libraries/Registery';


export default function<
  T extends Element | Document,
  E extends keyof HTMLElementEventMap
> (
  this: T,
  name: E,
  handler: (this: EventTarget, ev: HTMLElementEventMap[E]) => any,
): void {
  return Registery.addEventListener(this, name, handler);
}
