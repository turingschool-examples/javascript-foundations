var assert = require("chai").assert;
var Snowman = require("../src/Snowman");

describe("Snowman", function () {
  it('should be able to have a carrot nose, snowballs for its body, coal for eyes and buttons for its mouth', function () {
    var snowmanDetails1 = {
      carrots: 1,
      coal: 2,
      buttons: 5,
      snowballs: 2
    }

    var snowmanDetails2 = {
      carrots: 1,
      coal: 2,
      buttons: 6,
      snowballs: 3
    }

    var snowman1 = new Snowman(snowmanDetails1);
    var snowman2 = new Snowman(snowmanDetails2);

    assert.equal(snowman1.carrots, 1);
    assert.equal(snowman1.coal, 2);
    assert.equal(snowman1.buttons, 5);
    assert.equal(snowman1.snowballs, 2);

    assert.equal(snowman2.carrots, 1);
    assert.equal(snowman2.coal, 2);
    assert.equal(snowman2.buttons, 6);
    assert.equal(snowman2.snowballs, 3);
  });

  it('should start out without a magic hat', function() {
    var snowmanDetails = {
      carrots: 1,
      coal: 2,
      buttons: 6,
      snowballs: 3
    }

    var snowman = new Snowman(snowmanDetails);

    assert.equal(snowman.magicHat, false);
  });

  it('should be able to wear a magic hat', function() {
    var snowmanDetails = {
      carrots: 1,
      coal: 2,
      buttons: 6,
      snowballs: 3
    }

    var snowman = new Snowman(snowmanDetails);
    snowman.canWearMagicHat();

    assert.equal(snowman.magicHat, true);
  });

  it('should fail to wear a magic hat if it has less than 2 coal eyes', function() {
    var snowmanDetails = {
      carrots: 1,
      coal: 1,
      buttons: 7,
      snowballs: 3
    }

    var snowman = new Snowman(snowmanDetails);
    snowman.canWearMagicHat();

    assert.deepEqual(snowman.magicHat, false);
  });

  it('should fail to wear a magic hat if it has less than 5 button teeth', function () {
    var snowmanDetails = {
      carrots: 1,
      coal: 2,
      buttons: 1,
      snowballs: 3
    }

    var snowman = new Snowman(snowmanDetails);
    snowman.canWearMagicHat();

    assert.deepEqual(snowman.magicHat, false);
  });

  it('should fail to wear a magic hat if it has less than 1 carrot nose', function () {
    var snowmanDetails = {
      carrots: 0,
      coal: 2,
      buttons: 5,
      snowballs: 3
    }

    var snowman = new Snowman(snowmanDetails);
    snowman.canWearMagicHat();

    assert.deepEqual(snowman.magicHat, false);
  });

  it('should fail to wear a magic hat if it has less than 2 snowballs for its body', function () {
    var snowmanDetails = {
      carrots: 1,
      coal: 2,
      buttons: 5,
      snowballs: 1
    }

    var snowman = new Snowman(snowmanDetails);
    snowman.canWearMagicHat();

    assert.deepEqual(snowman.magicHat, false);
  });
});
