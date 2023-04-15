
module.exports = { 
  createMeal,
  addDish,
  calculateCalories
}

function createMeal(meal, calories) {
  var meal = {
    type: meal,
    calorieGoal: calories,
    dishes: []
  }
  return meal;
}

function addDish(meal, addMeal) {
  if (addMeal.calories < meal.calorieGoal) {
    meal.dishes.push(addMeal);
    meal.calorieGoal = meal.calorieGoal - addMeal.calories;
  }  
  return meal;
}

function calculateCalories(meal) {
  calories = 0;
  for (var i = 0; i < meal.dishes.length; i++) {
    calories = calories + meal.dishes[i].calories;
  }
  return `${meal.type} has a total of ${calories} calories.`;
}