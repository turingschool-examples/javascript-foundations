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
    var vampyre = createVampire('David', 'armadillo');

    assert.equal(vampire.pet, 'fox');
    assert.equal(vampyre.pet, 'armadillo');
  });

  it('should be thirsty', function() {
    var vampire = createVampire('Andy');

    assert.equal(vampire.thirsty, true);
  });

  it('should should at victim when thirsty', function() {
    var vampire = createVampire('Andy');
    var expectedResponse = 'I WANT TO SUCK YOUR BLOOD!'

    var shout = encounterDeliciousVictim(vampire)

    assert.equal(shout, expectedResponse);
  });

  it('should be start with no ounces of blood drank', function() {
    var vampire = createVampire('Bobby');

    assert.equal(vampire.ouncesDrank, 0);
  });

  it('should drink 10 ounces of blood at a time', function() {
    var vampire = createVampire('Margot');

    var drinkingVampire1 = drink(vampire);

    assert.equal(drinkingVampire1.ouncesDrank, 10);

    var drinkingVampire2 = drink(vampire);

    assert.equal(drinkingVampire2.ouncesDrank, 20);

    var drinkingVampire3 = drink(vampire);

    assert.equal(drinkingVampire3.ouncesDrank, 30);
  });

  it('should no longer be thirsty after drinking 50 ounces', function() {
    var vampire = createVampire('Javi');

    var drinkingVampire1 = drink(vampire);
    var drinkingVampire2 = drink(vampire);
    var drinkingVampire3 = drink(vampire);
    var drinkingVampire4 = drink(vampire);
    var drinkingVampire5 = drink(vampire);

    assert.equal(drinkingVampire5.ouncesDrank, 50);
    assert.equal(drinkingVampire5.thirsty, false);
  });

  it('should not drink more ounces when not thirsty', function() {
    var vampire = createVampire('Javi');

    var drinkingVampire1 = drink(vampire);
    var drinkingVampire2 = drink(vampire);
    var drinkingVampire3 = drink(vampire);
    var drinkingVampire4 = drink(vampire);
    var drinkingVampire5 = drink(vampire);

    assert.equal(drinkingVampire5.ouncesDrank, 50);
    assert.equal(drinkingVampire5.thirsty, false);

    var drinkingVampire5 = drink(vampire);

    assert.equal(drinkingVampire5.ouncesDrank, 50);
  });

  it('should refuse blood from victim when not thirsty', function() {
    var vampire = createVampire('Javi');

    var drinkingVampire1 = drink(vampire);
    var drinkingVampire2 = drink(vampire);
    var drinkingVampire3 = drink(vampire);
    var drinkingVampire4 = drink(vampire);
    var drinkingVampire5 = drink(vampire);

    assert.equal(drinkingVampire5.ouncesDrank, 50);
    assert.equal(drinkingVampire5.thirsty, false);

    var response = encounterDeliciousVictim(vampire)

    assert.equal(response, `No thanks, I am too full.`);
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

  //Spicy
  it('should be able to find the vampires with bats', function() {
    var javi = createVampire('Javi');
    var brittany = createVampire('Brittany');
    var jeff = createVampire('Jeff', 'fox');
    var david = createVampire('David', 'armadillo');

    var vampires = [javi, brittany, jeff, david];

    var batLovers = findBatLovers(vampires);

    assert.deepEqual(batLovers, ['Javi', 'Brittany']);
  });
});
