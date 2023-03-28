function createDragon (name, rider, temperment) {
  var dragon = {
    name,
    rider,
    temperment,
    hungry: true,
    timesEaten: 0
  }
  return dragon
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  dragon.timesEaten++
  if (dragon.timesEaten >= 3) {
    dragon.hungry = false
  }
  return dragon
}

function findFireBreathers(allDragons) {
  fireBreathers = []
  for (i = 0; i < allDragons.length; i++) {
    if (allDragons[i].temperment === 'aggressive') {
      fireBreathers.push(allDragons[i])
    }
  }
  return fireBreathers
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}