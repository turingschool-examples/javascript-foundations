class Recipe {
  constructor(recipeObj) {
    this.name = recipeObj.name;
    this.ingredients = recipeObj.ingredients;
    this.attempted = false;
    this.rating = null;
  }
  rateRecipe(newRating) {
    this.attempted = true;
    this.rating = newRating;
  }
  changeIngredientAmount(ingredientName, ingredientAmount) {
    for (var i = 0; i < this.ingredients.length; i++){
      if (this.ingredients[i].name === ingredientName) {
        this.ingredients[i].changeAmount(ingredientAmount)
      }

    }
   
   }

  }


module.exports = Recipe;
