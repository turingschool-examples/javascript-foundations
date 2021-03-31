
class Dragon {
  constructor(name, rider){
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.timesEaten = 0;
  }

  greet() {
    return "Hi, " + this.rider + "!"
  }

  eat() {
  this.timesEaten++;
    if (this.timesEaten >= 3) {
      this.hungry = false;
  }
}
}

module.exports = Dragon



// npm test mythical-creatures/test/dragon-test.js
