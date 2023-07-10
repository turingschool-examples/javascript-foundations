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
    // have a collection of airports and an airline name
    // take collection and iterate through each
    // if airline is listed in airport.airline, add airport name to new collection
    // return collection
    if (airports[i].airlines.includes(airline)) {
      airportsFliesTo.push(airports[i].name);
      // for each airport, check if airline is in airport.airline
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
