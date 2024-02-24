import type * as methods from '.';

declare global {
  namespace Element {
    type Extensions = { [Key in keyof typeof methods as `as${Key}`]: typeof methods[Key] };
  }
  interface Element extends Element.Extensions, All.Extensions {}
  interface Document extends Element.Extensions, All.Extensions {}
}
