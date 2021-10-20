var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');
var Victim = require('../exercises/victim');

describe('Werewolf', function() {

  it('should be a function', function() {
    assert.isFunction(Werewolf);
  });

  it('should instantiate our good friend, Werewolf', function() {
    var larry = new Werewolf();

    assert.instanceOf(larry, Werewolf);
  });

  it('should have a name', function() {
    var werewolf = new Werewolf('Jeff');
    var werewolf2 = new Werewolf('Sal');

    assert.equal(werewolf.name, 'Jeff');
    assert.equal(werewolf2.name, 'Sal');
  });

  it('should default to human form', function() {
    var werewolf = new Werewolf('Casey');

    assert.equal(werewolf.form, 'human');
  });

  it('should not be in human form after transforming', function() {
    var werewolf = new Werewolf('Scott');
    var transformedWolf =  werewolf.completeTransformation();

    assert.equal(werewolf.form, 'wolf');
    assert.equal(transformedWolf, 'Aaa-Woooo!')
  });

  it('should be able to transform from wolf to human', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.form, 'human');

    werewolf.completeTransformation();

    assert.equal(werewolf.form, 'wolf');

    var transformedWolf = werewolf.completeTransformation();

    assert.equal(transformedWolf, 'Where are I?');
    assert.equal(werewolf.form, 'human');
  });

  it('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.form, 'human');

    werewolf.completeTransformation();
    werewolf.completeTransformation();

    assert.equal(werewolf.form, 'human');

    werewolf.completeTransformation();

    assert.equal(werewolf.form, 'wolf');
  });

  it('should start off not hungry', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.hungry, false);
  });

  it('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Clementine');

    werewolf.completeTransformation();

    assert.equal(werewolf.form, 'wolf');
    assert.equal(werewolf.hungry, true);
  });

  it('should not be hungry after changing back to human form', function () {
    var werewolf = new Werewolf('Pep');

    werewolf.completeTransformation();
    werewolf.completeTransformation();

    assert.equal(werewolf.form, 'human');
    assert.equal(werewolf.hungry, false);
  });

  // STOP! Scroll to the bottom and complete the Victim tests

  it('should be able to eat a victim once hungry', function () {
    var werewolf = new Werewolf('Baby');
    var victim = new Victim('Hannah');

    werewolf.completeTransformation();
    var fullWolf = werewolf.eatVictim(victim);

    assert.equal(victim.alive, false);
    assert.equal(fullWolf, 'Yum, Hannah was delicious.');
  });

  it('should transform back to human form after eating', function() {
    var werewolf = new Werewolf('Baby');
    var victim = new Victim('Hannah');

    werewolf.completeTransformation();
    werewolf.eatVictim(victim);

    assert.equal(werewolf.form, 'human');
  });

  it('should not be able to eat a victim while in human form', function() {
    var werewolf = new Werewolf('Scott');
    var victim = new Victim('Baby');

    werewolf.completeTransformation();
    werewolf.completeTransformation();

    var humanWolf = werewolf.eatVictim(victim);

    assert.equal(humanWolf, "No way am I eating Baby, I'd like a burger!");
  });
});

describe('Victim', function() {

  it('should be a function', function() {
    assert.isFunction(Victim);
  });

  it('should instantiate our good friend, Victim', function() {
    var victim = new Victim();

    assert.instanceOf(victim, Victim);
  });

  it('should have a name', function() {
    var victim = new Victim('Leta');

    assert.equal(victim.name, 'Leta');
  });

  it('should be alive', function () {
    var victim = new Victim('Leta');

    assert.equal(victim.alive, true);
  });
});

// Scroll back up to finish the Werewolf tests!
