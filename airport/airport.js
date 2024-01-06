function createAirport(name1, airlines1, availableGates1) {
  var airport1 = {
    name: name1,
    airlines: airlines1,
    availableGates: availableGates1
  }
  return airport1
};

function welcomeGuests(airport) {
  return `Welcome to ${airport.name}!`
};

function landPlanes(airport, usedGates) {
  var overflow = usedGates - airport.availableGates
  airport.availableGates -= usedGates
  if(airport.availableGates < 0) {
    airport.message = `Oh no! Not enough gates available. Current overflow is ${overflow}.`
    airport.availableGates = 0
  } else {
      airport.message = `Success! Current availability is ${airport.availableGates}.`
    } 
  return airport
};

function checkAirlineLocations(airports, airline) {
  var airportNames = [];
  for(var i = 0; i < airports.length; i++) {
    for (var z = 0; z < airports[i].airlines.length; z++) {
      if(airports[i].airlines[z] === airline) {
        airportNames.push(airports[i].name)
      }
    }
  }
  return airportNames
};

module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
