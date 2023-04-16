function issueCard(name, age, numBooksCheckedOut = 0, isChild) {
	var card = {
		name: name,
		age: age,
		numBooksCheckedOut: numBooksCheckedOut,
		isChild: false
	}

	if (card.age < 12) {
		card.isChild = true;
	} 

	return card;
}

function searchByAuthor(collection, author) {
	var searchResults = [];
	
	for (var i = 0; i < collection.length; i++) {
		if (collection[i].author === author) {
			searchResults.push(collection[i]);
		}
	}

	if (searchResults.length) {
		return searchResults;
	} else {
		return `No book found for search criteria`;
	}
	
}

module.exports = {
	issueCard,
	searchByAuthor
 };