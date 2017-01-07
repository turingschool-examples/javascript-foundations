var assert = require('chai').assert;
var Costume = require('../lib/costume')

describe('Costume', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Costume);
  });

  it.skip('should have a style', function () {
    costume = new Costume('Batman');
    assert.equal(costume.style, 'Batman');
  });

  it.skip('should have another style of costume', function() {
    costume = new Costume('Princess');
    assert.equal(costume.style, 'Princess');
  });
});
