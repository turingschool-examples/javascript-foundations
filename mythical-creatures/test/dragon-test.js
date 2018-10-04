var assert = require('chai').assert;
var Dragon = require('../exercises/dragon');

describe('Dragon', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Dragon);
  });

  it.skip('should instantiate our good friend, Dragon', function() {
    var dragon = new Dragon();
    assert.isObject(dragon);
  });

  it.skip('should have name', function() {
    var dragon1 = new Dragon('Jeff');
    assert.equal(dragon1.name, 'Jeff');
    var dragon2 = new Dragon('Louisa');
    assert.equal(dragon2.name, 'Louisa');
  });

  it.skip('should have a rider', function() {
    var dragon = new Dragon('Saphira', 'Eragon');
    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it.skip('should have a color', function() {
    var dragon = new Dragon('Saphira', 'Eragon', 'blue');
    assert.equal(dragon.color, 'blue');
  });

  it.skip('should start off being hungry', function() {
    var dragon = new Dragon('Josh');
    assert.equal(dragon.hungry, true);
  });

  it.skip('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox');

    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);
    dragon.eat();
    assert.equal(dragon.hungry, true);

    dragon.eat();
    assert.equal(dragon.hungry, false);
  });
});
