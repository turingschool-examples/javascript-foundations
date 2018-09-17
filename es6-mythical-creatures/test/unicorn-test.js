const assert = require('chai').assert;
const Unicorn = require('../exercises/unicorn');

describe('Unicorn', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Unicorn);
  });

  it.skip('should instantiate our good friend, Unicorn', () => {
    const unicorn = new Unicorn();
    assert.isObject(unicorn);
  });

  it.skip('should have a name', () => {
    const unicorn = new Unicorn('Bree');
    assert.equal(unicorn.name, 'Bree');
  });

  it.skip('should be able to have a different name', () => {
    const unicorn = new Unicorn('Pam');
    assert.equal(unicorn.name, 'Pam');
  });

  it.skip('should have a color', () => {
    const unicorn = new Unicorn('TayTay', 'blue');
    assert.equal(unicorn.color, 'blue');
  });

  it.skip('should be white as default', () => {
    const unicorn = new Unicorn('Louisa');
    assert.equal(unicorn.color, 'white');
  });

  it.skip('should refute isWhite', () => {
    const unicorn = new Unicorn('Steve', 'red');
    assert.equal(unicorn.isWhite(), false);
  });

  it.skip('should say sparklying stuff', () => {
    const unicorn = new Unicorn('Brenna');
    assert.equal(unicorn.says('Wonderful!'), '**;* Wonderful! *;**');
    assert.equal(unicorn.says('Batman has a great smile'), '**;* Batman has a great smile *;**');
  });
});
