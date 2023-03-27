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

// function eat() takes in the dragon object after it's been created.
// creates a new variable called fedDragon using eat()
// function eat() alters the dragon object keys timesEaten and 
// hungry.

function eat(dragon) {
  dragon.timesEaten += 1;
  if (dragon.timesEaten >= 3){
    dragon.hungry = false;
  }
  return dragon;
}

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}