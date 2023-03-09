const { describe } = require("mocha");
var {createTape, reset, createCollection} =  require("./tape")
var assert = require('chai').assert;

describe("Tape", function() {

  it("should create tape", function() {
    var genericTape = createTape("",false)
   
    assert.deepEqual(genericTape, {title:"", readyToPlay: false})
  })

  it("should have a title", function(){
    var littleMermaid = createTape("The Little Mermaid", false)
    var landBeforeTime = createTape("The Land Before Time", false)

    assert.equal(littleMermaid.title,"The Little Mermaid")
    assert.equal(landBeforeTime.title,"The Land Before Time")
  })

  it("should have a readyToPlay status by default", function() {
    var littleMermaid = createTape("The Little Mermaid", false);
    var landBeforeTime = createTape("The Land Before Time", false);

    assert.equal(littleMermaid.readyToPlay, false);
    assert.equal(landBeforeTime.readyToPlay, false);
  })

  it("should be able to be readyToPlay", function() {
    var anastasia = createTape("Anastasia", false);
    var resetAnastasia = reset(anastasia);
    var vitaminC = createTape("Vitamin C",true)
    var resetVitaminC = reset(vitaminC)
  
    assert.equal(resetAnastasia.readyToPlay, true);
    assert.equal(resetVitaminC.readyToPlay, true); 
  })

  it("should not reset if it has already been reset", function() {
    var vitaminC = createTape("Vitamin C",true)
    var resetVitaminC = reset(vitaminC)

    assert.equal(resetVitaminC.readyToPlay, true);
  })
})

describe("Collection", function(){

  it("should add tape to collection", function(){
    var vitaminC = createTape("Vitamin C",true)
    var anastasia = createTape("Anastasia", false);
    var collectionOne = createCollection(vitaminC)
    var collectionTwo = createCollection(anastasia)
    assert(collectionOne, [{title:"vitamin C", readyToPlay:true}])
    assert(collectionTwo, [{title:"Anastasia", readyToPlay:false}])
  })

  it("should print out all the tape title that is in the collection", function(){
    var emptyCollection = createCollection([])
    var theEraser = createTape("The Eraser",true)
    var kidA = createTape("kidA", false);
    var okComputer = createTape("okComputer", false)
    var inRainbow = createTape("inRainbow", false)
    var tapes = [theEraser, kidA, okComputer, inRainbow]
    var radioHead = createCollection(tapes)
   

    assert.deepEqual(radioHead[0], "The Eraser")
    assert.deepEqual(radioHead[3], "inRainbow")
    assert.deepEqual(emptyCollection,"Your collection is empty")

  
  })
})






