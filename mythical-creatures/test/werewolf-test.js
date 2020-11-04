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

    // your code here
  });

  it('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Clementine');

    werewolf.completeTransformation();

    assert.equal(werewolf.form, 'wolf');
    assert.equal(werewolf.hungry, true);

    // your code here
  });

  it.skip('should be able to eat(victim) once hungry', function() {
    // your code here
  });

  it.skip('should not be hungry after changing back to human form', function() {
    // your code here
  });

  it.skip('should transform back to human form after eating', function() {
    // your code here
  });

  it.skip('should not be able to eat a victim while in human form', function() {
    // your code here
  });
});

describe('Victim', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Victim);
  });

  it.skip('should instantiate our good friend, Victim', function() {
    var victim = new Victim();

    assert.instanceOf(victim, Victim);
  });

  it.skip('should have a name', function() {
    var victim = new Victim('Leta');

    assert.equal(victim.name, 'Leta');
  });
});
