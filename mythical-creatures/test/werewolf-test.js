var assert = require('chai').assert;
var Werewolf = require('../exercises/werewolf');
var Victim = require('../exercises/victim');

describe('Werewolf', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Werewolf);
  });

  it.skip('should instantiate our good friend, Werewolf', function() {
    var larry = new Werewolf();

    assert.intanceOf(larry, Werewolf);
  });

  it.skip('should have a name', function() {
    var werewolf = new Werewolf('Jeff');
    var werewolf2 = new Werewolf('Sal');

    assert.equal(werewolf.name, 'Jeff');
    assert.equal(werewolf2.name, 'Sal');
  });

  it.skip('should default to human form', function() {
    var werewolf = new Werewolf('Casey');

    assert.equal(werewolf.human, true);
  });

  it.skip('should not be in human form after transforming', function() {
    var werewolf = new Werewolf('Scott');

    werewolf.transform();

    assert.equal(werewolf.human, false);
  });

  it.skip('should show assert wolf form after transforming', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
  });

  it.skip('should show what form its in', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();
    werewolf.transform();

    assert.equal(werewolf.wolf, false);
    assert.equal(werewolf.human, true);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.human, false);
  });

  it.skip('should start off not hungry', function() {
    // your code here
  });

  it.skip('should become hungry after changing into werewolf form', function() {
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
