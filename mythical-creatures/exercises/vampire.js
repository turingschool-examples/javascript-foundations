function createVampire(name1, pet1) {
  var vampire1 = {
    name: name1,
    pet: pet1 || 'bat',
    thirsty: true,
    ouncesDrank: 0
  };
  return vampire1
};

function encounterDeliciousVictim(vampy) {
  if(vampy.thirsty) {
    return 'I WANT TO SUCK YOUR BLOOD!'
  }
  return 'No thanks, I am too full.'
};

function drink(vampy) {
  if(vampy.ouncesDrank < 50) {
    vampy.ouncesDrank += 10
  };
  if(vampy.ouncesDrank === 50) {
    vampy.thirsty = false
  };
  return vampy
};

function inquirePlace(destinations, city) {
  if(destinations.includes(city)) {
    return `Yes, I have spent some time in ${city}.`
  }
  return `No, I have never been to ${city}.`
};

function findBatLovers(vampires) {
  var batLovers = [];
  for(var i = 0; i < vampires.length; i++) {
    if(vampires[i].pet === 'bat') {
      batLovers.push(vampires[i].name)
    }
  }
    return batLovers
};

module.exports = {
  createVampire, 
  drink, 
  findBatLovers, 
  encounterDeliciousVictim, 
  inquirePlace
};