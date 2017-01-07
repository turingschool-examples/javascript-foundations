var assert = require('chai').assert;
var Wand = require('../lib/wand');

describe('Wand', function () {

  it.skip('should be a function', function () {
    var wand = new Wand('Elm');

    assert.isFunction(Wand);
  });

  it.skip('should have a type', function () {
    var wand = new Wand('Elm');

    assert.equal(wand.type, 'Elm');
  });

  it.skip('should have a size', function () {
    var wand = new Wand('Elm', 12);

    assert.equal(wand.size, 12);
  });

  it.skip('should have a core', function () {
    var wand = new Wand('Elm', 12, 'Unicorn Hair');

    assert.equal(wand.core, 'Unicorn Hair');
  });

  it.skip('should have another type, size and core', function () {
    var wand = new Wand('Cherry', 14, 'Basilisk Fang');

    assert.equal(wand.type, 'Cherry');
    assert.equal(wand.size, 14);
    assert.equal(wand.core, 'Basilisk Fang');
  });

  it.skip('should cast a spell', function() {
    var wand = new Wand('Cherry', 14, 'Basilisk Fang');

    assert.equal(wand.cast('Accio'), 'Casting Accio!')
  });
});
