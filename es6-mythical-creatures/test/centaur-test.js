const assert = require('chai').assert;
const Centaur = require('../exercises/centaur');

describe('Centaur', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Centaur);
  });

  it.skip('should have a name', () => {
    const centaur = new Centaur('George');
    assert.equal(centaur.name, 'George');
  });

  it.skip('should have a breed', () => {
    const centaur = new Centaur('George', 'Palomino');
    assert.equal(centaur.breed, 'Palomino');
  });

  it.skip('should have excellent bow skills', () => {
    const centaur = new Centaur('George');
    assert.equal(centaur.shoot(), 'Twang!!!');
  });

  it.skip('should have a horse sound when it runs', () => {
    const centaur = new Centaur('George');
    assert.equal(centaur.run(), 'Clop clop clop clop!!!');
  });

  it.skip('should not be cranky when first created', () => {
    const centaur = new Centaur('George');
    assert.equal(centaur.cranky, false);
  });

  it.skip('should be standing up when first created', () => {
    const centaur = new Centaur('George');
    assert.equal(centaur.standing, true);
  });

  it.skip('should be cranky after running or shooting a bow three times', () => {
    const centaur = new Centaur('George');

    assert.equal(centaur.cranky, false);

    centaur.shoot()
    centaur.run()
    centaur.shoot()

    assert.equal(centaur.cranky, true)
  });

  it.skip('should not shoot when cranky', () => {
    const centaur = new Centaur('George');

    for (let i = 0; i < 3; i++)  {
      centaur.shoot();
    }

    assert.equal(centaur.shoot(), 'NO!');
  });

  it.skip('should not sleep while standing', () => {
    const centaur = new Centaur('George');
    assert.equal(centaur.sleep(), 'NO!');
  });

  it.skip('after laying down it is not standing', () => {
    const centaur = new Centaur('George');

    assert.equal(centaur.standing, true);
    assert.equal(centaur.layingDown, false);

    centaur.layDown();

    assert.equal(centaur.standing, false);
    assert.equal(centaur.layingDown, true);

    centaur.standUp();

    assert.equal(centaur.standing, true);
    assert.equal(centaur.layingDown, false);
  });

  it.skip('should not run or shoot while laying down', () => {
    const centaur = new Centaur('George');

    centaur.layDown();

    assert.equal(centaur.shoot(), 'NO!');
    assert.equal(centaur.run(), 'NO!');
  });

  it.skip('should be able to sleep when laying down', () => {
    const centaur = new Centaur('George');
    centaur.layDown();
    assert.equal(centaur.sleep(), 'ZZZZ');
  });

  it.skip('should not be cranky after sleeping', () => {
    const centaur = new Centaur('George');

    for (let i = 0; i < 3; i++)  {
      centaur.shoot();
    }

    assert.equal(centaur.cranky, true);

    centaur.layDown();

    assert.equal(centaur.sleep(), 'ZZZZ');
    assert.equal(centaur.cranky, false);

    centaur.standUp();
    assert.equal(centaur.shoot(),'Twang!!!');
  });

  it.skip('should not be cranky after drinking potion', () => {
    const centaur = new Centaur('George');

    for (let i = 0; i < 3; i++)  {
      centaur.shoot();
    }

    centaur.drinkPotion();

    assert.equal(centaur.cranky, false)
  });

  it.skip('should only drink potion while standing', () => {
    const centaur = new Centaur('George');

    centaur.drinkPotion();
    centaur.layDown();

    assert.equal(centaur.drinkPotion(), 'Not while I\'m laying down!');
  });

  it.skip('should be cranky if it drinks potion while rested', () => {
    const centaur = new Centaur('George');

    assert.equal(centaur.cranky, false);

    centaur.drinkPotion();

    assert.equal(centaur.cranky, true);
  });
});
