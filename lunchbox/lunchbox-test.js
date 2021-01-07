var assert = require('chai').assert;
var Snack = require('./snack');
var LunchBox = require('./lunchbox');

describe('Lunchbox', function() {

  it('should have an owner', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });

    assert.equal(willsBox.owner, "Will");
    assert.equal(khalidsBox.owner, "Khalid");
  });

  it('should have a material', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });

    assert.equal(willsBox.material, "metal");
    assert.equal(khalidsBox.material, "plastic");
  });

  it('should have a shape and color', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var hannahsBox = new LunchBox({ owner: "Hannah", madeOf: "fabric", shape: "oval", color: "red and white" });

    assert.equal(willsBox.shape, "rectangular prism");
    assert.equal(hannahsBox.shape, "oval");

    assert.equal(willsBox.color, "multi");
    assert.equal(hannahsBox.color, "red and white");
  });

  it('should be empty by default', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });

    assert.deepEqual(willsBox.snacks, []);
  });

  it('should be able to acquire a snack', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var fruitSnack = new Snack("Fruit Snack");

    willsBox.acquireSnack(fruitSnack);
    assert.deepEqual(willsBox.snacks, [fruitSnack]);
  });

  it('should be able to change a snacks state', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var fruitSnack = new Snack("Fruit Snack");

    willsBox.acquireSnack(fruitSnack);
    assert.equal(fruitSnack.isInLunchBox, true)
  });

  it('should be able to acquire multiple snacks', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var fruitSnack = new Snack("Fruit Snack");
    var peaches = new Snack("Peaches");
    var natureValley = new Snack("Nature Valley Bar");

    willsBox.acquireSnack(fruitSnack);
    willsBox.acquireSnack(peaches);
    willsBox.acquireSnack(natureValley);

    assert.equal(willsBox.snacks.length, 3);
    assert.deepEqual(willsBox.snacks, [fruitSnack, peaches, natureValley]);
  });

  it('should be able to identify all healthy snacks', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var water = new Snack("Water");
    var mixedFruit = new Snack("Mixed fruit");
    var fruit = new Snack("Fruit");
    var kitKat = new Snack("Kit Kat");

    willsBox.acquireSnack(water);
    willsBox.acquireSnack(mixedFruit);
    willsBox.acquireSnack(fruit);
    willsBox.acquireSnack(kitKat);

    var healthySnacks = willsBox.findHealthySnacks();
    assert.deepEqual(healthySnacks, ["Mixed fruit", "Fruit"]);
  });

});
