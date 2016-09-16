var assert = require('chai').assert;
var Hobbit = require('../exercises/hobbit');

describe('Hobbit', function () {

  it.skip('should be a function', function () {
    assert.isFunction(Hobbit);
  });

  it.skip('should instantiate our good friend, Hobbit', function () {
    var hobbit = new Hobbit();
    assert.isObject(hobbit);
  });

  it.skip('should have a name', function () {
    var hobbit = new Hobbit('Bilbo');
    assert.equal(hobbit.name, 'Bilbo');
  });

  it.skip('should have a name', function () {
    var hobbit = new Hobbit('Bilbo');
    assert.equal(hobbit.name, 'Bilbo');
  });

  it.skip('should disposition is unadventurous', function() {
    var hobbit = new Hobbit('Samwise');
    assert.equal(hobbit.disposition, 'homebody')
  });

  it.skip('should have an age', function() {
    var hobbit = new Hobbit('Meriadoc')
    assert.equal(hobbit.age, 0);
  });

  it.skip('should have gained 1 year after every birhtday', function() {
    var hobbit = new Hobbit('Meriadoc')
    assert.equal(hobbit.age, 0);
    hobbit.celebrate_birthday();
    hobbit.celebrate_birthday();
    hobbit.celebrate_birthday();
    assert.equal(hobbit.age, 3);
  });

  function timeTravel(num, hobbit) {
    for(var i = 0; i < num; i++) {
      hobbit.celebrate_birthday();
    }
  }

  it.skip('should be considered a child at the age of 32', function() {
    var hobbit = new Hobbit('Taylor')
    timeTravel(32, hobbit);
    assert.equal(hobbit.age, 32);
    assert(!hobbit.adult());
  });

  it.skip('should be considered an adult at 33', function() {
    var hobbit = new Hobbit('Taylor')
    timeTravel(33, hobbit);
    assert.equal(hobbit.age, 33);
    assert(hobbit.adult());
  });



  it.skip('should be short', function() {
    //create a hobbit
    // check that .isShort returns true
  });

  it.skip('should be considered old after the age of 101', function() {
    //create a hobbit
    //have hobbit age 101 years, hint use timeTravel()
    //check that hobbit.old returns true
  });

  it.skip('should have the ring if its name is frodo', function() {
    //create a hobbit named frodo
    // create a second hobbit named Sam
    //check that .hasRing() for Frodo returns true
    //check that .hasRing() for Sam returns false
  });


})
