import {
  type Equal,
  type Expect,

  type TestUser,

  init,
} from 'tests';

init();

type A = { surname: string };
type B = { num: number; child: A };

describe('Cast Types', () => {
  it('ToNumber', () => {
    type StringToNumber = '42';
    type _KeyStringToNumber = ToNumber<StringToNumber>;
    type _RStringToNumber = Expect<Equal<_KeyStringToNumber, 42>>;

    type StringToNumberFail = 'test';
    type _KeyStringToNumberFail = ToNumber<StringToNumberFail>;
    type _RStringToNumberFail = Expect<Equal<_KeyStringToNumberFail, 'test'>>;

    type StringToNumberBigint = '9007199254740991';
    type _KeyStringToNumberBigint = ToNumber<StringToNumberBigint>;
    type _RStringToNumberBigint = Expect<Equal<_KeyStringToNumberBigint, 9007199254740991>>;

    type BooleanToNumber = true;
    type _KeyBooleanToNumber = ToNumber<BooleanToNumber>;
    type _RBooleanToNumber = Expect<Equal<_KeyBooleanToNumber, true>>;
  });
  it('ToString', () => {
    type _KeyNumberToString = ToString<42>;
    type _RNumberToString = Expect<Equal<_KeyNumberToString, '42'>>;

    type _KeyNumberUnionToString = ToString<42 | 55>;
    type _RNumberUnionToString = Expect<Equal<_KeyNumberUnionToString, '42' | '55'>>;

    type _KeyNumberUnionBooleanToString = ToString<42 | true>;
    type _RNumberUnionBooleanToString = Expect<Equal<_KeyNumberUnionBooleanToString, '42' | 'true'>>;

    type _KeyBooleanToString = ToString<true>;
    type _RBooleanToString = Expect<Equal<_KeyBooleanToString, 'true'>>;

    type _KeyStringToString = ToString<'test'>;
    type _RStringToString = Expect<Equal<_KeyStringToString, 'test'>>;

    type _KeyBigintToString = ToString<9007199254740991>;
    type _RBigintToString = Expect<Equal<_KeyBigintToString, '9007199254740991'>>;

    type _KeyNeverToString = ToString<never>;
    type _RNeverToString = Expect<Equal<_KeyNeverToString, never>>;

    type _KeyUnknownToString = ToString<unknown>;
    type _RUnknownToString = Expect<Equal<_KeyUnknownToString, unknown>>;

    type _KeyAnyToString = ToString<any>;
    type _RAnyToString = Expect<Equal<_KeyAnyToString, any>>;

    type _KeyUndefinedToString = ToString<undefined>;
    type _RUndefinedToString = Expect<Equal<_KeyUndefinedToString, undefined>>;

    type _KeyTestUserToString = ToString<TestUser>;
    type _RTestUserToString = Expect<Equal<_KeyTestUserToString, TestUser>>;

    type _KeyTestUserIntersectionToString = ToString<A & B>;
    type _RTestUserIntersectionToString = Expect<Equal<_KeyTestUserIntersectionToString, B & A>>;
  });
});
