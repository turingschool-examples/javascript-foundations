function createElevator(building, floors, currentFloor, passengers) {
	return elevator = {
		building: building,
		floors: floors,
		currentFloor: currentFloor,
		passengers: passengers
	}
}

function changeFloors(elevator, floor) {
	if (elevator.currentFloor === floor) {
		return `You\'re already on floor ${floor}!`
	} else if (floor > elevator.floors) {
		return `Floor ${floor} does not exist!`
	} else {
		elevator.currentFloor = floor;
		return `Taking you to floor ${floor}!`;
	}
}

function dropOffPassenger(elevator, passenger) {
	for (var i = 0; i < elevator.passengers.length; i++) {
		if (elevator.passengers[i] === passenger) {
			elevator.passengers.splice(i, 1);
		}
	}
	
	return elevator.passengers;
}

// iterate over array of passengers
// if passenger equals the current array passenger, splice 1 item at that location
// return the array
	

module.exports = { 
	createElevator,
	changeFloors,
	dropOffPassenger
 };
