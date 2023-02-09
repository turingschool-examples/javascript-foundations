function createVampire(name, pet) {
  var vampire = { 
    name: name,
    pet: pet || 'bat',
    thirsty: true,
    ouncesDrank: 0
  }
  return vampire
}

function drink(vampire) {
  if (vampire.ouncesDrank < 50) {
    vampire.ouncesDrank += 10;
  } 
  if (vampire.ouncesDrank >= 50) {
    vampire.thirsty = false
  }
  return vampire
}

function encounterDeliciousVictim(vampire) {
  if (vampire.thirsty === true) {
    return `I WANT TO SUCK YOUR BLOOD!`
  } else {
    return `No thanks, I am too full.`
  }
}

function findBatLovers(vampires) {
  var batVampires = []
  for(var i=0; i<vampires.length; i++) {
    if(vampires[i].pet === 'bat') {
      batVampires.push(vampires[i].name)
    }
  }
  return batVampires
}

module.exports = {
  createVampire, drink, findBatLovers, encounterDeliciousVictim
}