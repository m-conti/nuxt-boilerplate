import {
  type Equal,
  type Expect,

  init,

  usersArray,
  usersConstArray,
  usersDict,
  usersDictRecord,
} from 'tests';

init();

describe('All.prototypes.asset', () => {
  const array = 'abcdefghijklmnopqrstuv'.split('');
  const obj = { a: 'test', b: 'foo' };

  it('test', () => {
    // ? if it has a different type of item shouldn't it be a any[] or (TestUser|otherType)[]
    const res1 = usersArray.asset('[0].name', 'test');
    // @ts-expect-error
    const res2 = usersConstArray.asset(0, {});
    const res3 = usersArray.asset('[1]', { test: 'test' });
    const res4 = array.asset('[0]', null);
    const res5 = usersDict.asset('user3.name', 'foobar');
    const res6 = usersDictRecord.asset('user4.name', 'paul');
    const res7 = obj.asset('a', 'bar');

    expect(res1[0].name).toEqual('test');
    expect(res3.asget('[1].test')).toEqual('test');
    expect(res4[0]).toBeNull();
    expect(res5.user3.name).toEqual('foobar');
    expect(res6.user4.name).toEqual('paul');
    expect(res7.a).toEqual('bar');
  });
});
