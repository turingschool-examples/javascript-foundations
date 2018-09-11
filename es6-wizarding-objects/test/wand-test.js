const assert = require('chai').assert;
const Wand = require('../lib/wand');

describe('Wand', () => {

  it.skip('should be a function', () => {
    const wand = new Wand('Elm');

    assert.isFunction(Wand);
  });

  it.skip('should have a type', () => {
    const wand = new Wand('Elm');

    assert.equal(wand.type, 'Elm');
  });

  it.skip('should have a size', () => {
    const wand = new Wand('Elm', 12);

    assert.equal(wand.size, 12);
  });

  it.skip('should have a core', () => {
    const wand = new Wand('Elm', 12, 'Unicorn Hair');

    assert.equal(wand.core, 'Unicorn Hair');
  });

  it.skip('should have another type, size and core', () => {
    const wand = new Wand('Cherry', 14, 'Basilisk Fang');

    assert.equal(wand.type, 'Cherry');
    assert.equal(wand.size, 14);
    assert.equal(wand.core, 'Basilisk Fang');
  });

  it.skip('should cast a spell', () => {
    const wand = new Wand('Cherry', 14, 'Basilisk Fang');

    assert.equal(wand.cast('Accio'), 'Casting Accio!')

    assert.equal(wand.cast('Wingardium Leviosa'), 'Casting Wingardium Leviosa!')
  });
});
