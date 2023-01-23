class Material {
  constructor(name, price, amount, units) {
    this.name = name;
    this.price = price;
    this.amount = amount;
    this.units = units;
    this.totalCost = this.calculateMaterialCost();
  }
  useMaterial(amount) {
    if (this.amount <= amount) {
      return `You don\'t have enough ${this.name}! Try using ${this.amount} ${this.units} or less.`
    } else if (this.amount >= amount) {
      this.amount -= amount;
      return `You now have ${this.amount} ${this.units} of ${this.name} left.`
      }
    } 
    calculateMaterialCost() {
      var total = this.price * this.amount
      return total
    }
  }
   
  


module.exports = Material;
