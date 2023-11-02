function createDragon(name, rider, temperment, timesEaten = 0, hungry = true) {
  return {
    name,
    rider,
    temperment,
    timesEaten,
    hungry
  }
}

function greetRider(dragon) {
  return `Hi, ${dragon.rider}!`
}

function eat(dragon) {
  // return dragon.hungry = false if dragon.times_eaten is >= 3
  if (dragon.timesEaten < 2) {
    dragon.timesEaten += 1
    dragon.hungry = true
  } else if (dragon.timesEaten >= 2) {
    dragon.timesEaten += 1
    dragon.hungry = false
  }
  return dragon
}

function findFireBreathers(dragons) {
  let fireBreather = []
  dragons.forEach(dragon => {
    if (dragon.temperment == `aggressive`) {
      fireBreather.push(dragon)
    }
  });

  return fireBreather
  
  // Dragons.each do |dragon|
    // if dragon.temperment = 'aggressive'
      // firebreather << dragon
    // end
  // end
}



module.exports = {
  createDragon,
  greetRider, 
  eat, 
  findFireBreathers
}