
import {
  type Equal,
  type Expect,

  init,

  user1,
  user2,

  type TestUser,
  type TestDataUser,
} from 'tests';

init();

describe('Object.prototype.asmerge()', () => {
  type Nationality = { nationality: string };
  type AType = { a: number; b: string };

  it('merge', () => {
    const nationality: Nationality = { nationality: 'US' };
    const obj1: AType = { a: 12, b: 'foo' }, obj2: AType = { a: 15, b: 'bar' };
    const obj3: AType = { a: 100000, b: 'foobar' }, obj4: AType = { a: 654, b: 'boo' }, obj5: AType = { a: 654, b: 'far' };
    const someUserData: TestDataUser = { roles: ['SUPER_USER'], height: 170 };

    const customize = (objValue: any, srcValue: any) => {
      if (Array.isArray(objValue)) return objValue.concat(srcValue);
      if (typeof objValue === 'number') return objValue > srcValue ? objValue : srcValue;
    };

    const res1 = user1.asmerge(nationality);
    const res2 = someUserData.asmerge(user2.data, customize);
    const res3 = obj1.asmerge(obj2);
    const res4 = obj3.asmerge(obj4.asmerge(obj5));

    expect(res1).toEqual({ name: 'fred', age: 48, admin: true, createdAt: new Date(2020, 10), data: { roles: ['SUPER_USER'], height: 170 }, nationality: 'US' });
    expect(res2).toEqual({ roles: [ 'SUPER_USER', 'TESTER' ], height: 170 });
    expect(res3).toEqual({ a: 15, b: 'bar' });
    expect(res4).toEqual({ a: 654, b: 'far' });

    type _RRes1 = Expect<Equal<typeof res1, TestUser & Nationality>>;
    type _RRes2 = Expect<Equal<typeof res2, TestDataUser>>;
    type _RRes3 = Expect<Equal<typeof res3, AType>>;
    type _RRes4 = Expect<Equal<typeof res4, AType>>;
  });
});
