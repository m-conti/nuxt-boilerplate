import {
  type Equal,
  type Expect,

  init,

  usersDictRecord,

  user1,
  type TestUser,
  type TestDataUser,
} from 'tests';

init();

describe('Object.prototype.asfilter()', () => {
  const obj1 = { a: 'foo', b: 'bar', c: 10 };

  it('filter', () => {
    const res1 = usersDictRecord.asfilter((value) => value.name === 'james');
    const res2 = usersDictRecord.asfilter((value) => value.name === 'fred');
    const res3 = user1.asfilter((v) => typeof v === 'number' || typeof v === 'string');
    const res4 = obj1.asfilter((v) => typeof v === 'string');
    const res5 = user1.asfilter((v) => typeof v === 'undefined');

    expect(res1).toEqual([]);
    expect(res2).toEqual([user1]);
    expect(res3).toEqual([ 'fred', 48 ]);
    expect(res4).toEqual([ 'foo', 'bar' ]);
    expect(res5).toEqual([undefined]);

    type _RRes1 = Expect<Equal<typeof res1, TestUser[]>>;
    type _RRes2 = Expect<Equal<typeof res2, TestUser[]>>;
    type _RRes3 = Expect<Equal<typeof res3, (string | number | boolean | Date | TestDataUser | undefined)[]>>;
    type _RRes4 = Expect<Equal<typeof res4, (string | number)[]>>;
    type _RRes5 = Expect<Equal<typeof res5, (string | number | boolean | Date | TestDataUser | undefined)[]>>;
  });
});
