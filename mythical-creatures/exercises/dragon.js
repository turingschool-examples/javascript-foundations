function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    hungry: true,
    timesEaten: 0
  }
  return dragon
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false
  }
  return dragon
}

// Spicy:
function findFireBreathers(dragons) {
  var aggresiveDragons = [];

  for (var i=0; i<dragons.length; i++) {
    if (dragons[i].temperment === 'aggressive') {
      aggresiveDragons.push(dragons[i])
    }
  }
  return aggresiveDragons
}

module.exports = {
  createDragon, greetRider, eat, findFireBreathers
}