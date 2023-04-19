
module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice
}

function createIngredient(name, price) {
  var taco = {
    name: name,
    price: price
  }
  if (!name) {
    taco.name = 'unknown';
  }
  if (!price) {
    taco.price = 0.00;
  }
  return taco;
}

function createTaco(name, ingredients) {
  var taco = {
    name: name,
    ingredients: ingredients
  }
  if (!name) {
    taco.name = 'custom';
  }
  if (!ingredients) {
    taco.ingredients = []
  }
  return taco;
}

function addIngredientToTaco(taco, ingredient) {
  taco.ingredients.push(ingredient)
  return taco
}

function calculatePrice(taco) {
  var price = 0;
  for (var i = 0; i < taco.ingredients.length; i++) {
    price = price + taco.ingredients[i].price;
  }
  return price;
}