class Magician {
  constructor(name) {
    var stageName = `The Great ${name.name}`;
    this.name = stageName;
    this.assistant = name.assistant;
    if (!name.clothing) {
      this.favoriteAccessory = "top hat";
    } else {
      this.favoriteAccessory = name.clothing;
    }
    this.confidencePercentage = 10;
  }
    performIncantation(spellName) {
      return spellName.toUpperCase() + "!";
    }

    performTrick() {
      this.confidencePercentage += 10;
      if (this.favoriteAccessory === "top hat") {
        return "PULL RABBIT FROM TOP HAT"
      } else {
        return "PULL DOVE FROM SLEEVE";
      }
    }

    performShowStopper() {
      if (this.confidencePercentage < 100 || !this.assistant) {
        return "Oh no, this trick is not ready!";
      } else {
        return "WOW! The magician totally just sawed that person in half!"
      }
    }
}

module.exports = Magician;
