class VendingMachine {
  constructor(machine) {
    this.id = machine.id;
    this.isBroken = machine.isBroken;
    this.snacks = [];
  }
  addSnacks(snack) {
    for (let i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        return `Sorry, that snack is already stocked! Try adding a different snack.`
      }
    }
    this.snacks.push(snack);
  }
  purchaseSnack(snackName, money) {
    for (let i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snackName &&
          this.snacks[i].itemsInStock > 0 &&
          money > this.snacks[i].price) {
        this.snacks[i].itemsInStock -= 1;
        return `Success! Here is $${money - this.snacks[i].price} back!`
      } else if (this.snacks[i].price > money) {
        return `Sorry, not enough payment. Please add more money.`;
      }
    }
    return `Sorry, no items in stock. Try another item.`
  }
}

module.exports = VendingMachine;
