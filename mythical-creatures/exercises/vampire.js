function createVampire(name, pet = 'bat', thirsty = true, ouncesDrank) {
  return vampire = {
    name: name,
    pet: pet,
    thirsty: thirsty,
    ouncesDrank: 0
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