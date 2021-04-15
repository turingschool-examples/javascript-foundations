var assert = require('chai').assert;
var Ship = require('../src/ship');
var Being = require('../src/being');
var Part = require('../src/part');

describe('Ship', function() {
  it.skip('should be able to have a name', function() {
    var shuttle1 = new Ship({ name: 'Wanderer' });
    var shuttle2 = new Ship({ name: 'Atlantis' });

    assert.equal(shuttle1.name, 'Wanderer');
    assert.equal(shuttle2.name, 'Atlantis');
  });

  it.skip('should be able to have a type', function() {
    var shuttle1 = new Ship({name: 'Atlantis', type: 'passenger'});
    var shuttle2 = new Ship({ name: 'Atlantis', type: 'cargo' });

    assert.equal(shuttle1.type, 'passenger');
    assert.equal(shuttle2.type, 'cargo');
  });

  it.skip('should be able to have a max number of crew members', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
      }
    );

    assert.equal(fighter.maxCrew, 2);
  });

  it.skip('should have an odemeter reading of zero by default', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
      }
    );

    assert.equal(fighter.odometer, 0);
  });

  it.skip('should be able to have a different odometer reading', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    var shuttle = new Ship({ name: 'Wanderer', type: 'shuttle', maxCrew: 3 });

    assert.equal(fighter.odometer, 3340);
    assert.equal(shuttle.odometer, 0);
  });

  it.skip('should have a fuel capacity of 10 by default', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    assert.equal(fighter.fuelCapacity, 10);
  });

  it.skip('should be able to be initialized with a different fuel capacity', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
        fuelCapacity: 2000,
      }
    );

    assert.equal(fighter.fuelCapacity, 2000);
  });

  it.skip('should not have any fuel by defualt', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    assert.equal(fighter.fuel, 0);
  });

  it.skip('should have a captain', function() {
    var captain = new Being('Will', 'human');
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        captain: captain,
        maxCrew: 2,
        odometer: 3340,
      }
    );

    assert.equal(fighter.captain.name, 'Will');
    assert.equal(fighter.captain.species, 'human');
    assert.instanceOf(fighter.captain, Being);
  });

  it.skip('should not have anyone on the crew by default', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    assert.deepEqual(fighter.crew, []);
  });

  it.skip('should be able to add multiple crew members', function() {
    var crewmember = new Being('Zot', 'krill');
    var droid = new Being('R2-D2', 'droid');
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );
    var crew = [crewmember, droid];

    fighter.addCrew(crew);

    assert.equal(fighter.crew.length, 2);
    assert.deepEqual(fighter.crew, crew);
  });

  it.skip('should be able to add crew members to the existing crew', function() {
    var initalMember = new Being('Ed', 'human');
    var crewmember = new Being('Zot', 'krill');
    var droid = new Being('R2-D2', 'droid');
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 3,
        odometer: 3340,
      }
    );
    fighter.crew = [initalMember];
    var crew = [crewmember, droid];
    var expectedCrew = [initalMember, crewmember, droid];

    fighter.addCrew(crew);

    assert.deepEqual(fighter.crew, expectedCrew);
    assert.equal(fighter.crew.length, 3);
  });

  it.skip('should only be able to add crew up to the maxCrew size', function() {
    var initalMember = new Being('Ed', 'human');
    var crewmember = new Being('Zot', 'krill');
    var droid = new Being('R2-D2', 'droid');
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );
    fighter.crew = [initalMember];
    var crew = [crewmember, droid];
    var expectedCrew = [initalMember, crewmember];

    fighter.addCrew(crew);

    assert.deepEqual(fighter.crew, expectedCrew);
    assert.equal(fighter.crew.length, 2);
  });

  it.skip('should not be able to add something other than a being into the crew', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );
    var randomJunk = ['egg', 3432, false, [], {}];

    fighter.addCrew(randomJunk);

    assert.deepEqual(fighter.crew, []);
  });

  it.skip('should not have any cargo by default', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    assert.deepEqual(fighter.cargo, []);
  });

  it.skip('should be able to load cargo', function() {
    var partCargo = new Part({ name: 'Dell', type: 'computer', value: 100 });
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    fighter.loadCargo(partCargo);

    assert.deepEqual(fighter.cargo, [partCargo]);
    assert.equal(fighter.cargo.length, 1);
  });

  it.skip('should only be able to load cargo that is a Part', function() {
    var partCargo = new Part({ name: 'Dell', type: 'computer', value: 100 });
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    fighter.loadCargo(partCargo);
    fighter.loadCargo(1);
    fighter.loadCargo('spam');

    // HINT: look up the documentation on "instanceOf"
    assert.deepEqual(fighter.cargo, [partCargo]);
  });

  it.skip('should have an empty parts list by default', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    assert.deepEqual(fighter.parts, {});
  });

  it.skip('should be able to be initialized with parts', function() {
    var parts = {
      shell: new Part({ name: 'XC-Wing', type: 'shell', value: 8000 }),
      computer: new Part({ name: 'Starmapper', type: 'computer', value: 300 }),
    };
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    );

    assert.deepEqual(fighter.parts, parts);
  });

  it.skip('should be able to add a new part', function() {
    var parts = {
      shell: new Part({ name: 'XC-Wing', type: 'shell', value: 8000 }),
      computer: new Part({ name: 'Starmapper', type: 'computer', value: 300 }),
    };
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    );
    var hyperdrive = new Part({ name: 'SuperH', type: 'hyperdrive', value: 2000 });

    fighter.updatePart(hyperdrive);

    assert.deepEqual(fighter.parts.hyperdrive, hyperdrive);
  });

  it.skip('should be able to replace an existing part and return the difference in value', function() {
    var parts = {
      shell: new Part({ name: 'XC-Wing', type: 'shell', value: 8000 }),
      computer: new Part({ name: 'Starmapper', type: 'computer', value: 300 }),
    };
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    );
    var newComputer = new Part({ name: 'Mac', type: 'computer', value: 1300 });

    var difference = fighter.updatePart(newComputer);

    assert.deepEqual(fighter.parts.computer, newComputer);
    assert.equal(difference, -1000);
  });

  it.skip('should be able replace another existing part and return the difference in value', function() {
    var parts = {
      shell: new Part({ name: 'XC-Wing', type: 'shell', value: 8000 }),
      computer: new Part({ name: 'Starmapper', type: 'computer', value: 300 }),
    };
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    );
    var newShell = new Part({ name: 'Tiberian', type: 'shell', value: 5500 });

    var difference = fighter.updatePart(newShell);

    assert.deepEqual(fighter.parts.shell, newShell);
    assert.equal(difference, 2500);
  });

  it.skip('should not be able to fly without a captain', function() {
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        maxCrew: 2,
        odometer: 3340,
      }
    );

    var status = fighter.checkReadiness();

    assert.isFalse(fighter.readyToFly);
    assert.equal(status, 'Cannot fly without a captain');
  });

  it.skip('should not be able to fly without fuel', function() {
    var captain = new Being('Will', 'human');
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        captain: captain,
        maxCrew: 2,
        odometer: 3340,
      }
    );

    var status = fighter.checkReadiness();

    assert.isFalse(fighter.readyToFly);
    assert.equal(status, 'Cannot fly without fuel');
  });

  it.skip('should not be able to fly without parts', function() {
    var captain = new Being('Will', 'human');
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        captain: captain,
        maxCrew: 2,
        odometer: 3340,
      }
    );
    fighter.fuel = 1000;
    var status = fighter.checkReadiness();

    assert.isFalse(fighter.readyToFly);
    assert.equal(status, 'Cannot fly without parts');
  });

  it.skip('should be able to fly if it has fuel, a captain and parts', function() {
    var captain = new Being('Will', 'human');
    var parts = {
      shell: new Part({ name: 'S-1', type: 'shell', value: 200 }),
      hyperdrive: new Part({ name: 'R-100', type: 'hyperdrive', value: 20 }),
      computer: new Part({ name: '100X', type: 'computer', value: 300 }),
      lifeSupport: new Part({ name: 'B-98', type: 'lifeSupport', value: 100 }),
      landingGear: new Part({ name: 'Legs-2', type: 'landingGear', value: 100 }),
    }
    var fighter = new Ship(
      {
        name: 'Atlantis',
        type: 'military',
        captain: captain,
        maxCrew: 2,
        odometer: 3340,
        parts: parts,
      }
    )
    fighter.fuel = 1000;
    var status = fighter.checkReadiness();

    assert.isTrue(fighter.readyToFly);
    assert.equal(status, 'Good to go!');
  });
})
