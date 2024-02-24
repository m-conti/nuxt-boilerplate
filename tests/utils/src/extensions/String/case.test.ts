import { init, type Equal, type Expect } from 'tests';

init();

describe('String.prototypes.ascase()', () => {
  const check1 = 'Foo Bar';
  const check2 = 'fooBar';
  const check3 = '__FOO_BAR__';
  const check4 = 'foo bar';
  const check5 = 'foo-bar';
  const string1 = 'Foo Bar';
  const string2 = 'fooBar';
  const string3 = '__FOO_BAR__';
  const string4 = 'foo bar';
  const string5 = 'foo-bar';

  it('ascase pascal', () => {
    const res = 'FooBar';
    const res1 = string1.ascase('pascal');
    const res2 = string2.ascase('pascal');
    const res3 = string3.ascase('pascal');
    const res4 = string4.ascase('pascal');
    const res5 = string5.ascase('pascal');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase camel', () => {
    const res = 'fooBar';
    const res1 = string1.ascase('camel');
    const res2 = string2.ascase('camel');
    const res3 = string3.ascase('camel');
    const res4 = string4.ascase('camel');
    const res5 = string5.ascase('camel');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase snake', () => {
    const res = 'foo_bar';
    const res1 = string1.ascase('snake');
    const res2 = string2.ascase('snake');
    const res3 = string3.ascase('snake');
    const res4 = string4.ascase('snake');
    const res5 = string5.ascase('snake');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase start', () => {
    const res = 'Foo Bar';
    const res1 = string1.ascase('start');
    const res2 = string2.ascase('start');
    const res3 = string3.ascase('start');
    const res4 = string4.ascase('start');
    const res5 = string5.ascase('start');
    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);
    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual('FOO BAR');
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase kebab', () => {
    const res = 'foo-bar';
    const res1 = string1.ascase('kebab');
    const res2 = string2.ascase('kebab');
    const res3 = string3.ascase('kebab');
    const res4 = string4.ascase('kebab');
    const res5 = string5.ascase('kebab');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase macro', () => {
    const res = 'FOO_BAR';
    const res1 = string1.ascase('macro');
    const res2 = string2.ascase('macro');
    const res3 = string3.ascase('macro');
    const res4 = string4.ascase('macro');
    const res5 = string5.ascase('macro');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual(res);
    expect(res2).toEqual(res);
    expect(res3).toEqual(res);
    expect(res4).toEqual(res);
    expect(res5).toEqual(res);

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase upper', () => {
    const res1 = string1.ascase('upper');
    const res2 = string2.ascase('upper');
    const res3 = string3.ascase('upper');
    const res4 = string4.ascase('upper');
    const res5 = string5.ascase('upper');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual('FOO BAR');
    expect(res2).toEqual('FOOBAR');
    expect(res3).toEqual('__FOO_BAR__');
    expect(res4).toEqual('FOO BAR');
    expect(res5).toEqual('FOO-BAR');

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase lower', () => {
    const res1 = string1.ascase('lower');
    const res2 = string2.ascase('lower');
    const res3 = string3.ascase('lower');
    const res4 = string4.ascase('lower');
    const res5 = string5.ascase('lower');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual('foo bar');
    expect(res2).toEqual('foobar');
    expect(res3).toEqual('__foo_bar__');
    expect(res4).toEqual('foo bar');
    expect(res5).toEqual('foo-bar');

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
  it('ascase capitalize', () => {
    const res1 = string1.ascase('capitalize');
    const res2 = string2.ascase('capitalize');
    const res3 = string3.ascase('capitalize');
    const res4 = string4.ascase('capitalize');
    const res5 = string5.ascase('capitalize');

    expect(string1).toEqual(check1);
    expect(string2).toEqual(check2);
    expect(string3).toEqual(check3);
    expect(string4).toEqual(check4);
    expect(string5).toEqual(check5);

    expect(res1).toEqual('Foo bar');
    expect(res2).toEqual('Foobar');
    expect(res3).toEqual('__foo_bar__');
    expect(res4).toEqual('Foo bar');
    expect(res5).toEqual('Foo-bar');

    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
    type _RRes5 = Expect<Equal<typeof res5, string>>;
  });
});
