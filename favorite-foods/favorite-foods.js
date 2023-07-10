function createFavoriteFood(dish) {
  return {
    name: dish.dish,
    ingredients: dish.ingredients,
    isSpicy: dish.isSpicy
  }
}

function commentOnSpiciness(dish) {
  if (dish.isSpicy) {
    return `Wow, this ${dish.name} is so spicy!`
  } else {
    return `Phew, this ${dish.name} is not very spicy.`
  }
}


module.exports = {
  createFavoriteFood,
  commentOnSpiciness,
 };