const assert = require('chai').assert;
const Pet = require('../lib/pet');

describe('Pet', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Pet);
  });

  it.skip('should have a name', () => {
    const pet = new Pet('Crookshanks', 'cat');

    assert.equal(pet.name, 'Crookshanks');
  });

  it.skip('should have a type', () => {
    const pet = new Pet('Crookshanks', 'cat');

    assert.equal(pet.type, 'cat');
  });

  it.skip('should have a different name and type', () => {
    const pet = new Pet('Hedwig', 'owl');

    assert.equal(pet.name, 'Hedwig');
    assert.equal(pet.type, 'owl');
  });
});
