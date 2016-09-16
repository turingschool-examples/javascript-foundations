var assert = require('chai').assert;
var Centaur = require('../exercises/centaur');

describe('Centaur', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Centaur);
  });

  it.skip('should instantiate our good friend, Blocky', function () {
    var centaur = new Centaur();
    assert.isObject(Centaur);
  });

  it.skip('should have a name', function () {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.name, 'George');
  });

  it.skip('should have a breed', function () {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.breed, 'Palomino');
  });

  it.skip('should have excellent bow skills', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.shoot(), 'Twang!!!');
  });

  it.skip('should have a horse sound when it runs', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.run(), 'Clop clop clop clop!!!');
  });

  it.skip('should not be cranky when first created', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert(!centaur.cranky());
  });

  it.skip('should be standing up when first created', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert(centaur.standing);
  });

  it.skip('should be cranky after running or shooting a bow three times', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert(!centaur.cranky);
    centaur.shoot()
    centaur.run()
    centaur.shoot()
    assert(centaur.cranky)
  });

  function shoot(roar) {
    for(var i = 0; i < 3; i++) {
      roar.shoot()
    }
  }

  it.skip('should not shoot when cranky', function() {
    var centaur = new Centaur('George', 'Palomino');
    shoot(centaur)
    assert.equal(centaur.shoot(), 'NO!');
  });

  it.skip('should not sleep while standing', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.sleep(), 'NO!');
  });

  it.skip('should not sleep while standing', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.sleep(), 'NO!');
  });

  it.skip('after laying down it is not standing', function() {
    var centaur = new Centaur('George', 'Palomino');
    assert(centaur.standing);
    assert(!centaur.layingDown);
    centaur.layDown();
    assert(!centaur.standing);
    assert(centaura.layingDown);
    centaur.standUp();
    assert(centaur.standing);
    assert(!centaur.layingDown);
  });

  it.skip('should not run or shoot while laying down', function() {
    var centaur = new Centaur('George', 'Palomino');
    centaur.layDown();
    assert.equal(centaur.shoot(), 'NO!');
    assert.equal(centaur.run(), 'NO!');
  });

  it.skip('should not run or shoot while laying down', function() {
    var centaur = new Centaur('George', 'Palomino');
    centaur.layDown();
    assert.equal(centaur.shoot(), 'NO!');
    assert.equal(centaur.run(), 'NO!');
  });

  it.skip('should be able to sleep when laying down', function() {
    var centaur = new Centaur('George', 'Palomino');
    centaur.layDown();
    assert.equal(centaur.sleep(), 'ZZZZ');
  });

  it.skip('should not be cranky after sleeping', function() {
    var centaur = new Centaur('George', 'Palomino');
    shoot(centaur);
    assert(centaur.cranky);
    centaur.layDown();
    assert.equal(centaur.sleep(), 'ZZZZ');
    assert(!centaur.cranky);
    assert.equal(centaur.shoot(),'Twang!!!');
  });

  it.skip('should not be cranky after drinking potion', function() {

  });

  it.skip('should only drink potion while standing', function() {

  });

  it.skip('should be cranky if it drinks potion while rested', function() {

  });


});
