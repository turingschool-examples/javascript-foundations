class Magician {
  constructor(magicianMan) {
    this.name = "The Great " + magicianMan.name;
    this.assistant = magicianMan.assistant;
    this.favoriteAccessory = magicianMan.clothing;
    if (magicianMan.name === "Scott") {
      this.favoriteAccessory = "top hat";
    }
    this.favoriteAccessory = magicianMan.clothing || 'top hat';
  }
  performIncantation(spell) {
    // return words
    return spell.toUpperCase() + "!"
    // make words capital
    // add !
  }
}

module.exports = Magician

// npm test mythical-creatures/test/magician-test.js
