class TrickOrTreater {
  constructor(costume, bag) {
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {
    this.bag.fill(candy);
    this.countCandies ++;
    this.hasCandy = true;
  }
  eat() {
    if (this.bag.count > 0) {
      this.bag.candies.shift();
      this.countCandies -= 1;
      if (this.count === 0) {
        this.hasCandy = false;
      }
    }
  }
}

module.exports = TrickOrTreater;
