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

    // iterator method:
// function createShoppingList(dishes) {
//     var shoppingList = [];
//     for (var i = 0; i < dishes.length; i++) {
//         shoppingList.push(dishes[i].ingredients);
//     }
//     return shoppingList.flat();
// }

function createShoppingList(dishes) {
    var nestedList = [];
    for (var i = 0; i < dishes.length; i++) {
        nestedList.push(dishes[i].ingredients)
        }
        
    var shoppingList = [];
    for (var i = 0; i < nestedList.length; i++) {
        if (Array.isArray(nestedList[i])) {
            for (var j = 0; j < nestedList[i].length; j++) {
                shoppingList.push(nestedList[i][j])
            }
        }
    }

    return shoppingList;
}

module.exports = { 
    createFavoriteFood,
    commentOnSpiciness,
    orderFood,
    createShoppingList
};