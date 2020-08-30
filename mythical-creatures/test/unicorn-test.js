var assert = require('chai').assert;
var Unicorn = require('../exercises/unicorn');

describe('Unicorn', function() {

  it('should be a function', function() {
    assert.isFunction(Unicorn);
  });

  it('should instantiate our good friend, Unicorn', function() {
    var unicorn = new Unicorn();

    assert.instanceOf(unicorn, Unicorn);
  });

  it('should have a name', function() {
    var unicorn = new Unicorn('Bree');

    assert.equal(unicorn.name, 'Bree');
  });

  it('should be able to have a different name', function() {
    var unicorn = new Unicorn('Pam');
                //constructor('Pam');

    assert.equal(unicorn.name, 'Pam');
  });

  it('should have a color', function() {
    var unicorn = new Unicorn('TayTay', 'blue');
    
    assert.equal(unicorn.color, 'blue');
  });

  it('should be white as default', function() {
    var unicorn = new Unicorn('Louisa');

    assert.equal(unicorn.color, 'white');
  });

  it('should refute isWhite', function() {
    var unicorn = new Unicorn('Steve', 'red');

    assert.equal(unicorn.isWhite(), false);
  });

  it('should say sparklying stuff', function() {
    var unicorn = new Unicorn('Brenna');
    
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
