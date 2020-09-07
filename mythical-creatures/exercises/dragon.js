function dragon(name, rider, color) {
  this.name = name;
  this.rider = rider;
  this.color = color;
  this.hungry = true;


  this.eatCount = 0;
  this.eat = function () {
    this.eatCount += 1;
    if (this.eatCount >= 3) {
      this.hungry = false;
    }
  }
}

module.exports = dragon