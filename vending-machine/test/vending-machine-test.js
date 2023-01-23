var VendingMachine = require("../src/vending-machine.js");
var Snack = require("../src/snack.js");
var assert = require('chai').assert;

describe("VendingMachine", function() {

  it('should have an id and broken status', function() {
    var machine1 = new VendingMachine({ id: 123, isBroken: true });
    var machine2 = new VendingMachine({ id: 456, isBroken: false });

    assert.equal(machine1.id, 123);
    assert.equal(machine2.id, 456);

    assert.equal(machine1.isBroken, true);
    assert.equal(machine2.isBroken, false);
  })

  it('should start with no snacks', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });

    assert.deepEqual(machine.snacks, []);
  })

  it('should be able to add snacks', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    machine.addSnacks(candyBar);
    assert.equal(machine.snacks.length, 1);
    assert.equal(machine.snacks[0].name, 'hersey\'s milk chocolate');
    assert.equal(machine.snacks[0].price, 0.75);

    machine.addSnacks(chips);
    assert.equal(machine.snacks.length, 2);
    assert.equal(machine.snacks[1].name, 'lay\'s sour cream and onion chips');
  })

  // Things are about to get SPICY. The following tests are much more complex than any assessment will be. Only move on if you have completed the other test suites and you'd like exposure to complex logic.
  it.skip('should not be able to add snacks with the same name more than once', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var candyBar1 = new Snack('hersey\'s milk chocolate', 0.75);
    var candyBar2 = new Snack('hersey\'s milk chocolate', 0.75);


    var firstStock = machine.addSnacks(candyBar1);
    assert.equal(machine.snacks.length, 1);

    var sencondStock = machine.addSnacks(candyBar2);
    assert.equal(machine.snacks.length, 1);
    assert.equal(sencondStock, 'Sorry, that snack is already stocked! Try adding a different snack.');
  })

  it.skip('should be able to purchase a snack by selecting snack name and paying money', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);

    candyBar.stockItems(3);
    machine.addSnacks(candyBar);

    assert.equal(machine.snacks[0].itemsInStock, 3);

    machine.purchaseSnack('hersey\'s milk chocolate', 1.00);

    assert.equal(machine.snacks[0].itemsInStock, 2);
  })

  it.skip('should be able to give change back after a customer purchases an item', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);

    candyBar.stockItems(5);
    machine.addSnacks(candyBar);

    assert.equal(machine.snacks[0].itemsInStock, 5);

    assert.equal(machine.purchaseSnack('hersey\'s milk chocolate', 1.00), 'Success! Here is $0.25 back!');
    assert.equal(machine.snacks[0].itemsInStock, 4);
  })

  it.skip('should be able to purchase the correct item, based on the name', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    candyBar.stockItems(5);
    machine.addSnacks(candyBar);

    chips.stockItems(3);
    machine.addSnacks(chips);

    assert.equal(machine.purchaseSnack('lay\'s sour cream and onion chips', 2.00), 'Success! Here is $1 back!');
    assert.equal(machine.snacks[0].itemsInStock, 5);
    assert.equal(machine.snacks[1].itemsInStock, 2);
  })

  it.skip('should not be able to purchase a snack if it is out of stock', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var candyBar = new Snack('hersey\'s milk chocolate', 0.75);

    machine.addSnacks(candyBar);
    assert.equal(machine.snacks[0].itemsInStock, 0);


    assert.equal(machine.purchaseSnack('hersey\'s milk chocolate', 2.00), 'Sorry, no items in stock. Try another item.');
    assert.equal(machine.snacks[0].itemsInStock, 0);
  })

  it.skip('should not be able to purchase a snack if payment is not enough', function() {
    var machine = new VendingMachine({ id: 123, isBroken: true });
    var chips = new Snack('lay\'s sour cream and onion chips', 1.00);

    chips.stockItems(5);
    machine.addSnacks(chips);
    assert.equal(machine.snacks[0].itemsInStock, 5);


    assert.equal(machine.purchaseSnack('lay\'s sour cream and onion chips', 0.50), 'Sorry, not enough payment. Please add more money.');
    assert.equal(machine.snacks[0].itemsInStock, 5);
  })

})
