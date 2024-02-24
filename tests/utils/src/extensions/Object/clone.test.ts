import {
  type Equal,
  type Expect,

  init,
} from 'tests';

init();

interface Data {
  num: number;
  str: string;
  bool: boolean;
}

let data: Data;

describe('All.prototypes.asclone()', () => {
  beforeEach(() => {
    data = {
      num: 10,
      str: 'ten',
      bool: true,
    };
  });

  it('copy values', () => {
    expect(data.asclone()).toEqual(data);
  });

  it('different pointer', () => {
    expect(data.asclone()).not.toBe(data);
  });

  it('mutate the cloned do not mutate the clone', () => {
    const clone = data.asclone();
    data.bool = false;
    expect(clone).not.toEqual(data);
    expect(data.bool).toBeFalsy();
    expect(clone.bool).toBeTruthy();
  });

  it('mutate the clone do not mutate the cloned', () => {
    const clone = data.asclone();
    clone.bool = false;
    expect(clone).not.toEqual(data);
    expect(clone.bool).toBeFalsy();
    expect(data.bool).toBeTruthy();
  });
  it('clone check types', () => {
    const clone = data.asclone();
    type _Result = Expect<Equal<typeof clone, typeof data>>;
  });
});
