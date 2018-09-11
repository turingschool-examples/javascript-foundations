var assert = require('chai').assert;
var Vampire = require('../exercises/vampire');

describe('Vampire', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Vampire);
  });

  it.skip('should instantiate our good friend, Vampire', function() {
    var vampire = new Vampire();
    assert.isObject(vampire);
  });

  it.skip('should have a name', function() {
    var vampire = new Vampire('Jhun');
    assert.equal(vampire.name, 'Jhun');
  });

  it.skip('should have a pet bat as a default', function() {
    var vampire = new Vampire('Brittany');
    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'bat');
  });

  it.skip('should take an argument for pet', function() {
    var vampire = new Vampire('Jeff', 'fox');
    assert.equal(vampire.pet, 'fox');
  });

  it.skip('should have vampire return true if thirsty', function() {
    var vampire = new Vampire('Andy');
    assert.equal(vampire.thirsty, true);
  });

  it.skip('should refute thirsty if vampire has drank', function() {
    var vampire = new Vampire('Meeka');
    vampire.drink();
    assert.equal(vampire.thirsty, false);
  });
});
