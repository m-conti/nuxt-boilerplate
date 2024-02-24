import type * as methods from '.';

declare global {
  namespace All {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key] };
  }
}
