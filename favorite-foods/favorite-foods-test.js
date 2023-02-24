var { createFavoriteFood } = require('./favorite-foods');
var assert = require('chai').assert;

describe('favorite foods', function () {
   it.skip('should create a new dish with a name', function () {
      var pizza = createFavoriteFood('Pizza');

      assert.equal(pizza.name, 'Pizza');
   });

   it.skip('should be able to create a different dish', function () {
      var smoothie = createFavoriteFood('Smoothie');

      assert.equal(smoothie.name, 'Smoothie');
   });

   it.skip('should have ingredients', function () {
      var tacos = createFavoriteFood('Tacos', ['Tortilla', 'Ground Beef', 'Lettuce', 'Tomatoes', 'Sour Cream', 'Salsa']);

      assert.equal(tacos.name, 'Tacos');
      assert.deepEqual(tacos.ingredients, ['Tortilla', 'Ground Beef', 'Lettuce', 'Tomatoes', 'Sour Cream', 'Salsa']);
   });

   it.skip('should be able to have different ingredients', function () {
      var burger = createFavoriteFood('Burger', ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Ketchup', 'Mustard']);
      var sushi = createFavoriteFood('Sushi', ['Rice', 'Salmon', 'Tuna', 'Avocado', 'Cucumber', 'Soy Sauce', 'Wasabi']);

      assert.equal(burger.name, 'Burger');
      assert.deepEqual(burger.ingredients, ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Ketchup', 'Mustard']);

      assert.equal(sushi.name, 'Sushi');
      assert.deepEqual(sushi.ingredients, ['Rice', 'Salmon', 'Tuna', 'Avocado', 'Cucumber', 'Soy Sauce', 'Wasabi']);
   });

   it.skip('should be spicy or not', function () {
      var pancakes = createFavoriteFood('Pancakes', ['Flour', 'Egg', 'Milk', 'Butter', 'Maple Syrup'], false);
      var padThai = createFavoriteFood('Pad Thai', ['Rice Noodles', 'Shrimp', 'Tofu', 'Egg', 'Bean Sprouts', 'Peanuts', 'Lime'], true);

      assert.equal(pancakes.name, 'Pancakes');
      assert.deepEqual(pancakes.ingredients, ['Flour', 'Egg', 'Milk', 'Butter', 'Maple Syrup']);
      assert.equal(pancakes.isSpicy, false);

      assert.equal(padThai.name, 'Pad Thai');
      assert.deepEqual(padThai.ingredients, ['Rice Noodles', 'Shrimp', 'Tofu', 'Egg', 'Bean Sprouts', 'Peanuts', 'Lime']);
      assert.equal(pancakes.isSpicy, true);
   });

   it.skip('should be able to taste the food and comment on how spicy it is', function () {
      var dish1 = createFavoriteFood('Pho', ['Rice Noodles', 'Beef', 'Bean Sprouts', 'Basil', 'Lime', 'Sriracha'], true);
      var dish2 = createFavoriteFood('Lasagna', ['Lasagna Noodles', 'Ground Beef', 'Tomato Sauce', 'Ricotta Cheese', 'Mozzarella Cheese'], false);

      var comment1 = commentOnSpiciness(dish1);
      var comment2 = commentOnSpiciness(dish2);
  
      assert.equal(comment1, 'Wow, this Pho so is spicy!');
      assert.equal(comment2, 'Phew, this Lasagna is not very spicy.');
   });

   it.skip('should start off having ordered 0 times', function () {
      var dish = createFavoriteFood('Falafel', ['Chickpeas', 'Garlic', 'Onion', 'Cumin', 'Tahini', 'Pita Bread'], true);

      assert.equal(dish.timesOrdered, 0);
   });

   it.skip('should be able to order favorite dishes', function () {
      var dish1 = createFavoriteFood('Fish and Chips', ['Fish Fillet', 'Potatoes', 'Flour', 'Egg', 'Beer', 'Tartar Sauce'], false);
      var dish2 = createFavoriteFood('Chicken Curry', ['Chicken', 'Coconut Milk', 'Onion', 'Garlic', 'Rice'], true);
      var dish3 = createFavoriteFood('Ice Cream', ['Milk', 'Cream', 'Sugar', 'Vanilla Extract', 'Chocolate Chips'], false);

      var orderedDish1 = orderFood(dish1);
      var orderedDish2 = orderFood(dish2);
      var orderedDish3 = orderDish(dish3);

      assert.equal(orderedDish1.timesOrdered, 1);
      assert.equal(orderedDish2.timesOrdered, 1);
      assert.equal(orderedDish3.timesOrdered, 1);

      var anotherOrder = orderDish(orderedDish3);

      assert.equal(anotherOrder.timesOrdered, 1);
   })

   // spicy 🌶️
   it.skip('should be able to make a list of all ingredients needed for multiple dishes', function () {
      var pizza = createFavoriteFood('Pizza', ['Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms'], false);
      var smoothie = createFavoriteFood('Smoothie', ['Banana', 'Strawberry', 'Blueberry', 'Milk', 'Honey'], false)

      var list = createShoppingList(pizza, smoothie)

      assert.deepEqual(list, ['Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms', 'Banana', 'Strawberry', 'Blueberry', 'Milk', 'Honey'])
   });
});