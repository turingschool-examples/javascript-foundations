var assert = require('chai').assert;
var Pirate = require('../exercises/pirate');

describe('Pirate', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Pirate);
  });

  it.skip('should instantiate our good friend, Pirate', function() {
    var pirate = new Pirate();
    assert.isObject(pirate);
  });

  it.skip('should have a name', function() {
    var pirate = new Pirate('Blackbeard');
    assert.equal(pirate.name, 'Blackbeard');
  });

  it.skip('should be a scallywag by default', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.name, 'JeffBeard');
    assert.equal(pirate.job, 'Scallywag');
  });

  it.skip('should be a cook if passed into argument', function() {
    var pirate = new Pirate('HoraceBeard', 'cook');
    assert.equal(pirate.job, 'cook');
  });

  it.skip('should not be cursed by default', function() {
    var pirate = new Pirate('SteveBeard', 'cook');
    assert.equal(pirate.cursed, false);
  });

  it.skip('should become cursed after 3 heinous acts', function() {
    var pirate = new Pirate('JoshBeard', 'cook');

    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);

    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, true);
  });

  it.skip('should be able to rob ships', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.robShip(), 'YAARRR!');
  });

  it.skip('should start with a booty of 0', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);
  });

  it.skip('should have a booty of 100 after robShip()', function() {
    var pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);

    pirate.robShip();
    assert.equal(pirate.booty, 100);
  });
});
