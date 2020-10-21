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

    assert.equal(werewolf.human, true);
  });

  it('should not be in human form after transforming', function() {
    var werewolf = new Werewolf('Scott');

    werewolf.transform();

    assert.equal(werewolf.human, false);
  });

  it('should show assert wolf form after transforming', function() {
    var werewolf = new Werewolf('Lousia');

    assert.equal(werewolf.wolf, false);

    werewolf.transform();

    assert.equal(werewolf.wolf, true);
  });

  it('should show what form its in', function() {
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

  it('should start off not hungry', function() {
   var werewolf = new Werewolf('Deb');

   assert.equal(werewolf.hungry, false)
  });

  it('should become hungry after changing into werewolf form', function() {
    var werewolf = new Werewolf('Candice');

    werewolf.transform()

    assert.equal(werewolf.human, false);
    assert.equal(werewolf.wolf, true);
    assert.equal(werewolf.hungry, true);
  });

  it('should be able to eat(victim) once hungry', function() {
    var werewolf = new Werewolf('Sally');

    assert.isFunction(werewolf.eat);

    assert.equal(werewolf.hungry, false);
    assert.equal(werewolf.eat, 'Eat lettuce you rabbit!');

    werewolf.transform()

    assert.equal(werewolf.hungry, true);

    werewolf.eat();

    assert.equal(werewolf.meals, 1)
    
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
