class Vampire {
  constructor(name, pet){
    this.name = name;
    this.pet = pet || "bat";
    this.thirsty = true;
    this.ouncesDrank = 0;
  }
  drink() {
    this.thirsty = false;
    if (this.ouncesDrank < 50) {
      this.ouncesDrank += 10;
    }
    if (this.ouncesDrank === 50) {
      return "I\'m too full to drink anymore!"
    }
  }
}

// var dracula = new Vampire("dracula");

module.exports = Vampire;

// npm test mythical-creatures/test/vampire-test.js
