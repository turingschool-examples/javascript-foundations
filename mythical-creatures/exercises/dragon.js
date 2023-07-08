function createDragon(name, rider, temperment, timesEaten = 0, hungry = true) {
  return {
    name,
    rider,
    temperment,
    timesEaten,
    hungry
  };
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {
  dragon.timesEaten += 1
  if(dragon.timesEaten < 3){
    dragon.hungry = true
  } else {
    dragon.hungry = false
  }
  return dragon
}

function findFireBreathers(allDragons = []){
  var fireBreathers = []
  allDragons.forEach(function(dragon, index){
    if (dragon.temperment == "aggressive"){
      fireBreathers.push(dragon)
    }
  })
  return fireBreathers
}
  // createDragon, 
  // greetRider, 
  // eat, 
  // findFireBreathers

module.exports = {createDragon, greetRider, eat, findFireBreathers};