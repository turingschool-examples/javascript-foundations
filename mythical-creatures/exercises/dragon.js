function createDragon(name, rider, temperment) {
  return dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true
  }
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`;
}

function eat(dragon) {
  if (dragon.timesEaten < 2) {
    dragon.timesEaten++
    return dragon;
  } else if (dragon.timesEaten === 2) {
    dragon.timesEaten++
    dragon.hungry = false;
    return dragon;
  } else {
    return dragon;
  }
}

function findFireBreathers(dragons){
  var fireBreathers = [];
  
  for (var i = 0; i < dragons.length; i ++) {
    if (dragons[i].temperment === 'aggressive') {
      fireBreathers.push(dragons[i]);
    }
  }

  return fireBreathers;
}

//iterate over array
//if this dragon's temperment is aggressive, push to new array
// return the new array

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}