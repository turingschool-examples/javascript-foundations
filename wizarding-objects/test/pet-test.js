const assert = require('chai').assert;
const Pet = require('../lib/pet');

describe('Pet', () => {

  it('should be a function', () => {
    assert.isFunction(Pet);
  });

  it('should have a name', () => {
    const pet = new Pet('Crookshanks', 'cat');

    assert.equal(pet.name, 'Crookshanks');
  });

  it('should have a type', () => {
    const pet = new Pet('Crookshanks', 'cat');

    assert.equal(pet.type, 'cat');
  });

  it('should have a different name and type', () => {
    const pet = new Pet('Hedwig', 'owl');

    assert.equal(pet.name, 'Hedwig');
    assert.equal(pet.type, 'owl');
  });
});
