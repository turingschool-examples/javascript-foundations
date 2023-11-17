function createVampire(name, pet = 'bat', thirsty = true, ouncesDrank = 0) {
  return {
  name,
  pet,
  thirsty,
  ouncesDrank
  }
}

function encounterDeliciousVictim(vampire) {
  if (vampire.ouncesDrank < 50) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  }

  if (vampire.ouncesDrank >= 50) {
    return 'No thanks, I am too full.'
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10;
  }

  if  (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false
  }
  return vampire;
}

function inquirePlace(array, location) {
  if (array.includes(location)) {
    return `Yes, I have spent some time in ${location}.`
  }

  if (!array.includes(location)) {
    return `No, I have never been to ${location}.`
  }
}

function findBatLovers(array) {
  batPets = []
  array.forEach(vamp => {
    if (vamp.pet == 'bat') {
      batPets.push(vamp.name)
    }
  });
  return batPets
}


module.exports = {
  createVampire, 
  encounterDeliciousVictim, 
  drink, 
  inquirePlace,
  findBatLovers
}