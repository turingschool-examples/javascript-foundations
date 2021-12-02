var assert = require('chai').assert;
var Player = require('../src/player.js');
var Game = require('../src/game.js');

describe('Player', function() {
  it.skip('should have a name', function() {
    var player = new Player({name: 'Phil'});

    assert.isFunction(Player);
    assert.equal(player.name, 'Phil');
  });

  it.skip('should be able to have a favorite type of game', function() {
    var player1 = new Player({name: 'Dave', favoriteType: 'Engine Builder'});
    var player2 = new Player({name: 'Blair', favoriteType: 'Deck Builder'});

    assert.equal(player1.favoriteType, 'Engine Builder');
    assert.equal(player2.favoriteType,  'Deck Builder');
  });

  it.skip('should be able to have a collection', function() {
    var game1 = new Game({name: 'Everdell'});
    var game2 = new Game({name: 'Dominion'});
    var player = new Player({name: 'Kiel', collection: [game1, game2]});

    assert.equal(player.collection.length, 2);
    assert.equal(player.collection[1].name, 'Dominion');
  });

  it.skip('should start with no games in the collection', function() {
    var player = new Player({name: 'Scott'});

    assert.deepEqual(player.collection, []);
  })

  it.skip('should be able to add games to the collection', function() {
    var game1 = new Game({name: 'Gloomhaven'});
    var game2 = new Game({name: 'Spirit Island'});
    var game3 = new Game({name: 'Scythe'});
    var player = new Player({name: 'Zane', collection: []});

    assert.deepEqual(player.collection, []);

    player.addToCollection(game1);

    assert.equal(player.collection.length, 1);
    assert.equal(player.collection[0].name, 'Gloomhaven')

    player.addToCollection(game2);
    player.addToCollection(game3);

    assert.equal(player.collection.length, 3);
    assert.equal(player.collection[1].name, 'Spirit Island');
    assert.equal(player.collection[2].name, 'Scythe');
  });

  it.skip('should be able to have favorite games', function() {
    var player = new Player({name: 'Liz'});

    assert.deepEqual(player.favoriteGames, {});
  })

  it.skip('should be able to have a top 3 games', function() {
    var game1 = new Game({name: 'Gaia Project'});
    var game2 = new Game({name: 'Dune Imperium'});
    var game3 = new Game({name: 'Terraforming Mars'});
    var player = new Player({name: 'Phil'});

    player.addToCollection(game1);
    player.addToCollection(game2);
    player.addToCollection(game3);
    player.declareFavorites('Gaia Project', 'Dune Imperium', 'Terraforming Mars');

    assert.equal(player.favoriteGames.firstFavorite, 'Gaia Project');
    assert.equal(player.favoriteGames.secondFavorite, 'Dune Imperium');
    assert.equal(player.favoriteGames.thirdFavorite, 'Terraforming Mars');
  });

  it.skip('should not be able to declare a favorite unless it is in thier collection', function(){
    var game = new Game({name: 'Brass Birmingham'});
    var player = new Player({name: 'Sophia'});

    player.declareFavorites('Brass Birmingham');

    assert.deepEqual(player.favoriteGames, {});

    player.addToCollection(game);
    player.declareFavorites('Brass Birmingham');
    assert.equal(player.favoriteGames.firstFavorite, 'Brass Birmingham');
  });

  it.skip('should be able to take games to game night', function() {
    var player = new Player({name: 'Megan'});
    var game1 = new Game({name: 'Codenames'});
    var game2 = new Game({name: 'Ticket to Ride'});
    player.addToCollection(game1);
    player.addToCollection(game2);
    player.takeToGameNight([game1, game2]);

    assert.equal(player.gameNightGames.length, 2);
    assert.equal(player.gameNightGames[0].name, 'Codenames');
  });

  it.skip('should only be able to take games that are in thier collection', function() {
    var player = new Player({name: 'Michael'});
    var game1 = new Game({name: 'Sagrada'});
    var game2 = new Game({name: 'Splendor'});
    player.addToCollection(game2);
    player.takeToGameNight([game1, game2]);

    assert.equal(player.gameNightGames.length, 1);
    assert.equal(player.gameNightGames[0].name, 'Splendor');
  });

  it.skip('should start with no experience', function(){
    var player = new Player({name: 'Izzy'});

    assert.equal(player.experience, 0);
  });

  it.skip('should be able to play a game and gain experience', function() {
    var player = new Player({name: 'Ramiro'});
    
    assert.equal(player.experience, 0);
    player.playGame();

    assert.equal(player.experience, 1);
  });

  it.skip('should be able to keep track of how many times they win each game', function() {
    var player = new Player({name: 'Catherine'});
    var game = new Game({name: 'Sushi Go Party'});
    player.playGame();
    player.playGame();
    player.winGame(game.name);

    assert.equal(player.experience, 2);
    assert.equal(player.wins[game.name], 1);
  });

  it.skip('should increment the wins each time they win each game', function() {
    var player = new Player({name: 'John'});
    var game1 = new Game({name: 'Twilight Imperium'});
    var game2 = new Game({name: 'Mysterium'});
    player.winGame(game1.name);
    player.winGame(game1.name);
    player.winGame(game1.name);
    player.winGame(game2.name);
    player.winGame(game2.name);

    assert.equal(player.wins[game1.name], 3);
    assert.equal(player.wins[game2.name], 2);
  })
});