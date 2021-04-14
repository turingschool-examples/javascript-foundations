class Bag {
  constructor(bag) {
    this.empty = true;
    this.count = 0;
    this.candies = [];
  } 
  fill(candy) {
    console.log(candy.name)
    // add candy to this.candies
      // from 
    this.candies.push(candy);
  }
}

// creating new instance of Bag called bag
// creating new instance of Candy called candy
  // adding new candyType called "Swedish Fish"

// fill bag

// parens means method

// candy is argument, which means 1 parameter

module.exports = Bag;

// npm test trick-or-treat/test/bag-test.js