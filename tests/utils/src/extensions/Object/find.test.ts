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

describe('Object.prototypes.asfind()', () => {
  it('find by value for Dictionary', () => {
    const result = usersDict.asfind((user) => (user.age ?? Infinity) < 35);
    expect(result).toEqual(user2);
  });
  it('find by value for Array', () => {
    const result = usersArray.asfind((user) => (user.age ?? Infinity) < 35);
    expect(result).toEqual(user2);
  });
  it('find by value for const Array', () => {
    const result = usersConstArray.asfind((user) => (user.age ?? Infinity) < 35);
    expect(result).toEqual(user2);
  });
  it('find by key for Dictionary', () => {
    const result = usersDict.asfind((user) => (user.age ?? Infinity) < 35, 'key');
    expect(result).toEqual('user2');
  });
  it('find by key for Array', () => {
    const result = usersArray.asfind((user) => (user.age ?? Infinity) < 35, 'key');
    expect(result).toEqual('1');
  });
  it('find by key for const Array', () => {
    const result = usersConstArray.asfind((user) => (user.age ?? Infinity) < 35, 'key');
    expect(result).toEqual('1');
  });
  it('find check types Dictionary', () => {
    const result = usersDict.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 'user1' | 'user2' | 'user3' | 'user4'>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'string').toBe(true);
      return (user.age ?? Infinity) < 35;
    });

    expect(usersArray.includes(result)).toBe(true);
    type _Result = Expect<Equal<typeof result, TestUser>>;
  });
  it('find check types DictionaryRecord', () => {
    const result = usersDictRecord.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, string>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'string').toBe(true);
      return (user.age ?? Infinity) < 35;
    });

    expect(usersArray.includes(result)).toBe(true);
    type _Result = Expect<Equal<typeof result, TestUser>>;
  });
  it('find check types Array', () => {
    const result = usersConstArray.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 0 | 1 | 2 | 3>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'number').toBe(true);
      return (user.age ?? Infinity) < 35;
    });

    expect(usersArray.includes(result)).toBe(true);
    type _Result = Expect<Equal<typeof result, TestUser>>;
  });
  it('find check types const Array', () => {
    const result = usersArray.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, number>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'number').toBe(true);
      return (user.age ?? Infinity) < 35;
    });

    expect(usersArray.includes(result)).toBe(true);
    type _Result = Expect<Equal<typeof result, TestUser>>;
  });
  it('find check types Dictionary', () => {
    const result = usersDict.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, 'user1' | 'user2' | 'user3' | 'user4'>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'string').toBe(true);
      return (user.age ?? Infinity) < 35;
    }, 'key');

    expect(typeof result === 'string').toBe(true);
    type _Result = Expect<Equal<typeof result, 'user1' | 'user2' | 'user3' | 'user4'>>;
  });
  it('find check types DictionaryRecord', () => {
    const result = usersDictRecord.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, string>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'string').toBe(true);
      return (user.age ?? Infinity) < 35;
    }, 'key');

    expect(typeof result === 'string').toBe(true);
    type _Result = Expect<Equal<typeof result, string>>;
  });
  it('find check types Array', () => {
    const result = usersArray.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, `${number}`>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'string').toBe(true);
      return (user.age ?? Infinity) < 35;
    }, 'key');

    expect(typeof result === 'string').toBe(true);
    type _Result = Expect<Equal<typeof result, `${number}`>>;
  });
  it('find check types const Array', () => {
    const result = usersConstArray.asfind((user, key) => {
      type _Value = Expect<Equal<typeof user, TestUser>>;
      type _Key = Expect<Equal<typeof key, '0' | '1' | '2' | '3'>>;
      expect(usersArray.includes(user)).toBe(true);
      expect(typeof key === 'string').toBe(true);
      return (user.age ?? Infinity) < 35;
    }, 'key');

    expect(typeof result === 'string').toBe(true);
    type _Result = Expect<Equal<typeof result, '0' | '1' | '2' | '3'>>;
  });
});
