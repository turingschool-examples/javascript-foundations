class Bag{
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.candies.push(candy)
    this.count++
  }
  contains(candyType) {
    for (var i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === candyType) {
        return true;
      }
    }
    return false;

  }
}

module.exports = Bag