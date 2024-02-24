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

describe('Object.prototypes.asreduce()', () => {
  it('reduce left for Dictionary', () => {
    const result = usersDict.asreduce((acc, user, key) => `${acc}-${key}-${user.name}`, 'start');

    expect(result).toBe('start-user1-fred-user2-barney-user3-jacque-user4-alfred');
    type _ = Expect<Equal<typeof result, string>>;
  });
  it('reduce left for Array', () => {
    const result = usersArray.asreduce((acc, user, key) => acc + (user.age ?? key), 25);
    expect(result).toBe(25 + 48 + 34 + 40 + 3);
  });
  it('reduce left for Dictionary', () => {
    const result = usersDict.asreduce((acc, user, key) => `${acc ? `${acc}-` : ''}${key}-${user.name}`, 'start', 'right');
    expect(result).toBe('start-user4-alfred-user3-jacque-user2-barney-user1-fred');
  });
  it('reduce left for Array', () => {
    const result = usersArray.asreduce((acc, user, key) => `${acc}-${user.age ?? key}`, '25', 'right');
    expect(result).toBe('25-3-40-34-48');
  });
  it('reduce check types Dictionary', () => {
    const result = usersDict.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 'user1' | 'user2' | 'user3' | 'user4'>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('reduce check types DictionaryRecord', () => {
    const result = usersDictRecord.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, string>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('reduce check types const Array', () => {
    const result = usersConstArray.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 0 | 1 | 2 | 3>>;
      return acc;
    }, '');
    const data = usersDict.asflatpath();

    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('reduce check types Array', () => {
    const result = usersArray.asreduce((acc, user, key) => {
      type _Acc = Expect<Equal<typeof acc, string>>;
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, number>>;
      return acc;
    }, '');

    type _Result = Expect<Equal<typeof result, string>>;
  });
});
