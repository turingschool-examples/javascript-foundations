var assert = require('chai').assert;
var Medusa = require('../exercises/medusa');
var Person = require('../exercises/person');
var Statue = require('../exercises/statue');

describe('Medusa', function() {

  it('should be a function', function() {
    assert.isFunction(Medusa);
  });

  it('should instantiate our good friend, Medusa', function() {
    var medusa = new Medusa();

    assert.instanceOf(medusa, Medusa);
  });

  it('should have a name', function() {
    // instantiate a Medusa object with your name as an argument
    // instantiate another Medusa object with someone else's name as an argument

    // assert that the first medusa's name is your name
    // assert that the second medusa's name is the other name

    //NOTE: We will not ask you to write your own tests in a mod 1 assessment, but it is good practice to prepare for mod 2!
  });

  it('should start with no statues', function() {
    var medusa = new Medusa('Amy');

    assert.deepEqual(medusa.statues, []);
  });

  // STOP! Skip down to the bottom of the file and pass the tests for Person and Statue!

  it('should gain a statue when staring at a person', function() {
    var medusa = new Medusa('Eric');
    var victim1 = new Person('Robbie');
    var victim2 = new Person('Bob');

    medusa.gazeAtVictim(victim1);
    medusa.gazeAtVictim(victim2);

    assert.equal(medusa.statues.length, 2);
    assert.instanceOf(medusa.statues[0], Statue);
    assert.instanceOf(medusa.statues[1], Statue);
    assert.equal(medusa.statues[0].name, 'Robbie');
    assert.equal(medusa.statues[1].name, 'Bob');
  });

  it('should only be able to have three victims as statues', function() {
    var medusa = new Medusa('Hannah');
    var victim1 = new Person('Pam');
    var victim2 = new Person('Khalid');
    var victim3 = new Person('Scott');
    var victim4 = new Person('Bob');

    medusa.gazeAtVictim(victim1);
    medusa.gazeAtVictim(victim2);
    medusa.gazeAtVictim(victim3);
    medusa.gazeAtVictim(victim4);

    assert.equal(medusa.statues.length, 3);
    assert.instanceOf(medusa.statues[0], Statue);
    assert.instanceOf(medusa.statues[1], Statue);
    assert.instanceOf(medusa.statues[2], Statue);
  });

  it('should let the first victim go free when stoning the 4th', function() {
    var medusa = new Medusa('Hannah');
    var victim1 = new Person('Pam');
    var victim2 = new Person('Khalid');
    var victim3 = new Person('Scott');
    var victim4 = new Person('Bob');

    var statue1 = new Statue('Pam');
    var statue2 = new Statue('Khalid');
    var statue3 = new Statue('Scott');
    var statue4 = new Statue('Bob');

    medusa.gazeAtVictim(victim1);
    medusa.gazeAtVictim(victim2);
    medusa.gazeAtVictim(victim3);

    assert.equal(medusa.statues.length, 3);
    assert.deepEqual(medusa.statues, [statue1, statue2, statue3]);

    medusa.gazeAtVictim(victim4);

    assert.equal(medusa.statues.length, 3);
    assert.deepEqual(medusa.statues, [statue2, statue3, statue4]);
  });

  it('should return a freed statue to Person form', function() {
    var medusa = new Medusa('Hannah');
    var victim1 = new Person('Pam');
    var victim2 = new Person('Khalid');
    var victim3 = new Person('Scott');
    var victim4 = new Person('Bob');

    medusa.gazeAtVictim(victim1);
    medusa.gazeAtVictim(victim2);
    medusa.gazeAtVictim(victim3);

    var person = medusa.gazeAtVictim(victim4);

    assert.instanceOf(person, Person);
    assert.equal(person.name, 'Pam');
  });

  it('should be relieved when returned to Person form', function () {
    var medusa = new Medusa('Pam');
    var victim1 = new Person('Travis');
    var victim2 = new Person('Kayla');
    var victim3 = new Person('Leta');
    var victim4 = new Person('Hannah');

    medusa.gazeAtVictim(victim1);
    medusa.gazeAtVictim(victim2);
    medusa.gazeAtVictim(victim3);

    var person = medusa.gazeAtVictim(victim4);

    assert.instanceOf(person, Person);
    assert.equal(person.name, 'Travis');
    assert.equal(person.mood, 'relieved');
  });
});

describe('Person', function() {
  it('should be a function', function () {
    assert.isFunction(Person);
  });

  it('should instantiate our good friend, Person', function() {
    var person = new Person();

    assert.instanceOf(person, Person);
  });

  it('should have a name', function() {
    var scott = new Person('Scott');
    var eric = new Person('Eric');

    assert.equal(scott.name, 'Scott');
    assert.equal(eric.name, 'Eric');
  });

  it('should feel frightened', function() {
    var hannah = new Person('Hannah');

    assert.equal(hannah.mood, 'frightened');
  });
});

describe('Statue', function () {
  it('should be a function', function () {
    assert.isFunction(Statue);
  });

  it('should instantiate a Statue', function () {
    var statue = new Statue();

    assert.instanceOf(statue, Statue);
  });

  it('should have the name of its former self', function () {
    var kayla = new Statue('Kayla');
    var hannah = new Statue('Hannah');

    assert.equal(kayla.name, 'Kayla');
    assert.equal(hannah.name, 'Hannah');
  });
});
