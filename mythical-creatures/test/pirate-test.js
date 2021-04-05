var assert = require('chai').assert;
var Pirate = require('../exercises/pirate');

describe('Pirate', function() {

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
    var pirate = new Pirate('Hannah');

    pirate.robShip();

    assert.equal(pirate.booty, 100);

    pirate.robShip();

    assert.equal(pirate.booty, 200);
  });

  it('should get cursed after robbing 5 ships instead of getting money', function() {
    var pirate = new Pirate('Robbie');

    pirate.robShip();
    pirate.robShip();
    pirate.robShip();
    pirate.robShip();
    pirate.robShip();

    assert.equal(pirate.booty, 500);

    pirate.robShip();

    assert.equal(pirate.booty, 500);
    assert.equal(pirate.cursed, true);
    assert.equal(pirate.robShip(), 'ARG! I\'ve been cursed!');
  });

  it('should be able to lift curse for 300 booty', function() {
    var pirate = new Pirate('Scott');

    function timeTravel() {
      for(var i = 0; i < 6; i++) {
        pirate.robShip();
      }
    }

    timeTravel();

    assert.equal(pirate.liftCurse(), 'Your curse has been lifted!');
    assert.equal(pirate.booty, 200);
    assert.equal(pirate.cursed, false);
  })

  it('should only be able to lift curse if cursed', function() {
    var pirate = new Pirate('Kayla', 'captain');

    pirate.robShip();

    assert.equal(pirate.booty, 100);
    assert.equal(pirate.liftCurse(), 'You don\'t need to lift a curse!');
    assert.equal(pirate.booty, 100);
  })

});
