import { type Equal, type Expect, init } from 'tests';
init();

describe('Array.prototypes.asindex()', () => {
  const array = [ 'test', 'bar', 'foo', 'foobar', 'barfoo' ];

  it('at index 1', () => {
    const res = array.asindex(1);
    expect(res).toEqual('bar');
    type _Result = Expect<Equal<typeof res, string>>;
  });

  it('at array.length-1', () => {
    const res = array.asindex(array.length - 1);
    type _Result = Expect<Equal<typeof res, string>>;
  });

  it('at findindex(-1)', () => {
    const res = array.asindex(-1);
    type _Result = Expect<Equal<typeof res, string>>;
  });

  it('at findindex(1) with empty array', () => {
    const res = [].asindex(1);
    expect(res).toEqual(undefined);

    // type _Result = Expect<Equal<typeof res, never>>; not working with vue-tsc WTF
  });
});
