
module.exports = {
    createItemStock,
    collectChange,
    makePurchase
}

function createItemStock(name, quantity, price) {
    var item = {
        name: name,
        quantity: quantity,
        price: price
    }
    if (!item.name) {
        item.name = 'unknown';
    }
    if (!item.quantity) {
        item.quantity = 0;
    }
    if (!item.price) {
        item.price = 1.00;
    }
    return item;
}

function makePurchase(item, money) {
    if (money < item.price) {
        return "Sorry, you need at least $" + item.price + " to make that purchase"
    }
    if (!item.quantity) {
        return "Sorry, there are none left"
    }
    return `Here are your ${item.name}`
}

function collectChange(change) {
    var counter = 0;
    for (var i = 0; i < change.length; i++) {
       counter = counter + change[i];
    }
    return counter;
}