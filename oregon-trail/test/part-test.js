var assert = require('chai').assert;
var Part = require('../src/part.js');

describe('Part', function() {
  it('should have a type', function() {
    var wheel = new Part('wheel');
    var yoke = new Part('yoke');

    assert.equal(wheel.type, 'wheel');
    assert.equal(yoke.type, 'yoke');
  });

  it('should not be broken by default', function() {
    var wheel = new Part('wheel');
    var yoke = new Part('yoke');

    assert.equal(wheel.broken, false);
    assert.equal(yoke.broken, false);
  });

  it('should be able to be broken', function() {
    var wheel = new Part('wheel');
    var yoke = new Part('yoke');

    wheel.break();
    yoke.break();

    assert.equal(yoke.broken, true);
    assert.equal(wheel.broken, true);
  });

  it('should be able to be repaired', function() {
    var yoke = new Part('yoke');

    yoke.break();
    yoke.repair();

    assert.equal(yoke.broken, false);
  });

  it('should not be able to be repaired if it is broken a second time', function() {
    var yoke = new Part('yoke');
    var wheel = new Part('wheel');

    yoke.break();
    wheel.break();

    assert.equal(yoke.broken, true);
    assert.equal(wheel.broken, true);

    yoke.repair();
    wheel.repair();

    assert.equal(yoke.broken, false);
    assert.equal(wheel.broken, false);

    yoke.break();
    yoke.repair();
    wheel.break();
    wheel.repair();

    assert.equal(yoke.broken, true);
    assert.equal(yoke.repair(), 'This yoke has seen better days, we\'ll need a brand new one!');
    assert.equal(wheel.broken, true);
    assert.equal(wheel.repair(), 'This wheel has seen better days, we\'ll need a brand new one!');
  });
})
