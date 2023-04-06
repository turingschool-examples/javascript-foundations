function createFavoriteFood(food) {
    var faveFood = {
        name: food.dish,
        ingredients: food.ingredients,
        isSpicy: food.isSpicy,
        timesOrdered: 0,
    }
    return faveFood;
}

function commentOnSpiciness(food) {
    if (food.isSpicy === true) {
        return `Wow, this ${food.name} is so spicy!`
    } else {
        return `Phew, this ${food.name} is not very spicy.`
    }
}

function orderFood(food) {
    food.timesOrdered += 1;
    return food;
}

function createShoppingList(foods) {
    var list = [];
    for (var i = 0; i < foods.length; i++) {
        var currentFood = foods[i];
        var currentIngredients = currentFood.ingredients;
        list = list.concat(currentIngredients);
    }
    return list;
}

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList,
 };