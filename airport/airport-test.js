var assert = require('chai').assert;
var { createAirport, welcomeGuests, landPlanes, checkAirlineLocations } = require('./airport');

describe('Airport', function() {
  it('should create an airport', function() {
    var airport = createAirport('Denver International Airport', ['United', 'Southwest', 'Delta'], 144);

    assert.equal(airport.name, 'Denver International Airport');
    assert.equal(airport.availableGates, 144);
    assert.equal(airport.airlines[0], 'United');
  });

  it('should welcome people to the airport', function() {
    var denverAirport = createAirport('Denver International Airport', ['United', 'Southwest', 'Delta'], 144);
    var sanDiegoAirport = createAirport('San Diego International Airport', ['Frontier', 'American'], 48);

    
    var denverWelcome = welcomeGuests(denverAirport);
    var sanDiegoWelcome = welcomeGuests(sanDiegoAirport);

    assert.equal(denverWelcome, 'Welcome to Denver International Airport!');
    assert.equal(sanDiegoWelcome, 'Welcome to San Diego International Airport!');
  });

  it('should keep track of open gates', function() {
    var bakersfieldAirport = createAirport('Meadows Field Airport', ['United', 'American'], 12);
    var sanDiegoAirport = createAirport('San Diego International Airport', ['Frontier', 'American'], 48);

    var bakersfieldGates = landPlanes(bakersfieldAirport, 11);
    var sanDiegoGates = landPlanes(sanDiegoAirport, 2);

    assert.equal(bakersfieldGates.availableGates, 1);
    assert.equal(sanDiegoGates.availableGates, 46);
  });

  it('should not be able to occupy more gates than available', function() {
    var columbusAiport = createAirport('John Glenn Airport', ['Southwest', 'Frontier'], 24);

    var updatedAirportGates = landPlanes(columbusAiport, 22);

    assert.equal(updatedAirportGates.availableGates, 2);
    assert.equal(updatedAirportGates.message, 'Success! Current availability is 2.')

    var updatedAirportGates2 = landPlanes(updatedAirportGates, 3);

    assert.equal(updatedAirportGates2.availableGates, 0);
    assert.equal(updatedAirportGates2.message, 'Oh no! Not enough gates available. Current overflow is 1.')
  });

  it('should be able to tell you where an airline flies to', function() {
    var columbusAiport = createAirport('John Glenn Airport', ['Southwest', 'Frontier'], 24);
    var bakersfieldAirport = createAirport('Meadows Field Airport', ['United', 'American'], 12);
    var sanDiegoAirport = createAirport('San Diego International Airport', ['Frontier', 'American'], 48);
    var denverAirport = createAirport('Denver International Airport', ['United', 'Southwest', 'Delta'], 144);
    var allAirports = [columbusAiport, bakersfieldAirport, sanDiegoAirport, denverAirport];

    var southwestCarriers = checkAirlineLocations(allAirports, 'Southwest');
    var unitedCarriers = checkAirlineLocations(allAirports, 'United');

    assert.deepEqual(southwestCarriers, ['John Glenn Airport', 'Denver International Airport']);
    assert.deepEqual(unitedCarriers, ['Meadows Field Airport', 'Denver International Airport']);
  });


});