var assert = require('chai').assert;
var {createHobbit, celebrateBirthday, getRing} = require('../exercises/hobbit');

describe('Hobbit', function() {

  it('should make a hobbit with a name', function() {
    var bilbo = createHobbit('Bilbo');
    var mark = createHobbit('Mark');

    assert.equal(bilbo.name, 'Bilbo');
    assert.equal(mark.name, 'Mark');
  });

  it('should start out 0 years old', function() {
    var bilbo = createHobbit('Bilbo');

    assert.equal(bilbo.age, 0);
  });

  it('should gain 1 year after every birthday', function() {
    var hobbit = createHobbit('Meriadoc');

    var olderHobbit = celebrateBirthday(hobbit);
    var evenOlderHobbit = celebrateBirthday(hobbit);
    var evenOlderStillHobbit = celebrateBirthday(hobbit);

    assert.equal(evenOlderStillHobbit.age, 3);
  });

  function timeTravel(num, hobbit) {
    for (var i = 0; i < num; i++) {
      celebrateBirthday(hobbit);
    };
    return hobbit
  };

  it('should be considered a child at the age of 32', function() {
    var hobbit = createHobbit('Taylor');

    // Notice that timeTravel is a function in this file (lines 34 - 38). You do not need to put a timeTravel method in your Hobbit class. Look at the timeTravel function above...
      // - What method is being invoked within timeTravel?
      // - How many times is it being invoked?
      // - What method do you need to update in your Hobbit class?

    var olderHobbit = timeTravel(32, hobbit);

    assert.equal(olderHobbit.age, 32);
    assert.equal(olderHobbit.isAdult, false);
  });

  it('should be considered an isAdult at 33', function() {
    var hobbit = createHobbit({ name: 'Taylor' });

    var olderHobbit = timeTravel(33, hobbit);

    assert.equal(olderHobbit.age, 33);
    assert.equal(olderHobbit.isAdult, true);
  });

  it('should be considered old at the age of 101', function() {
    var hobbit = createHobbit({ name: 'Samwise' });

    assert.equal(hobbit.isOld, false)

    var olderHobbit = timeTravel(100, hobbit);

    assert.equal(hobbit.isOld, false)

    var evenOlderHobbit = celebrateBirthday(hobbit);

    assert.equal(evenOlderHobbit.age, 101);
    assert.equal(evenOlderHobbit.isOld, true)
  });

  it('should be able to get the ring if its name is Frodo', function() {
    var hobbit1 = createHobbit('Frodo');
    var hobbit2 = createHobbit('Samwise');

    assert.equal(getRing(hobbit1), 'Here is the ring!');
    assert.equal(getRing(hobbit2), 'You can\'t have it!');
  });
});
