

function createIngredient(ingredient, price1) {
  //2 parameters for this function
  //function needs to take in a name and price
  //and return an object with a keys of name and price
  var ingredients = {
    name: ingredient,
    price: price1
  }
  if (ingredients.name == undefined) {
    ingredients.name = 'unknown'
  }
  if (ingredients.price == undefined) {
    ingredients.price = 0.00
  }
  return ingredients
};

function createTaco() {

}


module.exports = {
  createIngredient,
  createTaco
};

