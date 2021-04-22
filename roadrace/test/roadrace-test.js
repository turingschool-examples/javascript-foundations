var Roadrace = require("../src/roadrace.js");
var Runner = require("../src/runner.js");
var assert = require('chai').assert;

describe("Roadrace", function() {

  it('should have an name and location', function() {
    var race = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});

    assert.equal(race.name, 'Rock N Roll Half Marathon');
    assert.equal(race.location, "Las Vegas");
  })

  it('should be able to set the race distance in miles', function() {
    var race1 = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});
    var race2 = new Roadrace({title: 'City Park Marathon', city: "Denver"});

    var race1Distance = race1.setDistance(13.1);
    var race2Distance = race2.setDistance(26.2);

    assert.equal(race1.distance, 13.1);
    assert.equal(race1Distance, `The Rock N Roll Half Marathon in Las Vegas is a 13.1 mile race.`);

    assert.equal(race2.distance, 26.2);
    assert.equal(race2Distance, `The City Park Marathon in Denver is a 26.2 mile race.`);
  })

  it('should start with no participants', function() {
    var race = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});

    assert.deepEqual(race.participants, []);
  })

  it('should be able to register participants', function() {
    var race = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});
    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);

    race.registerParticipants(mike);
    assert.equal(race.participants.length, 1);
    assert.equal(race.participants[0].name, 'Mike');
    assert.equal(race.participants[0].age, 36);

    race.registerParticipants(pam);
    assert.equal(race.participants.length, 2);
    assert.equal(race.participants[1].name, 'Pam');
  })

  it('should add race to each participant\'s completed races when race is completed', function() {
    var race = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});
    race.setDistance(13.1);

    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);
    var lazyHeather = new Runner('Heather', 36);

    race.registerParticipants(mike);
    race.registerParticipants(pam);
    assert.equal(race.participants.length, 2);

    race.completeRace();

    assert.equal(mike.completedRaces.includes('Rock N Roll Half Marathon'), true);
    assert.equal(pam.completedRaces.includes('Rock N Roll Half Marathon'), true);
    assert.equal(lazyHeather.completedRaces.includes('Rock N Roll Half Marathon'), false);
  })

  it('should update each participant\'s miles and fitness when race is completed', function() {
    var race = new Roadrace({title: 'Rock N Roll Half Marathon', city: "Las Vegas"});
    race.setDistance(13.1);

    var mike = new Runner('Mike', 36);
    var pam = new Runner('Pam', 33);
    var lazyHeather = new Runner('Heather', 36);

    race.registerParticipants(mike);
    race.registerParticipants(pam);
    assert.equal(race.participants.length, 2);

    race.completeRace();

    assert.equal(mike.milesRun, 13.1);
    assert.equal(pam.milesRun, 13.1);
    assert.equal(lazyHeather.milesRun, 0);
    // challenge: Refactor to use a method in the Runner class
        // instead of rewriting logic that already exists within the Runner class.
  })
})
