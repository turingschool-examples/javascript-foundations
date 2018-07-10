var assert = require('chai').assert;
var Direwolf = require('../exercises/direwolf');
var Stark = require('../exercises/stark');

describe('Direwolf', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Direwolf);
  });

  it.skip('should instantiate our good friend, Direwolf', function () {
    var direwolf = new Direwolf();
    assert.isObject(direwolf);
  });

  it.skip('should have a name', function () {
    var direwolf = new Direwolf('Nymeria');
    assert.equal(direwolf.name, 'Nymeria');
  });

  it.skip('should have a default home of Beyond the Wall', function () {
    var direwolf = new Direwolf('Lady');

    assert.equal(direwolf.name, 'Lady');
    assert.equal(direwolf.home, 'Beyond the Wall');
  });

  it.skip('should be able to have other homes', function () {
    var direwolf = new Direwolf('Ghost', 'Winterfell');

    assert.equal(direwolf.home, 'Winterfell');
  });

  it.skip('should have a default size of massive', function () {
    var direwolf = new Direwolf('Ghost');

    assert.equal(direwolf.size, 'Massive');
  });

  it.skip('should be able to have another size', function () {
    var direwolf = new Direwolf('Shaggydog', 'Karhold', 'Smol Pupper');

    assert.equal(direwolf.name, 'Shaggydog');
    assert.equal(direwolf.home, 'Karhold');
    assert.equal(direwolf.size, 'Smol Pupper');
  });

  it.skip('should instantiate our good friend, Stark', function () {
    var stark = new Stark();

    assert.isObject(stark);
  });

  it.skip('should have a name', function () {
    var stark = new Stark('Bran');

    assert.equal(stark.name, 'Bran');
  });

  it.skip('should have a default home of Winterfell', function () {
    var stark = new Stark('Bran');

    assert.equal(stark.name, 'Bran');
    assert.equal(stark.location, 'Winterfell');
  });

  it.skip('should start with no Starks to protect', function () {
    var direwolf = new Direwolf('Nymeria');
    var stark = new Stark('Arya');

    assert.deepEqual(direwolf.starksToProtect, []);
    assert.equal(direwolf.home, 'Beyond the Wall');
    assert.equal(stark.location, 'Winterfell');
  });

  it.skip('should be able to protect a Stark', function () {
    var direwolf = new Direwolf('Nymeria', 'Riverlands');
    var stark = new Stark('Arya', 'Riverlands');

    assert.deepEqual(direwolf.starksToProtect, []);

    direwolf.protect(stark);
    assert.equal(direwolf.starksToProtect.length, 1);
    assert.equal(direwolf.starksToProtect[0].name, 'Arya');
  });

  it.skip('should only be able to protect a Stark if direwolf and Stark locations match', function () {
    var direwolf = new Direwolf('Ghost');
    var stark = new Stark('John', 'King\'s Landing');

    direwolf.protect(stark);

    assert.deepEqual(direwolf.starksToProtect, []);
  });

  it.skip('should only be able to protect two Starks at a time', function () {
    var direwolf1 = new Direwolf('Summer', 'Winterfell');
    var direwolf2 = new Direwolf('Lady', 'Winterfell');
    var stark1 = new Stark('Sansa');
    var stark2 = new Stark('John');
    var stark3 = new Stark('Rob');
    var stark4 = new Stark('Bran');
    var stark5 = new Stark('Arya');

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

  it.skip('Stark should start off unsafe', function () {
    var stark = new Stark('John', 'Winterfell');

    assert.equal(stark.safe, false);
    assert.equal(stark.houseWords(), 'Winter is Coming');
  });

  it.skip('should change house words once protected', function () {
    var direwolf = new Direwolf('Nymeria', 'Dorn');
    var stark1 = new Stark('Arya', 'Dorn');
    var stark2 = new Stark('Sansa', 'Dorn');

    assert.equal(stark1.safe, false);
    assert.equal(stark2.safe, false);

    direwolf.protect(stark1);
    assert.equal(stark1.safe, true);
    assert.equal(stark2.safe, false);

    assert.equal(stark1.houseWords(), 'The North Remembers');
    assert.equal(stark2.houseWords(), 'Winter is Coming');
  });

  it.skip('should hunt white walkers when not protecting Starks', function () {
    var direwolf = new Direwolf('Nymeria', 'Winterfell');
    var stark = new Stark('Sansa');

    assert.equal(direwolf.huntsWhiteWalkers, true);

    direwolf.protect(stark);
    assert.equal(direwolf.huntsWhiteWalkers, false);
  });

  it.skip('should be able to stop protecting Starks', function () {
    var direwolf1 = new Direwolf('Summer', 'Winterfell');
    var direwolf2 = new Direwolf('Lady', 'Winterfell');
    var stark1 = new Stark('Sansa');
    var stark2 = new Stark('Arya');

    direwolf1.protect(stark2);
    assert.equal(stark2.safe, true);

    direwolf2.protect(stark1);
    direwolf1.leave(stark2);

    assert.deepEqual(direwolf1.starksToProtect, []);
    assert.equal(direwolf2.starksToProtect[0].name, 'Sansa');
    assert.equal(stark2.safe, false);
  });
});