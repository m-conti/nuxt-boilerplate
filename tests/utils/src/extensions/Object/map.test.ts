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

describe('Object.prototypes.asmap()', () => {
  it('map keys for Dictionary', () => {
    const result = usersDict.asmap('key', (user, key) => `${key}-${user.name}`);
    expect(result).toMatchObject({ 'user1-fred': user1, 'user2-barney': user2, 'user3-jacque': user3, 'user4-alfred': user4 });
  });
  it('map keys for Array', () => {
    const result = usersArray.asmap('key', (user, key) => `user${1 + Number(key)}-${user.name}`);
    expect(result).toMatchObject({ 'user1-fred': user1, 'user2-barney': user2, 'user3-jacque': user3, 'user4-alfred': user4 });
  });
  it('map values for Dictionary', () => {
    const result = usersDict.asmap('value', (user, key) => [`${key}-${user.name}`]);
    expect(result).toMatchObject({ 'user1': ['user1-fred'], 'user2': ['user2-barney'], 'user3': ['user3-jacque'], 'user4': ['user4-alfred']});
  });
  it('map values for Array', () => {
    const result = usersArray.asmap('value', (user, key) => `user${1 + Number(key)}-${user.name}`);
    expect(result).toMatchObject({ '0': 'user1-fred', '1': 'user2-barney', '2': 'user3-jacque', '3': 'user4-alfred' });
  });
  it('map array for Dictionary', () => {
    const result = usersDict.asmap('array', (user, key) => `${key}-${user.name}`);
    expect(result).toMatchObject([ 'user1-fred', 'user2-barney', 'user3-jacque', 'user4-alfred' ]);
  });
  it('map array for Array', () => {
    const result = usersArray.asmap('array', (user, key) => `user${1 + Number(key)}-${user.name}`);
    expect(result).toMatchObject([ 'user1-fred', 'user2-barney', 'user3-jacque', 'user4-alfred' ]);
  });
  it('map check types Dictionary', () => {
    const result = usersDict.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 'user1' | 'user2' | 'user3' | 'user4'>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('map check types DictionaryRecord', () => {
    const result = usersDictRecord.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, string>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('map check types const Array', () => {
    const result = usersConstArray.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 0 | 1 | 2 | 3>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('map check types Array', () => {
    const result = usersArray.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, number>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
});
