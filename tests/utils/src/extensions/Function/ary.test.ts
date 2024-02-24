import { type Equal, type Expect, init } from 'tests';

init();

describe('Functions.prototypes.ary()', () => {

  it('asary', () => {
    function exFunc1(a: number, b: number, c: number) { return a + b + c; }
    function exFunc2(): void { }

    const test1 = exFunc1.asary(2);
    const test2 = exFunc1.asary(1);
    const test3 = exFunc1.asary(0);
    const test4 = exFunc1.asary(-1);
    const test5 = exFunc2.asary(2);

    type _Result1 = Expect<Equal<typeof test1, (args_1: number, args_2: number) => number>>;
    type _Result2 = Expect<Equal<typeof test2, (args_1: number) => number>>;
    type _Result3 = Expect<Equal<typeof test3, () => number>>;
    type _Result4 = Expect<Equal<typeof test4, () => number>>;
    type _Result5 = Expect<Equal<typeof test5, () => void>>;
  });
});
