function createFavoriteFood(dish) {
  return {
    name: dish.dish,
    ingredients: dish.ingredients,
    isSpicy: dish.isSpicy
  }
}


module.exports = {
  createFavoriteFood
 };