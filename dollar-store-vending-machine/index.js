function createItemStock(name = 'unknown', quantity = 0, price = 1.00) {
	return item = {
		name: name,
		quantity: quantity,
		price: price
	}
}

function makePurchase(item, amountMoney) {
	if (amountMoney < item.price) {
		return `Sorry, you need at least $${item.price} to make that purchase`;
	} else if (!item.quantity) {
		return `Sorry, there are none left`;
	} else {
		return `Here are your ${item.name}`;
	}
}

function collectChange(coins) {
	var total = 0;
	for (var i = 0; i < coins.length; i++) {
		total += coins[i];
	}
	
	return total; 
}


module.exports = {
	createItemStock,
	makePurchase,
	collectChange
}
