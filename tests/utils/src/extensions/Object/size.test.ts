import {
  type Equal,
  type Expect,

  init,

  usersArray,
  usersConstArray,
  usersDict,
  usersDictRecord,
} from 'tests';

init();

describe('Object.prototypes.assize()', () => {
  it('size array', () => {
    const result = usersArray.assize();
    expect(result).toEqual(4);
    type _ = Expect<Equal<typeof result, number>>;
  });
  it('size const array', () => {
    const result = usersConstArray.assize();
    expect(result).toEqual(4);
    type _ = Expect<Equal<typeof result, 4>>;
  });
  it('size dictionary', () => {
    const result = usersDict.assize();
    expect(result).toEqual(4);
    type _ = Expect<Equal<typeof result, number>>;
  });
  it('size record dictionary', () => {
    const result = usersDictRecord.assize();
    expect(result).toEqual(4);
    type _ = Expect<Equal<typeof result, number>>;
  });
  it('size empty array', () => {
    const result = ([]).assize();
    expect(result).toEqual(0);
    type _ = Expect<Equal<typeof result, number>>;
  });
  it('size empty dictionary', () => {
    const result = ({}).assize();
    expect(result).toEqual(0);
    type _ = Expect<Equal<typeof result, number>>;
  });
});
