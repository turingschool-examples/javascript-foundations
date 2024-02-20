var assert = require('chai').assert;
var { createMage, createEnemy, castSpell, castUltimate } = require('./rpg.js');

describe('rpg', function() {
  it.skip('should create a mage with health and magic points', function() {
    var mage1 = createMage(10, 20);
    var mage2 = createMage(50, 80);

    assert.equal(mage1.health, 10);
    assert.equal(mage1.magic, 20);

    assert.equal(mage2.health, 50);
    assert.equal(mage2.magic, 80)
  });
  
  it.skip('should create an enemy monster with a name and health points', function() {
    var imp = createEnemy('imp', 20);
    var dragon = createEnemy('dragon', 100);
    
    assert.equal(imp.name, 'imp');
    assert.equal(imp.health, 20);
    
    assert.equal(dragon.name, 'dragon');
    assert.equal(dragon.health, 100);
  });

  it.skip('should create enemy that is alive by default', function() {
    var ghost = createEnemy('ghost', 40);

    assert.equal(ghost.alive, true);
  });

  it.skip('should cost magic points in order to cast a spell', function() {
    var mage = createMage(10, 20);
    var message = castSpell(mage)

    assert.equal(mage.magic, 15)
    assert.equal(message, 'That spell cost 5 points. I have 15 magic points left!')

    var newMessage = castSpell(mage);

    assert.equal(mage.magic, 10)
    assert.equal(newMessage, 'That spell cost 5 points. I have 10 magic points left!');
  });

  it.skip('should cause damage to enemy after casting a spell', function() {
    var mage = createMage(10, 20);
    var dragon = createEnemy('dragon', 100);
    var response = castSpell(mage, dragon);

    assert.equal(mage.magic, 15);
    assert.equal(dragon.health, 80);
    assert.equal(response, 'That spell cost 5 points. I have 15 magic points left!')
  })

  it.skip('should tell you if they do not have enough magic to cast a spell', function() {
    var mage = createMage(10, 5);
    var dragon = createEnemy('dragon', 100);
    var response = castSpell(mage, dragon);

    assert.equal(mage.magic, 0);
    assert.equal(dragon.health, 80);
    assert.equal(response, 'That spell cost 5 points. I have 0 magic points left!');

    var differentResponse = castSpell(mage, dragon);

    assert.equal(mage.magic, 0);
    assert.equal(dragon.health, 80);
    assert.equal(differentResponse, 'I can\'t do that. I don\'t have any magic points left!')
  });

  it.skip('should be able to cast an ultimate spell on multiple enemies', function() {
    var dragon = createEnemy('dragon', 100);
    var imp1 = createEnemy('imp', 20);
    var imp2 = createEnemy('imp', 20);
    var imp3 = createEnemy('imp', 20);

    var enemies = [dragon, imp1, imp2, imp3];
    var remainingEnemies = castUltimate(enemies)

    assert.equal(dragon.health, 80);
    assert.equal(imp1.health, 0);
    assert.equal(imp2.health, 0);
    assert.equal(imp3.health, 0);

    assert.deepEqual(remainingEnemies, [dragon]);
  });

  it.skip('should be able to cast an ultimate spell on a stronger set of enemies', function() {
    var dragon = createEnemy('dragon', 100);
    var imp = createEnemy('imp', 20);
    var bat = createEnemy('bat', 40);
    var demon = createEnemy('demon', 500);

    var enemies = [dragon, imp, bat, demon];
    var remainingEnemies = castUltimate(enemies);

    assert.equal(dragon.health, 80);
    assert.equal(imp.health, 0);
    assert.equal(bat.health, 20);
    assert.equal(demon.health, 480);

    assert.deepEqual(remainingEnemies, [dragon, bat, demon]);
  });
});