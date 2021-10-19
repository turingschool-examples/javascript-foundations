class Magician {
  constructor(person) {
    this.name = `The Great ${person.name}`;
    this.assistant = person.assistant;
    this.favoriteAccessory = person.clothing || 'top hat';
    this.performIncantation = function(buzzWord) {
      return buzzWord.toUpperCase() + '!'
    }
    this.performTrick = function() {
      this.confidencePercentage += 10;
      if (this.favoriteAccessory === 'top hat') {
        return `PULL RABBIT FROM TOP HAT`
      }
      return `PULL DOVE FROM SLEEVE`
    }
    this.confidencePercentage = 10;
    this.performShowStopper = function() {
      if (this.confidencePercentage < 100 || this.assistant === false) {
        return `Oh no, this trick is not ready!`;
      }
      return `WOW! The magician totally just sawed that person in half!`
    }
  }
}

module.exports = Magician;
