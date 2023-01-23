var Ingredient = require('../src/ingredient.js');
var Recipe = require('../src/recipe.js');
var assert = require('chai').assert;

describe('Recipe', function() {

  it('should have a name and ingredients', function () {
    var cheese = new Ingredient({ name: 'pepper jack cheese', amount: 2 });
    var tortillas = new Ingredient({ name: 'flour tortillas', amount: 4 });
    var quesadillas = new Recipe({ name: 'quesadillas', ingredients: [cheese, tortillas]});

    assert.equal(quesadillas.name, 'quesadillas');
    assert.deepEqual(quesadillas.ingredients, [cheese, tortillas]);
    assert.equal(quesadillas.ingredients[0].name, 'pepper jack cheese');
    assert.equal(quesadillas.ingredients[1].name, 'flour tortillas');
  });

  it('should start as unattempted with no rating', function () {
    var chocolateChips = new Ingredient({ name: 'chocolate chips', amount: 100 });
    var flour = new Ingredient({ name: 'flour', amount: 4 });
    var sugar = new Ingredient({ name: 'sugar', amount: 3 });
    var bakingSoda = new Ingredient({ name: 'baking soda', amount: 0.5 });
    var cookies = new Recipe({ name: 'chocolate chip cookies', ingredients: [chocolateChips, flour, sugar, bakingSoda]});

    assert.equal(cookies.name, 'chocolate chip cookies');
    assert.deepEqual(cookies.ingredients, [chocolateChips, flour, sugar, bakingSoda]);
    assert.equal(cookies.attempted, false);
    assert.equal(cookies.rating, null);
  });

  it('should be able to rate the recipe', function () {
    var cheese = new Ingredient({ name: 'pepper jack cheese', amount: 2 });
    var tortillas = new Ingredient({ name: 'flour tortillas', amount: 4 });
    var quesadillas = new Recipe({ name: 'quesadillas', ingredients: [cheese, tortillas]});

    assert.equal(quesadillas.attempted, false);
    assert.equal(quesadillas.rating, null);

    quesadillas.rateRecipe(10);

    assert.equal(quesadillas.attempted, true);
    assert.equal(quesadillas.rating, 10);
  });

  it('should be able to make changes to the recipe', function () {
    var chocolateChips = new Ingredient({ name: 'chocolate chips', amount: 100 });
    var flour = new Ingredient({ name: 'flour', amount: 4 });
    var sugar = new Ingredient({ name: 'sugar', amount: 3 });
    var bakingSoda = new Ingredient({ name: 'baking soda', amount: 0.5 });
    var cookies = new Recipe({ name: 'chocolate chip cookies', ingredients: [chocolateChips, flour, sugar, bakingSoda]});

    cookies.changeIngredientAmount('sugar', 3.5);

    assert.equal(sugar.amount, 3.5);

    cookies.changeIngredientAmount('chocolate chips', 101);

    assert.equal(chocolateChips.amount, 101);
  });

  it.skip('should be able to generate a grocery list', function () {
    var chicken = new Ingredient({ name: 'rotisserie chicken', amount: 1 });
    var carrots = new Ingredient({ name: 'carrots', amount: 3 });
    var celery = new Ingredient({ name: 'celery', amount: 2 });
    var onion = new Ingredient({ name: 'yellow onion', amount: 1 });
    var broth = new Ingredient({ name: 'chicken broth', amount: 4 });
    var noodles = new Ingredient({ name: 'egg noodles', amount: 1 });
    var soup = new Recipe({ name: 'chicken noodle soup', ingredients: [chicken, carrots, celery, onion, broth, noodles]});

    var groceryList = soup.generateGroceryList();

    assert.equal(groceryList, 'You need: 1 rotisserie chicken, 3 carrots, 2 celery, 1 yellow onion, 4 chicken broth, 1 egg noodles,');
  });

});
