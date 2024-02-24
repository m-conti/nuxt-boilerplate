import {
  type Equal,
  type Expect,

  init,

  user1,
  user2,

  usersArray,
  usersConstArray,
  usersDict,
  usersDictRecord,
} from 'tests';

init();

describe('All.prototypes.asget()', () => {
  it('get property', () => {
    const res1 = usersArray.asget('[1].name');
    const res2 = usersConstArray.asget('[1]');
    const res3 = usersDict.asget('user1');
    const res4 = usersDictRecord.asget('user4.data.roles[0]');
    const res5 = usersArray.asget('[8]', 'it works !');
    const res6 = usersArray.asget('[9]');
    // const res7 = usersArray.asget(['user1', 'name']);
    const res8 = usersArray.asget('[1].test');

    expect(res1).toEqual('barney');
    expect(res2).toEqual(user2);
    expect(res3).toEqual(user1);
    expect(res4).toEqual('SUPER_USER');
    expect(res5).toEqual('it works !');
    expect(res6).toBeUndefined();
    // expect(res7).toEqual('fred');
    expect(res8).toBeUndefined();

    type _R5 = Expect<Equal<typeof res5, 'it works !'>>;
    type _R6 = Expect<Equal<typeof res6, unknown>>;
  });
});
