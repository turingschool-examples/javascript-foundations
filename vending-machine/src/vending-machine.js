class VendingMachine {
  constructor(vendingObj) {
    this.id = vendingObj.id;
    this.isBroken = vendingObj.isBroken;
    this.snacks = [];
  }
  addSnacks(candyBar) {
    this.snacks.push(candyBar)
  }

}

module.exports = VendingMachine;
