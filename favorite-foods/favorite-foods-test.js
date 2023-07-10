var { createFavoriteFood } = require('./favorite-foods');
var assert = require('chai').assert;

describe('favorite foods', function () {
   it('should create a new dish with a name', function () {
      var pizza = createFavoriteFood({ dish: 'Pizza' });

      assert.equal(pizza.name, 'Pizza');
   });

   it.skip('should be able to create a different dish', function () {
      var smoothie = createFavoriteFood({ dish: 'Smoothie' });

      assert.equal(smoothie.name, 'Smoothie');
   });

   it.skip('should have ingredients', function () {
      var tacos = createFavoriteFood({ dish: 'Tacos', ingredients: ['Tortilla', 'Ground Beef', 'Lettuce', 'Tomatoes', 'Sour Cream', 'Salsa'] });

      assert.equal(tacos.name, 'Tacos');
      assert.deepEqual(tacos.ingredients, ['Tortilla', 'Ground Beef', 'Lettuce', 'Tomatoes', 'Sour Cream', 'Salsa']);
   });

   it.skip('should be able to have different ingredients', function () {
      var burger = createFavoriteFood({ dish: 'Burger', ingredients: ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Ketchup', 'Mustard'] });
      var sushi = createFavoriteFood({ dish: 'Sushi', ingredients: ['Rice', 'Salmon', 'Tuna', 'Avocado', 'Cucumber', 'Soy Sauce', 'Wasabi'] });

      assert.equal(burger.name, 'Burger');
      assert.deepEqual(burger.ingredients, ['Bun', 'Beef Patty', 'Lettuce', 'Tomato', 'Cheese', 'Ketchup', 'Mustard']);

      assert.equal(sushi.name, 'Sushi');
      assert.deepEqual(sushi.ingredients, ['Rice', 'Salmon', 'Tuna', 'Avocado', 'Cucumber', 'Soy Sauce', 'Wasabi']);
   });

   it.skip('should be spicy or not', function () {
      var pancakes = createFavoriteFood({ dish: 'Pancakes', ingredients: ['Flour', 'Egg', 'Milk', 'Butter', 'Maple Syrup'], isSpicy: false });
      var padThai = createFavoriteFood({ dish: 'Pad Thai', ingredients: ['Rice Noodles', 'Shrimp', 'Tofu', 'Egg', 'Bean Sprouts', 'Peanuts', 'Lime'], isSpicy: true });

      assert.equal(pancakes.name, 'Pancakes');
      assert.deepEqual(pancakes.ingredients, ['Flour', 'Egg', 'Milk', 'Butter', 'Maple Syrup']);
      assert.equal(pancakes.isSpicy, false);

      assert.equal(padThai.name, 'Pad Thai');
      assert.deepEqual(padThai.ingredients, ['Rice Noodles', 'Shrimp', 'Tofu', 'Egg', 'Bean Sprouts', 'Peanuts', 'Lime']);
      assert.equal(padThai.isSpicy, true);
   });

   it.skip('should be able to taste the food and comment on how spicy it is', function () {
      var dish1 = createFavoriteFood({ dish: 'Pho', ingredients: ['Rice Noodles', 'Beef', 'Bean Sprouts', 'Basil', 'Lime', 'Sriracha'], isSpicy: true });
      var dish2 = createFavoriteFood({ dish: 'Lasagna', ingredients: ['Lasagna Noodles', 'Ground Beef', 'Tomato Sauce', 'Ricotta Cheese', 'Mozzarella Cheese'], isSpicy: false });

      var comment1 = commentOnSpiciness(dish1);
      var comment2 = commentOnSpiciness(dish2);
  
      assert.equal(comment1, 'Wow, this Pho is so spicy!');
      assert.equal(comment2, 'Phew, this Lasagna is not very spicy.');
   });

   it.skip('should start off having ordered 0 times', function () {
      var dish = createFavoriteFood('Falafel', ['Chickpeas', 'Garlic', 'Onion', 'Cumin', 'Tahini', 'Pita Bread'], true);

      assert.equal(dish.timesOrdered, 0);
   });

   it.skip('should be able to order dishes', function () {
      var dish1 = createFavoriteFood({ dish: 'Fish and Chips', ingredients: ['Fish Fillet', 'Potatoes', 'Flour', 'Egg', 'Beer', 'Tartar Sauce'], isSpicy: false });
      var dish2 = createFavoriteFood({ dish: 'Chicken Curry', ingredients: ['Chicken', 'Coconut Milk', 'Onion', 'Garlic', 'Rice'], isSpicy: true });
      var dish3 = createFavoriteFood({ dish: 'Ice Cream', ingredients: ['Milk', 'Cream', 'Sugar', 'Vanilla Extract', 'Chocolate Chips'], isSpicy: false });

      var orderedDish1 = orderFood(dish1);
      var orderedDish2 = orderFood(dish2);
      var orderedDish3 = orderFood(dish3);

      assert.equal(orderedDish1.timesOrdered, 1);
      assert.equal(orderedDish2.timesOrdered, 1);
      assert.equal(orderedDish3.timesOrdered, 1);

      var anotherOrder = orderFood(orderedDish3);

      assert.equal(anotherOrder.timesOrdered, 2);
   })

   // spicy 🌶️
   it.skip('should be able to make a list of all ingredients needed for multiple dishes', function () {
      var pizza = createFavoriteFood({ dish: 'Pizza', ingredients: ['Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms'], isSpicy: false });
      var smoothie = createFavoriteFood({ dish: 'Smoothie', ingredients: ['Banana', 'Strawberry', 'Blueberry', 'Milk', 'Honey'], isSpicy: false })

      var list = createShoppingList([pizza, smoothie])

      assert.deepEqual(list, ['Tomato Sauce', 'Cheese', 'Pepperoni', 'Mushrooms', 'Banana', 'Strawberry', 'Blueberry', 'Milk', 'Honey'])
   });
});