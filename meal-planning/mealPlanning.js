function createMeal(type, calorieGoal) {
    var meal = {
        type: type,
        calorieGoal: calorieGoal,
        dishes: [],
    }
    return meal;
}

function addDish(meal, dish) {
    if (dish.calories <= meal.calorieGoal) {
        meal.calorieGoal = meal.calorieGoal - dish.calories;
        meal.dishes.push(dish);
    }
    return meal;
}

function calculateCalories(meal) {
    var totalCalories = 0;
    for (var i = 0; i < meal.dishes.length; i++){
        totalCalories += meal.dishes[i].calories;
    }
    return `${meal.type} has a total of ${totalCalories} calories.`;
}

module.exports = {
    createMeal,
    addDish,
    calculateCalories
 }