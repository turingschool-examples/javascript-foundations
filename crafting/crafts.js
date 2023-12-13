
function createMaterial(fabricName, fabricUnit, yarnCost) {
  var newYarn = {
    name: fabricName,
    unit: fabricUnit,
    costPerUnit: yarnCost
  };
  return newYarn
};

function calculateMaterialCost(fabric1, noOfYards) {
  var totalCost = noOfYards * fabric1.costPerUnit
  var material = fabric1.name
  var unitType = fabric1.unit
  return `${noOfYards} ${unitType}s of ${material} costs $${totalCost}.`
};

function createSupplyCloset(fabrics) {
  var newCloset = {
    supplies: []
  };
  if (fabrics !== undefined) {
    for (var i = 0; i < fabrics.length; i++) {
      newCloset.supplies.push(fabrics[i].name)
    };
  };
  return newCloset
};

function addSupply(myCloset, materialInfo) {
  var updatedCloset = [];
  for (var i = 0; i < myCloset.supplies.length; i++) {
    updatedCloset.push(myCloset.supplies[i])
  };
  for (var i = 0; i < myCloset.supplies.length; i++) {
    if (!myCloset.supplies.includes(materialInfo.name)) {
      updatedCloset.push(materialInfo.name)
    } else {
      return `You already have ${materialInfo.name} in your closet!`
    };
  };
  return updatedCloset
};

function createNewProject(materials1, status1) {
  if(status1 == undefined) {
    status1 = 'not started'
  };
  var crossStitch = {
    materialsNeeded: materials1,
    status: status1
  };
  return crossStitch
};

function compareMaterials(myPaintProject, mySupplies1) {
  for (var i = 0; i < myPaintProject.materialsNeeded.length; i++) {
    if(mySupplies1.supplies.includes(myPaintProject.materialsNeeded[i].name)) {
      return 'Yay! You can start this project!'
    } else {
        return 'Oh no! You need to go shopping before you can start this project!'
      };
  };
};

module.exports = {
  createMaterial,
  calculateMaterialCost,
  createSupplyCloset,
  addSupply,
  createNewProject,
  compareMaterials
}
