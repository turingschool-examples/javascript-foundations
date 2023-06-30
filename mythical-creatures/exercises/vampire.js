function createVampire(name, pet = 'bat') {
  return {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  };
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  }
}

function drink(vampire) {
  vampire.ouncesDrank += 10;
  return vampire;
}

module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}