import { init, type Equal, type Expect } from 'tests';

init();

describe('String.prototypes.trim()', () => {
  const check1 = 'Foo  Bar';
  const check2 = 'FooBar';
  const check3 = '  FooBar';
  const check4 = 'FooBar  ';
  const check5 = '  FooBar  ';
  const check6 = '  Foo  Bar  ';
  const check7 = 'Foo  Bar  ';
  const check8 = '  Foo  Bar';
  const string1 = 'Foo  Bar';
  const string2 = 'FooBar';
  const string3 = '  FooBar';
  const string4 = 'FooBar  ';
  const string5 = '  FooBar  ';
  const string6 = '  Foo  Bar  ';
  const string7 = 'Foo  Bar  ';
  const string8 = '  Foo  Bar';

  it('center', () => {
    const res1 = string1.astrim('center');
    const res2 = string2.astrim('center');
    const res3 = string3.astrim('center');
    const res4 = string4.astrim('center');
    const res5 = string5.astrim('center');
    const res6 = string6.astrim('center');
    const res7 = string7.astrim('center');
    const res8 = string8.astrim('center');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);
    expect(string6).toEqual(check6);
    expect(string7).toEqual(check7);
    expect(string8).toEqual(check8);

    expect(res1).toEqual('Foo  Bar');
    expect(res2).toEqual('FooBar');
    expect(res3).toEqual('FooBar');
    expect(res4).toEqual('FooBar');
    expect(res5).toEqual('FooBar');
    expect(res6).toEqual('Foo  Bar');
    expect(res7).toEqual('Foo  Bar');
    expect(res8).toEqual('Foo  Bar');

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
    type _RRes6 = Expect<Equal<typeof res6, string>>;
    type _RRes7 = Expect<Equal<typeof res7, string>>;
    type _RRes8 = Expect<Equal<typeof res8, string>>;
  });
  it('start', () => {
    const res1 = string1.astrim('start');
    const res2 = string2.astrim('start');
    const res3 = string3.astrim('start');
    const res4 = string4.astrim('start');
    const res5 = string5.astrim('start');
    const res6 = string6.astrim('start');
    const res7 = string7.astrim('start');
    const res8 = string8.astrim('start');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);
    expect(string6).toEqual(check6);
    expect(string7).toEqual(check7);
    expect(string8).toEqual(check8);

    expect(res1).toEqual('Foo  Bar');
    expect(res2).toEqual('FooBar');
    expect(res3).toEqual('FooBar');
    expect(res4).toEqual('FooBar  ');
    expect(res5).toEqual('FooBar  ');
    expect(res6).toEqual('Foo  Bar  ');
    expect(res7).toEqual('Foo  Bar  ');
    expect(res8).toEqual('Foo  Bar');

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
    type _RRes6 = Expect<Equal<typeof res6, string>>;
    type _RRes7 = Expect<Equal<typeof res7, string>>;
    type _RRes8 = Expect<Equal<typeof res8, string>>;
  });
  it('end', () => {
    const res1 = string1.astrim('end');
    const res2 = string2.astrim('end');
    const res3 = string3.astrim('end');
    const res4 = string4.astrim('end');
    const res5 = string5.astrim('end');
    const res6 = string6.astrim('end');
    const res7 = string7.astrim('end');
    const res8 = string8.astrim('end');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);
    expect(string6).toEqual(check6);
    expect(string7).toEqual(check7);
    expect(string8).toEqual(check8);

    expect(res1).toEqual('Foo  Bar');
    expect(res2).toEqual('FooBar');
    expect(res3).toEqual('  FooBar');
    expect(res4).toEqual('FooBar');
    expect(res5).toEqual('  FooBar');
    expect(res6).toEqual('  Foo  Bar');
    expect(res7).toEqual('Foo  Bar');
    expect(res8).toEqual('  Foo  Bar');

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
    type _RRes6 = Expect<Equal<typeof res6, string>>;
    type _RRes7 = Expect<Equal<typeof res7, string>>;
    type _RRes8 = Expect<Equal<typeof res8, string>>;
  });
});
