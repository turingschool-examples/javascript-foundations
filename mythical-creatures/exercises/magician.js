class Magician {
    constructor(magician) {
    this.name = `The Great ${magician.name}`
    this.assistant = magician.assistant
    this.favoriteAccessory = magician.clothing || 'top hat'
    this.spell = true
    this.charm = true
    this.confidencePercentage = 10
  }
  performIncantation(spellName) {
    return `${spellName}!`.toUpperCase()
  }
  performTrick() {
    this.confidencePercentage += 10
    if (this.favoriteAccessory === `top hat`) {
      return `PULL RABBIT FROM TOP HAT`
    } else if (this.favoriteAccessory = `cape`) {
      return `PULL DOVE FROM SLEEVE`
    }
  }
  performShowStopper() {
    if(this.assistant === false || this.confidencePercentage < 100){
      return `Oh no, this trick is not ready!`
  } else (this.confidencePercentage > 50)
      return `WOW! The magician totally just sawed that person in half!`
  }
}




module.exports = Magician;