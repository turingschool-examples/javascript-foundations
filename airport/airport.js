


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};

function createAirport(location, airlines, gates) {
  var airport = { 
    name: location,
    availableGates: gates,
    airlines: airlines
  }
  return airport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
}

function landPlanes(airport, planes) {
  airport.availableGates = airport.availableGates - planes;
  if (airport.availableGates > 0) {
    return `Success! Current availability is ${airport.availableGates}.`;
  }
  if (airport.availableGates <= 0) {
    var overflow = airport.availableGates * -1;
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`
  }
} 

function checkAirlineLocations(airports, airline) {
  var carriers = [];
  for (var i = 0; i < airports.length; i++) {
    for (var j = 0; j < airports[i].airlines.length; j++) {
      if (airline === airports[i].airlines[j]) {
        carriers.push(airports[i].name)
      }
    }
  }
  return carriers;
}