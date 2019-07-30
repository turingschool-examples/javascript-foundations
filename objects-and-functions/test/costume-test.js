var assert = require('chai').assert;
var Costume = require('../lib/costume')

describe('Costume', function () {

  it('should be a function', function () {
    assert.isFunction(Costume);
  });

  it('should have a style', function () {
    var costume = new Costume('Batman');
    assert.equal(costume.style, 'Batman');
  });

  it('should have another style of costume', function() {
    var costume = new Costume('Princess');
    assert.equal(costume.style, 'Princess');
  });
});
