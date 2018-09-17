const assert = require('chai').assert;
const Hobbit = require('../exercises/hobbit');

describe('Hobbit', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Hobbit);
  });

  it.skip('should instantiate our good friend, Hobbit', () => {
    const hobbit = new Hobbit();
    assert.isObject(hobbit);
  });

  it.skip('should have a name', () => {
    const hobbit = new Hobbit('Bilbo');
    assert.equal(hobbit.name, 'Bilbo');
  });

  it.skip('should have an unadventurous disposition', () => {
    const hobbit = new Hobbit('Samwise');
    assert.equal(hobbit.disposition, 'homebody');
  });

  it.skip('should have an age', () => {
    const hobbit = new Hobbit('Meriadoc');
    assert.equal(hobbit.name, 'Meriadoc');
    assert.equal(hobbit.age, 0);
  });

  it.skip('should have gained 1 year after every birthday', () => {
    const hobbit = new Hobbit('Meriadoc');
    assert.equal(hobbit.age, 0);
    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();
    assert.equal(hobbit.age, 3);
  });

   const timeTravel = (num, hobbit) => {
    for(let i = 0; i < num; i++) {
      hobbit.celebrateBirthday();
    };
  };

  it.skip('should be considered a child at the age of 32', () => {
    const hobbit = new Hobbit('Taylor');
    timeTravel(32, hobbit);
    assert.equal(hobbit.age, 32);
    assert.equal(hobbit.adult, false);
  });

  it.skip('should be considered an adult at 33', () => {
    const hobbit = new Hobbit('Taylor');
    timeTravel(33, hobbit);
    assert.equal(hobbit.age, 33);
    assert.equal(hobbit.adult, true);
  });

  it.skip('should be short', () => {
    const hobbit = new Hobbit('Samwise');
    assert.equal(hobbit.isShort, true)
  });

  it.skip('should be considered old at the age of 101', () => {
    const hobbit = new Hobbit('Samwise');
    assert.equal(hobbit.old, false)

    timeTravel(100, hobbit);
    assert.equal(hobbit.old, false)

    hobbit.celebrateBirthday();
    assert.equal(hobbit.old, true)
  });

  it.skip('should have the ring if its name is Frodo', () => {
    const hobbit1 = new Hobbit('Frodo');
    const hobbit2 = new Hobbit('Samwise');

    assert.equal(hobbit1.hasRing, true)
    assert.equal(hobbit2.hasRing, false)
  });
});
