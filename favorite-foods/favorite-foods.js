function createFavoriteFood(dish) {

    var dish = {
        name: dish.dish,
        ingredients: dish.ingredients,
        isSpicy: dish.isSpicy,
        timesOrdered: 0
    }
    return dish
};

function commentOnSpiciness(dish) {
    if(dish.isSpicy) {
        return `Wow, this ${dish.name} is so spicy!`
    }
    return `Phew, this ${dish.name} is not very spicy.`
};

function orderFood(dish) {
    dish.timesOrdered ++
    return dish
};

function createShoppingList(dishes) {
    var newList = [];
    for(var i = 0; i < dishes.length; i++) {
        for(var z = 0; z < dishes[i].ingredients.length; z++) {
            newList.push(dishes[i].ingredients[z])
        }
    }
    return newList
};

module.exports = {
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};