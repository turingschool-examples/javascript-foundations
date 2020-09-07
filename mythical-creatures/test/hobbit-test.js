var assert = require('chai').assert;
var Hobbit = require('../exercises/hobbit');

describe('Hobbit', function () {

  it('should be a function', function () {
    assert.isFunction(Hobbit);
  });

  it('should instantiate our good friend, Hobbit', function () {
    var hobbit = new Hobbit();

    assert.instanceOf(hobbit, Hobbit);
  });

  it('should have a name', function () {
    var bilbo = new Hobbit('Bilbo');

    assert.equal(bilbo.name, 'Bilbo');
  });

  it('should be able to have a different name', function () {
    // create a variable hobbit whose value is an instance of the Hobbit class (pass in your name as an argument)
    var samGee = new Hobbit('SamGee');

    // assert that hobbit.name is equal to your name
    assert.equal(samGee.name, 'SamGee');
  });

  it('should start out 0 years old', function () {
    // create a variable hobbit whose value is an instance of the Hobbit class (pass in whatever name you want)
    var lilHob = new Hobbit('LilHob');

    // assert that hobbit.age is 0
    assert.equal(lilHob.age, 0)
  });

  it('should gain 1 year after every birthday', function () {
    var hobbit = new Hobbit('Meriadoc');

    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();
    hobbit.celebrateBirthday();

    assert.equal(hobbit.age, 3);
  });

  function timeTravel(num, hobbit) {
    for (var i = 0; i < num; i++) {
      hobbit.celebrateBirthday();
    };
  };

  it('should be considered a child at the age of 32', function () {
    var hobbit = new Hobbit('Taylor');

    timeTravel(32, hobbit);

    assert.equal(hobbit.age, 32);
    assert.equal(hobbit.adult, false);
  });

  it.skip('should be considered an adult at 33', function () {
    var hobbit = new Hobbit('Taylor');

    timeTravel(33, hobbit);

    assert.equal(hobbit.age, 33);
    console.log(hobbit.adult)
    assert.equal(hobbit.adult, true);
  });

  it('should be considered old at the age of 101', function () {
    var hobbit = new Hobbit('Samwise');

    assert.equal(hobbit.old, false)

    timeTravel(100, hobbit);
    console.log(hobbit)
    assert.equal(hobbit.old, false)

    hobbit.celebrateBirthday();

    assert.equal(hobbit.age, 101);
    assert.equal(hobbit.old, true)
  });

  it.skip('should have the ring if its name is Frodo', function () {
    var hobbit1 = new Hobbit('Frodo');
    var hobbit2 = new Hobbit('Samwise');

    assert.equal(hobbit1.hasRing, true);
    assert.equal(hobbit2.hasRing, false);
  });
});
