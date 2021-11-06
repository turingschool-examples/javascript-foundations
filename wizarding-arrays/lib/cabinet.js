class Cabinet {
  constructor() {
    this.potions = [];
  }
  isEmpty() {
    if (this.potions.length === 0) {
      return true;
    }
    return false;
  }
  add(potion) {
    if (!Array.isArray(potion)) {
      this.potions.push(potion);
    } else {
      for (var i = 0; i < potion.length; i++) {
        this.potions.push(potion[i]);
      }
    }
  }
  takeFirstPotion() {
    return this.potions.shift();
  }
  takePotionWithName(name) {
    for (var i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === name) {
        var removedPotion = this.potions.splice(i, 1);
        return removedPotion[0];
      }
    }
  }
  count(potionName) {
    var theCount = 0;
    for (var i = 0; i < this.potions.length; i++) {
      if (this.potions[i].name === potionName) {
        theCount++;
      }
    }
    return theCount;
  }
}

module.exports = Cabinet;
