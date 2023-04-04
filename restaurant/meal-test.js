var assert = require('chai').assert;
var {createMeal, getMade, createOrder, cookMeal, listOrders, announceMeal} = require('./meal');

describe('Meal', function() {

  it('should have a name, special requests, and table number', function() {
    var shrimpTacos = createMeal('Shrimp Tacos', ["no cheese"], 14);
    var appetizer = createMeal('Jicama & Cucumber Salad', [], 12);

    assert.equal(shrimpTacos.name, 'Shrimp Tacos');
    assert.deepEqual(shrimpTacos.specialRequests, ["no cheese"]);
    assert.equal(shrimpTacos.tableNumber, 14);

    assert.equal(appetizer.name, 'Jicama & Cucumber Salad');
    assert.deepEqual(appetizer.specialRequests, []);
    assert.equal(appetizer.tableNumber, 12);
  });
  it('should default to not complete', function() {
    var appetizer = createMeal('Chips & Salsa', [], 14);

    assert.equal(appetizer.complete, false);
  });

  it('should be able to be completed', function() {
    var appetizer = createMeal('Chips & Queso', [], 4);
    var pizza = createMeal('Margarita', [], 5)
    var shrimpTacos = createMeal('Shrimp Tacos', ["no cheese"], 14);
    var completeAppetizer = getMade(appetizer);
    var completeTacos = getMade(shrimpTacos);
   

    assert.equal(completeAppetizer.complete, true)
    assert.equal(completeTacos.complete, true);
    assert.equal(pizza.complete, false);
  });
  it('should be able to return a message if the order is completed', function(){
    var appetizer = createMeal('Chips & Queso', [], 4);
    var pizza = createMeal('Margarita pizza', [], 5)
    var completeAppetizer = getMade(appetizer);
    var messageOne = announceMeal(appetizer)
    var messageTwo = announceMeal(pizza)
    assert.equal(messageOne, 'Order up - Chips & Queso for table 4!');
    assert.equal(messageTwo, 'This Margarita pizza is not completed yet');
  })
})

describe('Order', function() {

  it('should have a table number and associated meals', function() {
    var meal1 = createMeal('Shrimp Tacos', ['no cheese'], 14);
    var meal2 = createMeal('Jicama & Cucumber', [], 14);
    var meal3 = createMeal('The Situation Gordita', ['cilantro', 'onion'], 14);
    var meals = [meal1, meal2, meal3];
    var order = createOrder({ tableNumber: 14, meals: meals });
    assert.equal(order.tableNumber, 14);
    assert.equal(order.meals, meals);
  });

  it('should have no complete meals by default', function() {
    var meal1 = createMeal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = createMeal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = createMeal('The Situation Gordita', ["cilantro", "onion"], 3);
    var meals = [meal1, meal2, meal3];
    var order = createOrder({ tableNumber: 3, meals: meals });

    assert.deepEqual(order.completedMeals, []);
  });

  it('should be able to cook meals', function() {
    var meal1 = createMeal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = createMeal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = createMeal('The Situation Gordita', ['cilantro', 'onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = createOrder({ tableNumber: 3, meals: meals });

    var updateOrder = cookMeal(order,meal1);
    assert.deepEqual(updateOrder.completedMeals.length, 1);
    assert.deepEqual(updateOrder.completedMeals[0], 'Pico de Gallo Quesadillas');
    

    var updatedOrder2 = cookMeal(order, meal2);
    assert.deepEqual(updatedOrder2.completedMeals.length, 2);
    assert.deepEqual(updatedOrder2.completedMeals[1], 'Sombra Shroom Griddled Tacos');
  });

  it('should only cook meals for the correct table', function() {
    var meal1 = createMeal('Pico de Gallo Quesadillas', [], 3);
    var meal2 = createMeal('Sombra Shroom Griddled Tacos', ['crema'], 3);
    var meal3 = createMeal('The Situation Gordita', ['cilantro', 'onion'], 5);
    var meals = [meal1, meal2, meal3];
    var order = createOrder({ tableNumber: 3, meals: meals });

    var updatedOrder3 = cookMeal(order,meal3);
    assert.deepEqual(updatedOrder3.completedMeals.length, 0);
  });

  it('should be able to list all special requests', function() {
    var meal1 = createMeal('Pico de Gallo Quesadillas', ['to go'], 3);
    var meal2 = createMeal('Sombra Shroom Griddled Tacos', ['crema on the side'], 3);
    var meal3 = createMeal('The Situation Gordita', ['add cilantro', 'no onion'], 3);
    var meals = [meal1, meal2, meal3];
    var order = createOrder({ tableNumber: 'Table 3', meals: meals });
    var orderNames = listOrders(order)
    assert.equal(orderNames.length, 3);
    assert.deepEqual(orderNames, ['Pico de Gallo Quesadillas','Sombra Shroom Griddled Tacos','The Situation Gordita']);
  });
});


