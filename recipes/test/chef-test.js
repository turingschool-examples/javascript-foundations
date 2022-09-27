var Ingredient = require('../src/ingredient.js');
var Recipe = require('../src/recipe.js');
var Chef = require('../src/chef.js');
var assert = require('chai').assert;

describe('Chef', function() {
  var chefSarah, cookies, quesadillas, soup;

  beforeEach(function() {
    // All of the code in this `beforeEach` is happening for every `it` block!

    // Ingredients:
    var cheese = new Ingredient({ name: 'pepper jack cheese', amount: 2 });
    var tortillas = new Ingredient({ name: 'flour tortillas', amount: 4 });
    var chocolateChips = new Ingredient({ name: 'chocolate chips', amount: 100 });
    var flour = new Ingredient({ name: 'flour', amount: 4 });
    var sugar = new Ingredient({ name: 'sugar', amount: 3 });
    var bakingSoda = new Ingredient({ name: 'baking soda', amount: 0.5 });
    var chicken = new Ingredient({ name: 'rotisserie chicken', amount: 1 });
    var carrots = new Ingredient({ name: 'carrots', amount: 3 });
    var celery = new Ingredient({ name: 'celery', amount: 2 });
    var onion = new Ingredient({ name: 'yellow onion', amount: 1 });
    var broth = new Ingredient({ name: 'chicken broth', amount: 4 });
    var noodles = new Ingredient({ name: 'egg noodles', amount: 1 });

    // Recipes:
    cookies = new Recipe({ name: 'chocolate chip cookies', ingredients: [chocolateChips, flour, sugar, bakingSoda]});

    quesadillas = new Recipe({ name: 'quesadillas', ingredients: [cheese, tortillas]});

    soup = new Recipe({ name: 'chicken noodle soup', ingredients: [chicken, carrots, celery, onion, broth, noodles]});

    // Chef:
    chefSarah = new Chef('Sarah', [cookies, quesadillas, soup]);
  })

  it.skip('should have a name and box of recipes', function() {
    assert.equal(chefSarah.name, 'Sarah');
    assert.deepEqual(chefSarah.recipeBox, [cookies, quesadillas, soup]);
  });

  it.skip('should be able to try and rate a recipe', function() {
    chefSarah.tryRecipe('chicken noodle soup', 7);

    assert.equal(soup.attempted, true);
    assert.equal(soup.rating, 7);
  });

  it.skip('should be able to add a recipe to their box', function() {
    var strawberries = new Ingredient({ name: 'strawberries', amount: 6 });
    var bananas = new Ingredient({ name: 'bananas', amount: 1 });
    var milk = new Ingredient({ name: 'almond milk', amount: 0.5 });
    var ice = new Ingredient({ name: 'ice', amount: 6 });

    chefSarah.addRecipe('smoothie', [strawberries, bananas, milk, ice]);

    assert.equal(chefSarah.recipeBox[3].name, 'smoothie');
    assert.deepEqual(chefSarah.recipeBox[3].ingredients, [strawberries, bananas, milk, ice]);
    assert.instanceOf(chefSarah.recipeBox[3], Recipe);
  });

  it.skip('should be able to make changes to a recipe', function() {
    chefSarah.changeRecipe('quesadillas', 'pepper jack cheese', 10);

    assert.equal(chefSarah.recipeBox[1].ingredients[0].amount, 10);
  });

});
