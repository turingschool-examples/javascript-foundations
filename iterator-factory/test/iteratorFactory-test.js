var assert = require('chai').assert;
var IteratorFactory = require('../lib/IteratorFactory');

describe('IteratorFactory', function() {

  it('can be instantiated', function() {
    var factory = new IteratorFactory();

    assert.equal(typeof factory, "object");
  });

  it('has a prototype function called `sum`', function() {
    var factory = new IteratorFactory();

    assert.equal(typeof factory.sum, 'function');
  });

  it('can sum a collection of integers', function() {
    var factory = new IteratorFactory();

    assert.equal(factory.sum([1, 2, 3, 4, 5]), 15);

    assert.equal(factory.sum([10, 20, 30, 40, 50]), 150);
  });

  it('can sum a collection of strings', function() {
    var factory = new IteratorFactory();

    assert.equal(factory.sum(["one, ", "two, ", "three"]), "one, two, three");

    assert.equal(factory.sum(["hey, ", "what's ", "up", "?"]), "hey, what's up?");
  });

  it('can sum a collection of integers and then square the sum', function() {
    var factory = new IteratorFactory();

    assert.equal(factory.sumAndSquare([1, 2, 3, 4, 5]), 225);

    assert.equal(factory.sumAndSquare([10, 11, 12, 13, 14]), 3600);
  })

  it('can filter out odd numbers from a collection of integers', function() {
    var factory = new IteratorFactory();

    assert.deepEqual(factory.onlyEvens([1, 2, 3, 4, 5, 6]), [2, 4, 6]);

    assert.deepEqual(factory.onlyEvens([7, 8, 9, 10, 11, 12]), [8, 10, 12]);
  });

  it('can square every number in a collection and then summing them', function() {
    var factory = new IteratorFactory();

    assert.equal(factory.squareAndSum([1, 2, 3, 4, 5, 6]), 91);
  });
});
