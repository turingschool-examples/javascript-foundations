var assert = require('chai').assert;
var Pet = require('../lib/pet');

describe('Pet', function() {

  it('should be a function', function() {
    assert.isFunction(Pet);
  });

  it('should have a name', function() {
    var pet = new Pet('Crookshanks', 'cat');

    assert.equal(pet.name, 'Crookshanks');
  });

  it('should have a type', function() {
    var pet = new Pet('Crookshanks', 'cat');

    assert.equal(pet.type, 'cat');
  });

  it('should have a differnt name and type', function() {
    var pet = new Pet('Hedwig', 'owl');

    assert.equal(pet.name, 'Hedwig');
    assert.equal(pet.type, 'owl');
  });
});
