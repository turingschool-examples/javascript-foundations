var assert = require('chai').assert;
var Snack = require('./snack');

describe('Snack', function() {

  it('should be extra delicious', function() {
    var pistachio = new Snack("Pistachio");

    assert.equal(pistachio.deliciousLevel, "extra");
  });

  it('should have a type', function() {
    var pistachio = new Snack("Pistachio");
    var fruitSnack = new Snack("Fruit Snack");

    assert.equal(pistachio.type, "Pistachio");
    assert.equal(fruitSnack.type, "Fruit Snack");
  });

  it('should start fully stocked', function() {
    var pistachio = new Snack("Pistachio");

    assert.equal(pistachio.amount, 100);
  });

  it('should start NOT inside of a lunch box', function() {
    var pistachio = new Snack("Pistachio");

    assert.equal(pistachio.isInLunchBox, false);
  });

  it('should see stock decrease after eaten', function() {
    var pistachio = new Snack("Pistachio");

    pistachio.getEaten();
    pistachio.getEaten();
    pistachio.getEaten();
    assert.equal(pistachio.amount, 70);
  });

  it('should be cutting it close if 20% or less remaining', function() {
    var pistachio = new Snack("Pistachio");

    pistachio.getEaten();
    pistachio.getEaten();
    pistachio.getEaten();
    pistachio.getEaten();
    pistachio.getEaten();
    pistachio.getEaten();
    pistachio.getEaten();
    assert.equal(pistachio.cuttingItClose, false);
    pistachio.getEaten();
    assert.equal(pistachio.cuttingItClose, true);
  });

  it('should be considered healthy if the word "fruit" is in it', function() {
    var pistachio = new Snack("Pistachio");
    var mixedFruit = new Snack("Mixed fruit");
    var fruit = new Snack("Fruit");
    var apple = new Snack("Apple");

    assert.equal(pistachio.checkForHealthy(), false);
    assert.equal(mixedFruit.checkForHealthy(), true);
    assert.equal(fruit.checkForHealthy(), true);
    assert.equal(apple.checkForHealthy(), false);
    // this is obviously a silly way to find healthy food IRL.
  });

});
