

module.exports = {
  createVampire, 
  // drink, 
  // findBatLovers, 
  // encounterDeliciousVictim, 
  // inquirePlace
}


// create a function that creates an object that includes name, pet, and thirsty.
// pet should default to bat. thirsty should default to true
function createVampire(name, pet) {
  var vampire = {
    name: name,
    pet: pet,
    thirsty: true
  }
  if (vampire.pet === undefined) {
    vampire.pet = 'bat';
  }
  return vampire;
};