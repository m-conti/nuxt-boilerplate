import { init, user1 } from 'tests';

init();

describe('All.prototypes.aseach()', () => {
  it('left', () => {
    const userKeys = Object.keys(user1), usersData = Object.values(user1);
    const keyArr: string[] = [], valuesArr: any[] = [];

    user1.aseach('left', (value, key, collection) => {
      keyArr.push(key);
      valuesArr.push(value);
      expect(value).toEqual(collection[key]);
      expect(collection).toEqual(user1);
    });

    expect(userKeys).toEqual(keyArr);
    expect(usersData).toEqual(valuesArr);
  });
  it('right', () => {
    const userKeys = Object.keys(user1), usersData = Object.values(user1);
    const keyArr: string[] = [], valuesArr: any[] = [];

    user1.aseach('right', (value, key, collection) => {
      keyArr.push(key);
      valuesArr.push(value);
      expect(value).toEqual(collection[key]);
      expect(collection).toEqual(user1);
    });

    expect(userKeys.reverse()).toEqual(keyArr);
    expect(usersData.reverse()).toEqual(valuesArr);
  });
});
