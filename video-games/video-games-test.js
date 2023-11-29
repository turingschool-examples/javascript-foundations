var { createPlayer, createLevel, findCoins, defeatPlayer } = require('./video-games');
var assert = require('chai').assert;

describe('video games', function () {
   it('should create a new player with a name and an age', function () {
      var player1 = createPlayer('Ace Skateboarder', 19);

      assert.equal(player1.name, 'Ace Skateboarder');
      assert.equal(player1.age, 19);
   });

   it('should create another player with a name and an age', function () {
      var player1 = createPlayer('Guitar Heroine', 25);
      var player2 = createPlayer('Time Traveler', 35);

      assert.equal(player1.name, 'Guitar Heroine');
      assert.equal(player1.age, 25);
      assert.equal(player2.name, 'Time Traveler');
      assert.equal(player2.age, 35);
   });

   it('should create a new player with a unique moveset', function () {
      var player1 = createPlayer('Super Skater', 27, ['super jump', 'board smash', 'grind rail']);

      assert.equal(player1.name, 'Super Skater');
      assert.equal(player1.age, 27);
      assert.deepEqual(player1.moveset['super jump', 'board smash', 'grind rail']);
   });

   it('should be able to create a new level with a name', function () {
      var level = createLevel('Island Oasis');

      assert.equal(level.name, 'Island Oasis');
   });

   it('should be able to create a new level with a name and a player', function () {
      var player1 = createPlayer('The Future Savior', 18, ['time travel', 'combat training', 'futuristic weapon']);
      var level = createLevel('Zombie Infested City', [player1]);

      assert.equal(level.name, 'Zombie Infested City');
      assert.deepEqual(level.players, [player1]);
   });

   it('should be able to create a new level with a name and many players', function () {
      var player1 = createPlayer('Rock Star Rebel', 21, ['power chord', 'stage dive', 'crowd surf']);
      var player2 = createPlayer('Pro Skater Prodigy', 16, ['360 flip', 'board slide', 'gap transfer']);
      var level = createLevel('Candy Cane Canyon', [player1, player2]);

      assert.equal(level.name, 'Candy Cane Canyon');
      assert.deepEqual(level.players, [player1, player2]);
   });

   it('should initiate a level with a player and 3 lives and 0 coins', function () {
      var player1 = createPlayer('Quantum Jumper', 30, ['dimension jump', 'portal creation', 'alternate reality explosion']);
      var level = createLevel('Carnival of Terror', [player1]);

      assert.equal(level.name, 'Carnival of Terror');
      assert.deepEqual(level.players, [player1]);
      assert.equal(level.coins, 0);
      assert.equal(level.lives, 3);
   });

   it('should be able to collect coins', function () {
      var player1 = createPlayer('The Timeless Troubadour', 500, ['piano sonata', 'violin concerto', 'fllamenco guitar']);
      var level = createLevel('Infernal Inferno of Flames', [player1]);

      assert.equal(level.name, 'Infernal Inferno of Flames');
      assert.deepEqual(level.players, [player1]);
      assert.equal(level.coins, 0);
      assert.equal(level.lives, 3);

      var updatedLevel = findCoins(level, 5);
      assert.equal(updatedLevel.coins, 5);
   });

   it('should add a life when 100 coins are collected', function () {
      var player1 = createPlayer('The Fiery Friar', 50, ['flame spin', 'fire dance', 'smoke screen']);
      var level = createLevel('Water Temple', [player1]);

      assert.equal(level.name, 'Water Temple');
      assert.deepEqual(level.players, [player1]);
      assert.equal(level.coins, 0);
      assert.equal(level.lives, 3);

      var updatedLevel = findCoins(level, 100);
      assert.equal(updatedLevel.coins, 100);
      assert.equal(level.lives, 4);
   });

   it('should be able to defeat the player and cost a life', function () {
      var player1 = createPlayer('Tony Thrasher', 34, ['thrash throw', 'solving mysteries', 'thrash dance']);
      var level = createLevel('Alien Outpost', [player1]);

      assert.equal(level.name, 'Alien Outpost');
      assert.deepEqual(level.players, [player1]);
      assert.equal(level.coins, 0);
      assert.equal(level.lives, 3);

      var updatedLevelPlayerFell = defeatPlayer(level);
      assert.equal(updatedLevelPlayerFell.lives, 2);
   }); 

   it('should print `GAME OVER` when a player is defeated and has no lives left', function () {
      var player1 = createPlayer('Ant Cat', 3, ['tiny roar', 'six-legged claws', 'dig tunnel']);
      var level = createLevel('Alien Outpost', [player1]);

      assert.equal(level.name, 'Alien Outpost');
      assert.deepEqual(level.players, [player1]);
      assert.equal(level.coins, 0);
      assert.equal(level.lives, 3);

      var updatedLevelPlayerDefeated = defeatPlayer(level);
      assert.equal(updatedLevelPlayerDefeated.lives, 2);
      var updatedLevelPlayerAnnihilated  = defeatPlayer(updatedLevelPlayerDefeated);
      assert.equal(updatedLevelPlayerAnnihilated.lives, 1);
      var updatedLevelPlayerDestroyed = defeatPlayer(updatedLevelPlayerAnnihilated);
      assert.equal(updatedLevelPlayerDestroyed, 'GAME OVER');
   }); 
});