const { describe } = require("mocha");
var {createTape, reset, createCollection, previewCollection} =  require("./vhs")
var assert = require('chai').assert;

describe("Tape", function() {

  it.skip("should create tape", function() {
    var genericTape = createTape("",false)
   
    assert.deepEqual(genericTape, {title:"", readyToPlay: false})
  })

  it.skip("should have a title", function(){
    var littleMermaid = createTape("The Little Mermaid", false)
    var landBeforeTime = createTape("The Land Before Time", false)

    assert.equal(littleMermaid.title,"The Little Mermaid")
    assert.equal(landBeforeTime.title,"The Land Before Time")
  })

  it.skip("should have a readyToPlay status by default", function() {
    var littleMermaid = createTape("The Little Mermaid");
    var landBeforeTime = createTape("The Land Before Time", false);

    assert.equal(littleMermaid.readyToPlay, false);
    assert.equal(landBeforeTime.readyToPlay, false);
  })

  it.skip("should be able to be readyToPlay", function() {
    var fargo = createTape("Fargo", false);
    var resetFargo = reset(fargo);
    var betterOffDead = createTape("Better Off Dead",true)
    var resetBetterOffDead = reset(betterOffDead)
  
    assert.equal(resetFargo.readyToPlay, true);
    assert.equal(resetBetterOffDead.readyToPlay, true); 
  })

  it.skip("should not reset if it has already been reset", function() {
    var betterOffDead = createTape("Better Off Dead",true)
    var resetBetterOffDead = reset(betterOffDead)

    assert.equal(resetBetterOffDead.readyToPlay, true);
  })
})

describe("Collection", function(){

  it.skip("should add tapes to collection", function(){
    var fargo = createTape("Fargo", true)
    var betterOffDead = createTape("Better Off Dead", false);
    var landBeforeTime = createTape("The Land Before Time")
   
    var collection = createCollection(fargo, betterOffDead, landBeforeTime)
    assert.deepEqual(collection, [{title:"Fargo", readyToPlay: true}, {title:"Better Off Dead", readyToPlay: false}, {title:"The Land Before Time", readyToPlay: false}])
  })

  it.skip('should be able to handle an empty collection', function() {
    var collection = createCollection()

    assert.equal(collection, 'Your collection is empty.')
  })

  it.skip("should print out all the tape titles that are in the collection", function(){
    var homeAlone = createTape("Home Alone", false);
    var flubber = createTape("Flubber", false)
    var neverEndingStory = createTape("The Never Ending Story", false)
    var collection = createCollection(homeAlone, flubber, neverEndingStory)
    var preview = previewCollection(collection)
   
    assert.deepEqual(preview[0], "Home Alone")
    assert.deepEqual(preview[2], "The Never Ending Story")
  })
})






