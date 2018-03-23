var assert = require('chai').assert;

describe('String', function () {

  it.skip('should be able to uppercase a word', function () {
    assert.equal(__, 'alice'.toUpperCase());
  });

  it.skip('should be able to lowercase a word', function () {
    assert.equal(__, 'ALICE'.toLowerCase());
  });

  it.skip('should have a length', function() {
    assert.equal(__, 'Bree'.length);
  });

  it.skip('should be able to concat', function() {
    assert.equal(__, 'hello '.concat('world'));
    assert.equal(__, 'this is so '.concat('kewl'));
  });

  it.skip('should be able to concat using + sign', function() {
    assert.equal(__, 'hello ' + 'world');
    assert.equal(__, 'this is so ' + 'kewl');
  });

  it.skip('should be able to find a characters index', function() {
    assert.equal(__, 'kewlio julio'.indexOf('k'));
    assert.equal(__, 'kewlio julio'.indexOf('w'));
    assert.equal(__, 'kewlio julio'.indexOf('o'));
  });

  it.skip('should be able to use square brackets', function() {
    assert.equal(__, 'kewlio julio'[0]);
    assert.equal(__, 'kewlio julio'[2]);
    assert.equal(__, 'kewlio julio'[11]);
  });

});
