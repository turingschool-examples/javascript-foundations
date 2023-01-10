class TrickOrTreater{
  constructor(costume, bag) {
    // Are the arguments being passed through the class of costume and bag?
    this.dressedUpAs = costume.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  }
  putCandyInBag(candy) {

    this.hasCandy = true;
    this.bag.fill(candy);
    this.countCandies++
  }
  eat() {
    this.countCandies--;
    this.bag.candies.shift();
  }
}

module.exports = TrickOrTreater