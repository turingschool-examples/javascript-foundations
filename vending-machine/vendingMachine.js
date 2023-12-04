function createItemStock(name, quantity, price) {
  if (name == undefined || quantity == undefined || price == undefined) {
    return {
      name: 'unknown',
      quantity: 0,
      price: 1.00
    }
  } else {
    return {
      name,
      quantity,
      price
    }
  }
}

function makePurchase(selectedItem, moneyForPurchase) {
  if (moneyForPurchase < selectedItem.price) {
    return `Sorry, you need at least $${selectedItem.price} to make that purchase`
  }

  if (selectedItem.quantity == 0) {
    return 'Sorry, there are none left'
  }

  if (moneyForPurchase >= selectedItem.price && selectedItem.quantity != 0) {
    return `Here are your ${selectedItem.name}`
  }
}

function collectChange(changeArray) {
  totalMoney = 0
  changeArray.forEach(change => {
    totalMoney += change
  });
  return totalMoney
}

module.exports = {
  createItemStock,
  makePurchase,
  collectChange
}
