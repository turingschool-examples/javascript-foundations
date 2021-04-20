var Runner = require("../src/runner.js");
var assert = require('chai').assert;

describe("Runner", function() {

  it('should have a name and age', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.name, 'Mike');
    assert.equal(mike.age, 36);

    assert.equal(pam.name, 'Pam');
    assert.equal(pam.age, 33);
  })

  it('should start without having run any miles', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.milesRun, 0);
    assert.equal(pam.milesRun, 0);
  })

  it('should be able to run and log miles', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    mike.runSomeMiles(3);
    pam.runSomeMiles(10);

    assert.equal(mike.milesRun, 3);
    assert.equal(pam.milesRun, 10);
  })

  it('should be able to keep running and logging miles', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.milesRun, 0);
    assert.equal(pam.milesRun, 0);

    mike.runSomeMiles(3);
    pam.runSomeMiles(10);
    mike.runSomeMiles(5);
    pam.runSomeMiles(12);

    assert.equal(mike.milesRun, 8);
    assert.equal(pam.milesRun, 22);
  })

  it('should start with fitness of 25 percent', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.milesRun, 0);
    assert.equal(pam.milesRun, 0);

    assert.equal(mike.fitness, 25);
    assert.equal(pam.fitness, 25);
  })

  it('should gain 1 fitness for every 1 mile run', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.milesRun, 0);
    assert.equal(pam.milesRun, 0);

    assert.equal(mike.fitness, 25);
    assert.equal(pam.fitness, 25);

    mike.runSomeMiles(7);
    pam.runSomeMiles(3);

    assert.equal(mike.milesRun, 7);
    assert.equal(pam.milesRun, 3);

    assert.equal(mike.fitness, 32);
    assert.equal(pam.fitness, 28);
  })

  it('should gain .5 fitness for every stretching session', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.milesRun, 0);
    assert.equal(pam.milesRun, 0);

    assert.equal(mike.fitness, 25);
    assert.equal(pam.fitness, 25);

    mike.stretch();
    pam.stretch();

    assert.equal(mike.fitness, 25.5);
    assert.equal(pam.fitness, 25.5);
  })

  it('should gain fitness by stretching and running', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    assert.equal(mike.milesRun, 0);
    assert.equal(pam.milesRun, 0);

    assert.equal(mike.fitness, 25);
    assert.equal(pam.fitness, 25);

    mike.stretch();
    pam.stretch();

    mike.runSomeMiles(3);
    pam.runSomeMiles(3);

    mike.stretch();

    assert.equal(mike.fitness, 29);
    assert.equal(pam.fitness, 28.5);
  })

  it('should keep the names of completed races', function() {
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    mike.runRace('24 Hour Relay', 2);
    pam.runRace('Hot Chocolate 5K', 3.1);

    assert.equal(mike.completedRaces.length, 1);
    assert.equal(pam.completedRaces.length, 1);

    assert.equal(mike.completedRaces[0], '24 Hour Relay');
    assert.equal(pam.completedRaces[0], 'Hot Chocolate 5K');
  })

  it('should log the miles and update fitness when a race is Run', function() {
    // hint - you should only need to add one additional line of code to pass this test
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    mike.runRace('24 Hour Relay', 2);
    pam.runRace('Hot Chocolate 5K', 3.1);

    assert.equal(mike.completedRaces.length, 1);
    assert.equal(pam.completedRaces.length, 1);

    assert.equal(mike.completedRaces[0], '24 Hour Relay');
    assert.equal(pam.completedRaces[0], 'Hot Chocolate 5K');

    assert.equal(mike.milesRun, 2);
    assert.equal(pam.milesRun, 3.1);

    assert.equal(mike.fitness, 27);
    assert.equal(pam.fitness, 28.1);
  })
});
