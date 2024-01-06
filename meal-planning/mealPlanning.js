function createMeal(food, calories) {
    var meal = {
        type: food,
        calorieGoal: calories,
        dishes: []
    }
    return meal
};

function addDish(meal, dish) {
    if(meal.calorieGoal >= dish.calories) {
        meal.dishes.push(dish)
        meal.calorieGoal -= dish.calories
    }
    return meal
};

function calculateCalories(meal) {
    var totalCalories = 0;
    for(var i = 0; i < meal.dishes.length; i++) {
        totalCalories += meal.dishes[i].calories
    }
    return `${meal.type} has a total of ${totalCalories} calories.`
};

module.exports = {
    createMeal,
    addDish,
    calculateCalories
};