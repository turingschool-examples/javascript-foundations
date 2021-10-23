var Craft = require("../src/craft.js");
var Material = require("../src/material.js");
var assert = require('chai').assert;

describe("Craft", function() {

  it('should have a type', function() {
    var crossStitch = new Craft({ type: 'cross stitch' });
    var macrame = new Craft({ type: 'macrame' });

    assert.equal(crossStitch.name, 'cross stitch');
    assert.equal(macrame.name, 'macrame');
  })

  it('should have a list of materials', function() {
    var canvas = new Material('canvas', 15, 1, 'sheets');
    var paint = new Material('paint', 4, 3, 'bottles');
    var painting = new Craft({ type: 'painting', materials: [ canvas, paint ]});

    assert.deepEqual(painting.materials, [ canvas, paint ]);
  })

  it('should start as incomplete', function() {
    var ink = new Material('ink', 9, 2, 'bottles');
    var paper = new Material('paper', .25, 10, 'sheets');
    var drawing = new Craft({ type: 'drawing', materials: [ ink, paper ]});

    assert.equal(drawing.completed, false);
  })

  it('should be able to complete craft', function() {
    var fabric = new Material('fabric', 4, .5, 'yards');
    var thread = new Material('thread', .25, 10, 'spools');
    var embroidery = new Craft({ type: 'embroidery', materials: [ fabric, thread ]});

    var finishedEmbroidery = embroidery.completeCraft();

    assert.equal(embroidery.completed, true);
    assert.equal(finishedEmbroidery, 'All done! It looks great!')
  })

  it('should be able to calculate total cost of craft', function() {
    var canvas = new Material('canvas', 15, 1, 'sheets');
    var paint = new Material('paint', 4, 3, 'bottles');
    var painting = new Craft({ type: 'painting', materials: [ canvas, paint ]});

    var totalCost = painting.calculateProjectTotal();

    assert.equal(totalCost, 27);
  })
})
