var { buildRunner, runSomeMiles, registerForRace } = require("../src/runner.js");
var assert = require('chai').assert;

describe("Runner", function() {

  it('should have a name and age', function() {
    var dennis = buildRunner('Dennis', 42);
    var mary = buildRunner('Mary', 27);

    assert.equal(dennis.name, 'Dennis');
    assert.equal(dennis.age, 42);

    assert.equal(mary.name, 'Mary');
    assert.equal(mary.age, 27);
  });

  it('should be able to keep track of miles run', function() {
    var dennis = buildRunner('Dennis', 42);
    var mary = buildRunner('Mary', 27);

    var trainDennis = runSomeMiles(dennis, 3);
    var trainMary = runSomeMiles(mary, 10);

    assert.deepEqual(trainDennis, {name: 'Dennis', age: 42, milesRun: 3});
    assert.deepEqual(trainMary, {name: 'Mary', age: 27, milesRun: 10});
  });

  it('should be able to run more miles', function() {
    var dennis = buildRunner('Dennis', 42);
    var trainDennis = runSomeMiles(dennis, 13);

    assert.deepEqual(trainDennis, {name: 'Dennis', age: 42, milesRun: 13});

    var trainDennisAgain = runSomeMiles(trainDennis, 21)

    assert.deepEqual(trainDennisAgain, {name: 'Dennis', age: 42, milesRun: 34});
  });

  it('should be able to register for a race', function() {
    var dennis = buildRunner('Dennis', 42);
    var trainDennis = runSomeMiles(dennis, 8);

    assert.deepEqual(trainDennis, {name: 'Dennis', age: 42, milesRun: 8});

    var trainDennisAgain = runSomeMiles(trainDennis, 31.5)

    assert.deepEqual(trainDennisAgain, {name: 'Dennis', age: 42, milesRun: 39.5});
    assert.equal(registerForRace(trainDennisAgain), 'Congrats Dennis, you are now registered for the marathon!')
  });

  it('should be able to register a different runner for a race', function() {
    var mary = buildRunner('Mary', 27);
    var trainMary = runSomeMiles(mary, 11);

    assert.deepEqual(trainMary, {name: 'Mary', age: 27, milesRun: 11});

    var trainMaryAgain = runSomeMiles(trainMary, 18)

    assert.deepEqual(trainMaryAgain, {name: 'Mary', age: 27, milesRun: 29});
    assert.equal(registerForRace(trainMaryAgain), 'Congrats Mary, you are now registered for the marathon!')
  });

  it('should not be able to register if they havent trained enough', function() {
    //"enough" is the same as the length of a marathon --> 26.2
    var dennis = buildRunner('Dennis', 42);
    var mary = buildRunner('Mary', 27);

    var trainDennis = runSomeMiles(dennis, 25);
    var trainMary = runSomeMiles(mary, 21);

    assert.deepEqual(trainDennis, {name: 'Dennis', age: 42, milesRun: 25});
    assert.deepEqual(trainMary, {name: 'Mary', age: 27, milesRun: 21});

    
    assert.equal(registerForRace(trainDennis), 'Sorry Dennis, you need more training to register for the marathon!')

    var trainMaryAgain = runSomeMiles(trainMary, 5.2)
    assert.equal(registerForRace(trainMaryAgain), 'Congrats Mary, you are now registered for the marathon!')
  });
});