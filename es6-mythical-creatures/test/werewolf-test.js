const assert = require('chai').assert;
const Werewolf = require('../exercises/werewolf');
const Victim = require('../exercises/victim');

describe('Werewolf', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Werewolf);
  });

  it.skip('should instantiate our good friend, Werewolf', () => {
    const werewolf = new Werewolf();
    assert.isObject(werewolf);
  });

  it.skip('should have a name', () => {
    const werewolf = new Werewolf('Jorge');
    const werewolf2 = new Werewolf('Sal');
    assert.equal(werewolf.name, 'Jorge');
    assert.equal(werewolf2.name, 'Sal');
  });

  it.skip('should have a location', () => {
    const werewolf = new Werewolf('Horace','Basement lair');
    assert.equal(werewolf.location, 'Basement lair');
  });

  it.skip('should default to human form', () => {
    const werewolf = new Werewolf('Mike','Basement lair');
    assert.equal(werewolf.human, true);
  });

  it.skip('should refute human form after changing', () => {
    const werewolf = new Werewolf('Steve', 'Gusto');
    werewolf.change();
    assert.equal(werewolf.human, false);
  });

  it.skip('should show assert wolf form after change', () => {
    const werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    assert.equal(werewolf.wolf, true);
  });

  it.skip('should show what form its in', () => {
    const werewolf = new Werewolf('Lousia', 'Gusto');

    assert.equal(werewolf.wolf, false);
    werewolf.change();
    werewolf.change();
    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.change();
    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it.skip('should start off not hungry', () => {
    // your code here
  });

  it.skip('should become hungry after changing into werewolf form', () => {
    // your code here
  });

  it.skip('should be able to eat(victim) once hungry', () => {
    // your code here
  });

  it.skip('should not be hungry after changing back to human form', () => {
    // your code here
  });

  it.skip('should change back to human form after eating', () => {
    // your code here
  });

  it.skip('should not be able to consume victim in human form', () => {
    // your code here
  });
});

describe('Victim', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Victim);
  });

  it.skip('should instantiate our good friend, Victim', () => {
    const victim = new Victim();
    assert.isObject(victim);
  });

  it.skip('should have a name', () => {
    const victim = new Victim('Jorge');
    assert.equal(victim.name, 'Jorge');
  });

  it.skip('should start alive', () => {
    const victim = new Victim('TayTay');
    assert.equal(victim.alive, true);
  });

  it.skip('should be dead after being eaten', () => {
    const werewolf = new Werewolf('TayTay');
    const victim = new Victim('TayTay');

    werewolf.change();
    werewolf.eat(victim);
    assert.equal(victim.alive, false);
  });
});
