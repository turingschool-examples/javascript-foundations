var Material = require("../src/material.js");
var assert = require('chai').assert;

describe("Material", function() {

  it('should have a name, price per unit, amount, and units', function() {
    var thread = new Material('thread', .25, 8, 'spools');
    var fabric = new Material('fabric', 4, 3, 'yards');

    assert.equal(thread.name, 'thread');
    assert.equal(thread.price, .25);
    assert.equal(thread.amount, 8);
    assert.equal(thread.units, 'spools');

    assert.equal(fabric.name, 'fabric');
    assert.equal(fabric.price, 4);
    assert.equal(fabric.amount, 3);
    assert.equal(fabric.units, 'yards');
  })

  it('should be able to use material', function() {
    var fabric = new Material('fabric', 4, 3, 'yards');

    assert.equal(fabric.amount, 3);

    var usedFabric = fabric.useMaterial(2);

    assert.equal(fabric.amount, 1);
    assert.equal(usedFabric, `You now have 1 yards of fabric left.`)
  })

  it('should be able to use a different material', function() {
    var thread = new Material('thread', .25, 8, 'spools');

    assert.equal(thread.amount, 8);

    var usedThread = thread.useMaterial(6);

    assert.equal(thread.amount, 2);
    assert.equal(usedThread, `You now have 2 spools of thread left.`)
  })

  it('should not be able to use more material than available', function() {
    var paint = new Material('acrylic paint', 5, 7, 'bottles');
    var canvas = new Material('canvas', 15, 2, 'sheets');

    assert.equal(paint.useMaterial(12), 'You don\'t have enough acrylic paint! Try using 7 bottles or less.');
    assert.equal(canvas.useMaterial(4), 'You don\'t have enough canvas! Try using 2 sheets or less.');
  })

  it('should be able to calculate total cost of materials', function() {
    var paint = new Material('acrylic paint', 5, 7, 'bottles');
    var canvas = new Material('canvas', 15, 2, 'sheets');

    assert.equal(paint.calculateMaterialCost(), 35);
    assert.equal(canvas.calculateMaterialCost(), 30);
  })

});
