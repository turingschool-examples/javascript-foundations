const assert = require('chai').assert;
const Pirate = require('../exercises/pirate');

describe('Pirate', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Pirate);
  });

  it.skip('should instantiate our good friend, Pirate', () => {
    const pirate = new Pirate();
    assert.isObject(pirate);
  });

  it.skip('should have a name', () => {
    const pirate = new Pirate('Blackbeard');
    assert.equal(pirate.name, 'Blackbeard');
  });

  it.skip('should be a scallywag by default', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.name, 'JeffBeard');
    assert.equal(pirate.job, 'Scallywag');
  });

  it.skip('should be a cook if passed into argument', () => {
    const pirate = new Pirate('HoraceBeard', 'cook');
    assert.equal(pirate.job, 'cook');
  });

  it.skip('should not be cursed by default', () => {
    const pirate = new Pirate('SteveBeard', 'cook');
    assert.equal(pirate.cursed, false);
  });

  it.skip('should become cursed after 3 heinous acts', () => {
    const pirate = new Pirate('JoshBeard', 'cook');

    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);
    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, false);

    pirate.commitHeinousAct();
    assert.equal(pirate.cursed, true);
  });

  it.skip('should be able to rob ships', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.robShip(), 'YAARRR!');
  });

  it.skip('should start with a booty of 0', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);
  });

  it.skip('should have a booty of 100 after robShip()', () => {
    const pirate = new Pirate('JeffBeard');
    assert.equal(pirate.booty, 0);

    pirate.robShip();
    assert.equal(pirate.booty, 100);
  });
});
