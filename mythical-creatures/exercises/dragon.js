function createDragon(name, rider, mood) {
 var dragon = {
  name: name,
  rider: rider,
  temperment: mood,
 }
 return dragon;
}

module.exports = {
  createDragon, 
  // greetRider, 
  // eat, 
  // findFireBreathers
}