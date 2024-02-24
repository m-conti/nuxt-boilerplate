import {
  init,
} from 'tests';

init();

describe('Function.prototypes.asdebounce()', () => {
  let value = false;

  beforeEach(() => {
    value = false;
  });

  it('debounce active async', (done) => {
    const fct: Function = (() => {
      value = true;
      expect(value).toBeTruthy();
      done();
    }).asdebounce('single', 10);
    fct();
    expect(value).toBeFalsy();
  });
  it('debounce active at good time', (done) => {
    const fct: () => void = (() => {
      value = true;
      expect(value).toBeTruthy();
    });
    const debounced = fct.asdebounce('single', 15);
    debounced();
    setTimeout(() => {
      expect(value).toBeFalsy();
    }, 10);
    setTimeout(() => {
      expect(value).toBeTruthy();
      done();
    }, 20);
  });
});
