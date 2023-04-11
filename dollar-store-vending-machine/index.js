function createItemStock(name, quantity, price) {
    return {
        name: name || 'unknown',
        quantity: quantity || 0, 
        price: price || 1.00
    }
}

function makePurchase(selectedItem, moneyForPurchase) {
    if (selectedItem.quantity === 0) {
        return 'Sorry, there are none left';
    } else if (selectedItem.price > moneyForPurchase) {
        return `Sorry, you need at least $${selectedItem.price} to make that purchase`;
    } else {
        return `Here are your ${selectedItem.name}`;
    }
}

function collectChange(change) {
    var accumulator = 0;
    for (var i = 0; i < change.length; i++) {
        accumulator += change[i];
    }
    return accumulator;
}


module.exports = {
    createItemStock,
    makePurchase,
    collectChange
}
