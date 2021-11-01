class Being {
  constructor(name, species) {
    this.isAlive = true;
    this.name = name;
    this.species = species;
    this.credits = 0;
  }
  updateCredits(credits) {
    this.credits += credits;
  }
}

module.exports = Being;
