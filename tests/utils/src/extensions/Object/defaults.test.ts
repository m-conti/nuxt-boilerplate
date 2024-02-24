import {
  type Equal,
  type Expect,

  init,
} from 'tests';

init();

interface Data {
  num: number;
  str: string;
  bool: boolean;
  partialNum?: number;
  partialBool?: boolean;
}

interface Other {
  partialStr?: string;
  num2: number;
}

let data: Data;
let defaultData: Data;
let defaultOther: Other;

describe('All.prototypes.asdefaults()', () => {
  beforeEach(() => {
    data = {
      num: 10,
      partialNum: 25,
      str: 'ten',
      bool: true,
    };
    defaultData = {
      num: 10,
      str: 'one',
      bool: false,
      partialBool: true,
    };
    defaultOther = {
      partialStr: 'string',
      num2: 200,
    };
  });

  it('merge defaults', () => {
    expect(data.asdefaults(defaultData)).toEqual(<Data>{
      num: 10,
      partialNum: 25,
      str: 'ten',
      bool: true,
      partialBool: true,
    });
  });

  it('res same pointer as data', () => {
    const res = data.asdefaults(defaultData);
    expect(res).toBe(data);
    expect(res).not.toBe(defaultData);
  });

  it('mutate the data mutate the res', () => {
    const res = data.asdefaults(defaultData);
    data.bool = false;
    expect(res).not.toEqual(defaultData);
    expect(data.bool).toBeFalsy();
    expect(res.bool).toBeFalsy();
    expect(defaultData.bool).toBeFalsy();
    res.bool = true;
    expect(data.bool).toBeTruthy();
    expect(res.bool).toBeTruthy();
    expect(defaultData.bool).toBeFalsy();
  });

  it('mutate the default do not mutate the res', () => {
    const res = data.asdefaults(defaultData);
    defaultData.bool = false;
    expect(res).not.toEqual(defaultData);
    expect(defaultData.bool).toBeFalsy();
    expect(res.bool).toBeTruthy();
  });
  it('defaults check types', () => {
    const res = data.asdefaults(defaultData);
    type _Result = Expect<Equal<typeof res, Data>>;
    const res2 = data.asdefaults(defaultData, defaultOther);
    type _Result2 = Expect<Equal<typeof res2, Data & Other>>;
    type _KeyResult2 = Expect<Equal<KeyOf<typeof res2>, 'num' | 'num2' | 'partialNum' | 'str' | 'partialStr' | 'bool' | 'partialBool'>>;
  });
});
