

function createDragon (dragonName, riderName, dragonTemperment) {
//1 parameter that takes in a name and returns an object with a key of name
//now 2 parameters, where the second parameter should be the rider's name in the object
//now 3 parameters, where the third parameter should be the dragons temperment in the object

  var dragon1 = {
    name: dragonName,
    rider: riderName,
    temperment: dragonTemperment,
    timesEaten: 0,
    hungry: true
  }
  return dragon1
}


function greetRider (dragon) {
  // 1 parameter of a variable
  // dragon1 variable is being passed through, which invokes my createDragon function
  // which will pass my dragon1 object through
  //so I need to use dot notation to pull the dragon riders name
  var rider1 = dragon.rider
  return `Hi, ${rider1}!`

}


function eat (dragonEating) {
  // 1 parameter that takes in a variable
  // if the dragon times eaten = 3, hungry needs to change to false
  var fedDragon1 = dragonEating
  for (var i = 0; i < 4; i++) {
    if (fedDragon1.timesEaten < 3) {
      fedDragon1.timesEaten ++
    }
    if (fedDragon1.timesEaten > 2) {
      fedDragon1.hungry = false
    }
    // console.log(fedDragon1)
    return fedDragon1
  }
}

//had to console log the variable in the test to see that it was undefined
//setup a variable and returned that so it pushed back to var fedDragon on the test

// function eat (dragonEating) {
// //1 parameter that takes in a variable
// //the dragon times eaten = 3, hungry needs to change to false
// for (var i = 0; i < 4; i++) {
//   if (dragonEating.timesEaten < 3) {
//     dragonEating.timesEaten ++
//   }
//   if (dragonEating.timesEaten > 2) {
//     dragonEating.hungry = false
//   }
//   // console.log('DragonImp:', fedDragon1)
//   return dragonEating
//   }
// }
//this way would also work, but you would need to return the parameter
//rather than creating a variable and returning the variable

function findFireBreathers(fireBreathers1) {
var index = -1

  for (var i = 0; i < fireBreathers1.length; i++){
    if (fireBreathers1[i].temperment !== 'aggressive') {
      index = i
    }
    if (index !== -1){
    fireBreathers1.splice(index, 1)
    }
  }
  return fireBreathers1
};


module.exports = {
  createDragon, 
  greetRider, 
  eat, 
  findFireBreathers
}