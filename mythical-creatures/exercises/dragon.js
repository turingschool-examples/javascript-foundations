class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.numTimesEat = 0;
  };

  greet() {
    return `Hi, ${this.rider}!`
  }

  eat() {
    this.numTimesEat ++;
    if (this.numTimesEat === 3) {
      this.hungry = false
    };
  };
};

module.exports = Dragon;
