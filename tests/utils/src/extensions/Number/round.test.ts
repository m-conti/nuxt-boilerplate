import { init, type Equal, type Expect } from 'tests';

init();

describe('Number.prototypes.round()', () => {
  const number: number = 42.75684787;
  const check: number = 42.75684787;

  it('nearest', () => {
    const res1 = number.asround('nearest', 1);
    const res2 = number.asround('nearest', 2);
    const res3 = number.asround('nearest', 3);
    const res4 = number.asround('nearest', 4);
    const res5 = number.asround('nearest', 5);
    const res6 = number.asround('nearest', 6);
    const res7 = number.asround('nearest', 7);
    const res8 = number.asround('nearest', 8);
    const res9 = number.asround('nearest', 0);
    const res10 = number.asround('nearest', -1);
    const res11 = number.asround('nearest', -2);

    expect(number).toEqual(check);
    expect(res1).toEqual(42.8);
    expect(res2).toEqual(42.76);
    expect(res3).toEqual(42.757);
    expect(res4).toEqual(42.7568);
    expect(res5).toEqual(42.75685);
    expect(res6).toEqual(42.756848);
    expect(res7).toEqual(42.7568479);
    expect(res8).toEqual(42.75684787);
    expect(res9).toEqual(43);
    expect(res10).toEqual(40);
    expect(res11).toEqual(0);

    type _RRes1 = Expect<Equal<typeof res1, number>>;
    type _RRes2 = Expect<Equal<typeof res2, number>>;
    type _RRes3 = Expect<Equal<typeof res3, number>>;
    type _RRes4 = Expect<Equal<typeof res4, number>>;
    type _RRes5 = Expect<Equal<typeof res5, number>>;
    type _RRes6 = Expect<Equal<typeof res6, number>>;
    type _RRes7 = Expect<Equal<typeof res7, number>>;
    type _RRes8 = Expect<Equal<typeof res8, number>>;
    type _RRes9 = Expect<Equal<typeof res9, number>>;
    type _RRes10 = Expect<Equal<typeof res10, number>>;
    type _RRes11 = Expect<Equal<typeof res11, number>>;
  });
  it('up', () => {
    const res1 = number.asround('up', 1);
    const res2 = number.asround('up', 2);
    const res3 = number.asround('up', 3);
    const res4 = number.asround('up', 4);
    const res5 = number.asround('up', 5);
    const res6 = number.asround('up', 6);
    const res7 = number.asround('up', 7);
    const res8 = number.asround('up', 8);
    const res9 = number.asround('up', 0);
    const res10 = number.asround('up', -1);
    const res11 = number.asround('up', -2);

    expect(number).toEqual(check);
    expect(res1).toEqual(42.8);
    expect(res2).toEqual(42.76);
    expect(res3).toEqual(42.757);
    expect(res4).toEqual(42.7569);
    expect(res5).toEqual(42.75685);
    expect(res6).toEqual(42.756848);
    expect(res7).toEqual(42.7568479);
    expect(res8).toEqual(42.75684787);
    expect(res9).toEqual(43);
    expect(res10).toEqual(50);
    expect(res11).toEqual(100);

    type _RRes1 = Expect<Equal<typeof res1, number>>;
    type _RRes2 = Expect<Equal<typeof res2, number>>;
    type _RRes3 = Expect<Equal<typeof res3, number>>;
    type _RRes4 = Expect<Equal<typeof res4, number>>;
    type _RRes5 = Expect<Equal<typeof res5, number>>;
    type _RRes6 = Expect<Equal<typeof res6, number>>;
    type _RRes7 = Expect<Equal<typeof res7, number>>;
    type _RRes8 = Expect<Equal<typeof res8, number>>;
    type _RRes9 = Expect<Equal<typeof res9, number>>;
    type _RRes10 = Expect<Equal<typeof res10, number>>;
    type _RRes11 = Expect<Equal<typeof res11, number>>;
  });
  it('down', () => {
    const res1 = number.asround('down', 1);
    const res2 = number.asround('down', 2);
    const res3 = number.asround('down', 3);
    const res4 = number.asround('down', 4);
    const res5 = number.asround('down', 5);
    const res6 = number.asround('down', 6);
    const res7 = number.asround('down', 7);
    const res8 = number.asround('down', 8);
    const res9 = number.asround('down', 0);
    const res10 = number.asround('down', -1);
    const res11 = number.asround('down', -2);

    expect(number).toEqual(check);
    expect(res1).toEqual(42.7);
    expect(res2).toEqual(42.75);
    expect(res3).toEqual(42.756);
    expect(res4).toEqual(42.7568);
    expect(res5).toEqual(42.75684);
    expect(res6).toEqual(42.756847);
    expect(res7).toEqual(42.7568478);
    expect(res8).toEqual(42.75684787);
    expect(res9).toEqual(42);
    expect(res10).toEqual(40);
    expect(res11).toEqual(0);

    type _RRes1 = Expect<Equal<typeof res1, number>>;
    type _RRes2 = Expect<Equal<typeof res2, number>>;
    type _RRes3 = Expect<Equal<typeof res3, number>>;
    type _RRes4 = Expect<Equal<typeof res4, number>>;
    type _RRes5 = Expect<Equal<typeof res5, number>>;
    type _RRes6 = Expect<Equal<typeof res6, number>>;
    type _RRes7 = Expect<Equal<typeof res7, number>>;
    type _RRes8 = Expect<Equal<typeof res8, number>>;
    type _RRes9 = Expect<Equal<typeof res9, number>>;
    type _RRes10 = Expect<Equal<typeof res10, number>>;
    type _RRes11 = Expect<Equal<typeof res11, number>>;
  });
});
