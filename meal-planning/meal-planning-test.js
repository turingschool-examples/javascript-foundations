var { createMeal, addDish, calculateCalories } = require('./mealPlanning.js');
var assert = require('chai').assert;

describe("Meal Planning", function () {
  it("should create a meal with a dynamic type and calorie goal", function() {
    var easyBreakfast = createMeal('breakfast', 700);
    var simpleLunch = createMeal("lunch", 400);

    assert.equal(easyBreakfast.type, 'breakfast');
    assert.equal(simpleLunch.type, "lunch");
    assert.equal(easyBreakfast.calorieGoal, 700);
    assert.equal(simpleLunch.calorieGoal, 400);
  });

  it("should default to having no dishes", function() {
    var breakfast = createMeal('breakfast', 700);
    assert.deepEqual(breakfast.dishes, []);
  });

  it("should add a dish to a meal", function() {
    var meal = createMeal("dinner", 500);
    var mealWithSpaghetti = addDish(meal, { name: "spaghetti", calories: 300 });

    assert.deepEqual(mealWithSpaghetti.dishes, [{ name: "spaghetti", calories: 300 }]);
  });

  it("should add another dish to a meal", function() {
    var meal = createMeal("dinner", 600);
    var mealWithSpaghetti = addDish(meal, { name: "spaghetti", calories: 300 });
    var mealWithBread = addDish(mealWithSpaghetti, { name: "garlic bread", calories: 200 });

    assert.deepEqual(mealWithBread.dishes, [{ name: "spaghetti", calories: 300 }, { name: "garlic bread", calories: 200 }]);
  });

  it("should only add a dish if it meets or is below the meal's calorie goal", function() {
    var meal = createMeal("dinner", 700);
    var mealWithBread = addDish(meal, { name: "garlic bread", calories: 200 });

    assert.equal(mealWithBread.dishes.length, 1);
    assert.deepEqual(mealWithBread.dishes[0], { name: "garlic bread", calories: 200 });
    
    var meal2 = createMeal("lunch", 400);
    var mealWithPizza = addDish(meal2, { name: "pizza", calories: 600, });

    assert.equal(mealWithPizza.dishes.length, 0);
  });

  it("should update the calorieGoal when dishes are added", function() {
    var meal = createMeal("breakfast", 400);
    var mealWithEggs = addDish(meal, { name: "eggs", calories: 200 });  

    assert.equal(mealWithEggs.calorieGoal, 200);

    var mealWithPancake = addDish(mealWithEggs, { name: "pancake", calories: 180 });

    assert.equal(mealWithPancake.calorieGoal, 20);
  });

  it("should calculate the total meal calories", function() {
    var brunch = createMeal("brunch", 700);
    var brunchWithOmelette = addDish(brunch, { name: "omelette", calories: 450 });
    var brunchWithFruit = addDish(brunchWithOmelette, { name: "fruit", calories: 100 });
    
    var totalCalorieCount = calculateCalories(brunchWithFruit);

    assert.equal(totalCalorieCount, "brunch has a total of 550 calories.");
  });

  it("should calculate a different meal's calories", function() {
    var dinner = createMeal("dinner", 1200);
    var dinnerWithSoup = addDish(dinner, { name: "soup", calories: 250 });
    var dinnerWithBeans = addDish(dinnerWithSoup, { name: "green beans", calories: 200 });
    var dinnerWithBrownie = addDish(dinnerWithBeans, { name: "brownie", calories: 400 });

    var totalCalorieCount = calculateCalories(dinnerWithBrownie);

    assert.equal(totalCalorieCount, "dinner has a total of 850 calories.");
  });
});