var assert = require("chai").assert;
var Skier = require("../src/Skier");

describe("Skier", function () {
  it('should instantiate a skier object', function () {
    var skier = new Skier();

    assert.instanceOf(skier, Skier);
  });

  it('should have a name', function () {
    var skier = new Skier('Hannah');

    assert.equal(skier.name, 'Hannah');
  });

  it('should be able to have a lift ticket', function() {
    var skier = new Skier('Scott', true);

    assert.equal(skier.hasLiftTicket, true);
  });

  it('should start out as a beginner', function () {
    var skier = new Skier('Kayla', true);

    assert.equal(skier.skillLevel, 1);
  });

  it('should decide its next slope to be beginner level', function () {
    var skier = new Skier('Kayla', true);

    assert.equal(skier.nextSlope, 'green circle');
  });

  it('should increase skill level with lessons', function () {
    var skier = new Skier('Pam', true);

    skier.takeLesson();
    skier.takeLesson();

    assert.equal(skier.skillLevel, 3);
  });

  it('should choose an intermediate level slope after 2 lessons', function () {
    var skier = new Skier('Hannah', true);

    skier.takeLesson();
    skier.takeLesson();

    skier.pickSlope();

    assert.equal(skier.skillLevel, 3);
    assert.equal(skier.nextSlope, 'blue square');
  });

  it('should choose an expert level slope after 4 lessons', function () {
    var skier = new Skier('Hannah', true);

    skier.takeLesson();
    skier.takeLesson();
    skier.takeLesson();
    skier.takeLesson();

    skier.pickSlope();

    assert.equal(skier.skillLevel, 5);
    assert.equal(skier.nextSlope, 'black diamond');
  });
});