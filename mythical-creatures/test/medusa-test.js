var assert = require('chai').assert;
var Medusa = require('../exercises/medusa');
var Person = require('../exercises/person');

describe('Medusa', function() {

  it.skip('should be a function', function() {
    assert.isFunction(Medusa);
  });

  it.skip('should instantiate our good friend, Medusa', function() {
    var medusa = new Medusa();

    assert.instanceOf(medusa, Medusa);
  });

  it.skip('should have a name', function() {
    // instantiate a Medusa object with your name as an argument
    // instantiate another Medusa object with someone else's name as an argument

    // assert that the first medusa's name is your name
    // assert that the second medusa's name is the other name
  });

  it.skip('should start with no statues', function() {
    var medusa = new Medusa('Amy');

    assert.deepEqual(medusa.statues, []);
  });

  // STOP! Skip down to the bottom of the file and pass first 3 tests for Person down below!

  it.skip('should gain a statue when staring at a person', function() {
    var medusa = new Medusa('Eric');
    var victim = new Person('Robbie');

    medusa.stare(victim);

    assert.equal(medusa.statues.length, 1);
    assert.instanceOf(medusa.statues[0], Person);
    assert.equal(medusa.statues[0].name, 'Robbie');
  });

  it.skip('should stone the victim when added to the statues array', function() {
    var medusa = new Medusa('Eric');
    var victim = new Person('Robbie');

    medusa.stare(victim);

    assert.equal(medusa.statues[0].stoned, true);
  });

  it.skip('should only be able to have three victims as statues', function() {
    var medusa = new Medusa('Hannah');
    var victim1 = new Person('Pam');
    var victim2 = new Person('Khalid');
    var victim3 = new Person('Scott');
    var victim4 = new Person('Bob');

    medusa.stare(victim1);
    medusa.stare(victim2);
    medusa.stare(victim3);
    medusa.stare(victim4);

    assert.equal(medusa.statues.length, 3);
  });

  it.skip('should let the first victim go free when stoning the 4th', function() {
    var medusa = new Medusa('Hannah');
    var victim1 = new Person('Pam');
    var victim2 = new Person('Khalid');
    var victim3 = new Person('Scott');
    var victim4 = new Person('Bob');

    medusa.stare(victim1);
    medusa.stare(victim2);
    medusa.stare(victim3);

    assert.equal(medusa.statues.length, 3);
    assert.deepEqual(medusa.statues, [victim1, victim2, victim3]);

    medusa.stare(victim4);

    assert.equal(medusa.statues.length, 3);
    assert.deepEqual(medusa.statues, [victim2, victim3, victim4]);  
    assert.equal(victim4.stoned, true);
    assert.equal(victim1.stoned, false);
  });
})

describe('Person', function() {

  it.skip('should instantiate our good friend, Person', function() {
    var person = new Person();

    assert.instanceOf(person, Person);
  });

  it.skip('should have a name', function() {
    var scott = new Person('Scott');
    var eric = new Person('Eric');

    assert.equal(scott.name, 'Scott');
    assert.equal(eric.name, 'Eric');
  });

  it.skip('should be stoned after looking into Medusas eyes', function() {
    var medusa = new Medusa('Pam');
    var victim = new Person('Khalid');

    assert.equal(victim.stoned, false);

    medusa.stare(victim);

    assert.equal(victim.stoned, true);
  });
});
