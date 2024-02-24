import {
  type Equal,
  type Expect,
  type TestUser,

  init,

  usersConstArray,
} from 'tests';
init();

describe('Array.prototypes.asflat()', () => {
  const array2d: (readonly [TestUser, TestUser, TestUser, TestUser])[] = [ usersConstArray, usersConstArray, usersConstArray, usersConstArray ];
  const array3d: (readonly [TestUser, TestUser, TestUser, TestUser])[][] = [ array2d, array2d ];

  it('flatten 2d array to 1', () => {
    const result = array2d.asflat(1);
    type _Result = Expect<Equal<typeof result, (readonly [TestUser, TestUser, TestUser, TestUser])[]>>;
  });

  it('flatten 3 to 1', () => {
    const result = array3d.asflat(1);
    type _Result = Expect<Equal<typeof result, (readonly [TestUser, TestUser, TestUser, TestUser])[]>>;
  });

  it('flatten 3d array to 2', () => {
    const result = array3d.asflat(0);
    type _Result = Expect<Equal<typeof result, (readonly[TestUser, TestUser, TestUser, TestUser])[]>>;
  });
});
