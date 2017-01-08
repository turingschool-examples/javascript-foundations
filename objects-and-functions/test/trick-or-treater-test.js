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
    trickOrTreater = new TrickOrTreater(costume);
    assert.deepEqual(trickOrTreater.bag, []);
  });

  it.skip('should have a bag with no candy', function () {
    costume = new Costume('Knight');
    trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.hasCandy, false);
  });

  it.skip('should get candy', function () {
    costume = new Costume('Spaceship Mechanic');
    trickOrTreater = new TrickOrTreater(costume);
    candy = new Candy('Gummy Bears');
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.hasCandy, true);
  });

  it.skip('should count candies', function () {
    costume = new Costume('Spaceship Mechanic');
    trickOrTreater = new TrickOrTreater(costume);
    candy = new Candy('Gummy Bears');
    assert.equal(trickOrTreater.countCandies, 0);
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.countCandies, 1);
  });

  it.skip('should eat candies', function () {
    costume = new Costume('Spaceship Mechanic');
    trickOrTreater = new TrickOrTreater(costume);
    candy1 = new Candy('Gummy Bears');
    candy2 = new Candy('Liquorice');
    candy3 = new Candy('Salty Serpents');
    trickOrTreater.putCandyInBag(candy1);
    trickOrTreater.putCandyInBag(candy2);
    trickOrTreater.putCandyInBag(candy3);
    assert.equal(trickOrTreater.countCandies, 3);
    trickOrTreater.eat();
    trickOrTreater.eat();
    trickOrTreater.eat();
    assert.equal(trickOrTreater.countCandies, 0);
  });

  it.skip('should have an empty bag after eating candies', function () {
    costume = new Costume('Spaceship Mechanic');
    trickOrTreater = new TrickOrTreater(costume);
    candy1 = new Candy('Gummy Bears');
    candy2 = new Candy('Liquorice');
    candy3 = new Candy('Salty Serpents');
    trickOrTreater.putCandyInBag(candy1);
    trickOrTreater.putCandyInBag(candy2);
    trickOrTreater.putCandyInBag(candy3);
    assert.equal(trickOrTreater.countCandies, 3);
    trickOrTreater.eat();
    trickOrTreater.eat();
    trickOrTreater.eat();
    assert.equal(trickOrTreater.bag.length, 0);
  });
});
