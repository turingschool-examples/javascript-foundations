
function createAirport(airportName, airlineCompanies, gatesAvailable) {
  var airport = {
    name: airportName,
    airlines: airlineCompanies,
    availableGates: gatesAvailable
  }
  return airport;
}

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`;
}

function landPlanes(airport, planesLanded) {
 
  // console.log(airport.name + "  " + overflow)
  if (airport.availableGates > planesLanded) {
    return `Success! Current availability is ${airport.availableGates -= planesLanded}.`;
  } else {
    var overflow = (planesLanded - airport.availableGates) 
    airport.availableGates = 0;
    return `Oh no! Not enough gates available. Current overflow is ${overflow}.`;
  }
}

function checkAirlineLocations(allAirports, airlineCompanies) {
  var serviceLocation = [];

  for (var i = 0; i < allAirports.length; i++) {
    if (allAirports[i].airlines.includes(airlineCompanies)) {
      serviceLocation.push(allAirports[i].name);
    }
  }
  return serviceLocation;
}

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
