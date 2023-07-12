function createVampire(name, pet) {
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true,
    ouncesDrank: 0
  }
  if (vampire.pet === undefined) {
    vampire.pet = "bat";
  }
  return vampire;
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return "I WANT TO SUCK YOUR BLOOD!";
  }
  else {
    return "No thanks, I am too full.";
  }
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10;
  }
  if (vampire.ouncesDrank == 50) {
    vampire.thirsty = false;
  }
  return vampire;
}

function inquirePlace(locations, location) {
  for (var i = 0; i < locations.length; i++) {
    if (location === locations[i]) {
      return `Yes, I have spent some time in ${locations[i]}.`;
    }
    else if (!locations.includes(location)) {
      return `No, I have never been to ${location}.`;
    }
  }
}

function findBatLovers(vampireArr) {
  var batLovers = [];
  for (var i = 0; i < vampireArr.length; i++) {
    if (vampireArr[i].pet === "bat") {
      batLovers.push(vampireArr[i].name)
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