import type * as methods from '.';

declare global {
  namespace Array {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key]; };
  }
  interface Array<T> extends Array.Extensions, Object.Extensions, All.Extensions { }
  interface ReadonlyArray<T> extends Array.Extensions, Object.Extensions, Omit<All.Extensions, 'asset'> { }
}
