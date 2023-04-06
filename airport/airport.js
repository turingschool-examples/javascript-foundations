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
};

function landPlanes(airport, planesLandedCt) {
  airport.availableGates -= planesLandedCt;
  if (airport.availableGates > 0) {
    return `Success! Current availability is ${airport.availableGates}.`
  } else if (airport.availableGates < 0){
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is 1.`
  }
};

function checkAirlineLocations(allAirports, airline) {
  var flightLocations = [];
  for (var i = 0; i < allAirports.length; i++) {
    if (allAirports[i].airlines.includes(airline)) {
      flightLocations.push(allAirports[i].name)
    }
  }
  return flightLocations;
};

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
