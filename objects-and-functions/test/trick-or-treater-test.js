var assert = require('chai').assert;
var Costume = require('../lib/costume');
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');
var TrickOrTreater = require('../lib/trick-or-treater');

describe('TrickOrTreater', function () {

  it.skip('should be a function', function () {
    assert.isFunction(TrickOrTreater);
  });

  it.skip('should were a costume', function () {
    costume = new Costume('Cowboy');
    trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.dressedUpAs, 'Cowboy');
  });

  it.skip('should were a different costume', function () {
    costume = new Costume('Cowboy');
    trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.dressedUpAs, 'Cowboy');
  });

  it.skip('should have an empty bag by default', function () {
    costume = new Costume('Alien');
    trick_or_treater = new TrickOrTreater(costume);
    assert.deepEqual(trick_or_treater.bag, []);
  });

  it.skip('should have a bag with no candy', function () {
    costume = new Costume('Knight');
    trick_or_treater = new TrickOrTreater(costume);
    assert.equal(trick_or_treater.has_candy, false);
  });

  it.skip('should get candy', function () {
    costume = new Costume('Spaceship Mechanic');
    trick_or_treater = new TrickOrTreater(costume);
    candy = new Candy('Gummy Bears');
    trick_or_treater.putCandyInBag(candy);
    assert.equal(trick_or_treater.has_candy, true);
  });

  it.skip('should count candies', function () {
    costume = new Costume('Spaceship Mechanic');
    trick_or_treater = new TrickOrTreater(costume);
    candy = new Candy('Gummy Bears');
    assert.equal(trick_or_treater.count_candies, 0);
    trick_or_treater.putCandyInBag(candy);
    assert.equal(trick_or_treater.count_candies, 1);
  });

  it.skip('should eat candies', function () {
    costume = new Costume('Spaceship Mechanic');
    trick_or_treater = new TrickOrTreater(costume);
    candy1 = new Candy('Gummy Bears');
    candy2 = new Candy('Liquorice');
    candy3 = new Candy('Salty Serpents');
    trick_or_treater.putCandyInBag(candy1);
    trick_or_treater.putCandyInBag(candy2);
    trick_or_treater.putCandyInBag(candy3);
    assert.equal(trick_or_treater.count_candies, 3);
    trick_or_treater.eat();
    trick_or_treater.eat();
    trick_or_treater.eat();
    assert.equal(trick_or_treater.count_candies, 0);
  });

  it.skip('should have an empty bag after eating candies', function () {
    costume = new Costume('Spaceship Mechanic');
    trick_or_treater = new TrickOrTreater(costume);
    candy1 = new Candy('Gummy Bears');
    candy2 = new Candy('Liquorice');
    candy3 = new Candy('Salty Serpents');
    trick_or_treater.putCandyInBag(candy1);
    trick_or_treater.putCandyInBag(candy2);
    trick_or_treater.putCandyInBag(candy3);
    assert.equal(trick_or_treater.count_candies, 3);
    trick_or_treater.eat();
    trick_or_treater.eat();
    trick_or_treater.eat();
    assert.equal(trick_or_treater.bag.length, 0);
  });
});
