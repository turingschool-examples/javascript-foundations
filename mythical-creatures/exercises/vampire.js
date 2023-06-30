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
  } else {
    return 'No thanks, I am too full.';
  }
}

function drink(vampire) {
  if (vampire.thirsty === false) {
    return vampire;
  } else {
    vampire.ouncesDrank += 10;
    if (vampire.ouncesDrank >= 50) {
      vampire.thirsty = false;
    }
  }
  return vampire;
}

module.exports = {
  createVampire, 
  drink, 
  // findBatLovers, 
  encounterDeliciousVictim, 
  // inquirePlace
}