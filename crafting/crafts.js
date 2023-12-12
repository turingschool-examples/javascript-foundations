
function createMaterial(yarnName, yarnUnit, yarnCost) {
  //3 parameters with 3 arguments being passed
  var newYarn = {
    name: yarnName,
    unit: yarnUnit,
    costPerUnit: yarnCost
  }
  return newYarn
}

function calculateMaterialCost(fabric1, noOfYards) {
  //2 parameters, one argument is an object,
  //the other argument is number of yards needed (one yard is one unit)
  //return a string with the yards needed and the total cost
  var totalCost = noOfYards * fabric1.costPerUnit
  var material = fabric1.name
  var unitType = fabric1.unit
  console.log('total:', totalCost)
  return `${noOfYards} ${unitType}s of ${material} costs $${totalCost}.`
}


module.exports = {
  createMaterial,
  calculateMaterialCost,
  // createSupplyCloset,
  // addSupply,
  // createNewProject,
  // compareMaterials
}