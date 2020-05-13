var assert = require('chai').assert;
var Costume = require('../lib/costume')

describe('Costume', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Costume);
  });

  it.skip('should have a style', function () {
    var costume = new Costume('sexy plesiosaur');

    assert.equal(costume.style, 'sexy plesiosaur');
  });

  it.skip('should have another style of costume', function() {
    var costume = new Costume('ghost');

    assert.equal(costume.style, 'ghost');
  });
});
