var assert = require('chai').assert;
var Planet = require('../src/planet');
var Ship = require('../src/ship');
var Being = require('../src/being');
var Part = require('../src/part');
var Shop = require('../src/shop');

describe('Planet', function() {
  it.skip('has a name', function() {
    var planet = new Planet({name: 'D1'})

    assert.equal(planet.name, 'D1')
  })

  it.skip('can have a different name', function() {
    var planet = new Planet({name: 'F2'})

    assert.equal(planet.name, 'F2')
  })

  it.skip('can have a shop', function() {
    var shop = new Shop({name: 'EZ-mart'})
    var planet = new Planet({name: 'F2', shop: shop})

    assert.equal(planet.shop.name, 'EZ-mart')
  })

  it.skip('can have a different shop', function() {
    var shop = new Shop({name: 'Walmart'})
    var planet = new Planet({name: 'F2', shop: shop})

    assert.equal(planet.shop.name, 'Walmart')
  })

  it.skip('can allow a ship to land', function() {
    var planet = new Planet({name: 'F2'})
    var captian = new Being('Will', 'human');
    var parts = {
      shell: new Part({name: 'S-1', type: 'shell', value: 200}),
      hyperdrive: new Part({name: 'R-100', type: 'hyperdrive', value: 20}),
      computer: new Part({name: '100X', type: 'computer', value: 300}),
      lifeSupport: new Part({name: 'B-98', type: 'lifeSupport', value: 100}),
      landingGear: new Part({name: 'Legs-2', type: 'landingGear', value: 100}),
    }
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captian: captian,
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    )

    planet.landShip(fighter)

    assert.deepEqual(planet.currentShip, fighter)
  })

  it.skip('has coordinates', function() {
    var coordinates = {x:0, y:0, z:0}
    var planet = new Planet({name: 'F2', coordinates: coordinates})

    assert.deepEqual(planet.coordinates, coordinates)
  })

  it.skip('can have different coordinates', function() {
    var coordinates = {x:10, y:10, z:0}
    var planet = new Planet({name: 'F2', coordinates: coordinates})

    assert.deepEqual(planet.coordinates, coordinates)
  })

  it.skip('can calculate the distance between itself and another planet', function() {
    var initCoords = {x:0, y:0, z:0}
    var newCoords = {x:10, y:10, z:10}
    var planet = new Planet({name: 'F2', coordinates: initCoords})
    var otherPlanet = new Planet({name: 'Zorb', coordinates: newCoords})

    // HINT: https://www.varsitytutors.com/hotmath/hotmath_help/topics/distance-formula-in-3d
    assert.deepEqual(planet.calculateDistance(otherPlanet), Math.sqrt(300))
  })

  it.skip('can calculate the distance between itself and different planet', function() {
    var initCoords = {x:0, y:0, z:0}
    var newCoords = {x:5, y:5, z:5}
    var planet = new Planet({name: 'F2', coordinates: initCoords})
    var otherPlanet = new Planet({name: 'Zorb', coordinates: newCoords})

    assert.deepEqual(planet.calculateDistance(otherPlanet), Math.sqrt(75))
  })

  it.skip('can refuel a ship', function() {
    var planet = new Planet({name: 'F2'})
    var captian = new Being('Will', 'human');
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captian: captian,
        maxCrew: 2,
        odometer: 3340,
      }
    )
    planet.currentShip = fighter;

    assert.equal(fighter.fuel, 0)
    planet.refuel(fighter)
    assert.equal(fighter.fuel, fighter.fuelCapacity)
  })

  it.skip('cannot send a ship to another planet if the ship is missing parts', function() {
    var planet = new Planet({name: 'F2', coordinates: {x:0, y:0, z:0}})
    var otherPlanet = new Planet({name: 'M2', coordinates: {x:1, y:1, z:1}})
    var captian = new Being('Will', 'human');
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captian: captian,
        maxCrew: 2,
        odometer: 3340,
      }
    )
    fighter.fuel = 1;
    planet.currentShip = fighter;

    var result = planet.giveClearance(otherPlanet)

    assert.equal(result, "Clearance denied: Cannot fly without all parts")
  })

  it.skip('cannot send a ship if it is has no fuel', function() {
    var planet = new Planet({name: 'F2', coordinates: {x:0, y:0, z:0}})
    var otherPlanet = new Planet({name: 'M2', coordinates: {x:1, y:1, z:1}})
    var captian = new Being('Will', 'human');
    var parts = {
      shell: new Part({name: 'S-1', type: 'shell', value: 200}),
      hyperdrive: new Part({name: 'R-100', type: 'hyperdrive', value: 20}),
      computer: new Part({name: '100X', type: 'computer', value: 300}),
      lifeSupport: new Part({name: 'B-98', type: 'lifeSupport', value: 100}),
      landingGear: new Part({name: 'Legs-2', type: 'landingGear', value: 100}),
    }
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captian: captian,
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    )
    planet.currentShip = fighter;

    var result = planet.giveClearance(otherPlanet)

    assert.equal(result, "Clearance denied: Cannot fly without fuel")
  })

  it.skip('cannot send a ship if it is has insufficient fuel', function() {
    var planet = new Planet({name: 'F2', coordinates: {x:0, y:0, z:0}})
    var otherPlanet = new Planet({name: 'M2', coordinates: {x:1, y:1, z:1}})
    var captian = new Being('Will', 'human');
    var parts = {
      shell: new Part({name: 'S-1', type: 'shell', value: 200}),
      hyperdrive: new Part({name: 'R-100', type: 'hyperdrive', value: 20}),
      computer: new Part({name: '100X', type: 'computer', value: 300}),
      lifeSupport: new Part({name: 'B-98', type: 'lifeSupport', value: 100}),
      landingGear: new Part({name: 'Legs-2', type: 'landingGear', value: 100}),
    }
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captian: captian,
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    )
    fighter.fuel = 1;
    planet.currentShip = fighter;

    var fuelRequired = planet.calculateDistance(otherPlanet)
    var result = planet.giveClearance(otherPlanet)

    assert.equal(result, `Clearance denied: Need at least ${Math.ceil(fuelRequired)} units of fuel to reach ${otherPlanet.name}`)
  })

  it.skip('can send a ship and update the ship & planets', function() {
    var planet = new Planet({name: 'F2', coordinates: {x:0, y:0, z:0}})
    var otherPlanet = new Planet({name: 'M2', coordinates: {x:1, y:1, z:1}})
    var captian = new Being('Will', 'human');
    var parts = {
      shell: new Part({name: 'S-1', type: 'shell', value: 200}),
      hyperdrive: new Part({name: 'R-100', type: 'hyperdrive', value: 20}),
      computer: new Part({name: '100X', type: 'computer', value: 300}),
      lifeSupport: new Part({name: 'B-98', type: 'lifeSupport', value: 100}),
      landingGear: new Part({name: 'Legs-2', type: 'landingGear', value: 100}),
    }
    var fighter = new Ship(
      { 
        name: 'Atlantis',
        type: 'military',
        captian: captian,
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    )
    fighter.fuel = 2;
    planet.currentShip = fighter;

    var fuelRequired = planet.calculateDistance(otherPlanet)
    var result = planet.giveClearance(otherPlanet)

    assert.equal(fighter.fuel, 0)
    assert.equal(planet.currentShip, undefined)
    assert.equal(otherPlanet.currentShip, fighter)
    assert.equal(result, `Clearance granted: Enjoy your trip to ${otherPlanet.name}`)
  })

})
