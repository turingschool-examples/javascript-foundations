function createFavoriteFood(dish) {
    return dish = { 
        name: dish.dish,
        ingredients: dish.ingredients,
        isSpicy: dish.isSpicy,
        timesOrdered: 0
    }
}

function commentOnSpiciness(dish) {
    if (dish.isSpicy) {
        return `Wow, this Pho is so spicy!`
    } else {
        return `Phew, this ${dish.name} is not very spicy.`;
    }
}

function orderFood(dish) {
    dish.timesOrdered +=1;
    return dish;
}

function createShoppingList(dishes) {
    var shoppingList = [];
    for (var i = 0; i < dishes.length; i++) {
        shoppingList.push(dishes[i].ingredients);
    }
    return shoppingList.flat();
}

module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};