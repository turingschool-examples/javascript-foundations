function createDragon(name, rider, temperament) {
  return {
    name: name,
    rider: rider,
    temperament: temperament
  }
}

function greetRider(dragon){
  return `Hi, ${dragon.rider}!`
}

module.exports = {
  createDragon, 
  greetRider, 
  // eat, 
  // findFireBreathers
}