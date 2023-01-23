var Ingredient = require('../src/ingredient.js');
var assert = require('chai').assert;


describe('Ingredient', function() {

  it('should have a name and amount needed for recipe', function() {
    var cheese = new Ingredient({ name: 'pepper jack cheese', amount: 2 });
    var tortillas = new Ingredient({ name: 'flour tortillas', amount: 4 });

    assert.equal(cheese.name, 'pepper jack cheese');
    assert.equal(cheese.amount, 2);
    assert.equal(tortillas.name, 'flour tortillas');
    assert.equal(tortillas.amount, 4);
  });

  it('should be able to change the amount needed', function() {
    var flour = new Ingredient({ name: 'flour', amount: 2 });

    assert.equal(flour.amount, 2);

    flour.changeAmount(5);

    assert.equal(flour.amount, 5);
  });

});
