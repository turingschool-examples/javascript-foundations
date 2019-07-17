var assert = require('chai').assert;
var Medusa = require('../exercises/medusa');
var Person = require('../exercises/person');

describe('Medusa', function() {

  it('should be a function', function() {
    assert.isFunction(Medusa);
  });

  it('should instantiate our good friend, Medusa', function() {
    var medusa = new Medusa();
    assert.isObject(medusa);
  });

  it('should have a name', function() {
    var medusa = new Medusa('Bree');
    assert.equal(medusa.name, 'Bree');
  });

  it('should start with no statues', function() {
    var medusa = new Medusa('Taytay');
    assert.equal(medusa.name, 'Taytay');
    assert.deepEqual(medusa.statues, []);
  });

  // Pass first 3 tests for Person down below

  it('should gain a statue when staring at a person', function() {
    var medusa = new Medusa('Brenna');
    var victim = new Person('Jhun');

    medusa.stare(victim);

    assert.equal(medusa.statues.length, 1);
    assert.equal(medusa.statues[0].name, 'Jhun');

  });

  it('should only be able to have three victims as a statue', function() {
    var medusa = new Medusa('Meeka');
    var victim1 = new Person('Lousia');
    var victim2 = new Person('Bree');
    var victim3 = new Person('TayTay');
    var victim4 = new Person('Steve');

    medusa.stare(victim1);
    medusa.stare(victim2);
    medusa.stare(victim3);
    medusa.stare(victim4);

    assert.equal(medusa.statues.length, 3);
  });

  it('should unstone the the first victim and stone the 4th coming in', function() {
    // create medusa
    var medusa = new Medusa('Kay');
    // create first victim
    var victim1 = new Person('Tony');
    // create second victim
    var victim2 = new Person('Harry');
    // create third victim
    var victim3 = new Person('Gary');
    // create fourth victim
    var victim4 = new Person('Harper');

    // medusa stares at first victim
    medusa.stare(victim1);
    // assert that the first victim is stoned
    assert.equal(victim1.stoned, true);
    // medusa stares at second victim
    medusa.stare(victim2);
    // medusa stares at third victim
    medusa.stare(victim3);
    // medusa stares at fourth victim
    medusa.stare(victim4);
    // assert the fourth victim is stoned
    assert.equal(victim4.stoned, true);
    // assert that the first victim is not stoned
    assert.equal(victim1.stoned, false);
  });
})

describe('Person', function() {

  it('should be a function', function() {
    assert.isFunction(Person);
  });

  it('should instantiate our good friend, Person', function() {
    var person = new Person();
    assert.isObject(person);
  });

  it('should have a name', function() {
    var person = new Person('Steve');
    assert.equal(person.name, 'Steve');
  });

  it('should be stoned after looking into Medusas eyes', function() {
    var medusa = new Medusa('Brenna');
    var victim = new Person('Jhun');

    assert.equal(victim.stoned, false);
    medusa.stare(victim);
    assert.equal(victim.stoned, true);
  });
});
