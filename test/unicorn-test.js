var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Unicorn);
  });

  it.skip('should instantiate our good friend, Unicorn', function () {
    var unicorn = new Unicorn();
    assert.isObject(unicorn);
  });

  it.skip('should have a name', function() {
    var unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
  });

  it.skip('should have a color', function() {
    var unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
  });

  it.skip('should be white as default', function() {
    var unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
  });

  it.skip('should refute isWhite', function() {
    var unicorn = new Unicorn('Steve', 'red');
    assert(!unicorn.isWhite());
  });

  it.skip('should say sparklying stuff', function() {
    var unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
