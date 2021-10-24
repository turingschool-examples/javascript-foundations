class Bag {
  constructor() {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  }
  fill(candy) {
    this.candies.push(candy);
    this.count ++;
  }
  contains(typeOfCandy) {
    for (let i = 0; i < this.candies.length; i++) {
      if (this.candies[i].type === typeOfCandy) {
        return true;
      }
    }
    return false;
  }
}

module.exports = Bag;
