var assert = require('chai').assert;
var {createYourPegasus, makeAnEntrance} = require('../exercises/pegasus');

describe('Pegasus', function() {

  it('should be a function', function() {
    assert.isFunction(createYourPegasus)
  });

  it('should be an object', function() {
    var samplePegasus = createYourPegasus()

    assert.typeOf(samplePegasus, "object")
  });

  it('should have any name you give it', function() {
    var samplePegasus = createYourPegasus("Carlsbad Caveman")

    assert.equal(samplePegasus.name, "Carlsbad Caveman")
  });

  it('should have a color and a pattern', function() {
    var samplePegasusColor = "mustard yellow"
    var samplePegasusPattern = "zebra stripes"
    var samplePegasusName = "Spin That DJ"
    var newSamplePegasus = createYourPegasus(samplePegasusName, samplePegasusColor, samplePegasusPattern)

    assert.equal(newSamplePegasus.color, "mustard yellow")
    assert.equal(newSamplePegasus.pattern, "zebra stripes")
  });

  it('should be able to have a different color and pattern', function() {
    var newSamplePegasusColor = "cerulean"
    var newSamplePegasusPattern = "leapord print"
    var newSamplePegasusName = "Not Too Cool For School"
    var newSamplePegasus = createYourPegasus(newSamplePegasusName, newSamplePegasusColor, newSamplePegasusPattern)

    assert.equal(newSamplePegasus.color, newSamplePegasusColor)
    assert.equal(newSamplePegasus.pattern, newSamplePegasusPattern)
  });

  it('should know how to fly by default', function() {
    var newSamplePegasusColor = "burgundy"
    var newSamplePegasusPattern = "snow cap"
    var newSamplePegasusName = "I'm Medusa's Baby"
    var newSamplePegasus = { 
      name: newSamplePegasusName, 
      color: newSamplePegasusColor, 
      pattern: newSamplePegasusPattern,
      canFly: true
    }

    assert.deepEqual(newSamplePegasus, createYourPegasus(newSamplePegasusName, newSamplePegasusColor, newSamplePegasusPattern))
  });

  it('should be able to make an entrance', function() {
    var newSamplePegasusColor = "safety orange"
    var newSamplePegasusPattern = "cape"
    var newSamplePegasusName = "Who Do You Think You Are? I Am!"
    var newSamplePegasus = createYourPegasus(newSamplePegasusName, newSamplePegasusColor, newSamplePegasusPattern)

    assert.equal(newSamplePegasus.name, "Who Do You Think You Are? I Am!")
    assert.equal(newSamplePegasus.color, "safety orange")
    assert.equal(newSamplePegasus.pattern, "cape")

    var greeting = "Hi"

    assert.equal(makeAnEntrance(greeting, newSamplePegasus), "Hi! My name is Who Do You Think You Are? I Am!, and I am a safety orange, cape coat Pegasus!") 
  });
});