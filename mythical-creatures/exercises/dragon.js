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
    this.mealCounter ++;
      if(this.mealCounter < 3) {
        return this.hungry = true;
      }
      return this.hungry = false;
  }
}

module.exports = Dragon
