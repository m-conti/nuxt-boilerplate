import type * as methods from '.';

declare global {
  namespace Function {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key] };
  }
  interface Function extends Function.Extensions, All.Extensions {}
}
