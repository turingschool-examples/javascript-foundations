var assert = require('chai').assert;
var Costume = require('../lib/costume');
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');
var TrickOrTreater = require('../lib/trick-or-treater');

describe('TrickOrTreater', function () {

  it('should be a function', function () {
    assert.isFunction(TrickOrTreater);
  });

  it('should wear a costume', function () {

    var costume = new Costume('Cowboy');
    var trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.dressedUpAs, 'Cowboy');
  });


  it('should wear a different costume', function () {
    var costume = new Costume('Doctor');
    var trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.dressedUpAs, 'Doctor');
  });

  it('should have an empty bag by default', function () {
    var costume = new Costume('Alien');
    var bag = new Bag();
    var trickOrTreater = new TrickOrTreater(costume, bag);
    assert.deepEqual(trickOrTreater.bag.candies, []);
  });

  it('should have a bag with no candy', function () {
    var costume = new Costume('Knight');
    var trickOrTreater = new TrickOrTreater(costume);
    assert.equal(trickOrTreater.hasCandy, false);
  });


  it('should get candy', function () {
    var costume = new Costume('Spaceship Mechanic');
    var bag = new Bag();
    var trickOrTreater = new TrickOrTreater(costume, bag);
    var candy = new Candy('Gummy Bears');
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.hasCandy, true);
  });


  it('should add new candy into bag', function () {
    var costume = new Costume('Zombie');
    var bag = new Bag();
    var trickOrTreater = new TrickOrTreater(costume, bag);
    var candy = new Candy('Skittles');
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.bag.candies.length, 1);
  });


  it('should count candies', function () {
    var costume = new Costume('Spaceship Mechanic');
    var bag = new Bag();
    var trickOrTreater = new TrickOrTreater(costume, bag);
    var candy = new Candy('Gummy Bears');
    assert.equal(trickOrTreater.countCandies, 0);
    assert.equal(trickOrTreater.bag.count, trickOrTreater.countCandies)
    trickOrTreater.putCandyInBag(candy);
    assert.equal(trickOrTreater.countCandies, 1);
    assert.equal(trickOrTreater.bag.count, trickOrTreater.countCandies)
  });

  it('should eat candies', function () {
    var costume = new Costume('Spaceship Mechanic');
    var bag = new Bag();
    var trickOrTreater = new TrickOrTreater(costume, bag);
    var candy1 = new Candy('Gummy Bears');
    var candy2 = new Candy('Liquorice');
    var candy3 = new Candy('Salty Serpents');
    trickOrTreater.putCandyInBag(candy1);
    trickOrTreater.putCandyInBag(candy2);
    trickOrTreater.putCandyInBag(candy3);
    assert.equal(trickOrTreater.countCandies, 3);
    trickOrTreater.eat();
    trickOrTreater.eat();
    trickOrTreater.eat();
    assert.equal(trickOrTreater.countCandies, 0);
  });

  it('should have an empty bag after eating candies', function () {
    var costume = new Costume('Spaceship Mechanic');
    var bag = new Bag();
    var trickOrTreater = new TrickOrTreater(costume, bag);
    var candy1 = new Candy('Gummy Bears');
    var candy2 = new Candy('Liquorice');
    var candy3 = new Candy('Salty Serpents');
    trickOrTreater.putCandyInBag(candy1);
    trickOrTreater.putCandyInBag(candy2);
    trickOrTreater.putCandyInBag(candy3);
    assert.equal(trickOrTreater.bag.candies.length, 3);
    trickOrTreater.eat();
    trickOrTreater.eat();
    trickOrTreater.eat();
    assert.equal(trickOrTreater.bag.candies.length, 0);
  });
});
