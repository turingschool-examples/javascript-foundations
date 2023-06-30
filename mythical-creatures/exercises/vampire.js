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

function inquirePlace(locations, place) {
  for (var i = 0; i < locations.length; i++) {
    if (locations[i] === place) {
      return 'Yes, I have spent some time in ' + place + '.';
    } 
  }
  return "No, I have never been to " + place + '.';
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