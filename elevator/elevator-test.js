var assert = require('chai').assert;
var { createElevator, changeFloors, dropOffPassenger } = require('./elevator');

describe('Elevator', function() {
  it('should create an elevator', function() {
    var elevator = createElevator('Empire State Building', 102, 5, ['Stacey', 'Javier', 'Tom']);

    assert.equal(elevator.building, 'Empire State Building');
    assert.equal(elevator.floors, 102);
    assert.equal(elevator.currentFloor, 5);
    assert.deepEqual(elevator.passengers, ['Stacey', 'Javier', 'Tom']);
  });

  it('should be able to change floors', function() {
    var elevator = createElevator('Empire State Building', 102, 5, []);

    var message = changeFloors(elevator, 10);

    assert.equal(message, 'Taking you to floor 10!');
  });

  it('should not be able to change floors if already on that floor', function() {
    var elevator = createElevator('West High School', 3, 2, ['Sarah', 'Ari']);

    var message = changeFloors(elevator, 2);

    assert.equal(message, 'You\'re already on floor 2!');
  });

  it('should not be able to take you to a floor that does not exist', function() {
    var elevator = createElevator('West High School', 3, 2, ['Katherine', 'Erika']);

    var message = changeFloors(elevator, 100);

    assert.equal(message, 'Floor 100 does not exist!');
  });

  it('should be able to drop off passenger', function() {
    var elevator = createElevator('Upper Valley Mall', 4, 1, ['Scott', 'Mark', 'Joey']);

    var remainingPassengers = dropOffPassenger(elevator, 'Mark');

    assert.deepEqual(remainingPassengers, ['Scott', 'Joey']);
  });

});