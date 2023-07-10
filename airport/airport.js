function createAirport(name, airlines, availableGates) {
  return {
    name: name,
    airlines: airlines,
    availableGates: availableGates,
    get message() {
      if (this.availableGates > 0) {
        return `Success! Current availability is ${this.availableGates}.`;
      } else {
        return `Oh no! Not enough gates available. Current overflow is ${Math.abs(this.overflow)}.`;
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
    airport.overflow = airport.availableGates;
    airport.availableGates = 0;
  }
  return airport;
}

function checkAirlineLocations(airports, airline) {
  const airportsFliesTo = [];
  for (i=0; i < airports.length; i++) {
    if (airports[i].airlines.includes(airline)) {
      airportsFliesTo.push(airports[i].name);
    }
  }
  return airportsFliesTo; 
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
