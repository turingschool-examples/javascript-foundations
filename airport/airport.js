function createAirport(name, airlines, availableGates) {
  return {
    name: name,
    airlines: airlines,
    availableGates: availableGates,
    get message() {
      if (this.availableGates > 0) {
        return `Success! Current availability is ${this.availableGates}.`;
      } else {
        return `Oh no! Not enough gates available. Current overflow is ${this.availableGates}.`;
      }
    }
  };
}


function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, gateCount) {
  airport.availableGates -= gateCount;
  if (airport.availableGates < 0) {
    airport.availableGates = 0;
  }
  // airport.message = function() {
  //   if (this.availableGates > 0) {
  //     return `Success! Current availability is ${this.availableGates}.`;
  //   } else {
  //     return `Oh no! Not enough gates available. Current overflow is ${this.availableGates}.`;
  //   }
  // };
  return airport;
}

// function checkAvailability(availableGates) {
  
// }

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  // checkAirlineLocations
};
