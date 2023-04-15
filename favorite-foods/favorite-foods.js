


module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
  orderFood, 
  createShoppingList
 };

 function createFavoriteFood(dish) {
  var favoriteFood = {
    name: dish.dish,
    ingredients: dish.ingredients,
    isSpicy: dish.isSpicy,
    timesOrdered: 0
  }
  return favoriteFood;
 }

 function commentOnSpiciness(dish) {
  if (dish.isSpicy) {
    return `Wow, this ${dish.name} is so spicy!`
  }
  return `Phew, this ${dish.name} is not very spicy.`
 }

function orderFood(dish) {
  dish.timesOrdered++;
  return dish;
}

function createShoppingList(dishes) {
  var list = [];
  for (var i = 0; i < dishes.length; i++) {
    for (var j = 0; j < dishes[i].ingredients.length; j++) {
      list.push(dishes[i].ingredients[j]);
    }
  }
  return list;
}