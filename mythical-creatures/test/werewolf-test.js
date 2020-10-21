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
    var bestFriend = new Victim('Mark');

    assert.isFunction(werewolf.eat);

    assert.equal(werewolf.hungry, false);
    assert.equal(werewolf.eat(bestFriend), 'Eat lettuce you rabbit!');

    werewolf.transform()

    assert.equal(werewolf.hungry, true);

    werewolf.eat(bestFriend);

    assert.equal(werewolf.victims.length, 1)
    
  });

  it('should not be hungry after changing back to human form', function() {
    var werewolf = new Werewolf('Nate');

    werewolf.transform();
    werewolf.eat();

    assert.equal(werewolf.human, true);
    assert.equal(werewolf.hungry, false);

  });

  it('should transform back to human form after eating', function() {
    var werewolf = new Werewolf('Gwen');

    werewolf.transform();
    werewolf.eat();

    assert.equal(werewolf.human, true);
  });

  it('should not be able to eat a victim while in human form', function() {
    var werewolf = new Werewolf('Gordon');
    
    assert.equal(werewolf.human, true);
    assert.equal(werewolf.eat(), 'Eat lettuce you rabbit!')
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
});
