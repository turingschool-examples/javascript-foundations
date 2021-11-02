class Shop {
  constructor(shop) {
    this.name = shop.name;
    this.inventory = {};
  }
  addInventory(part) {
    this.inventory[part.type] = part;
  }
}

module.exports = Shop;
