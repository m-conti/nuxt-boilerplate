import { init, type Equal, type Expect } from 'tests';

init();

describe('Number.prototypes.clamp()', () => {
  const upper: number = 20, lower: number = 5;
  const check1: number = 10;
  const check2: number = 0;
  const check3: number = 25;
  const check4: number = -10;
  const check5: number = -25;
  const check6: number = check4.asabs();
  const check7: number = 0x19;
  const number1: number = 10;
  const number2: number = 0;
  const number3: number = 25;
  const number4: number = -10;
  const number5: number = -25;
  const number6: number = number4.asabs();
  const number7: number = 0x19;

  it('clamp', () => {
    const res11 = number1.asclamp(upper, lower);
    const res12 = number1.asclamp(lower, upper);
    const res13 = number1.asclamp(upper);
    const res14 = number1.asclamp(lower);
    const res21 = number2.asclamp(upper, lower);
    const res22 = number2.asclamp(lower, upper);
    const res23 = number2.asclamp(upper);
    const res24 = number2.asclamp(lower);
    const res31 = number3.asclamp(upper, lower);
    const res32 = number3.asclamp(lower, upper);
    const res33 = number3.asclamp(upper);
    const res34 = number3.asclamp(lower);
    const res41 = number4.asclamp(upper, lower);
    const res42 = number4.asclamp(lower, upper);
    const res43 = number4.asclamp(upper);
    const res44 = number4.asclamp(lower);
    const res51 = number5.asclamp(upper, lower);
    const res52 = number5.asclamp(lower, upper);
    const res53 = number5.asclamp(upper);
    const res54 = number5.asclamp(lower);
    const res61 = number6.asclamp(upper, lower);
    const res62 = number6.asclamp(lower, upper);
    const res63 = number6.asclamp(upper);
    const res64 = number6.asclamp(lower);
    const res71 = number7.asclamp(upper, lower);
    const res72 = number7.asclamp(lower, upper);
    const res73 = number7.asclamp(upper);
    const res74 = number7.asclamp(lower);

    expect(number1).toEqual(check1);
    expect(number2).toEqual(check2);
    expect(number3).toEqual(check3);
    expect(number4).toEqual(check4);
    expect(number5).toEqual(check5);
    expect(number6).toEqual(check6);
    expect(number7).toEqual(check7);

    expect(res11).toEqual(20);
    expect(res12).toEqual(10);
    expect(res13).toEqual(10);
    expect(res14).toEqual(5);
    expect(res21).toEqual(20);
    expect(res22).toEqual(5);
    expect(res23).toEqual(0);
    expect(res24).toEqual(0);
    expect(res31).toEqual(20);
    expect(res32).toEqual(20);
    expect(res33).toEqual(20);
    expect(res34).toEqual(5);
    expect(res41).toEqual(20);
    expect(res42).toEqual(5);
    expect(res43).toEqual(-10);
    expect(res44).toEqual(-10);
    expect(res51).toEqual(20);
    expect(res52).toEqual(5);
    expect(res53).toEqual(-25);
    expect(res54).toEqual(-25);
    expect(res61).toEqual(20);
    expect(res62).toEqual(10);
    expect(res63).toEqual(10);
    expect(res64).toEqual(5);
    expect(res71).toEqual(20);
    expect(res72).toEqual(20);
    expect(res73).toEqual(20);
    expect(res74).toEqual(5);

    type _RRes11 = Expect<Equal<typeof res11, number>>;
    type _RRes12 = Expect<Equal<typeof res12, number>>;
    type _RRes13 = Expect<Equal<typeof res13, number>>;
    type _RRes14 = Expect<Equal<typeof res14, number>>;
    type _RRes21 = Expect<Equal<typeof res21, number>>;
    type _RRes22 = Expect<Equal<typeof res22, number>>;
    type _RRes23 = Expect<Equal<typeof res23, number>>;
    type _RRes24 = Expect<Equal<typeof res24, number>>;
    type _RRes31 = Expect<Equal<typeof res31, number>>;
    type _RRes32 = Expect<Equal<typeof res32, number>>;
    type _RRes33 = Expect<Equal<typeof res33, number>>;
    type _RRes34 = Expect<Equal<typeof res34, number>>;
    type _RRes41 = Expect<Equal<typeof res41, number>>;
    type _RRes42 = Expect<Equal<typeof res42, number>>;
    type _RRes43 = Expect<Equal<typeof res43, number>>;
    type _RRes44 = Expect<Equal<typeof res44, number>>;
    type _RRes51 = Expect<Equal<typeof res51, number>>;
    type _RRes52 = Expect<Equal<typeof res52, number>>;
    type _RRes53 = Expect<Equal<typeof res53, number>>;
    type _RRes54 = Expect<Equal<typeof res54, number>>;
    type _RRes61 = Expect<Equal<typeof res61, number>>;
    type _RRes62 = Expect<Equal<typeof res62, number>>;
    type _RRes63 = Expect<Equal<typeof res63, number>>;
    type _RRes64 = Expect<Equal<typeof res64, number>>;
    type _RRes71 = Expect<Equal<typeof res71, number>>;
    type _RRes72 = Expect<Equal<typeof res72, number>>;
    type _RRes73 = Expect<Equal<typeof res73, number>>;
    type _RRes74 = Expect<Equal<typeof res74, number>>;
  });
});
