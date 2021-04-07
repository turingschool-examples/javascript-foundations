class LunchBox {
  contructor(lunchbox) {
    this.owner = lunchbox.owner;
    this.material = lunchbox.madeOf;
  }
}

module.exports = LunchBox;

// npm test lunchbox/lunchbox-test.js
