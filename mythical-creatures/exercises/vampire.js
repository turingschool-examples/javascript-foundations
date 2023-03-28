function createVampire(name, pet) {
  var vampire = {
    name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire;
};

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true){
    return `I WANT TO SUCK YOUR BLOOD!`
  } else {
    return `No thanks, I am too full.`
  }
}

function drink(vampire) {
  if (vampire.thirsty === true) {
    vampire.ouncesDrank += 10;
  }
  if (vampire.ouncesDrank === 50) {
    vampire.thirsty = false;
  }
  return vampire;
};

function inquirePlace(locations, cityName) {
    if (locations.includes(cityName)) {
      return `Yes, I have spent some time in ${cityName}.`
    } else {
      return `No, I have never been to ${cityName}.`
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
};

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
}