

module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  // findFireBreathers
}

// goal: write a function that creates an object of dragons with name, rider, and temperment

// input: three parameters: name, rider, temperment
// output: object

function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment,
    timesEaten: 0,
    hungry: true

  }

  return dragon;
};

// goal: write function to greet rider of dragon

// input: dragon object
// output: 'Hi, <rider>!'

// steps:
  // use dot notation to access rider key-value pair
  // interpolate rider into greeting

function greetRider(dragon) {
  var rider = dragon.rider;
  return `Hi, ${rider}!`;
};

// write function that takes in a dragon object and returns + 1 to timesEaten key-value pair and also returns true or false in hungry key value pair

// input: dragon object
// output: timesEaten++ conditional to check for number of times eaten < 3

function eat(dragon) {
  dragon.timesEaten++;
  if (dragon.timesEaten === 3) {
    dragon.hungry = false;
  };
  return dragon;
};


