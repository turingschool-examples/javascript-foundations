class Vampire {
  constructor(name, pet = 'bat') {
    this.name = name;
    this.pet = pet;
    this.thirsty = true;
    this.ouncesDrank = 0;
    this.drink = function() {
      if (this.ouncesDrank >= 50) {
        return "I'm too full to drink anymore!";
      }
      this.ouncesDrank += 10;
      return this.thirsty = false;
    }
  }
}

module.exports = Vampire;
