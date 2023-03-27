function createDragon(name, rider, temperment) {
  dragonInfo = {
    name,
    rider,
    temperment,
    timesEaten: 0,
    hungry: true
  };
  return dragonInfo;
};

function greetRider(dragonInfo) {
  return `Hi, ${dragonInfo.rider}!`
}

function eat(dragonInfo) {
  dragonInfo.timesEaten += 1;
  if (dragonInfo.timesEaten >= 3) {
    dragonInfo.hungry = false
  }
  return dragonInfo;
}

function findFireBreathers(allDragons) {
  var fireBreathers = [];
  for (var i = 0; i < allDragons.length; i++) {
    if (dragonInfo.temperment === 'aggressive') {
      fireBreathers.push(allDragons[i]);
    }
  }
  console.log(allDragons)
  return fireBreathers
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}