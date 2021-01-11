var assert = require('chai').assert;
var Gear = require('../src/gear.js');

describe('Gear', function() {
  it.skip('should have a type', function() {
    var food = new Gear('food');

    assert.equal(food.type, 'food');
  })

  it.skip('should be able to have a different type', function() {
    var ammunition = new Gear('ammunition');

    assert.equal(ammunition.type, 'ammunition');
  })

  // valid types are food, ammunition, and clothes
  it.skip('should not be able to have an invalid type', function() {
    var ammunition = new Gear('ammunition');
    var food = new Gear('food');
    var clothes = new Gear('clothes');
    var invalid = new Gear('mp3 player');

    assert.equal(ammunition.type, 'ammunition');
    assert.equal(food.type, 'food');
    assert.equal(clothes.type, 'clothes');
    assert.equal(invalid.type, null);
  })

  it.skip('should be able to have a quantity', function() {
    var food = new Gear('food', 10);
    var clothes = new Gear('clothes', 12);

    assert.equal(food.quantity, 10);
    assert.equal(clothes.quantity, 12);
  })

})
