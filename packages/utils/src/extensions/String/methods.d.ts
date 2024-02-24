import type * as methods from '.';

export {};

declare global {
  namespace String {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key] };
  }
  interface String extends String.Extensions, All.Extensions {}
}
