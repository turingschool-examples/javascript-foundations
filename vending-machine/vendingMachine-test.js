var assert = require('chai').assert
var { createItemStock, collectChange, makePurchase } = require('./vendingMachine')

describe('vending machine functions', function() {
  describe('createItemStock', function() {
    it('can collect the details of a stocked item', function() {
      var name = 'chips'
      var quantity = 10
      var price = 1.25

      var expectedResult = { 
        name: 'chips',
        quantity: 10,
        price: 1.25,
      }
      var itemStock = createItemStock(name, quantity, price)

      assert.deepEqual(itemStock, expectedResult)
    })

    it('should return an item with defaults if nothing is passed', function() {
      var expectedResult = { 
        name: 'unknown', 
        quantity: 0, 
        price: 1.00 
      }
      var itemStock = createItemStock()

      assert.deepEqual(itemStock, expectedResult)
    })
  })

  describe('makePurchase', function() {
    it('does not allow a purchase if given less than price', function() {
      var selectedItem = createItemStock('chips', 2, 2.00)
      var moneyForPurchase = 0.35
      var expectedResult = 'Sorry, you need at least $2 to make that purchase'

      var transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)
    })

    it('does not allow a purchase if given less than different price', function() {
      var selectedItem = createItemStock('soda', 2, 1.00)
      var moneyForPurchase = 0.35
      var expectedResult = 'Sorry, you need at least $1 to make that purchase'

      var transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)
    })

    it('does not allow a purchase if no items of that type are available', function() {
      var selectedItem = createItemStock('chips', 0, 2.00)
      var moneyForPurchase = 2.00
      var expectedResult = 'Sorry, there are none left'

      var transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)
    })

    it('allows the transaction if successful', function() {
      var selectedItem = createItemStock('chips', 1, 2.00)
      var moneyForPurchase = 2.00
      var expectedResult = 'Here are your chips'

      var transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)

      assert.deepEqual(transactionResult, expectedResult)
    })

    it('allows a different transaction if successful', function() {
      var selectedItem = createItemStock('skittles', 1, 1.00)
      var moneyForPurchase = 1.00
      var expectedResult = 'Here are your skittles'

      var transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)

      assert.deepEqual(transactionResult, expectedResult)
    })
  })

  describe('collectChange', function() {
    it('can calculate the total of a single coin', function() {
      var looseChange = [0.25]
      var expectedTotal = 0.25

      var total = collectChange(looseChange)

      assert.deepEqual(total, expectedTotal)
    })

    it('can calculate the total of two coins', function() {
      var looseChange = [0.25, 0.10]
      var expectedTotal = 0.35

      var total = collectChange(looseChange)

      assert.deepEqual(total, expectedTotal)
    })

    it('can calculate the total of many coins', function() {
      var looseChange = [0.25, 0.10, 0.25, 0.05, 1.00]
      var expectedTotal = 1.65

      var total = collectChange(looseChange)

      assert.deepEqual(total, expectedTotal)
    })
  })

})
