var { issueCard, searchByAuthor } = require('./library');
var assert = require('chai').assert;

describe('Library', function() {
  
  it('should issue a library card', function() {
    var card = issueCard('George', 32);

    assert.equal(card.name, 'George');
    assert.equal(card.age, 32);
    assert.equal(card.numBooksCheckedOut, 0);
  });

  it('should issue a card and check if it belongs to a child younger than 12 years old', function() {
    var card = issueCard('George', 32);

    assert.equal(card.name, 'George');
    assert.equal(card.age, 32);
    assert.equal(card.numBooksCheckedOut, 0);
    assert.equal(card.isChild, false);

    var childCard = issueCard('Kim', 10);

    assert.equal(childCard.name, 'Kim');
    assert.equal(childCard.age, 10);
    assert.equal(childCard.numBooksCheckedOut, 0);
    assert.equal(childCard.isChild, true);
  });

  it('should be able to search through a catalog by author and return book result', function() {
    var collection = [
      {title: 'My Life', author: 'Alex', status: 'on shelf'},
      {title: 'Adventures', author: 'Sam', status: 'checked out'},
      {title: 'Cooking Food', author: 'Jamie', status: 'on shelf'}
    ]
    
    var searchResults = searchByAuthor(collection, 'Sam');

    assert.deepEqual(searchResults, [{title: 'Adventures', author: 'Sam', status: 'checked out'}]);
  });

  it('should be able to handle a search with multiple results', function() {
    var collection = [
      {title: 'My Life', author: 'Alex', status: 'on shelf'},
      {title: 'Adventures', author: 'Sam', status: 'checked out'},
      {title: 'Cooking Food', author: 'Jamie', status: 'on shelf'},
      {title: 'Cooking Spicy Things', author: 'Jamie', status: 'on shelf'}
    ]
    
    var searchResult = searchByAuthor(collection, 'Jamie');

    assert.deepEqual(searchResult, [
      {title: 'Cooking Food', author: 'Jamie', status: 'on shelf'},
      {title: 'Cooking Spicy Things', author: 'Jamie', status: 'on shelf'}
    ]);
  });

  it('should be able to handle a search with no results', function() {
    var collection = [
      {title: 'My Life', author: 'Alex', status: 'on shelf'},
      {title: 'Adventures', author: 'Sam', status: 'checked out'},
      {title: 'Cooking Things', author: 'Jamie', status: 'on shelf'}
    ]
    
    var searchResult = searchByAuthor(collection, 'Vicky');

    assert.equal(searchResult, 'No book found for search criteria');
  });
});