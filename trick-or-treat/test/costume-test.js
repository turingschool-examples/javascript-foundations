var assert = require('chai').assert;
var Costume = require('../lib/costume')

describe('Costume', function () {

  it('should be a function', function () {
    assert.isFunction(Costume);
  });

  it('should have a style', function () {
    var costume = new Costume('dinosaur');

    assert.equal(costume.style, 'dinosaur');
  });

  it('should have another style of costume', function() {
    var costume = new Costume('ghost');

    assert.equal(costume.style, 'ghost');
  });
});
