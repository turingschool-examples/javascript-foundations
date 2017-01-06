var assert = require('chai').assert;
var Wand = require('../lib/wand');

describe('Wand', function () {

  it('should be a function', function () {
    var wand = new Wand('Elm');

    assert.isFunction(Wand);
  });

  it('should have a type', function () {
    var wand = new Wand('Elm');

    assert.equal(wand.type, 'Elm');
  });

  it('should have a size', function () {
    var wand = new Wand('Elm', 12);

    assert.equal(wand.size, 12);
  });

  it('should have a core', function () {
    var wand = new Wand('Elm', 12, 'Unicorn Hair');

    assert.equal(wand.core, 'Unicorn Hair');
  });

  it('should have another type, size and core', function () {
    var wand = new Wand('Cherry', 14, 'Basilisk Fang');

    assert.equal(wand.type, 'Cherry');
    assert.equal(wand.size, 14);
    assert.equal(wand.core, 'Basilisk Fang');
  });

  it('should cast a spell', function() {
    var wand = new Wand('Cherry', 14, 'Basilisk Fang');

    assert.equal(wand.cast('Accio'), 'Casting Accio!')
  });
});
