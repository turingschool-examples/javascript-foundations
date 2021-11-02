var Part = require('../src/part');
var Ship = require('../src/ship');

class Shop {
  constructor(shop) {
    this.name = shop.name;
    this.inventory = {};
  }
  addInventory(item) {
    if (item instanceof Part) {
      this.inventory[item.type] = item;
    }
  }
  outfitShip(ship, newPart) {
    if (!ship.captain) {
      return `cannot outfit a ship without a captain`;
    } else if (Object.keys(this.inventory).includes(newPart) &&
        ship.captain.credits < this.inventory[newPart].value) {
      return `you require ${this.inventory[newPart].value - ship.captain.credits} more credits to make this purchase`;
    }
    ship.captain.credits -= this.inventory[newPart].value;
    ship.updatePart(this.inventory[newPart]);
    delete this.inventory[newPart];
    return `${newPart} added to ship`;
  }
}

module.exports = Shop;
