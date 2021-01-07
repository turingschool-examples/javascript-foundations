var assert = require('chai').assert;
var Snack = require('./snack');
var LunchBox = require('./lunchbox');

describe('Lunchbox', function() {

  it.skip('should have an owner', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });

    assert.equal(willsBox.owner, "Will");
    assert.equal(khalidsBox.owner, "Khalid");
  });

  it.skip('should have a material', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });

    assert.equal(willsBox.material, "metal");
    assert.equal(khalidsBox.material, "plastic");
  });

  it.skip('should have a shape', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var hannahsBox = new LunchBox({ owner: "Hannah", madeOf: "fabric", shape: "oval", color: "red and white" });

    assert.equal(willsBox.shape, "rectangular prism");
    assert.equal(hannahsBox.shape, "oval");
  });

  it.skip('should have a color', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });

    assert.equal(willsBox.color, "multi");
    assert.equal(khalidsBox.color, "clear");
  });

  it.skip('should have a handle by default', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });

    assert.equal(willsBox.handle, true);
  });

  it.skip('should be empty by default', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });

    assert.deepEqual(willsBox.snacks, []);
  });

  it.skip('should be able to acquire a snack', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var fruitSnack = new Snack("Fruit Snack");

    willsBox.acquireSnack(fruitSnack);
    assert.deepEqual(willsBox.snacks, [fruitSnack]);
  });

  it.skip('should be able to change a snacks state', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var fruitSnack = new Snack("Fruit Snack");

    willsBox.acquireSnack(fruitSnack);
    assert.equal(fruitSnack.isInLunchBox, true)
  });

  it.skip('should be able to acquire multiple snacks', function() {
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

  it.skip('should be able to identify all healthy snacks', function() {
    var willsBox = new LunchBox({ owner: "Will", madeOf: "metal", shape: "rectangular prism", color: "multi" });
    var water = new Snack("Water");
    var fruitSnack = new Snack("Fruit Snack");
    var fruit = new Snack("Fruit");
    var kitKat = new Snack("Kit Kat");

    willsBox.acquireSnack(water);
    willsBox.acquireSnack(fruitSnack);
    willsBox.acquireSnack(fruit);
    willsBox.acquireSnack(kitKat);

    var healthySnacks = willsBox.findHealthySnacks();
    assert.deepEqual(healthySnacks, [fruitSnack, fruit]);
  });

  it.skip('should still be able to identify all healthy snacks', function() {
    var khalidsBox = new LunchBox({ owner: "Khalid", madeOf: "plastic", shape: "rectangular prism", color: "clear" });
    var pretzels = new Snack("Pretzels");
    var fruitSnack = new Snack("Fruit Snack");
    var bread = new Snack("Bread");
    var sourPatchKids = new Snack("Sour Patch Kids");

    khalidsBox.acquireSnack(pretzels);
    khalidsBox.acquireSnack(fruitSnack);
    khalidsBox.acquireSnack(bread);
    khalidsBox.acquireSnack(sourPatchKids);

    var healthySnacks = khalidsBox.findHealthySnacks();
    assert.deepEqual(healthySnacks, [fruitSnack]);
  });

});
