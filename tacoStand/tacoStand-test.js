var assert = require('chai').assert
var { createIngredient, createTaco, addIngredientToTaco, calculatePrice } = require('./tacoStand')

describe('taco stand', function() {
  describe('createIngredient', function() {
    it('should take a name and price', function() {
      var ingredient1 = createIngredient('chicken', 2.50)
      var ingredient2 = createIngredient('steak', 3.25)

      assert.equal(ingredient1.name, 'chicken')
      assert.equal(ingredient1.price, 2.50)
      assert.equal(ingredient2.name, 'steak')
      assert.equal(ingredient2.price, 3.25)
    })

    it('should return an ingredient with defaults if nothing is passed', function() {
      var defaultIngredient = createIngredient()

      assert.equal(defaultIngredient.name, 'unknown')
      assert.equal(defaultIngredient.price, 0.00)
    })
  })

  describe('createTaco', function() {
    it('should have a name', function() {

      assert.equal(createTaco('southwestern').name, 'southwestern')
    })

    it('should have a default name if none provided', function() {

      assert.equal(createTaco().name, 'custom')
    })

    it('should have no ingredients by default', function() {

      assert.deepEqual(createTaco('baja').ingredients, [])
    })

    it('should be able to create a taco with ingredients', function() {
      var fish = createIngredient('fish', 2.95)
      var hotSauce = createIngredient('siracha mayo', 0.95)
      var lettuce = createIngredient('lettuce', 0.50)

      var ingredients = [fish, hotSauce, lettuce]
      var bajaTaco = createTaco('baja', ingredients)

      assert.deepEqual(bajaTaco.ingredients, ingredients)
    })
  })

  describe('addIngredientToTaco', function() {
    it('should be able to add an ingredient to a taco', function() {
      var steak = createIngredient('steak', 3.50)
      var basicSteakTaco = createTaco('basic steak', [steak])

      var lettuce = createIngredient('lettuce', 0.50)

      var lettuceAddedTaco = addIngredientToTaco(basicSteakTaco, lettuce)

      assert.deepEqual(lettuceAddedTaco.ingredients, [steak, lettuce])
    })

    it('should return the taco unchanged if no ingredient is included', function() {
      var steak = createIngredient('steak', 3.50)
      var basicSteakTaco = createTaco('basic steak', [steak])

      var nothingAddedTaco = addIngredientToTaco(basicSteakTaco)

      assert.deepEqual(nothingAddedTaco, basicSteakTaco)
    })
  })

  describe('calculatePrice', function() {
    it('should calculate the price of a single ingredient taco', function() {
      var steak = createIngredient('steak', 3.50)
      var basicSteakTaco = createTaco('basic steak', [steak])

      assert.equal(calculatePrice(basicSteakTaco), 3.50)
    })

    it('should calculate the price of a 2 ingredient taco', function() {
      var steak = createIngredient('steak', 3.50)
      var lettuce = createIngredient('lettuce', 0.50)
      var steakTaco = createTaco('steak', [steak, lettuce])

      assert.equal(calculatePrice(steakTaco), 4.00)
    })

    it('should calculate the price of a many ingredient taco', function() {
      var steak = createIngredient('steak', 3.50)
      var lettuce = createIngredient('lettuce', 0.50)
      var hotSauce = createIngredient('siracha mayo', 0.95)
      var salsa = createIngredient('salsa', 0.75)

      var steakTaco = createTaco('steak', [steak, lettuce, hotSauce, salsa])
  
      assert.equal(calculatePrice(steakTaco), 5.70)
    })
  })
})
