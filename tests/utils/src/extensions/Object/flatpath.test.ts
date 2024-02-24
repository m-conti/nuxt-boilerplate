import {
  type Equal,
  type Expect,
  type TestDataUser,
  type TestUser,

  init,

  user1,
  user2,
  user3,
  user4,

  usersArray,
  usersConstArray,
  usersDict,
  usersDictRecord,
} from 'tests';

init();

describe('Object.prototypes.asflatpath()', () => {
  it('flat dictionary', () => {
    const result = usersDict.asflatpath();
    expect(result).toEqual({
      'user1.name': 'fred',
      'user1.age': 48,
      'user1.admin': true,
      'user1.createdAt': new Date(2020, 10),
      'user1.data.roles.0': 'SUPER_USER',
      'user1.data.height': 170,
      'user2.name': 'barney',
      'user2.age': 34,
      'user2.admin': false,
      'user2.createdAt': new Date(2020, 12),
      'user2.data.roles.0': 'TESTER',
      'user2.data.height': 160,
      'user3.name': 'jacque',
      'user3.age': 40,
      'user3.admin': false,
      'user3.createdAt': new Date(2020, 2),
      'user3.data.height': 140,
      'user4.name': 'alfred',
      'user4.admin': true,
      'user4.createdAt': new Date(2020, 6),
      'user4.data.roles.0': 'SUPER_USER',
      'user4.data.roles.1': 'TESTER',
      'user4.data.height': 140,
    });
  });
  it('flat array', () => {
    const result = usersArray.asflatpath();
    expect(result).toEqual({
      '0.name': 'fred',
      '0.age': 48,
      '0.admin': true,
      '0.createdAt': new Date(2020, 10),
      '0.data.roles.0': 'SUPER_USER',
      '0.data.height': 170,
      '1.name': 'barney',
      '1.age': 34,
      '1.admin': false,
      '1.createdAt': new Date(2020, 12),
      '1.data.roles.0': 'TESTER',
      '1.data.height': 160,
      '2.name': 'jacque',
      '2.age': 40,
      '2.admin': false,
      '2.createdAt': new Date(2020, 2),
      '2.data.height': 140,
      '3.name': 'alfred',
      '3.admin': true,
      '3.createdAt': new Date(2020, 6),
      '3.data.roles.0': 'SUPER_USER',
      '3.data.roles.1': 'TESTER',
      '3.data.height': 140,
    });
  });
  it('typeof flat dictionary', () => {
    const result = usersDict.asflatpath();
    // result.
    // type _KeyResult = Expect<Equal<KeyOf<typeof result>,
    //   'user1.name'
    //   | 'user1.age'
    //   | 'user1.admin'
    //   | 'user1.createdAt'
    //   | 'user1.data.roles.0'
    //   | 'user1.data.height'
    //   | 'user2.name'
    //   | 'user2.age'
    //   | 'user2.admin'
    //   | 'user2.createdAt'
    //   | 'user2.data.roles.0'
    //   | 'user2.data.height'
    //   | 'user3.name'
    //   | 'user3.age'
    //   | 'user3.admin'
    //   | 'user3.createdAt'
    //   | 'user3.data.height'
    //   | 'user4.name'
    //   | 'user4.admin'
    //   | 'user4.createdAt'
    //   | 'user4.data.roles.0'
    //   | 'user4.data.roles.1'
    //   | 'user4.data.height'
    // >>;
    // type _KeyResult = Expect<Equal<KeyOf<typeof result>,
    //   '0.name'
    //   | '0.age'
    //   | '0.admin'
    //   | '0.data.roles.0'
    //   | '0.data.height'
    //   | '1.name'
    //   | '1.age'
    //   | '1.admin'
    //   | '1.data.roles.0'
    //   | '1.data.height'
    //   | '2.name'
    //   | '2.age'
    //   | '2.admin'
    //   | '2.data.height'
    //   | '3.name'
    //   | '3.admin'
    //   | '3.data.roles.0'
    //   | '3.data.roles.1'
    //   | '3.data.height'
    // >>;
  });
});
