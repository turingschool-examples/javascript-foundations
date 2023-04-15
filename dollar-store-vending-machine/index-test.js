var assert = require('chai').assert
var { createItemStock, collectChange, makePurchase } = require('./index')

describe('dollar store vending machine functions', function() {
  describe('createItemStock', function() {
    it('can collect the details of a stocked item', function() {
      const name = 'chips'
      const quantity = 10
      const price = 1.25

      const expectedResult = { 
        name: 'chips',
        quantity: 10,
        price: 1.25,
      }
      const itemStock = createItemStock(name, quantity, price)

      assert.deepEqual(itemStock, expectedResult)
    })

    it('should return an item with defaults if nothing is passed', function() {
      const expectedResult = { 
        name: 'unknown', 
        quantity: 0, 
        price: 1.00 
      }
      const itemStock = createItemStock()

      assert.deepEqual(itemStock, expectedResult)
    })
  })

  describe('makePurchase', function() {
    it('does not allow a purchase if given less than price', function() {
      const selectedItem = createItemStock('chips', 2, 2.00)
      const moneyForPurchase = 0.35
      const expectedResult = 'Sorry, you need at least $2 to make that purchase'

      const transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)
    })

    it('does not allow a purchase if given less than different price', function() {
      const selectedItem = createItemStock('soda', 2, 1.00)
      const moneyForPurchase = 0.35
      const expectedResult = 'Sorry, you need at least $1 to make that purchase'

      const transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)
    })

    it('does not allow a purchase if no items of that type are available', function() {
      const selectedItem = createItemStock('chips', 0, 2.00)
      const moneyForPurchase = 2.00
      const expectedResult = 'Sorry, there are none left'

      const transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)
    })

    it('allows the transaction if successful', function() {
      const selectedItem = createItemStock('chips', 1, 2.00)
      const moneyForPurchase = 2.00
      const expectedResult = 'Here are your chips'

      const transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)

      assert.deepEqual(transactionResult, expectedResult)
    })

    it('allows a different transaction if successful', function() {
      const selectedItem = createItemStock('skittles', 1, 1.00)
      const moneyForPurchase = 1.00
      const expectedResult = 'Here are your skittles'

      const transactionResult = makePurchase(selectedItem, moneyForPurchase)

      assert.equal(transactionResult, expectedResult)

      assert.deepEqual(transactionResult, expectedResult)
    })
  })

  describe('collectChange', function() {
    it('can calculate the total of a single coin', function() {
      const looseChange = [0.25]
      const expectedTotal = 0.25

      const total = collectChange(looseChange)

      assert.deepEqual(total, expectedTotal)
    })

    it('can calculate the total of two coins', function() {
      const looseChange = [0.25, 0.10]
      const expectedTotal = 0.35

      const total = collectChange(looseChange)

      assert.deepEqual(total, expectedTotal)
    })

    it('can calculate the total of many coins', function() {
      const looseChange = [0.25, 0.10, 0.25, 0.05, 1.00]
      const expectedTotal = 1.65

      const total = collectChange(looseChange)

      assert.deepEqual(total, expectedTotal)
    })
  })

})
