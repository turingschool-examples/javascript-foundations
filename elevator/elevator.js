function createElevator(building1, floors1, currentFloor1, passengers1) {
    var elevator1 = {
        building: building1,
        floors: floors1,
        currentFloor: currentFloor1,
        passengers: passengers1
    }
    return elevator1
};

function changeFloors(elevator, newFloor) {
    if(elevator.floors < newFloor) {
        return `Floor ${newFloor} does not exist!`
    } else if(elevator.currentFloor !== newFloor) {
        return `Taking you to floor ${newFloor}!`
    } else {
        return `You're already on floor ${newFloor}!`
    }
};

function dropOffPassenger(elevator, passengerOff) {
    for(var i = 0; i < elevator.passengers.length; i++) {
        if(elevator.passengers[i] === passengerOff) {
            elevator.passengers.splice(i , 1)
        }
    }
    return elevator.passengers
};

module.exports = {
    createElevator,
    changeFloors,
    dropOffPassenger
};
