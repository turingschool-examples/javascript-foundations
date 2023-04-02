function createVampire(name, pet = 'bat', thirsty = true, ouncesDrank  = 0, locations) {
  return vampire = {
    name: name,
    pet: pet,
    thirsty: thirsty,
    ouncesDrank: ouncesDrank,
    locations: locations
  }
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return 'No thanks, I am too full.';
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false;
  } else if (vampire.ouncesDrank >= 40) {
    vampire.ouncesDrank += 10;
    vampire.thirsty = false;
  } else {
    vampire.ouncesDrank += 10;
  }
  return vampire;
}

function inquirePlace(locations, location) {
  if (locations.includes(location)) {
    return `Yes, I have spent some time in ${location}.`;
  } else {
    return `No, I have never been to ${location}.`;
  }
}

function findBatLovers(vampires) {
  var batLovers = [];
  for (var i = 0; i < vampires.length; i++) {
    if (vampires[i].pet === 'bat') {
      batLovers.push(vampires[i].name);
    }
  }
  return batLovers;
}

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}