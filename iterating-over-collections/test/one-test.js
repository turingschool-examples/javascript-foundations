var assert = require('chai').assert;
var iteratorFactory = require('../lib/iteratorFactory');

describe('iteratorFactory', function() {

  it('can be instantiated', function() {
    var factory = new iteratorFactory();

    assert.equal(typeof factory, iteratorFactory);
  });

  it.skip('has a prototype function called `sum`', function() {
    var factory = new iteratorFactory();

    assert.equal(typeof factory.sum, 'function');
  });

  it.skip('can sum a collection of integers', function() {
    var factory = new iteratorFactory();

    assert.equal(factory.sum([1, 2, 3, 4, 5]), 15);

    assert.equal(factory.sum([10, 20, 30, 40, 50]), 150);
  });

  it.skip('can sum a collection of strings', function() {
    var factory = new iteratorFactory();

    assert.equal(factory.sum(["one, ", "two, ", "three"]), "one, two, three");

    assert.equal(factory.sum(["hey, ", "what's ", "up", "?"]), "hey, what's up?");
  });

  it.skip('can sum a collection of integers and then square the sum', function() {
    var factory = new iteratorFactory();

    assert.equal(factory.sumAndSquare([1, 2, 3, 4, 5]), 225);

    assert.equal(factory.sumAndSquare([10, 11, 12, 13, 14]), 730);
  })

  it.skip('can filter out odd numbers from a collection of integers', function() {
    var factory = new iteratorFactory();

    assert.equal(factory.onlyEvens([1, 2, 3, 4, 5, 6]), [2, 4, 6]);

    assert.equal(factory.onlyEvens([7, 8, 9, 10, 11, 12]), [8, 10, 12]);
  });

  it.skip('can filter out even numbers from a collection of integers', function() {
    var factory = new iteratorFactory();

    assert.equal(factory.onlyOdds([1, 2, 3, 4, 5, 6]), [1, 3, 5]);

    assert.equal(factory.onlyOdds([7, 8, 9, 10, 11, 12]), [7, 9, 11]);
  });

  it.skip('can square every number in a collection and then summing them', function() {
    var factory = new iteratorFactory();

    assert.equal(factory.squareAndSum([1, 2, 3, 4, 5, 6]), 91);
  });
});
