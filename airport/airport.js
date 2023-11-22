function createAirport(name, airlines = [], availableGates = 0) {
  return {
    name,
    airlines,
    availableGates,
    message: ''
  }
}

function welcomeGuests(airport){
  return `Welcome to ${airport.name}!`
}

function createAirport(name, airlines, totalGates) {
  return {
    name: name,
    airlines: airlines,
    totalGates: totalGates,
    availableGates: totalGates,
  };
}

function landPlanes(airport, planesToLand) {
  if (planesToLand <= airport.availableGates) {
    airport.availableGates -= planesToLand;
    return {
      availableGates: airport.availableGates,
      message: 'Success! Current availability is ' + airport.availableGates + '.',
    };
  } else {
    const overflow = planesToLand - airport.availableGates;
    airport.availableGates = 0;
    return {
      availableGates: airport.availableGates,
      message: 'Oh no! Not enough gates available. Current overflow is ' + overflow + '.',
    };
  }
}

function checkAirlineLocations(airportsArray, airline) {
  carriers = []
  airportsArray.forEach(airport => {
    airlinesArray = airport.airlines
    if (airlinesArray.includes(airline)) {
      carriers.push(airport.name)
    }
  })
  return carriers
}


module.exports = { 
  createAirport, 
  welcomeGuests, 
  landPlanes, 
  checkAirlineLocations
};
