function createAirport(name, airlines, availableGates) {
  var airport = {
    name,
    airlines,
    availableGates,
  }
  return airport;
};

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planesLandedCt) {
  airport.availableGates -= planesLandedCt;
  if (airport.availableGates > 0) {
    return `Success! Current availability is ${airport.availableGates}.`
  } else if (airport.availableGates < 0){
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is 1.`
  }
}

function checkAirlineLocations(allAirport, airline) {
  // 
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
