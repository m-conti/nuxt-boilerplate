import {
  type Equal,
  type Expect,

  type TestUser,

  init,

  usersArray,
  usersConstArray,
  usersDict,
  usersDictRecord,
} from 'tests';

init();

type A = { name: string };
type B = { array: number[] };
type C = { isTrue: boolean; parent: A };
type D = { surname: string };
type E = { child: { surname: string } };


describe('Array types', () => {
  it('Length', () => {
    type _KeyEmptyArray = Length<[]>;
    type _REmptyArray = Expect<Equal<_KeyEmptyArray, 0>>;

    type _KeyArray = Length<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, number>>;

    type _KeyConstArray = Length<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, 4>>;

    // @ts-expect-error
    type _KeyDict = Length<typeof usersDict>;

    // @ts-expect-error
    type _KeyDictRecord = Length<typeof usersDictRecord>;
  });
  it('First', () => {
    type _KeyEmptyArray = First<[]>;
    type _REmptyArray = Expect<Equal<_KeyEmptyArray, never>>;

    type _KeyArray = First<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, TestUser | undefined>>;

    type _KeyConstArray = First<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, TestUser>>;

    // @ts-expect-error
    type _KeyDictionary = First<typeof usersDict>;

    // @ts-expect-error
    type _KeyDictionaryRecord = First<typeof usersDictRecord>;
  });
  it('Last', () => {
    type _KeyEmptyArray = Last<[]>;
    type _REmptyArray = Expect<Equal<_KeyEmptyArray, never>>;

    type _KeyArray = Last<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, TestUser | undefined>>;

    type _KeyConstArray = Last<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, TestUser>>;

    // @ts-expect-error
    type _KeyDictionary = Last<typeof usersDict>;

    // @ts-expect-error
    type _KeyDictionaryRecord = Last<typeof usersDictRecord>;
  });
  it('OmitFirst', () => {
    type _KeyEmptyArray = OmitFirst<[]>;
    type _REmptyArray = Expect<Equal<_KeyEmptyArray, unknown[]>>;

    type _KeyArray = OmitFirst<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, TestUser[]>>;

    type _KeyConstArray = OmitFirst<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, [TestUser, TestUser, TestUser]>>;

    type _KeyArrayOfTypes = OmitFirst<[A, B, C, D, E]>;
    type _RArrayOfTypes = Expect<Equal<_KeyArrayOfTypes, [B, C, D, E]>>;

    type _KeyUnionUndefined = OmitFirst<[A, B | undefined, C, D, E]>;
    type _RUnionUndefined = Expect<Equal<_KeyUnionUndefined, [B | undefined, C, D, E]>>;

    // @ts-expect-error
    type _KeyDictionary = OmitFirst<typeof usersDict>;

    // @ts-expect-error
    type _KeyDictionaryRecord = OmitFirst<typeof usersDictRecord>;
  });
  it('OmitLast', () => {
    type _KeyEmptyArray = OmitLast<[]>;
    type _REmptyArray = Expect<Equal<_KeyEmptyArray, []>>;

    type _KeyArray = OmitLast<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, TestUser[]>>;

    type _KeyConstArray = OmitLast<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, [TestUser, TestUser, TestUser]>>;

    type _KeyArrayOfTypes = OmitLast<[A, B, C, D, E]>;
    type _RArrayOfTypes = Expect<Equal<_KeyArrayOfTypes, [A, B, C, D]>>;

    type _KeyUnionUndefined = OmitLast<[A, B | undefined, C, D, E]>;
    type _RUnionUndefined = Expect<Equal<_KeyUnionUndefined, [A, B | undefined, C, D]>>;

    // @ts-expect-error
    type _KeyDictionary = OmitFirst<typeof usersDict>;

    // @ts-expect-error
    type _KeyDictionaryRecord = OmitFirst<typeof usersDictRecord>;
  });
});
