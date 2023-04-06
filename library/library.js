function issueCard(name, age) {
    var card = {
        name: name,
        age: age,
        numBooksCheckedOut: 0,
        isChild: (age < 12) ? true : false,
    }
    return card;
}

function searchByAuthor(books, author) {
    var foundBooks = [];
    for (var i = 0; i < books.length; i++) {
        if (books[i].author === author){
            foundBooks.push(books[i])
        }
    }
    if (!foundBooks.length){
        return 'No book found for search criteria';
    } else {
        return foundBooks;
    }
}

module.exports = {
    issueCard,
    searchByAuthor,
};