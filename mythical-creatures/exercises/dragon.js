

module.exports = {
  createDragon, 
  // greetRider, 
  // eat, 
  // findFireBreathers
}

// goal: write a function that creates an object of dragons with name, rider, and temperment

// input: three parameters: name, rider, temperment
// output: object

function createDragon(name, rider, temperment) {
  var dragon = {
    name: name,
    rider: rider,
    temperment: temperment
  }

  return dragon;
};