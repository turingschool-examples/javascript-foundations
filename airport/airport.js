function createAirport(name, airlines, availableGates) {
  return airport = {
    name: name,
    airlines: airlines,
    availableGates: availableGates
  }
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planesLanded) {
  airport.availableGates -= planesLanded;
  var overflow = airport.availableGates
  if (airport.availableGates > 0) {
    return `Success! Current availability is ${airport.availableGates}.`;
  } else {
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${-overflow}.`;
  }
}

function checkAirlineLocations(airports, airline) {
  locations = [];

  for (var i = 0; i < airports.length; i++) {
    if (airports[i].airlines.includes(airline)) {
      locations.push(airports[i].name)
    }
  }
  return locations;
}


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
