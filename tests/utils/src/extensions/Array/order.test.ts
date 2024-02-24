import {
  type Equal,
  type Expect,
  type TestUser,

  init,

  user1,
  user2,
  user3,
  user4,

  usersArray,
  usersConstArray,
} from 'tests';

init();

describe('Array.prototypes.asorder()', () => {
  it('order string asc', () => {
    expect(usersArray.asorder('name', 'asc')).toEqual([ user4, user2, user1, user3 ]);
  });
  it('order bool asc + date desc', () => {
    expect(usersArray.asorder([ 'admin', 'createdAt' ], [ 'asc', 'desc' ])).toEqual([ user2, user3, user1, user4 ]);
  });
  it('order on missing field for some', () => {
    expect(usersArray.asorder(['age'], [true])).toEqual([ user2, user3, user1, user4 ]);
  });
  it('order with function', () => {
    expect(usersArray.asorder((value) => value.age ?? 1000, [true])).toEqual([ user2, user3, user1, user4 ]);
  });
  it('order types', () => {
    const result = usersArray.asorder((value, key) => {
      type _Value = Expect<Equal<typeof value, TestUser>>;
      type _Key = Expect<Equal<typeof key, number>>;
    });
    type _Result = Expect<Equal<typeof result, typeof usersArray>>;
  });
  it('const order types', () => {
    const result = usersConstArray.asorder((value, key) => {
      type _Value = Expect<Equal<typeof value, TestUser>>;
      type _Key = Expect<Equal<typeof key, 0 | 1 | 2 | 3>>;
    });
    type _Result = Expect<Equal<typeof result, typeof usersConstArray>>;
  });
});
