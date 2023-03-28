function createDragon(name, rider, mood) {
 var dragon = {
  name: name,
  rider: rider,
  temperment: mood,
  timesEaten: 0,
  hungry: true,
 }
 return dragon;
};

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
};

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3){
    dragon.hungry = false;
  }
  return dragon;
};

function findFireBreathers(allDragons) {
  var meanDragons = [];
  for (var i = 0; i < allDragons.length; i++) {
    if (allDragons[i].temperment === 'aggressive') {
      meanDragons.push(allDragons[i]);
    }
  } return meanDragons;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}