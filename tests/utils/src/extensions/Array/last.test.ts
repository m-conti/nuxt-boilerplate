import {
  type Equal,
  type Expect,

  init,
} from 'tests';

init();

describe('Array.prototypes.aslast()', () => {
  it('on empty array', () => {
    expect([].aslast()).toBeUndefined();
  });
  it('on array', () => {
    expect([ 'first', 'second' ].aslast()).toEqual('second');
  });
  it('type on empty array', () => {
    const result = [].aslast();
    // type _Result = Expect<Equal<typeof result, never>>; not working with vue-tsc WTF
  });
  it('type on array', () => {
    const result = [ 'first', 'second' ].aslast();
    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('type on array readonly', () => {
    const result = ([ 'first', 'second' ] as const).aslast();
    type _Result = Expect<Equal<typeof result, 'first' | 'second'>>;
  });
});
