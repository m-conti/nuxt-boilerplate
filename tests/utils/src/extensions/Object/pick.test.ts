import {
  type Equal,
  type Expect,

  init,

  user1,
  type TestUser,
  usersDict,
  usersArray,
} from 'tests';

init();

describe('Object.prototype.aspick()', () => {
  it('pick', () => {
    const res1 = user1.aspick('name');
    const res2 = user1.aspick([ 'name', 'age' ]);
    const res3 = usersDict.aspick('user1');
    const res4 = usersArray.aspick(0);
    const res5 = user1.aspick((v) => typeof v === 'number');

    expect(res1).toEqual({ name: 'fred' });
    expect(res2).toEqual({ name: 'fred', age: 48 });
    expect(res3).toEqual({ user1: user1 });
    expect(res4).toEqual({ 0: user1 });
    expect(res5).toEqual({ age: 48 });

    type _RRes1 = Expect<Equal<typeof res1, { 'name': string }>>;
    type _RRes2 = Expect<Equal<typeof res2, Pick<TestUser, 'name'> | Pick<TestUser, 'age'>>>; // ?  { "name": string, "age": number }
    type _RRes3 = Expect<Equal<typeof res3, { user1: TestUser }>>;
    type _RRes4 = Expect<Equal<typeof res4, { 0: TestUser }>>;
    type _RRes5 = Expect<Equal<typeof res5, Partial<TestUser>>>;
  });
});
