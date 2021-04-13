var Snack = require("../src/snack.js");
var assert = require('chai').assert;

describe("Snack", function() {

  it('should have a name and price per unit', function() {
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    assert.equal(candyBar.name, 'hersey\'s milk chocolate');
    assert.equal(candyBar.price, 0.75);

    assert.equal(chips.name, 'lay\'s sour cream and onion chips');
    assert.equal(chips.price, 1.00);
  })

  it('should not start with any items in stock', function() {
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    assert.equal(candyBar.itemsInStock, 0);
    assert.equal(chips.itemsInStock, 0);
  })

  it('should be able to add to stock', function() {
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    candyBar.stockItems(5);
    chips.stockItems(3);

    assert.equal(candyBar.itemsInStock, 5);
    assert.equal(chips.itemsInStock, 3);
  })

  it('should be able to keep adding to stock', function() {
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    candyBar.stockItems(5);
    chips.stockItems(3);
    candyBar.stockItems(6);
    chips.stockItems(12);

    assert.equal(candyBar.itemsInStock, 11);
    assert.equal(chips.itemsInStock, 15);
  })

  it('should be able to remove one item at a time from stock', function() {
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    candyBar.stockItems(7);
    chips.stockItems(3);

    assert.equal(candyBar.removeItem(), 'Item taken! There are now 6 items left.');
    assert.equal(candyBar.itemsInStock, 6);

    assert.equal(chips.removeItem(), 'Item taken! There are now 2 items left.');
    assert.equal(chips.itemsInStock, 2);
  })

  it('should not be able to remove anything from stock if none left', function() {
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    candyBar.stockItems(2);

    assert.equal(candyBar.itemsInStock, 2);

    candyBar.removeItem();

    assert.equal(candyBar.itemsInStock, 1);

    candyBar.removeItem();

    assert.equal(candyBar.itemsInStock, 0);

    candyBar.removeItem();

    assert.equal(candyBar.itemsInStock, 0);
    assert.equal(candyBar.removeItem(), 'Sorry, no hersey\'s milk chocolate left in stock!')

    assert.equal(chips.removeItem(), 'Sorry, no lay\'s sour cream and onion chips left in stock!')
  })

});
