import type * as methods from '.';

declare global {
  namespace Object {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key] };
  }
  interface Object extends Object.Extensions, All.Extensions {}
}
