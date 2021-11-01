var assert = require('chai').assert;
var Part = require('../src/part');

describe('Part', function() {
  it('should have a name', function() {
    var fighterShell = new Part({ name: 'X1-shell' });
    var hyperdrive = new Part({ name: 'CV90-infinity' });

    assert.equal(fighterShell.name, 'X1-shell');
    assert.equal(hyperdrive.name, 'CV90-infinity');
  });

  it('should have a type', function() {
    var fighterShell = new Part({ name: 'X1-shell', type: 'shell' });
    var hyperdrive = new Part({ name: 'CV90-infinity', type: 'hyperdrive' });

    assert.equal(fighterShell.type, 'shell');
    assert.equal(hyperdrive.type, 'hyperdrive');
  });

  it('should be able to have different types', function() {
    var fighterShell = new Part({ name: 'X1-shell', type: 'shell' });
    var hyperdrive = new Part({ name: 'CV90-infinity', type: 'hyperdrive' });
    var computer = new Part({ name: 'Alienware 550x', type: 'computer' });
    var support = new Part({ name: 'Breatheright V10.0', type: 'life support' });
    var landing = new Part({ name: 'DryWet 98', type: 'landing gear' });

    assert.equal(fighterShell.type, 'shell');
    assert.equal(hyperdrive.type, 'hyperdrive');
    assert.equal(computer.type, 'computer');
    assert.equal(support.type, 'life support');
    assert.equal(landing.type, 'landing gear');
  });

  it('should be able to have a value', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x',
        type: 'computer',
        value: 200
      }
    );

    assert.equal(computer.value, 200);
  });

  it('should be able to have a different value', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x',
        type: 'computer',
        value: 300,
      }
    );

    assert.equal(computer.value, 300);
  });

  it('should be not broken by default', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x',
        type: 'computer',
        value: 300,
      }
    );

    assert.equal(computer.broken, false);
  });

  it('should have a name to be considered valid', function() {
    var computer = new Part(
      {
        type: 'computer',
        value: 300,
      }
    );

    assert.equal(computer.checkForValidity, 'This part needs a name!');
    assert.equal(computer.isValid, false);
  });

  it('should have a type to be considered valid', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x',
        value: 300,
      }
    );

    assert.equal(computer.checkForValidity, 'This part needs a type!');
    assert.equal(computer.isValid, false);
  });
;
  it('should have a value to be considered valid', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x',
        type: 'computer',
      }
    );

    assert.equal(computer.checkForValidity, 'This part needs a value!');
    assert.equal(computer.isValid, false);
  });

  it('should be considered valid if it has a name, type and value', function() {
    var computer = new Part(
      {
        name: 'Alienware 550x',
        type: 'computer',
        value: 300,
      }
    );

    assert.equal(computer.isValid, true);
  });
});
