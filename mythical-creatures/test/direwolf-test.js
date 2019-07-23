const assert = require('chai').assert;
const Direwolf = require('../exercises/direwolf');
const Stark = require('../exercises/stark');

describe('Direwolf', () => {

  it('should be a function', () => {
    assert.isFunction(Direwolf);
  });

  it('should instantiate our good friend, Direwolf', () => {
    const direwolf = new Direwolf();
    assert.isObject(direwolf);
  });

  it('should have a name', () => {
    const direwolf = new Direwolf('Nymeria');
    assert.equal(direwolf.name, 'Nymeria');
  });

  it('should have a default home of Beyond the Wall', () => {
    const direwolf = new Direwolf('Lady');

    assert.equal(direwolf.name, 'Lady');
    assert.equal(direwolf.home, 'Beyond the Wall');
  });

  it('should be able to have other homes', () => {
    const direwolf = new Direwolf('Ghost', 'Winterfell');

    assert.equal(direwolf.home, 'Winterfell');
  });

  it('should have a default size of massive', () => {
    const direwolf = new Direwolf('Ghost');

    assert.equal(direwolf.size, 'Massive');
  });

  it('should be able to have another size', () => {
    const direwolf = new Direwolf('Shaggydog', 'Karhold', 'Smol Pupper');

    assert.equal(direwolf.name, 'Shaggydog');
    assert.equal(direwolf.home, 'Karhold');
    assert.equal(direwolf.size, 'Smol Pupper');
  });

  it('should instantiate our good friend, Stark', () => {
    const stark = new Stark();

    assert.isObject(stark);
  });

  it('should have a name', () => {
    const stark = new Stark('Bran');

    assert.equal(stark.name, 'Bran');
  });

  it('should have a default home of Winterfell', () => {
    const stark = new Stark('Bran');

    assert.equal(stark.name, 'Bran');
    assert.equal(stark.location, 'Winterfell');
  });

  it('should start with no Starks to protect', () => {
    const direwolf = new Direwolf('Nymeria');
    const stark = new Stark('Arya');

    assert.deepEqual(direwolf.starksToProtect, []);
    assert.equal(direwolf.home, 'Beyond the Wall');
    assert.equal(stark.location, 'Winterfell');
  });

  it('should be able to protect a Stark', () => {
    const direwolf = new Direwolf('Nymeria', 'Riverlands');
    const stark = new Stark('Arya', 'Riverlands');

    assert.deepEqual(direwolf.starksToProtect, []);

    direwolf.protect(stark);
    assert.equal(direwolf.starksToProtect.length, 1);
    assert.equal(direwolf.starksToProtect[0].name, 'Arya');
  });

  it('should only be able to protect a Stark if direwolf and Stark locations match', () => {
    const direwolf = new Direwolf('Ghost');
    const stark = new Stark('John', 'King\'s Landing');

    direwolf.protect(stark);

    assert.deepEqual(direwolf.starksToProtect, []);
  });

  it('should only be able to protect two Starks at a time', () => {
    const direwolf1 = new Direwolf('Summer', 'Winterfell');
    const direwolf2 = new Direwolf('Lady', 'Winterfell');
    const stark1 = new Stark('Sansa');
    const stark2 = new Stark('John');
    const stark3 = new Stark('Rob');
    const stark4 = new Stark('Bran');
    const stark5 = new Stark('Arya');

    direwolf1.protect(stark1);
    direwolf1.protect(stark2);
    direwolf2.protect(stark3);
    direwolf2.protect(stark4);
    direwolf2.protect(stark5);

    assert.equal(direwolf1.starksToProtect.length, 2);
    assert.equal(direwolf1.starksToProtect[0].name, 'Sansa');
    assert.equal(direwolf1.starksToProtect[1].name, 'John');

    assert.equal(direwolf2.starksToProtect.length, 2);
    assert.equal(direwolf2.starksToProtect[0].name, 'Rob');
    assert.equal(direwolf2.starksToProtect[1].name, 'Bran');
  });

  it('Stark should start off unsafe', () => {
    const stark = new Stark('John', 'Winterfell');

    assert.equal(stark.safe, false);
    assert.equal(stark.houseWords(), 'Winter is Coming');
  });

  it('should change house words once protected', () => {
    const direwolf = new Direwolf('Nymeria', 'Dorn');
    const stark1 = new Stark('Arya', 'Dorn');
    const stark2 = new Stark('Sansa', 'Dorn');

    assert.equal(stark1.safe, false);
    assert.equal(stark2.safe, false);

    direwolf.protect(stark1);
    assert.equal(stark1.safe, true);
    assert.equal(stark2.safe, false);

    assert.equal(stark1.houseWords(), 'The North Remembers');
    assert.equal(stark2.houseWords(), 'Winter is Coming');
  });

  it('should hunt white walkers when not protecting Starks', () => {
    const direwolf = new Direwolf('Nymeria', 'Winterfell');
    const stark = new Stark('Sansa');

    assert.equal(direwolf.huntsWhiteWalkers, true);

    direwolf.protect(stark);
    assert.equal(direwolf.huntsWhiteWalkers, false);
  });

  it('should be able to stop protecting Starks', () => {
    const direwolf1 = new Direwolf('Summer', 'Winterfell');
    const direwolf2 = new Direwolf('Lady', 'Winterfell');
    const stark1 = new Stark('Sansa');
    const stark2 = new Stark('Arya');

    direwolf1.protect(stark2);
    assert.equal(stark2.safe, true);

    direwolf2.protect(stark1);
    direwolf1.leave(stark2);

    assert.deepEqual(direwolf1.starksToProtect, []);
    assert.equal(direwolf2.starksToProtect[0].name, 'Sansa');
    assert.equal(stark2.safe, false);
  });
});
