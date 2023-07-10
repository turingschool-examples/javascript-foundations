function createFavoriteFood(dish) {
  return {
    name: dish.dish,
    ingredients: dish.ingredients
  }
}


module.exports = {
  createFavoriteFood
 };