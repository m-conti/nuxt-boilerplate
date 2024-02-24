import {
  type Equal,
  type Expect,
  type TestDataUser,
  type TestUser,

  init,

  user1,

  usersArray,
  usersConstArray,
  usersDict,
  usersDictRecord,
} from 'tests';

init();

describe('Dictionary types', () => {
  it('KeyOf', () => {
    type _KeyArray = KeyOf<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, number>>;

    type _KeyConstArray = KeyOf<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 0 | 1 | 2 | 3>>;

    type _KeyDictionary = KeyOf<typeof usersDict>;
    type _RDictionary = Expect<Equal<_KeyDictionary, 'user1' | 'user2' | 'user3' | 'user4'>>;

    type _KeyDictionaryRecord = KeyOf<typeof usersDictRecord>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, string>>;

    type _KeyTestUser = KeyOf<TestUser>;
    type _RTestUser = Expect<Equal<_KeyTestUser, keyof TestUser>>;

    type _KeyTestDataUser = KeyOf<TestDataUser>;
    type _RTestDataUser = Expect<Equal<_KeyTestDataUser, keyof TestDataUser>>;
  });
  it('ValueOf', () => {
    type _ValueArray = ValueOf<typeof usersArray>;
    type _RArray = Expect<Equal<_ValueArray, TestUser>>;

    type _ValueConstArray = ValueOf<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_ValueConstArray, TestUser>>;

    type _ValueDictionary = ValueOf<typeof usersDict>;
    type _RDictionary = Expect<Equal<_ValueDictionary, TestUser>>;

    type _ValueDictionaryRecord = ValueOf<typeof usersDictRecord>;
    type _RDictionaryRecord = Expect<Equal<_ValueDictionaryRecord, TestUser>>;

    type _ValueRandomObject = ValueOf<{ a?: string; b?: number }>;
    type _RRandomObject = Expect<Equal<_ValueRandomObject, string | number>>;

    type _ValueTestUser = ValueOf<TestUser>;
    type _RTestUser = Expect<Equal<_ValueTestUser, string | number | boolean | Date | TestDataUser | undefined>>;

    type _ValueTestDataUser = ValueOf<TestDataUser>;
    type _RTestDataUser = Expect<Equal<_ValueTestDataUser, number | string[]>>;

    type _ValueEmptyArray = ValueOf<[]>;
    type _REmptyArray = Expect<Equal<_ValueEmptyArray, never>>;
  });
  it('KeyOf:ValueOf', () => {
    type _KeyValueArray = KeyOf<ValueOf<typeof usersArray>>;
    type _RArray = Expect<Equal<_KeyValueArray, 'name' | 'age' | 'admin' | 'createdAt' | 'data' | 'previousData' | 'none'>>;

    type _KeyValueConstArray = KeyOf<ValueOf<typeof usersConstArray>>;
    type _RConstArray = Expect<Equal<_KeyValueConstArray, 'name' | 'age' | 'admin' | 'createdAt' | 'data' | 'previousData' | 'none'>>;

    type _KeyValueDictionary = KeyOf<ValueOf<typeof usersDict>>;
    type _RDictionary = Expect<Equal<_KeyValueDictionary, 'name' | 'age' | 'admin' | 'createdAt' | 'data' | 'previousData' | 'none'>>;

    type _KeyDictionaryRecord = KeyOf<ValueOf<typeof usersDictRecord>>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, 'name' | 'age' | 'admin' | 'createdAt' | 'data' | 'previousData' | 'none'>>;
  });
  it('KeyDictOf', () => {
    type _KeyArray = KeyDictOf<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, number>>;

    type _KeyConstArray = KeyOf<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 0 | 1 | 2 | 3>>;

    type _KeyDictionary = KeyOf<typeof usersDict>;
    type _RDictionary = Expect<Equal<_KeyDictionary, 'user1' | 'user2' | 'user3' | 'user4'>>;

    type _KeyDictionaryRecord = KeyDictOf<typeof usersDictRecord>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, string>>;
  });
  it('KeyDictOf:ValueOf', () => {
    type _KeyArray = KeyDictOf<ValueOf<typeof usersArray>>;
    type _RArray = Expect<Equal<_KeyArray, 'data' | 'previousData'>>;

    type _KeyConstArray = KeyDictOf<ValueOf<typeof usersConstArray>>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 'data' | 'previousData'>>;

    type _KeyDictionary = KeyDictOf<ValueOf<typeof usersDict>>;
    type _RDictionary = Expect<Equal<_KeyDictionary, 'data' | 'previousData'>>;

    type _KeyDictionaryRecord = KeyDictOf<ValueOf<typeof usersDictRecord>>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, 'data' | 'previousData'>>;
  });
  it('NonKeyDictOf', () => {
    type _KeyArray = NonKeyDictOf<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, never>>;

    type _KeyConstArray = NonKeyDictOf<typeof usersConstArray>;
    // type _RConstArray = Expect<Equal<_KeyConstArray, never>>; not working with vue-tsc WTF

    type _KeyDictionary = NonKeyDictOf<typeof usersDict>;
    // type _RDictionary = Expect<Equal<_KeyDictionary, never>>; not working with vue-tsc WTF

    type _KeyDictionaryRecord = NonKeyDictOf<typeof usersDictRecord>;
    // type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, never>>; not working with vue-tsc WTF
  });
  it('NonKeyDictOf:ValueOf', () => {
    type _KeyArray = NonKeyDictOf<ValueOf<typeof usersArray>>;
    type _RArray = Expect<Equal<_KeyArray, 'name' | 'age' | 'admin' | 'createdAt' | 'none'>>;

    type _KeyConstArray = NonKeyDictOf<ValueOf<typeof usersConstArray>>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 'name' | 'age' | 'admin' | 'createdAt' | 'none'>>;

    type _KeyDictionary = NonKeyDictOf<ValueOf<typeof usersDict>>;
    type _RDictionary = Expect<Equal<_KeyDictionary, 'name' | 'age' | 'admin' | 'createdAt' | 'none'>>;

    type _KeyDictionaryRecord = NonKeyDictOf<ValueOf<typeof usersDictRecord>>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, 'name' | 'age' | 'admin' | 'createdAt' | 'none'>>;
  });
  it('ValueDictOf', () => {
    type _ValueArray = ValueDictOf<typeof usersArray>;
    type _RArray = Expect<Equal<_ValueArray, TestUser>>;

    type _ValueConstArray = ValueDictOf<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_ValueConstArray, TestUser>>;

    type _ValueDictionary = ValueDictOf<typeof usersDict>;
    type _RDictionary = Expect<Equal<_ValueDictionary, TestUser>>;

    type _KeyDictionaryRecord = ValueDictOf<typeof usersDictRecord>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, TestUser>>;
  });
  it('ValueDictOf:ValueOf', () => {
    type _ValueArray = ValueDictOf<ValueOf<typeof usersArray>>;
    type _RArray = Expect<Equal<_ValueArray, TestDataUser | undefined>>;

    type _ValueConstArray = ValueDictOf<ValueOf<typeof usersConstArray>>;
    type _RConstArray = Expect<Equal<_ValueConstArray, TestDataUser | undefined>>;

    type _ValueDictionary = ValueDictOf<ValueOf<typeof usersDict>>;
    type _RDictionary = Expect<Equal<_ValueDictionary, TestDataUser | undefined>>;

    type _KeyDictionaryRecord = ValueDictOf<ValueOf<typeof usersDictRecord>>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, TestDataUser | undefined>>;
  });
  it('OmitValue', () => {
    type _ValueTest = OmitValue<TestUser, TestDataUser | undefined>;
    type _KeyTest = KeyOf<_ValueTest>;
    type _RTest = Expect<Equal<_KeyTest, 'name' | 'age' | 'admin' | 'createdAt'>>;

    type _ValueArray = OmitValue<typeof usersArray, TestUser>;
    type _KeyArray = KeyOf<_ValueArray>;
    // type _RArray = Expect<Equal<_KeyArray, never>>; not working with vue-tsc WTF

    type _ValueConstArray = OmitValue<typeof usersConstArray, TestUser>;
    type _KeyConstArray = KeyOf<_ValueConstArray>;
    // type _RConstArray = Expect<Equal<_KeyConstArray, never>>; not working with vue-tsc WTF

    type _ValueDictionary = OmitValue<typeof usersDict, TestUser>;
    type _KeyDictionary = KeyOf<_ValueDictionary>;
    // type _RDictionary = Expect<Equal<_KeyDictionary, never>>; not working with vue-tsc WTF

    type _ValueDictionaryRecord = OmitValue<typeof usersDictRecord, TestUser>;
    type _KeyDictionaryRecord = KeyOf<_ValueDictionaryRecord>;
    // type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, never>>; not working with vue-tsc WTF
  });
  it('PickValue', () => {
    type _ValueTest = PickValue<TestUser, TestDataUser | undefined>;
    type _KeyTest = KeyOf<_ValueTest>;
    type _RTest = Expect<Equal<_KeyTest, 'data' | 'previousData' | 'none'>>;

    type _ValueArray = PickValue<typeof usersArray, TestUser>;
    type _KeyArray = KeyOf<_ValueArray>;
    type _RArray = Expect<Equal<_KeyArray, number>>;

    type _ValueConstArray = PickValue<typeof usersConstArray, TestUser>;
    type _KeyConstArray = KeyOf<_ValueConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 0 | 1 | 2 | 3>>;

    type _ValueDictionary = PickValue<typeof usersDict, TestUser>;
    type _KeyDictionary = KeyOf<_ValueDictionary>;
    type _RDictionary = Expect<Equal<_KeyDictionary, 'user1' | 'user2' | 'user3' | 'user4'>>;

    type _ValueDictionaryRecord = PickValue<typeof usersDictRecord, TestUser>;
    type _KeyDictionaryRecord = KeyOf<_ValueDictionaryRecord>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, string>>;
  });
  it('PickDict', () => {
    type _ValueTest = PickDict<TestUser>;
    type _KeyTest = KeyOf<_ValueTest>;
    type _RTest = Expect<Equal<_KeyTest, 'data' | 'previousData'>>;

    type _ValueArray = PickDict<typeof usersArray>;
    type _KeyArray = KeyOf<_ValueArray>;
    type _RArray = Expect<Equal<_KeyArray, number>>;

    type _ValueConstArray = PickDict<typeof usersConstArray>;
    type _KeyConstArray = KeyOf<_ValueConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 0 | 1 | 2 | 3>>;

    type _ValueDictionary = PickDict<typeof usersDict>;
    type _KeyDictionary = KeyOf<_ValueDictionary>;
    type _RDictionary = Expect<Equal<_KeyDictionary, 'user1' | 'user2' | 'user3' | 'user4'>>;

    type _ValueDictionaryRecord = PickDict<typeof usersDictRecord>;
    type _KeyDictionaryRecord = KeyOf<_ValueDictionaryRecord>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, string>>;
  });
});
