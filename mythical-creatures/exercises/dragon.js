class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.greet = function() {
      return `Hi, ${this.rider}!`;
    }
    this.hungry = true;
    this.mealCounter = 0;
  }
  eat() {
    if (this.mealCounter < 2) {
      this.mealCounter ++;
      return;
    }
    this.mealCounter ++;
    this.hungry = false;
    return;
  }
}

module.exports = Dragon
