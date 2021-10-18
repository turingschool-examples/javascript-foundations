class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.greet = function() {
      return `Hi, ${this.rider}!`;
    }
    this.hungry = true;
    this.eat = function() {
      var counter = 0;
    }
  }
}

module.exports = Dragon
