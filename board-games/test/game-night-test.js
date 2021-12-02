var assert = require('chai').assert;
var Player = require('../src/player.js');
var Game = require('../src/game.js');
var GameNight = require('../src/game-night.js');

describe ('GameNight', function() {
  it.skip('should have a host', function() {
    var host = new Player({name: 'Elizabeth'});
    var gameNight = new GameNight(host);

    assert.isFunction(GameNight);
    assert.instanceOf(gameNight.host, Player);
    assert.equal(gameNight.host.name, 'Elizabeth');
  });

  it.skip('should be able to invite other gamers', function() {
    var host = new Player({name: 'Elizabeth'});
    var player1 = new Player({name: 'Phil'});
    var player2 = new Player({name: 'Ryan'});
    var gameNight = new GameNight(host);

    gameNight.invite([player1, player2]);

    assert.equal(gameNight.players.length, 3);
    assert.equal(gameNight.players[0].name, 'Elizabeth');
    assert.equal(gameNight.players[2].name, 'Ryan');
  });

  // All games in the hosts' collection should be available to play
  it.skip('should be able to assemble a collection of games to choose from', function() {
    var host = new Player({name: 'Elizabeth'});
    var player1 = new Player({name: 'Katie'});
    var player2 = new Player({name: 'Hannah'});
    var game1 = new Game({name: 'Mysterium'});
    var game2 = new Game({name: 'Callico'});
    var game3 = new Game({name: 'Wingspan'});
    var game4 = new Game({name: 'Pandemic'});
    var game5 = new Game({name: 'Gloomhaven: Jaws of the Lion'});
    var game6 = new Game({name: 'Sagrada'});
    var game7 = new Game({name: 'Cards Against Humanity'});
    var game8 = new Game({name: 'Carcassonne'});

    host.addToCollection(game1);
    host.addToCollection(game2);
    host.addToCollection(game3);
    host.addToCollection(game4);
    player1.addToCollection(game5);
    player2.addToCollection(game6);
    player2.addToCollection(game7);
    player2.addToCollection(game8);
    player1.takeToGameNight([game5]);
    player2.takeToGameNight([game6, game8]);

    var gameNight = new GameNight(host);

    gameNight.invite([player1, player2]);
    gameNight.makeCollection();

    assert.equal(gameNight.games.length, 7);
    assert.equal(gameNight.games[3].name, 'Pandemic');
    assert.equal(gameNight.games[5].name, 'Sagrada');
    assert.equal(gameNight.games[6].name, 'Carcassonne');
  });
  
  it.skip('should be able to play a game and determine a winner', function() {
    var host = new Player({name: 'Phil'});
    var player1 = new Player({name: 'Paul'});
    var player2 = new Player({name: 'Mack'});
    var game = new Game({name: 'Nemesis'});
    host.addToCollection(game);
    
    var gameNight = new GameNight(host);
    gameNight.invite([player1, player2]);
    gameNight.makeCollection();
    
    assert.equal(players[0].experience, 0);

    gameNight.playAGame(game, 'Mack');
    
    assert.equal(players[0].experience, 1);
    assert.equal(players[1].experience, 1);
    assert.equal(players[1].wins[game.name], undefined);
    assert.equal(players[2].wins[game.name], 1);
  });
  
  it.skip('should be able to choose a game that accomodates everyone', function() {
    var host = new Player({name: 'Paul'});
    var player1 = new Player({name: 'Mack'});
    var player2 = new Player({name: 'Phil'});
    var player3 = new Player({name: 'Dave'});
    var player4 = new Player({name: 'Abigale'});
    var game1 = new Game({name: 'Brass Birmingham', maxPlayers: 4});
    var game2 = new Game({name: 'Rising Sun', maxPlayers: 5});
    var gameNight = new GameNight(host);

    host.addToCollection(game1);
    host.addToCollection(game2);
    gameNight.invite([player1, player2, player3, player4]);
    gameNight.makeCollection();
    assert.equal(gameNight.chooseGame(game1), 'We should choose a game that everyone can play.');
    assert.equal(gameNight.chooseGame(game2), 'Rising Sun is super fun!')
  });

  it.skip('should not be able to choose games when there aren\'t enough people', function() {
    var host = new Player({name: 'John'});
    var player = new Player({name: 'Mary'});
    var game = new Game({name: 'Catan', minPlayers: 3});
    var gameNight = new GameNight(host);
    gameNight.invite([player]);
    host.addToCollection(game);
    gameNight.makeCollection();
    
    assert.equal(gameNight.chooseGame(game), 'We don\'t have enough players for Catan.')
  });

  it.skip('should not be able to choose games that are not in the collection', function() {
    var host = new Player({name: 'Lindsey'});
    var player = new Player({name: 'Caitlin'});
    var game1 = new Game({name: 'Hive'});
    var game2 = new Game({name: '7 Wonders Duel'});
    var gameNight = new GameNight(host);
    host.addToCollection(game1);
    gameNight.invite([player]);
    gameNight.makeCollection();
    
    assert.equal(gameNight.chooseGame(game2), `We don't have 7 Wonders Duel.`);
  });
});