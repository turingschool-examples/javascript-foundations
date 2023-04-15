

module.exports = { 
  createElevator,
  changeFloors,
  dropOffPassenger
 };

 function createElevator(building, floors, currentFloor, passengers) {
  var elevator = {
    building: building,
    floors: floors,
    currentFloor: currentFloor,
    passengers: passengers
  }
  return elevator;
 }

 function changeFloors(elevator, floor) {
    if (elevator.currentFloor === floor) {
      return `You're already on floor ${floor}!`
    }
    if (floor > elevator.floors) {
      return `Floor ${floor} does not exist!`
    }
    elevator.currentFloor = floor;
    return `Taking you to floor ${floor}!`;
 };

 function dropOffPassenger(elevator, passenger) {
    for (var i = 0; i < elevator.passengers.length; i++) {
        if (elevator.passengers[i] === passenger) {
          elevator.passengers.splice(i, 1);
        }
    }
    return elevator.passengers;
 }