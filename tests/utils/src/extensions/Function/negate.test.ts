import { type Equal, type Expect, init } from 'tests';

init();

describe('Function.prototypes.asnegate()', () => {
  it('Negation of isEven', () => {
    function isEven(n: any) { return n % 2 === 0; }

    const decoratedFunc = isEven.asnegate();

    expect(decoratedFunc(2)).toBeFalsy();
    expect(decoratedFunc(3)).toBeTruthy();
    expect(decoratedFunc(3.14)).toBeTruthy();

    type _Result = Expect<Equal<ReturnType<typeof decoratedFunc>, boolean>>;
  });
});
