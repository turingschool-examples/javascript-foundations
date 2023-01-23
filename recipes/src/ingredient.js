class Ingredient {
  constructor(ingredientObj) {
    this.name = ingredientObj.name;
    this.amount = ingredientObj.amount;
  }
  changeAmount(newAmt) {
    this.amount = newAmt
  }
}

module.exports = Ingredient;
