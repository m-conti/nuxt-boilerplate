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

describe('Utils types', () => {
  type Nationality = { nationality: string };

  it('WithReadonly', () => {
    type _KeyArray = WithReadonly<typeof usersArray>;
    type _RArray = Expect<Equal<_KeyArray, TestUser[] | readonly TestUser[]>>;

    type _KeyStringArray = WithReadonly<string[]>;
    type _RString = Expect<Equal<_KeyStringArray, string[] | readonly string[]>>;

    type _KeyUnion = WithReadonly<string[] | boolean[]>;
    type _RUnion = Expect<Equal<_KeyUnion, string[] | boolean[] | Readonly<string[] | boolean[]>>>;

    type _KeyIntersection = WithReadonly<string[] & boolean[]>;
    type _RIntersection = Expect<Equal<_KeyIntersection, (string[] & boolean[]) | Readonly<string[] & boolean[]>>>;

    // @ts-expect-error
    type _KeyString = WithReadonly<string>;

    // @ts-expect-error
    type _KeyConstArray = WithReadonly<typeof usersConstArray>;

    // @ts-expect-error
    type _KeyDictionary = WithReadonly<typeof usersDict>;

    // @ts-expect-error
    type _KeyDictionaryRecord = WithReadonly<typeof usersDictRecord>;
  });
  it('Many', () => {
    type _KeyValueTest = Many<string>;
    type _RValueTest = Expect<Equal<_KeyValueTest, string | readonly string[]>>;

    type _KeyAUnionB = Many<A | B>;
    type _RAUnionB = Expect<Equal<_KeyAUnionB, A | B | readonly (A | B)[]>>;

    type _KeyAIntersectionB = Many<A & B>;
    type _RAIntersectionB = Expect<Equal<_KeyAIntersectionB, (A & B) | readonly (A & B)[]>>;

    type _KeyAIntersectionBUnionC = Many<A & B | C>;
    type _RAIntersectionBUnionC = Expect<Equal<_KeyAIntersectionBUnionC, C | (A & B) | readonly (C | (A & B))[]>>;

    type _KeyUndefined = Many<undefined>;
    type _RUndefined = Expect<Equal<_KeyUndefined, undefined | readonly undefined[]>>;

    type _KeyUnknown = Many<unknown>;
    type _RUnknown = Expect<Equal<_KeyUnknown, unknown>>;

    type _KeyAny = Many<any>;
    type _RAny = Expect<Equal<_KeyAny, any>>;

    type _KeyNever = Many<never>;
    type _RNever = Expect<Equal<_KeyNever, readonly never[]>>;
  });
  it('UnionToIntersection', () => {
    type _KeyClassicCase = UnionToIntersection<A | B>;
    type _RClassicCase = Expect<Equal<_KeyClassicCase, A & B>>;

    type _KeyIntersection = UnionToIntersection<A & B>;
    type _RIntersection = Expect<Equal<_KeyIntersection, A & B>>;

    type _KeyIntersectionUnion = UnionToIntersection<A & B | C>;
    type _RIntersectionUnion = Expect<Equal<_KeyIntersectionUnion, A & B & C>>;

    type _KeyUndefined = UnionToIntersection<A | undefined>;
    type _RUndefined = Expect<Equal<_KeyUndefined, never>>;

    type _KeyUnknown = UnionToIntersection<A | unknown>;
    type _RUnknown = Expect<Equal<_KeyUnknown, unknown>>;
  });
  it('Union', () => {
    type _KeyArray = Union<[string | number | boolean, typeof usersArray]>;
    type _RArray = Expect<Equal<_KeyArray, string | number | boolean | TestUser[]>>;

    type _KeyUnionIntersection = Union<[string, boolean & number, number | undefined]>;
    type _RUnionIntersection = Expect<Equal<_KeyUnionIntersection, string | number | undefined>>;

    type _KeyIntersection = Union<[boolean & A]>;
    type _RIntersection = Expect<Equal<_KeyIntersection, boolean & A>>;

    type _KeyUndefined = Union<[boolean | undefined]>;
    type _RUndefined = Expect<Equal<_KeyUndefined, boolean | undefined>>;

    type _KeyUnknown = Union<[boolean | unknown]>;
    type _RUnknown = Expect<Equal<_KeyUnknown, unknown>>;

    type _KeyAny = Union<[boolean | any]>;
    type _RAny = Expect<Equal<_KeyAny, any>>;

    type _KeyNever = Union<[boolean | never]>;
    type _RNever = Expect<Equal<_KeyNever, boolean>>;

    type _KeyTestUserOrNationality = Union<[TestUser, Nationality]>;
    type _RTestUserOrNationality = Expect<Equal<_KeyTestUserOrNationality, TestUser | Nationality>>;
  });
  it('Intersection', () => {
    type _KeyArray = Intersection<[typeof usersArray, string]>;
    type _RArray = Expect<Equal<_KeyArray, TestUser[] & string>>;

    type _KeyIntersectionClassic = Intersection<[string, A]>;
    type _RIntersectionClassic = Expect<Equal<_KeyIntersectionClassic, string & A>>;

    type _KeyIntersection = Intersection<[A & B]>;
    type _RIntersection = Expect<Equal<_KeyIntersection, A & B>>;

    type _KeyIntersectionUnknown = Intersection<[A, unknown]>;
    type _RIntersectionUnknown = Expect<Equal<_KeyIntersectionUnknown, unknown>>;

    type _KeyIntersectionAny = Intersection<[A, any]>;
    type _RIntersectionAny = Expect<Equal<_KeyIntersectionAny, any>>;
  });
});
