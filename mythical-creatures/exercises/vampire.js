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
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false
  } else if (vampire.ouncesDrank >= 40) {
    vampire.ouncesDrank += 10;
    vampire.thirsty = false
  } else {
    vampire.ouncesDrank += 10;
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