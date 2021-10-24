var assert = require('chai').assert;
var Bag = require('../lib/bag');
var Candy = require('../lib/candy');

describe('Bag', function () {

  it('should be a function', function () {
    assert.isFunction(Bag);
  });

  it('should be an empty bag', function () {
    var bag = new Bag();

    assert.equal(bag.empty, true);
  })

  it('should count candies in an empty bag', function () {
    var bag = new Bag();

    assert.equal(bag.count, 0);
  });

  it('should check the bag has no candy', function () {
    var bag = new Bag();

    assert.deepEqual(bag.candies, []);
  });

  it('should put candy in the bag', function () {
    var bag = new Bag();
    var candy = new Candy('Swedish Fish');

    bag.fill(candy);

    assert.deepEqual(bag.candies, [candy]);
  });

  it('should count the candies in the bag', function() {
    var bag = new Bag();
    var candy = new Candy('Turkish Delight');

    bag.fill(candy);

    assert.equal(bag.count, 1);
  });

  it('should contain candies and candies should have a type', function () {
    var bag = new Bag();
    var candy = new Candy('Hershey\'s Kisses');

    bag.fill(candy);

    type = bag.candies[0].type;

    assert.equal(type, 'Hershey\'s Kisses');
    assert.instanceOf(bag.candies[0], Candy);
  });

  it('should contain a particular type of candy', function () {
    var bag = new Bag();
    var candy = new Candy('Lindt Chocolate');

    bag.fill(candy);

    assert.equal(bag.contains('Lindt Chocolate'), true);
    assert.equal(bag.contains('Hershey\'s Kisses'), false);
  });
});
