class Snack {
  constructor(candyName, price) {
    this.name = candyName;
    this.price = price;
    this.itemsInStock = 0;
  }
  stockItems(numItems) {
    this.itemsInStock += numItems
  }
  removeItem() {
    if (this.itemsInStock > 0) {
      this.itemsInStock -= 1;
      return `Item taken! There are now ${this.itemsInStock} items left.`
    } else {
      return `Sorry, no ${this.name} left in stock!`
    }
  }
}

module.exports = Snack;
