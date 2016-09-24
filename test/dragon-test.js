var assert = require('chai').assert;
var Dragon = require('../exercises/dragon');

describe('Dragon', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Dragon);
  });

  it.skip('should instantiate our good friend, Dragon', function () {
    var dragon = new Dragon();
    assert.isObject(dragon);
  });

  it.skip('should have name', function () {
    var dragon = new Dragon('Jeff');
    assert.equal(dragon.name, 'Jeff');
  });

  it.skip('should have a rider', function () {
    var dragon = new Dragon('Saphira', 'blue', 'Eragon');
    assert.equal(dragon.rider, 'Eragon');
  });

  it.skip('should have a color', function () {
    var dragon = new Dragon('Saphira', 'blue', 'Eragon');
    assert.equal(dragon.color, 'blue');
  });

  it.skip('should start off being hungry', function() {
    var dragon = new Dragon('Josh');
    assert(dragon.hungry());
  });

  it.skip('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox');
    assert(dragon.hungry());
    dragon.eat();
    assert(dragon.hungry());
    dragon.eat();
    assert(dragon.hungry());
    dragon.eat();
    assert(!dragon.hungry());
  });
  
});
