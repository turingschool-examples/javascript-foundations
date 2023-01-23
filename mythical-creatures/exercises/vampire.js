class Vampire {
    constructor(name, pet) {
     this.name = name;
     this.pet = pet || 'bat';
     this.thirsty = true
     this.ouncesDrank = 0;
  }
  drink() {
    this.thirsty = false
    if (this.ouncesDrank === 50) {
      return 'I\'m too full to drink anymore!'
    } else (this.ouncesDrank += 10)
      return this.thirsty === true
  }
}

// if ounces === 50 no longer thirsty

module.exports = Vampire;