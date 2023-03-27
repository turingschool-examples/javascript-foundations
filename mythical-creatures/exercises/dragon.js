function createDragon(name, rider, temperment) {
  var dragon = {};
  dragon.name = name;
  dragon.rider = rider;
  dragon.temperment = temperment;
  dragon.timesEaten = 0;
  dragon.hungry = true;

  return dragon; 
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {

  if (dragon.timesEaten < 3) {
    dragon.timesEaten++;
   } 
  
  if (dragon.timesEaten === 3) {
    dragon.hungry = false;
  }

  return dragon;
}

function findFireBreathers(allDragons) {
  var fireBreather = [];

  for (var i = 0; i < allDragons.length; i++) {
    if (allDragons[i].temperment === 'aggressive') {
      fireBreather.push(allDragons[i]);
    }
  }

  return fireBreather;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat,
  findFireBreathers
}