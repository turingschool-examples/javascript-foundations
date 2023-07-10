function createFavoriteFood(dish) {
  return {
    name: dish.dish,
    ingredients: dish.ingredients,
    isSpicy: dish.isSpicy,
    timesOrdered: 0
  }
}

function commentOnSpiciness(dish) {
  if (dish.isSpicy) {
    return `Wow, this ${dish.name} is so spicy!`
  } else {
    return `Phew, this ${dish.name} is not very spicy.`
  }
}

function orderFood(dish) {
  dish.timesOrdered +=1;
  return dish
}

function createShoppingList(dishes) {
  const list = [];
  for (i = 0; i < dishes.length; i++) {
    list.push(dishes[i].ingredients);
  }
  return list.flat()
}


module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
 };