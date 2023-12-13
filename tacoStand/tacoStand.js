function createIngredient(ingredient, price1) {
  var ingredients = {
    name: ingredient,
    price: price1
  };
  if (ingredients.name == undefined) {
    ingredients.name = 'unknown'
  };
  if (ingredients.price == undefined) {
    ingredients.price = 0.00
  };
  return ingredients
};

function createTaco(tacoName, tacoIngredients) {
  var taco = {
    name: tacoName,
    ingredients: []
  };
  if(tacoName == undefined) {
    taco.name = 'custom'
  };
  if (tacoIngredients !== undefined) {
    for (var i = 0; i < tacoIngredients.length; i++) {
      taco.ingredients.push(tacoIngredients[i])
    };
  };
  return taco
};

function addIngredientToTaco(madeTaco, additionalItem) {
  var newItemOnTaco = {
    name: madeTaco.name,
    ingredients: []
  };
  newItemOnTaco.ingredients.push(madeTaco.ingredients[0])
  if(additionalItem) {
    newItemOnTaco.ingredients.push(additionalItem)
  };
  return newItemOnTaco
};

function calculatePrice(tacoOrder) {
  var costs = [];
  for (var i = 0; i < tacoOrder.ingredients.length; i++){
    costs.push(tacoOrder.ingredients[i].price)
  };
  var price = 0;
  for (var z = 0; z < costs.length; z++) {
    price += costs[z]
  };
  return price
};

module.exports = {
  createIngredient,
  createTaco,
  addIngredientToTaco,
  calculatePrice
};

