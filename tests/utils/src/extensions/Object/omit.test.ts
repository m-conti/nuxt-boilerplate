import {
  type Equal,
  type Expect,

  init,

  usersDictRecord,

  user1,
  user2,
  type TestUser,
  user3,
  usersDict,
  user4,
  usersArray,
} from 'tests';

init();

describe('Object.prototype.asomit()', () => {
  it('omit', () => {
    const res1 = user1.asomit([ 'name', 'age' ]);
    const res2 = usersDict.asomit(['user2']);
    const res3 = usersArray.asomit([ 0, 2 ]);
    const res4 = user1.asomit((v) => typeof v === 'string');

    expect(res1).toEqual({ admin: true, createdAt: new Date(2020, 10), data: { roles: ['SUPER_USER'], height: 170 }});
    expect(res2).toEqual({ user1: user1, user3: user3, user4: user4 });
    expect(res3).toEqual({ ...Array.prototype, '1': user2, '3': user4 }); // Hacks because it transfer all array methods when it transform the array to dict
    expect(res4).toEqual({ age: 48, admin: true, createdAt: new Date(2020, 10), data: { roles: ['SUPER_USER'], height: 170 }});

    type _RRes1 = Expect<Equal<typeof res1, Omit<TestUser, 'name' | 'age'>>>;
    type _RRes2 = Expect<Equal<typeof res2, Omit<{ user1: TestUser; user3: TestUser; user4: TestUser }, 'user2'>>>;
    type _RRes3 = Expect<Equal<typeof res3, Omit<TestUser[], 0> | Omit<TestUser[], 2>>>;
    type _RRes4 = Expect<Equal<typeof res4, Partial<TestUser>>>;
  });
});
