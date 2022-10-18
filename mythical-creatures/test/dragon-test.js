var assert = require('chai').assert;
var Dragon = require('../exercises/dragon');

describe('Dragon', function() {

  it('should be a function', function() {
    assert.isFunction(Dragon);
  });

  it('should instantiate our good friend, Dragon', function() {
    var smaug = new Dragon();

    assert.instanceOf(smaug, Dragon);
  });

  it('should have name', function() {
    var dragon1 = new Dragon('Jeff');
    var dragon2 = new Dragon('Louisa');

    assert.equal(dragon1.name, 'Jeff');
    assert.equal(dragon2.name, 'Louisa');
  });

  it('should have a rider', function() {
    var dragon = new Dragon('Saphira', 'Eragon');

    assert.equal(dragon.name, 'Saphira');
    assert.equal(dragon.rider, 'Eragon');
  });

  it('should greet their rider', function() {
    var dragon1 = new Dragon('Gray', 'Marley');
    var dragon2 = new Dragon('Sky', 'Susie');

    var greeting1 = dragon1.greet();
    var greeting2 = dragon2.greet();

    assert.equal(greeting1, 'Hi, Marley!');
    assert.equal(greeting2, 'Hi, Susie!');
  });

  it('should start off being hungry', function() {
    var dragon = new Dragon('Josh');

    assert.equal(dragon.hungry, true);
  });

  it('should be full after eating 3 times', function() {
    var dragon = new Dragon('Lady Vox');

    dragon.eat();

    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.hungry, true);

    dragon.eat();

    assert.equal(dragon.hungry, false);
  });
});
