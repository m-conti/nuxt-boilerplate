import type * as methods from '.';

declare global {
  namespace Number {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key] };
  }
  interface Number extends Number.Extensions, All.Extensions {}
}
