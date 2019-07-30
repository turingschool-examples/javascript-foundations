var assert = require('chai').assert;
var Candy = require('../lib/candy');

describe('Candy', function () {

  it('should be a function', function () {
    assert.isFunction(Candy);
  });

  it('should have a type', function () {
    var candy = new Candy('Skittles');
    assert.equal(candy.type, 'Skittles');
  });

  it('should have another candy type', function () {
    var candy = new Candy('Mars');
    assert.equal(candy.type, 'Mars');
  });
});
