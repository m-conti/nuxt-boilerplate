import {
  type Equal,
  type Expect,

  init,
} from 'tests';

init();

describe('Array.prototypes.asfirst()', () => {
  it('on empty array', () => {
    expect([].asfirst()).toBeUndefined();
  });
  it('on array', () => {
    expect([ 'first', 'second' ].asfirst()).toEqual('first');
  });
  it('type on empty array', () => {
    const result = [].asfirst();
    // type _Result = Expect<Equal<typeof result, never>>; not working with vue-tsc WTF
  });
  it('type on array', () => {
    const result = [ 'first', 'second' ].asfirst();
    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('type on array readonly', () => {
    const result = ([ 'first', 'second' ] as const).asfirst();
    type _Result = Expect<Equal<typeof result, 'first' | 'second'>>;
  });
});
