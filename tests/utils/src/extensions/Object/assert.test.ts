import {
  type Equal,
  type Expect,

  init,

  usersConstArray,

  user1,
} from 'tests';

init();

describe('All.prototypes.asassert()', () => {
  const array1 = [ 'foobar', null, true, 15 ];
  const array2: number[] = [ 1, 2, 4, 5, 6 ];

  it('every', () => {
    const res1 = array1.asassert('every', Boolean);
    const res2 = array2.asassert('every', (v) => v >= 1);
    const res3 = array2.asassert('every', (v) => v > 1);
    const res4 = array2.asassert('every', (v) => typeof v === 'number');

    expect(res1).toBeFalsy();
    expect(res2).toBeTruthy();
    expect(res3).toBeFalsy();
    expect(res4).toBeTruthy();

    type _RRes1 = Expect<Equal<typeof res1, boolean>>;
    type _RRes2 = Expect<Equal<typeof res2, boolean>>;
    type _RRes3 = Expect<Equal<typeof res3, boolean>>;
    type _RRes4 = Expect<Equal<typeof res4, boolean>>;
  });
  it('some', () => {
    const res1 = array1.asassert('some', Boolean);
    const res2 = array1.asassert('some', (v) => v === null);
    const res3 = user1.asassert('some', (v) => typeof v === 'number' && v < 50);
    const res4 = user1.asassert('some', (v) => typeof v === 'number' && v > 50);

    expect(res1).toBeTruthy();
    expect(res2).toBeTruthy();
    expect(res3).toBeTruthy();
    expect(res4).toBeFalsy();

    type _RRes1 = Expect<Equal<typeof res1, boolean>>;
    type _RRes2 = Expect<Equal<typeof res2, boolean>>;
    type _RRes3 = Expect<Equal<typeof res3, boolean>>;
    type _RRes4 = Expect<Equal<typeof res4, boolean>>;
  });
  it('none', () => {
    const res1 = array1.asassert('none', Boolean);
    const res2 = array2.asassert('none', (v) => typeof v === 'string');
    const res3 = array2.asassert('none', (v) => v >= 6);
    const res4 = array2.asassert('none', (v) => v > 6);

    expect(res1).toBeFalsy();
    expect(res2).toBeTruthy();
    expect(res3).toBeFalsy();
    expect(res4).toBeTruthy();

    type _RRes1 = Expect<Equal<typeof res1, boolean>>;
    type _RRes2 = Expect<Equal<typeof res2, boolean>>;
    type _RRes3 = Expect<Equal<typeof res3, boolean>>;
    type _RRes4 = Expect<Equal<typeof res4, boolean>>;
  });
  it('match', () => {
    const res1 = user1.asassert('match', { name: 'fred' });
    const res2 = user1.asassert('match', { name: 'bob' });
    const res3 = array1.asassert('match', ['foobar']);
    const res4 = array1.asassert('match', ['bar']);
    const res5 = array1.asassert('match', [ 'foobar', null, true, 15 ]);
    const res6 = array1.asassert('match', [ 'foobar', null, true, 15, 'test' ]);

    expect(res1).toBeTruthy();
    expect(res2).toBeFalsy();
    expect(res3).toBeTruthy();
    expect(res4).toBeFalsy();
    expect(res5).toBeTruthy();
    expect(res6).toBeFalsy();

    type _RRes1 = Expect<Equal<typeof res1, boolean>>;
    type _RRes2 = Expect<Equal<typeof res2, boolean>>;
    type _RRes3 = Expect<Equal<typeof res3, boolean>>;
    type _RRes4 = Expect<Equal<typeof res4, boolean>>;
    type _RRes5 = Expect<Equal<typeof res4, boolean>>;
    type _RRes6 = Expect<Equal<typeof res4, boolean>>;
  });
  it('empty', () => {
    const res1 = array1.asassert('empty');
    const res2 = [].asassert('empty');
    const res3 = {}.asassert('empty');
    const res4 = { a: 'b' }.asassert('empty');

    expect(res1).toBeFalsy();
    expect(res2).toBeTruthy();
    expect(res3).toBeTruthy();
    expect(res4).toBeFalsy();

    type _RRes1 = Expect<Equal<typeof res1, boolean>>;
    type _RRes2 = Expect<Equal<typeof res2, boolean>>;
    type _RRes3 = Expect<Equal<typeof res3, boolean>>;
    type _RRes4 = Expect<Equal<typeof res4, boolean>>;
  });
});
