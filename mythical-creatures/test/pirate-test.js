var assert = require('chai').assert;
var Pirate = require('../exercises/pirate');

describe('Pirate', function() {

  it('should be a function', function() {
    assert.isFunction(Pirate);
  });

  it('should instantiate our good friend, Pirate', function() {
    var dreadPirateRoberts = new Pirate();

    assert.instanceOf(dreadPirateRoberts, Pirate);
  });

  it('should have a name', function() {
    var blackbeard = new Pirate('Blackbeard');
    var chengISao = new Pirate('Cheng I Sao');

    assert.equal(blackbeard.name, 'Blackbeard');
    assert.equal(chengISao.name, 'Cheng I Sao');
  });

  it('should be a scallywag by default', function() {
    var pirate = new Pirate('Anne Bonny');

    assert.equal(pirate.name, 'Anne Bonny');
    assert.equal(pirate.job, 'scallywag');
  });

  it('should be able to have another job', function() {
    var david = new Pirate('David', 'cook');
    var pam = new Pirate('Pam', 'captain');

    assert.equal(david.job, 'cook');
    assert.equal(pam.job, 'captain');
  });

  it('should not be cursed by default', function() {
    var pirate = new Pirate('Mary Read', 'cook');

    assert.equal(pirate.cursed, false);
  });

  it('should be able to rob ships', function() {
    var pirate = new Pirate('Grace OMalley');

    assert.equal(pirate.robShip(), 'YAARRR!');
  });

  it('should start with a booty of 0', function() {
    var pirate = new Pirate('Rachel Wall');

    assert.equal(pirate.booty, 0);
  });

  it('should get 100 gold pieces when robbing a ship', function() {
    var pirate = new Pirate('Robbie');

    pirate.robShip();

    assert.equal(pirate.booty, 100);

    pirate.robShip();

    assert.equal(pirate.booty, 200);
  });
});
