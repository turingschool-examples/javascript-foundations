

module.exports = { 
  issueCard, 
  searchByAuthor
};

function issueCard(name, age) {
  var card = {
    name: name,
    age: age,
    numBooksCheckedOut: 0,
    isChild: false
  }
  if (card.age < 12) {
    card.isChild = true;
  }
  return card;
}

function searchByAuthor(collection, name) {
  books = [];
  for (var i = 0; i < collection.length; i++) {
    if (collection[i].author === name) {
      books.push(collection[i])
    } 
  }
  if(books.length === 0) {
    return "No book found for search criteria"
  }
  return books;
}