function createVampire(name, pet = 'bat', thirsty = true, ouncesDrank  = 0) {
  return vampire = {
    name: name,
    pet: pet,
    thirsty: thirsty,
    ouncesDrank: ouncesDrank
  }
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  }
}

function drink(vampire) {
  vampire.ouncesDrank += 10;
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false
  }
  return vampire
}

module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}