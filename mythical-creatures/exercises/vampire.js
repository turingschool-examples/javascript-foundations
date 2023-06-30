function createVampire(name, pet = 'bat') {
  return {
    name: name,
    pet: pet,
    thirsty: true
  };
}

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  // encounterDeliciousVictim, 
  // inquirePlace
}