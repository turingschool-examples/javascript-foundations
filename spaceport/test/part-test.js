var assert = require('chai').assert;
var Part = require('../src/part');

describe('Part', function() {
  it.skip('should have a name', function() {
    var fighterShell = new Part({name: 'X1-shell'});

    assert.equal(fighterShell.name, 'X1-shell');
  })

  it.skip('can have a different name', function() {
    var hyperdrive = new Part({name: 'CV90-infinity'})

    assert.equal(hyperdrive.name, 'CV90-infinity');
  })

  it.skip('has a type', function() {
    var hyperdrive = new Part({name: 'CV90-infinity', type: 'hyperdrive'})

    assert.equal(hyperdrive.type, 'hyperdrive');
  })

  it.skip('can have different types', function() {
    var fighterShell = new Part({name: 'X1-shell', type: 'shell'});
    var hyperdrive = new Part({name: 'CV90-infinity', type: 'hyperdrive'})
    var computer = new Part({name: 'Alienware 550x', type: 'computer'})
    var support = new Part({name: 'Breatheright V10.0', type: 'life support'});
    var landing = new Part({name: 'DryWet 98', type: 'landing gear'})

    assert.equal(fighterShell.type, 'shell');
    assert.equal(hyperdrive.type, 'hyperdrive');
    assert.equal(computer.type, 'computer');
    assert.equal(support.type, 'life support');
    assert.equal(landing.type, 'landing gear');
  })

  it.skip('must have a valid type', function() {
    var validTypes = [
      'shell', 
      'hyperdrive', 
      'computer', 
      'life support', 
      'landing gear', 
      undefined
    ]
    var computer = new Part({name: 'Alienware 550x', type: 'computer'})
    var support = new Part({name: 'Breatheright V10.0', type: 'life support'});
    var landing = new Part({name: 'DryWet 98', type: 'landing gear'})
    var spoon = new Part({name: 'Silver Spoon', type: 'flatware'})
    var drill = new Part({name: 'DeWalt 90Z', type: 'drill'})

    assert.include(validTypes, computer.type)
    assert.include(validTypes, support.type)
    assert.include(validTypes, landing.type)
    assert.include(validTypes, spoon.type)
    assert.include(validTypes, drill.type)
  })

  it.skip('can have a value', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x', 
        type: 'computer', 
        value: 200
      }
    )

    assert.equal(computer.value, 200)
  })

  it.skip('can have a different value', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x', 
        type: 'computer', 
        value: 300,
      }
    )

    assert.equal(computer.value, 300)
  })

  it.skip('is not broken by default', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x', 
        type: 'computer', 
        value: 300,
      }
    )

    assert.equal(computer.broken, false)
  })

  it.skip('is invalid without a name', function() {
    var computer = new Part(
      {
        type: 'computer', 
        value: 300,
      }
    )

    assert.isFalse(computer.isValid())
  })

  it.skip('is invalid without a type', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x', 
        value: 300,
      }
    )

    assert.isFalse(computer.isValid())
  })

  it.skip('is invalid without a value', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x', 
        type: 'computer',
      }
    )

    assert.isFalse(computer.isValid())
  })

  it.skip('is valid', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x', 
        type: 'computer',
        value: 300,
      }
    )

    assert.isTrue(computer.isValid())
  })
})
