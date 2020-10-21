var assert = require('chai').assert;
var Centaur = require('../exercises/centaur');

describe('Centaur', function() {

  it('should be a function', function() {
    assert.isFunction(Centaur);
  });

  it('should have a name', function() {
    var centaur1 = new Centaur({ name: 'Georgiana' });
    var centaur2 = new Centaur({ name: 'Bob' });

    assert.equal(centaur1.name, 'Georgiana');
    assert.equal(centaur2.name, 'Bob');
  });

  it('should have a breed', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.breed, 'Palomino');
  });

  it('should have excellent bow skills', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.shoot(), 'Twang!!!');
  });

  it('should have a horse sound when it runs', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    var soundEffect = centaur.run();

    assert.equal(soundEffect, 'Clop clop clop clop!!!');
  });

  it('should not be cranky when first created', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.cranky, false);
  });

  it('should be standing up when first created', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.standing, true);
  });

  it('should be cranky after running or shooting a bow three times', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.cranky, false);

    centaur.shoot()
    centaur.run()
    centaur.shoot()

    assert.equal(centaur.cranky, true)
  });

  it('should be cranky after running or shooting a bow three times', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.cranky, false);

    centaur.run()
    centaur.run()
    centaur.shoot()

    assert.equal(centaur.cranky, true)
  });

  it('should not shoot when cranky', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.shoot();
    centaur.shoot();
    centaur.run();

    assert.equal(centaur.shoot(), 'NO!');
  });

  it('should not run when cranky', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.shoot();
    centaur.shoot();
    centaur.shoot();

    assert.equal(centaur.run(), 'NO!');
  });

  it('should not sleep while standing', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.sleep(), 'NO!');
  });

  it('after laying down it is not standing', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    assert.equal(centaur.standing, true);
    assert.equal(centaur.layingDown, false);

    centaur.layDown();

    assert.equal(centaur.standing, false);
    assert.equal(centaur.layingDown, true);

    centaur.standUp();

    assert.equal(centaur.standing, true);
    assert.equal(centaur.layingDown, false);
  });

  it('should not run or shoot while laying down', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.layDown();

    assert.equal(centaur.shoot(), 'NO!');
    assert.equal(centaur.run(), 'NO!');
  });

  it('should be able to sleep when laying down', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.layDown();

    assert.equal(centaur.sleep(), 'ZZZZ');
  });

  it('should not be cranky after sleeping', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.run();
    centaur.run();
    centaur.run();

    assert.equal(centaur.cranky, true);

    centaur.layDown();
    var snooze = centaur.sleep();

    assert.equal(snooze, 'ZZZZ');
    assert.equal(centaur.cranky, false);

    centaur.standUp();

    assert.equal(centaur.shoot(),'Twang!!!');
  });

  it('should not be cranky after drinking potion', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.shoot();
    centaur.run();
    centaur.shoot();

    centaur.drinkPotion();

    assert.equal(centaur.cranky, false)
  });

  it('should only drink potion while standing', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.layDown();

    assert.equal(centaur.drinkPotion(), 'Not while I\'m laying down!');
  });

  it('should be cranky if it drinks potion while rested', function() {
    var centaur = new Centaur({ name: 'Georgiana', type: 'Palomino' });

    centaur.drinkPotion();

    assert.equal(centaur.cranky, true);
  });
});
