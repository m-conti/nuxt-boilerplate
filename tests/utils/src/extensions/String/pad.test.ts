import { init, type Equal, type Expect } from 'tests';

init();

describe('String.prototypes.pad()', () => {
  const check1 = 'abc';
  const check2 = '__abc__';
  const string1 = 'abc';
  const string2 = '__abc__';

  it('center', () => {
    const res1 = string1.aspad('center', string1.length + 4, '_');
    const res2 = string1.aspad('center', string1.length + 2, '_');
    const res3 = string1.aspad('center', string1.length, '_');
    const res4 = string1.aspad('center', string1.length - 2, '_');
    const res5 = string1.aspad('center', string1.length - 4, '_');
    const res6 = string2.aspad('center', 3, '_');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);

    expect(res1).toEqual(`__${string1}__`);
    expect(res2).toEqual(`_${string1}_`);
    expect(res3).toEqual(string1);
    expect(res4).toEqual(string1);
    expect(res5).toEqual(string1);
    expect(res6).toEqual(string2);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
    type _RRes6 = Expect<Equal<typeof res6, string>>;
  });
  it('start', () => {
    const res1 = string1.aspad('start', string1.length + 2, '_');
    const res2 = string1.aspad('start', string1.length + 1, '_');
    const res3 = string1.aspad('start', string1.length, '_');
    const res4 = string1.aspad('start', string1.length - 1, '_');
    const res5 = string1.aspad('start', string1.length - 2, '_');
    const res6 = string2.aspad('start', 3, '_');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);

    expect(res1).toEqual(`__${string1}`);
    expect(res2).toEqual(`_${string1}`);
    expect(res3).toEqual(string1);
    expect(res4).toEqual(string1);
    expect(res5).toEqual(string1);
    expect(res6).toEqual(string2);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
    type _RRes6 = Expect<Equal<typeof res6, string>>;
  });
  it('end', () => {
    const res1 = string1.aspad('end', string1.length + 2, '_');
    const res2 = string1.aspad('end', string1.length + 1, '_');
    const res3 = string1.aspad('end', string1.length, '_');
    const res4 = string1.aspad('end', string1.length - 1, '_');
    const res5 = string1.aspad('end', string1.length - 2, '_');
    const res6 = string2.aspad('end', 3, '_');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);

    expect(res1).toEqual(`${string1}__`);
    expect(res2).toEqual(`${string1}_`);
    expect(res3).toEqual(string1);
    expect(res4).toEqual(string1);
    expect(res5).toEqual(string1);
    expect(res6).toEqual(string2);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
    type _RRes6 = Expect<Equal<typeof res6, string>>;
  });
});
