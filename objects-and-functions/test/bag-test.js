var assert = require('chai').assert;
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');

describe('Bag', function () {

  it('should be a function', function () {
    assert.isFunction(Bag);
  });

  it('should be an empty bag', function () {
    bag = new Bag();
    assert.equal(bag.empty, true);
  })

  it.skip('should count candies in an empty bag', function () {
    bag = new Bag();
    assert.equal(bag.count, 0);
  });

  it.skip('should check the bag has no candy', function () {
    bag = new Bag();
    assert.deepEqual(bag.candies, []);
  });

  it.skip('should put candy in the bag', function () {
    bag = new Bag();
    candy = new Candy('Swedish Fish');
    bag.push(candy);
    assert.deepEqual(bag.candies, [candy]);
  });

  it.skip('should count the candies in the bag', function() {
    bag = new Bag();
    candy = new Candy('Turkish Delight');
    bag.push(candy);
    assert.equal(bag.count, 1);
  });

  it.skip('should contain candies and candies should have a type', function () {
    bag = new Bag();
    candy = new Candy('Hershey\'s Kisses');
    bag.push(candy);
    type = bag.candies[0].type;
    assert.equal(type, 'Hershey\'s Kisses');
  });

  it.skip('should contain a particular type of candy', function () {
    bag = new Bag();
    candy = new Candy('Lindt Chocolate');
    bag.push(candy);
    assert.equal(bag.contains('Lindt Chocolate'), true);
    assert.equal(bag.contains('Hershey\'s Kisses'), false);
  });
});
