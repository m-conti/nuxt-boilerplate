import {
  type Equal,
  type Expect,
  type TestDataUser,
  type TestUser,

  init,

  user1,
  user2,
  user3,
  user4,

  usersArray,
  usersConstArray,
} from 'tests';

init();

describe('Array.prototypes.asuniq()', () => {
  it('simple uniq : multiple same object', () => {
    expect([ user1, user2, user2, user3, user4 ].asuniq()).toEqual(usersArray);
  });
  it('simple uniq : multiple same data', () => {
    expect([ user1, { ...user2 }, { ...user2 }, user3, user4 ].asuniq()).toEqual([ user1, user2, user2, user3, user4 ]);
  });
  it('simple uniq : no duplicate data', () => {
    expect([ user1, user2, user3, user4 ].asuniq()).toEqual(usersArray);
  });
  it('simple uniq : empty', () => {
    expect([].asuniq()).toEqual([]);
  });

  it('property uniq : multiple same object', () => {
    expect([ user1, user2, user2, user3, user4 ].asuniq('name')).toEqual(usersArray);
  });
  it('property uniq : multiple same data', () => {
    expect([ user1, { ...user2 }, { ...user2 }, user3, user4 ].asuniq('name')).toEqual(usersArray);
  });
  it('property uniq : no duplicate data', () => {
    expect([ user1, user2, user3, user4 ].asuniq('name')).toEqual(usersArray);
  });
  it('property uniq : empty', () => {
    // @ts-expect-error
    expect([].asuniq('name')).toEqual([]);
  });

  it('function uniq : multiple same object', () => {
    expect(([ user1, user2, user2, user3, user4 ]).asuniq((user) => user.name)).toEqual(usersArray);
  });
  it('function uniq : multiple same data', () => {
    expect([ user1, { ...user2 }, { ...user2 }, user3, user4 ].asuniq((user) => user.name)).toEqual(usersArray);
  });
  it('function uniq : no duplicate data', () => {
    expect([ user1, user2, user3, user4 ].asuniq((user) => user.name)).toEqual(usersArray);
  });
  it('function uniq : empty', () => {
    expect([].asuniq(() => false)).toEqual([]);
  });

});
