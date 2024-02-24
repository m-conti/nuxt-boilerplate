import { init } from 'tests';
init();

describe('Array.prototypes.asshuffle()', () => {
  const array = [ 'test', 'bar', 'foo' ];
  const isShuffled = (arr1: string[], arr2: string[]) => arr1.every(element => arr2.includes(element)) && arr1.toString() !== arr2.toString();

  it('shuffle', () => {
    const res1 = array.asshuffle(), res2 = array.asshuffle(), res3 = array.asshuffle(), res4 = array.asshuffle(), res5 = array.asshuffle(), res6 = array.asshuffle();
    const nbArrayChanged = [
      isShuffled(array, res1),
      isShuffled(array, res2),
      isShuffled(array, res3),
      isShuffled(array, res4),
      isShuffled(array, res5),
      isShuffled(array, res6),
    ].map(v => v).length;

    expect(nbArrayChanged).toBeGreaterThanOrEqual(4);
  });
});
