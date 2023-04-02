function createVampire(name, pet = 'bat', thirsty = true) {
  return vampire = {
    name: name,
    pet: pet,
    thirsty: thirsty
  }
}

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  // encounterDeliciousVictim, 
  // inquirePlace
}