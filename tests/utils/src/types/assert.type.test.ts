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

const aTest: A = { name: 'test' };
const cTest: C = { isTrue: true, parent: { name: 'test' }};
const dTest: D = { surname: 'test' };
const eTest: E = { child: { surname: 'test' }};

describe('Assert Types', () => {
  it('If', () => {
    type _KeyUndefinedAFalse = If<undefined, A, true, false>;
    type _RUndefinedAFalse = Expect<Equal<_KeyUndefinedAFalse, false>>;

    type _KeyUndefinedATrue = If<A, A, true, false>;
    type _RUndefinedATrue = Expect<Equal<_KeyUndefinedATrue, true>>;

    type _KeyTypeArraySameType = If<A, A[], true, false>;
    type _RTypeArraySameType = Expect<Equal<_KeyTypeArraySameType, false>>;

    type _KeyTypeArray = If<TestUser[], typeof usersArray, true, false>;
    type _RTypeArray = Expect<Equal<_KeyTypeArray, true>>;

    type _KeyTypeArray2 = If<typeof usersConstArray, typeof usersArray, true, false>;
    type _RTypeArray2 = Expect<Equal<_KeyTypeArray2, false>>;

    type _KeyFieldOfObject = If<A, typeof cTest.parent, true, false>;
    type _RFieldOfObject = Expect<Equal<_KeyFieldOfObject, true>>;

    type _KeyUnion = If<A | C, typeof cTest, true, false>;
    type _RUnion = Expect<Equal<_KeyUnion, true>>;

    type _KeyIntersection = If<A, typeof cTest.parent & string, true, false>;
    type _RIntersection = Expect<Equal<_KeyIntersection, true>>;

    type _KeyAny = If<any, typeof cTest, true, false>;
    type _RAny = Expect<Equal<_KeyAny, true>>;

    type _KeyNever = If<never, C, true, false>;
    type _RNever = Expect<Equal<_KeyNever, false>>;
  });
  it('Same', () => {
    type _KeyIntersection = Same<A, typeof cTest.parent & string, true, false>;
    type _RIntersection = Expect<Equal<_KeyIntersection, false>>;

    type _KeySame = Same<C, typeof cTest, true, false>;
    type _RSame = Expect<Equal<_KeySame, true>>;

    type _KeySameTypeAndField = Same<typeof eTest.child, typeof dTest, true, false>;
    type _RSameTypeAndField = Expect<Equal<_KeySameTypeAndField, true>>;

    type _KeySameTypeNotField = Same<typeof eTest.child, typeof aTest, true, false>;
    type _RSameTypeNotField = Expect<Equal<_KeySameTypeNotField, false>>;

    type _KeyAny = Same<any, typeof aTest, true, false>;
    type _RAny = Expect<Equal<_KeyAny, true>>;
  });
  it('Exist', () => {
    type _KeyUndefined = Exist<A | undefined>;
    type _RUndefinedTest = Expect<Equal<_KeyUndefined, A | undefined>>;

    type _KeyNever = Exist<A | never>;
    type _RNeverTest = Expect<Equal<_KeyNever, A>>;

    type _KeyUnknown = Exist<A | unknown>;
    type _RUnknown = Expect<Equal<_KeyUnknown, unknown>>;

    type _KeyA = Exist<A>;
    type _RA = Expect<Equal<_KeyA, A>>;

    type _KeyAArray = Exist<A[]>;
    type _RAArray = Expect<Equal<_KeyAArray, A[]>>;

    type _KeyAUnionB = Exist<A | B>;
    type _RAUnionB = Expect<Equal<_KeyAUnionB, A | B>>;

    type _KeyAIntersectionB = Exist<A & B>;
    type _RAIntersectionB = Expect<Equal<_KeyAIntersectionB, A & B>>;
  });
  it('IfNotNever', () => {
    type _KeyWorkful = IfNotNever<C, A>;
    type _RWorkful = Expect<Equal<_KeyWorkful, A>>;

    type _KeyFailed = IfNotNever<never, A>;
    type _RFailed = Expect<Equal<_KeyFailed, never>>;
  });
  it('IsKnownIterable', () => {
    type _KeyA = IsKnownIterable<A>;
    type _RA = Expect<Equal<_KeyA, true>>;

    type _KeyAArray = IsKnownIterable<A[]>;
    type _RAArray = Expect<Equal<_KeyAArray, false>>;

    type _KeyArray = IsKnownIterable<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, false>>;

    type _KeyConstArray = IsKnownIterable<typeof usersConstArray>;
    type _RConstArray = Expect<Equal<_KeyConstArray, true>>;

    type _KeyDictionary = IsKnownIterable<typeof usersDict>;
    type _RDictionary = Expect<Equal<_KeyDictionary, true>>;

    type _KeyDictionaryRecord = IsKnownIterable<typeof usersDictRecord>;
    type _RDictionaryRecord = Expect<Equal<_KeyDictionaryRecord, false>>;
  });
  it('IsValidType', () => {
    type _KeyUndefined = IsValidType<A | undefined>;
    type _RUndefinedTest = Expect<Equal<_KeyUndefined, A>>;

    type _KeyNever = IsValidType<A | never>;
    type _RNeverTest = Expect<Equal<_KeyNever, A>>;

    type _KeyUnknown = IsValidType<A | unknown>;
    type _RUnknown = Expect<Equal<_KeyUnknown, unknown>>;

    type _KeyA = IsValidType<A>;
    type _RA = Expect<Equal<_KeyA, A>>;

    type _KeyAArray = IsValidType<A[]>;
    type _RAArray = Expect<Equal<_KeyAArray, A[]>>;

    type _KeyAUnionB = IsValidType<A | B>;
    type _RAUnionB = Expect<Equal<_KeyAUnionB, A | B>>;

    type _KeyAIntersectionB = IsValidType<A & B>;
    type _RAIntersectionB = Expect<Equal<_KeyAIntersectionB, A & B>>;
  });
});
