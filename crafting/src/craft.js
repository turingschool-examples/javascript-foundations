class Craft {
constructor(craftobj) {
  this.name = craftobj.type;
  this.materials = craftobj.materials;
  }
  calculateProjectTotal() {
    var totalCost = 0;
    for (var i = 0; i < this.materials.length; i++) {
      totalCost += this.materials[i].calculateMaterialCost();
    }
    return totalCost;
  }
}

module.exports = Craft;
