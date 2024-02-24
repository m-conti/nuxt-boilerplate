import { extendsJs } from 'utils';

export type Expect<T extends true> = T;
export type Equal<X, Y> = [X] extends [Y] ? ([Y] extends [X] ? true : false) : false;

export type TestDataUser = {
  roles: string[];
  height: number;
};

export type TestUser = {
  name: string;
  age?: number;
  admin: boolean;
  createdAt?: Date;
  data: TestDataUser;
  previousData?: TestDataUser;
  none?: undefined;
};


export const user1: TestUser = { name: 'fred', age: 48, admin: true, createdAt: new Date(2020, 10), data: { roles: ['SUPER_USER'], height: 170 }};
export const user2: TestUser = { name: 'barney', age: 34, admin: false, createdAt: new Date(2020, 12), data: { roles: ['TESTER'], height: 160 }};
export const user3: TestUser = { name: 'jacque', age: 40, admin: false, createdAt: new Date(2020, 2), data: { roles: [], height: 140 }};
export const user4: TestUser = { name: 'alfred', admin: true, createdAt: new Date(2020, 6), data: { roles: [ 'SUPER_USER', 'TESTER' ], height: 140 }};

export const usersConstArray = [ user1, user2, user3, user4 ] as const;
export const usersArray = [ user1, user2, user3, user4 ];
export const usersDict = { user1, user2, user3, user4 };
export const usersDictRecord: Record<string, TestUser> = usersDict;


export const init = () => {
  extendsJs();
};
