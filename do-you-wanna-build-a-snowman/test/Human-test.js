var assert = require("chai").assert;
var Human = require("../src/Human");
var Snowman = require("../src/Snowman");

describe("Human", function () {
  it.skip('should have a name', function () {
    var human = new Human('Kayla');

    assert.equal(human.name, "Kayla");
  });

  it.skip('should want to build a snowman', function () {
    var human = new Human('Hannah');

    assert.equal(human.wantsToBuildASnowman, true);
  });

  it.skip('should have no coal, snowballs, carrot or buttons to start', function () {
    var human = new Human('Scott');
    var materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    };

    assert.deepEqual(human.materials, materials);
  });

  it.skip('should be able to gather materials', function() {
    var human = new Human('Pam');

    human.gatherMaterials('carrots', 1);
    human.gatherMaterials('buttons', 5);

    assert.deepEqual(human.materials.carrots, 1);
    assert.deepEqual(human.materials.buttons, 5);
  });

  it.skip('should be able to add to existing materials', function () {
    var human = new Human('Jeff');

    human.gatherMaterials('coal', 1);
    human.gatherMaterials('carrots', 1);
    human.gatherMaterials('coal', 3);

    assert.deepEqual(human.materials.coal, 4);
    assert.deepEqual(human.materials.carrots, 1);
  });

  it.skip('should be able to use gathered materials to build a snowman', function() {
    var human = new Human('Leta');

    human.gatherMaterials('coal', 4);
    human.gatherMaterials('carrots', 1);
    human.gatherMaterials('snowballs', 3);

    var snowman = human.buildASnowman();

    assert.instanceOf(snowman, Snowman);
    assert.equal(snowman.coal, 4);
    assert.equal(snowman.carrots, 1);
    assert.equal(snowman.snowballs, 3);
  });

  it.skip('should be able to put a magic hat on the snowman to make it come alive', function() {
    // HINT: You will need to call one of your snowman methods
    var human = new Human('scott');

    human.gatherMaterials('coal', 4);
    human.gatherMaterials('buttons', 5);
    human.gatherMaterials('carrots', 1);
    human.gatherMaterials('snowballs', 5);

    var snowman = human.buildASnowman();
    
    snowman.canWearMagicHat();
    
    human.placeMagicHat();

    assert.equal(snowman.magicHat, true);
    assert.equal(human.placeMagicHat(), 'Woah, this snowman is coming to life!')
  });

  it.skip('should be able to fail at putting a magic hat on the snowman', function () {
    var human = new Human('scott');

    human.gatherMaterials('coal', 0);
    human.gatherMaterials('buttons', 0);
    human.gatherMaterials('carrots', 1);
    human.gatherMaterials('snowballs', 5);

    var snowman = human.buildASnowman();

    snowman.canWearMagicHat();

    assert.equal(snowman.magicHat, false);

    assert.equal(human.placeMagicHat(), 'I guess I didn\'t build it correctly.')
  });
});