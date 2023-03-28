function createVampire(name, pet) {
    var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0,
  };

  if (!pet) {
    vampire.pet = 'bat';
  }

  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!';
  } else {
    return `No thanks, I am too full.`;
  }
}

function drink(vampire) {
  if (vampire.thirsty) {
    vampire.ouncesDrank += 10;
  }

  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false;
  }

  return vampire;
}

function inquirePlace(locations, newPlace) {
  for (var i = 0; i < locations.length; i++) {
    if (locations[i] === newPlace) {
      return `Yes, I have spent some time in ${newPlace}.`;
    }
  } 

  return `No, I have never been to ${newPlace}.`;
}

function findBatLovers(vampire) {
  var batLovers = [];

  for (var i = 0; i < vampire.length; i++) {
    if (vampire[i].pet === 'bat') {
      batLovers.push(vampire[i].name);
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