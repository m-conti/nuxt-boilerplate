import { init, type Equal, type Expect } from 'tests';

init();

describe('Number.prototypes.abs()', () => {
  const check1: number = 42;
  const check2: number = -42;
  const check3: number = 33.3;
  const check4: number = -33.3;
  const check5: number = 9007199254740991;
  const check6: number = -9007199254740991;
  const check7: number = -0x66;
  const number1: number = 42;
  const number2: number = -42;
  const number3: number = 33.3;
  const number4: number = -33.3;
  const number5: number = 9007199254740991;
  const number6: number = -9007199254740991;
  const number7: number = -0x66;

  it('abs', () => {
    const res1 = number1.asabs();
    const res2 = number2.asabs();
    const res3 = number3.asabs();
    const res4 = number4.asabs();
    const res5 = number5.asabs();
    const res6 = number6.asabs();
    const res7 = number7.asabs();

    expect(number1).toEqual(check1);
    expect(number2).toEqual(check2);
    expect(number3).toEqual(check3);
    expect(number4).toEqual(check4);
    expect(number5).toEqual(check5);
    expect(number6).toEqual(check6);
    expect(number7).toEqual(check7);

    expect(res1).toEqual(42);
    expect(res2).toEqual(42);
    expect(res3).toEqual(33.3);
    expect(res4).toEqual(33.3);
    expect(res5).toEqual(9007199254740991);
    expect(res6).toEqual(9007199254740991);
    expect(res7).toEqual(0x66);

    type _RRes1 = Expect<Equal<typeof res1, number>>;
    type _RRes2 = Expect<Equal<typeof res2, number>>;
    type _RRes3 = Expect<Equal<typeof res3, number>>;
    type _RRes4 = Expect<Equal<typeof res4, number>>;
    type _RRes5 = Expect<Equal<typeof res5, number>>;
    type _RRes6 = Expect<Equal<typeof res6, number>>;
    type _RRes7 = Expect<Equal<typeof res7, number>>;
  });
});
