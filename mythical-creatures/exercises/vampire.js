function createVampire(name, pet = 'bat', thirsty = true) {
  return vampire = {
    name: name,
    pet: pet,
    thirsty: thirsty
  }
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  }
}

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}