class Vampire {
  constructor(name, pet) {
    this.name = name;
    if (!pet) {
      this.pet = "bat";
    } else {
        this.pet = pet;
    }
    this.thirsty = true;
    this.ouncesDrank = 0;
  }

  drink() {
    this.thirsty = false
    if (this.ouncesDrank === 50) {
      return("I'm too full to drink anymore!");
    } else {
    this.ouncesDrank = this.ouncesDrank + 10;
  }
}
}

module.exports = Vampire;
