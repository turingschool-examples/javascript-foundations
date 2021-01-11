var assert = require('chai').assert;
var Part = require('../src/part.js');

describe('Part', function() {
  it.skip('should have a type', function() {
    var part = new Part('wheel')

    assert.equal(part.type, 'wheel')
  })

  it.skip('should be able to have a different type', function() {
    var part = new Part('yoke')

    assert.equal(part.type, 'yoke')
  })

  // valid types are 'wheel', 'yoke', 'axle', 'ox'
  it.skip('should not be able to have an invalid type', function() {
    var wheel = new Part('wheel')
    var yoke = new Part('yoke')
    var axle = new Part('axle')
    var ox = new Part('ox')
    var invalid = new Part('thruster')

    assert.equal(wheel.type, 'wheel')
    assert.equal(yoke.type, 'yoke')
    assert.equal(axle.type, 'axle')
    assert.equal(ox.type, 'ox')
    assert.equal(invalid.type, null)
  })

  it.skip('should not be broken by default', function() {
    var wheel = new Part('wheel')

    assert.equal(wheel.broken, false)
  })

  it.skip('should be able to be broken', function() {
    var yoke = new Part('yoke')

    yoke.break()

    assert.equal(yoke.broken, true)
  })

  it.skip('should be able to be repaired', function() {
    var yoke = new Part('yoke')

    yoke.break()
    yoke.repair()

    assert.equal(yoke.broken, false)
  })

  it.skip('should not be able to be repaired if it is broken a second time', function() {
    var yoke = new Part('yoke')

    yoke.break()
    yoke.repair()
    yoke.break()
    yoke.repair()

    assert.equal(yoke.broken, true)
  })
})
