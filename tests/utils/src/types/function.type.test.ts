import {
  type Equal,
  type Expect,

  init,
} from 'tests';

init();

describe('Function types', () => {
  it('OmitFirstArg', () => {
    type _KeyValueTestNoParam = OmitFirstArg<() => void>;
    type _RValueTestNoParam = Expect<Equal<_KeyValueTestNoParam, () => void>>;

    type _KeyValueTest = OmitFirstArg<(a: number, b: string) => void>;
    type _RValueTest = Expect<Equal<_KeyValueTest, (b: string) => void>>;
  });
  it('ParametersOmitFirst', () => {
    type _KeyValueTestNoParam = ParametersOmitFirst<() => void>;
    type _RValueTestNoParam = Expect<Equal<_KeyValueTestNoParam, []>>;

    type _KeyValueTest = ParametersOmitFirst<(a: number, b: string) => void>;
    type _RValueTest = Expect<Equal<_KeyValueTest, [b: string]>>;
  });
});
