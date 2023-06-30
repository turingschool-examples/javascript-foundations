function createAirport(name, airlines, availableGates) {
  return {
    name: name,
    airlines: airlines,
    availableGates: availableGates
  };
}


module.exports = { 
  createAirport, 
  // welcomeGuests, 
  // landPlanes, 
  // checkAirlineLocations
};
