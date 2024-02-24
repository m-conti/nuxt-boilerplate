/* eslint-disable max-len */
import {
  type Equal,
  type Expect,

  init,

  user1,

  usersArray,
} from 'tests';

init();

describe('Object.prototype.asquery()', () => {
  it('query', () => {
    const res1 = user1.asquery();
    const res2 = {}.asquery();
    const res3 = { a: null }.asquery();
    const res4 = usersArray.asquery();

    expect(res1).toEqual('name=%22fred%22&age=48&admin=true&createdAt=%222020-10-31T23%3A00%3A00.000Z%22&data=%7B%22roles%22%3A%5B%22SUPER_USER%22%5D%2C%22height%22%3A170%7D');
    expect(res2).toEqual('');
    expect(res3).toEqual('a=null');
    expect(res4).toEqual('0=%7B%22name%22%3A%22fred%22%2C%22age%22%3A48%2C%22admin%22%3Atrue%2C%22createdAt%22%3A%222020-10-31T23%3A00%3A00.000Z%22%2C%22data%22%3A%7B%22roles%22%3A%5B%22SUPER_USER%22%5D%2C%22height%22%3A170%7D%7D&1=%7B%22name%22%3A%22barney%22%2C%22age%22%3A34%2C%22admin%22%3Afalse%2C%22createdAt%22%3A%222020-12-31T23%3A00%3A00.000Z%22%2C%22data%22%3A%7B%22roles%22%3A%5B%22TESTER%22%5D%2C%22height%22%3A160%7D%7D&2=%7B%22name%22%3A%22jacque%22%2C%22age%22%3A40%2C%22admin%22%3Afalse%2C%22createdAt%22%3A%222020-02-29T23%3A00%3A00.000Z%22%2C%22data%22%3A%7B%22roles%22%3A%5B%5D%2C%22height%22%3A140%7D%7D&3=%7B%22name%22%3A%22alfred%22%2C%22admin%22%3Atrue%2C%22createdAt%22%3A%222020-06-30T22%3A00%3A00.000Z%22%2C%22data%22%3A%7B%22roles%22%3A%5B%22SUPER_USER%22%2C%22TESTER%22%5D%2C%22height%22%3A140%7D%7D');


    type _RRes1 = Expect<Equal<typeof res1, string>>;
    type _RRes2 = Expect<Equal<typeof res2, string>>;
    type _RRes3 = Expect<Equal<typeof res3, string>>;
    type _RRes4 = Expect<Equal<typeof res4, string>>;
  });
});
