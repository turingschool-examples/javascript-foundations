function createFavoriteFood(name){
  return {
    name: name.dish,
    ingredients: name.ingredients,
    isSpicy: name.isSpicy,
    comment: '',
    timesOrdered: 0
  }
}

function commentOnSpiciness(dish){
  if (dish.isSpicy == true) {
    message = `Wow, this ${dish.name} is so spicy!`
  }

  if (dish.isSpicy == false) {
    message = `Phew, this ${dish.name} is not very spicy.`
  }

  return message
} 

function orderFood(dish) {
  dish.timesOrdered += 1
  return dish
}

function createShoppingList(array) {
  shoppingList = []
  array.forEach(dish => {
    shoppingList.push(dish.ingredients)
  });

  return shoppingList.flat()
}

module.exports = { 
  createFavoriteFood,
  commentOnSpiciness,
  orderFood,
  createShoppingList
};