var assert = require('chai').assert;
var {createVampire, drink, findBatLovers, encounterDeliciousVictim, inquirePlace} = require('../exercises/vampire');

describe('Vampire', function() {

  it('should create a vampire', function() {
    var vampire = createVampire('Jhun');

    assert.equal(vampire.name, 'Jhun');
  });

  it('should have a pet bat as a default', function() {
    var vampire = createVampire('Brittany');

    assert.equal(vampire.name, 'Brittany');
    assert.equal(vampire.pet, 'bat');
  });

  it('should be able to take an argument for pet', function() {
    var vampire = createVampire('Jeff', 'fox');
    var vampira = createVampire('Esme', 'armadillo');

    assert.equal(vampire.pet, 'fox');
    assert.equal(vampira.pet, 'armadillo');
  });

  it('should be thirsty', function() {
    var vampire = createVampire('Andy');

    assert.equal(vampire.thirsty, true);
  });

  it('should shout at victim when thirsty', function() {
    var vampire = createVampire('Andy');
    var expectedResponse = 'I WANT TO SUCK YOUR BLOOD!'

    var shout = encounterDeliciousVictim(vampire)

    assert.equal(shout, expectedResponse);
  });

  it('should start with no ounces of blood drank', function() {
    assert.equal(createVampire('Bobby').ouncesDrank, 0);
  });

  it('should drink 10 ounces of blood at a time', function() {
    var vampire = createVampire('Margot');

    var drankOnceVamp = drink(vampire);

    assert.equal(drankOnceVamp.ouncesDrank, 10);

    var drankTwiceVamp = drink(drankOnceVamp);

    assert.equal(drankTwiceVamp.ouncesDrank, 20);

    var drankThriceVamp = drink(drankTwiceVamp);

    assert.equal(drankThriceVamp.ouncesDrank, 30);
  });

  it('should no longer be thirsty after drinking 50 ounces', function() {
    var vampire = createVampire('Javi');

    var drankOnceVamp = drink(vampire);
    var drankTwiceVamp = drink(drankOnceVamp);
    var drankThriceVamp = drink(drankTwiceVamp);
    var drank4xsVamp = drink(drankThriceVamp);
    var drank5xsVamp = drink(drank4xsVamp);

    assert.equal(drank5xsVamp.ouncesDrank, 50);
    assert.equal(drank5xsVamp.thirsty, false);
  });

  it('should not drink more ounces when not thirsty', function() {
    var vampire = createVampire('Javi');

    var drankOnceVamp = drink(vampire);
    var drankTwiceVamp = drink(drankOnceVamp);
    var drankThriceVamp = drink(drankTwiceVamp);
    var drank4xsVamp = drink(drankThriceVamp);
    var drank5xsVamp = drink(drank4xsVamp);

    assert.equal(drank5xsVamp.ouncesDrank, 50);
    assert.equal(drank5xsVamp.thirsty, false);

    var notDrinking6xsVamp = drink(drank5xsVamp);

    assert.equal(notDrinking6xsVamp.ouncesDrank, 50);
  });

  it('should refuse blood from victim when not thirsty', function() {
    var vampire = createVampire('Javi');

    var drankOnceVamp = drink(vampire);
    var drankTwiceVamp = drink(drankOnceVamp);
    var drankThriceVamp = drink(drankTwiceVamp);
    var drank4xsVamp = drink(drankThriceVamp);
    var drank5xsVamp = drink(drank4xsVamp);

    assert.equal(drank5xsVamp.ouncesDrank, 50);
    assert.equal(drank5xsVamp.thirsty, false);

    assert.equal(encounterDeliciousVictim(drank5xsVamp), `No thanks, I am too full.`);
  });

  it('should say if its been to a location', function() {
    var locations = ['Transylvania', 'Washington', 'New Orleans', 'Mystic Falls'];

    var response = inquirePlace(locations, 'New Orleans');
    var expectedResponse = "Yes, I have spent some time in New Orleans."

    assert.deepEqual(response, expectedResponse);
  });

  it('should say if its not been to a location', function() {
    var locations = ['Transylvania', 'Washington', 'New Orleans', 'Mystic Falls'];

    var response = inquirePlace(locations, 'Idaho');
    var expectedResponse = "No, I have never been to Idaho."

    assert.deepEqual(response, expectedResponse);
  });

  it('should be able to find the vampires with bats', function() {
    var javi = createVampire('Javi');
    var brittany = createVampire('Brittany');
    var jeff = createVampire('Jeff', 'fox');
    var david = createVampire('David', 'armadillo');

    var batLovers = findBatLovers([javi, brittany, jeff, david]);

    assert.deepEqual(batLovers, ['Javi', 'Brittany']);
  });
});
