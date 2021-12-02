var assert = require('chai').assert;
var Game = require('../src/game.js');

describe('Game', function() {
  it.skip('should have a name', function() {
    var game = new Game({name: 'Checkers'});

    assert.isFunction(Game);
    assert.equal(game.name, 'Checkers');
  });

  it.skip('should have a category', function() {
    var game = new Game({name: 'Chess', type: 'strategy'})

    assert.equal(game.category, 'strategy');
  });

  it.skip('should have a complexity level', function() {
    var game = new Game({name: 'Pandmeic', type: 'strategy', complexity: 7.6});

    assert.equal(game.complexity, 7.6);
  });

  it.skip('should have a maximum number of players', function() {
    var game = new Game({name: 'Ticket to Ride', type: 'family', maxPlayers: 5});

    assert.equal(game.maxPlayers, 5);
  });

  it.skip('should have a minimum number of two players by default', function() {
    var game = new Game({name: 'Backgammon', type: 'strategy'});

    assert.equal(game.minPlayers, 2);
  });

  it.skip('should be able to have a different minimum number of players', function() {
    var game = new Game({name: 'Catan', type: 'strategy', minPlayers: 3});

    assert.equal(game.minPlayers, 3);
  });

  it.skip('should have a maximum number of two players by default', function() {
    var game = new Game({name: 'Cribbage'});

    assert.equal(game.maxPlayers, 2);
  })

  it.skip('should be able to have a different maximum number of players', function() {
    var game = new Game({name: 'Monopoly', type: 'family', minPlayers: 2, maxPlayers: 8});

    assert.equal(game.maxPlayers, 8);
  });
  
  it.skip('should have an average game time', function() {
    var game = new Game({name: 'Twilight Struggle', averageTime: 150});
    
    assert.equal(game.averageTime, 150);
  });

  it.skip('should have an age rating', function() {
    var game = new Game({name: 'Hive', ageRating: 9});

    assert.equal(game.age, 9);
  });

  it.skip('should be able to have expansions', function() {
    var game1 = new Game({name: 'Brass: Birmingham'});
    var game2 = new Game({
      name: 'Dominion', 
      expansions: ['Intrigue', 'Prosperity', 'Hinterlands']
    });

    assert.deepEqual(game1.expansions, []);
    assert.equal(game2.expansions.length, 3);
  });
});