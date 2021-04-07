class Magician {
  constructor(magicianMan) {
    this.name = "The Great " + magicianMan.name;
    this.assistant = magicianMan.assistant;
    this.favoriteAccessory = magicianMan.clothing || 'top hat';
    this.confidencePercentage = 10;
  }
  
  performIncantation(spell) {
    return spell.toUpperCase() + "!"
  }

  performTrick() {
    this.confidencePercentage += 10;
    if (this.favoriteAccessory === "top hat") {
      return "PULL RABBIT FROM TOP HAT";
    } else {
      return "PULL DOVE FROM SLEEVE";
    }
  }
  performShowStopper() {
    if (this.confidencePercentage >= 100 && this.assistant === true) {
      return "WOW! The magician totally just sawed that person in half!"
    } else {
      return "Oh no, this trick is not ready!"
    }
  }
}

module.exports = Magician

// npm test mythical-creatures/test/magician-test.js
