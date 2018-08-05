var assert = require('chai').assert;
var Hydra = require('../exercises/hydra');
var Heroine = require('../exercises/heroine');

describe('Hydra', function () {
  it.skip('should be a function', function () {
    
    assert.isFunction(Hydra);

  });

  it.skip('should instantiate our good friend, Hydra', function () {

    var hydra = new Hydra([]);

    assert.isObject(hydra);

  });

  it.skip('should have three heads, each with a different name', function () {
    
    var headNames = ['Feigenbaum', 'Cantor', 'Fibonacci'];
    var hydra = new Hydra(headNames);

    assert.equal(hydra.heads[0].name, 'Feigenbaum');
    assert.equal(hydra.heads[1].name, 'Cantor');
    assert.equal(hydra.heads[2].name, 'Fibonacci');
    assert.equal(hydra.heads.length, 3);

  });

  function hydraCheck (hydra, headNames) {
    headNames.forEach(function(name, index) {
      assert.equal(hydra.heads[index].name, name);
    });
    assert.equal(hydra.heads.length, headNames.length);
  }

  it.skip('should have a lair', function () {

    var headNames = ['Smith', 'Volterra', 'Takagi'];
    var hydra = new Hydra(headNames);

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lerna');

  });

  it.skip('should be able to have a new lair', function () {

    var headNames = ['Blancmange', 'Julia', 'Rauzy'];
    var hydra = new Hydra(headNames, 'Lake Lachrymose');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lachrymose');

  });

  it.skip('should be able to kill the heroine if she doesn\'t have a respirator', function () {

    var headNames = ['Gosper', 'Henon', 'Apollo'];
    var hydra = new Hydra(headNames);
    var heroine = new Heroine('Tanji', 'Lake Lerna');

    assert.equal(heroine.name, 'Tanji');
    assert.equal(heroine.location, 'Lake Lerna');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lerna');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);

    heroine.enterLair(hydra);

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, false);
    assert.equal(heroine.hasRespirator, false);

  });

  it.skip('should not lose heads if the heroine doesn\'t have a weapon', function () {

    var headNames = ['Sierpinski', 'Pascal', 'Ikeda'];
    var hydra = new Hydra(headNames);
    var heroine = new Heroine('Laura', 'Lake Lerna');

    assert.equal(heroine.name, 'Laura');
    assert.equal(heroine.location, 'Lake Lerna');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lerna');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);
    assert.equal(heroine.hasWeapon, false);
    
    heroine.getRespirator();

    assert.equal(heroine.hasRespirator, true);

    heroine.enterLair(hydra);

    assert.equal(heroine.isAlive, true);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 3);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 3);

  });

// ********** __________ go to line 379 __________ ********** //

  it.skip('should grow back two heads for every head lost', function () {

    var headNames = ['Peano', 'Moore', 'Lebesgue'];
    var hydra = new Hydra(headNames, 'Lac d\'Auzon-Temple');
    var heroine = new Heroine('Kylee', 'Lac d\'Auzon-Temple');

    assert.equal(heroine.name, 'Kylee');
    assert.equal(heroine.location, 'Lac d\'Auzon-Temple');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lac d\'Auzon-Temple');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);
    assert.equal(heroine.hasWeapon, false);

    heroine.getRespirator();

    assert.equal(heroine.hasRespirator, true);

    heroine.getWeapon();

    assert.equal(heroine.hasWeapon, true);

    heroine.enterLair(hydra);

    assert.equal(heroine.isAlive, true);

    assert.equal(hydra.heads.length, 3);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 4);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 5);

  });

  it.skip('should not grow back heads if heroine cauterizes its wounds', function () {

    var headNames = ['Pythagoras', 'Rossler', 'Lorenz'];
    var hydra = new Hydra(headNames);
    var heroine = new Heroine('Cierra', 'Lake Lerna');

    assert.equal(heroine.name, 'Cierra');
    assert.equal(heroine.location, 'Lake Lerna');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lerna');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);
    assert.equal(heroine.hasWeapon, false);
    assert.equal(heroine.hasTorch, false);

    heroine.getRespirator();

    assert.equal(heroine.hasRespirator, true);

    heroine.getWeapon();

    assert.equal(heroine.hasWeapon, true);

    heroine.enterLair(hydra);

    assert.equal(heroine.isAlive, true);
    assert.equal(hydra.heads.length, 3);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 4);
    assert.equal(heroine.hasTorch, false);

    heroine.getTorch();

    assert.equal(heroine.hasTorch, true);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 3);
    assert.equal(heroine.hasTorch, false);

  });

  it.skip('should die when it has no more heads', function () {

    var headNames = ['Menger', 'Viener', 'Hausdorff'];
    var hydra = new Hydra(headNames, 'Standley Lake');
    var heroine = new Heroine('Ashton', 'Standley Lake');

    assert.equal(heroine.name, 'Ashton');
    assert.equal(heroine.location, 'Standley Lake');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Standley Lake');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(hydra.isDead, false);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);
    assert.equal(heroine.hasWeapon, false);
    assert.equal(heroine.hasTorch, false);

    heroine.getRespirator();

    assert.equal(heroine.hasRespirator, true);

    heroine.getWeapon();

    assert.equal(heroine.hasWeapon, true);

    heroine.enterLair(hydra);

    assert.equal(heroine.isAlive, true);

    heroine.getTorch();

    assert.equal(heroine.hasTorch, true);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 2);
    assert.equal(hydra.isDead, false);
    assert.equal(heroine.hasTorch, false);

    heroine.getTorch();

    assert.equal(heroine.hasTorch, true);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 1);
    assert.equal(hydra.isDead, false);
    assert.equal(heroine.hasTorch, false);

    heroine.getTorch();

    assert.equal(heroine.hasTorch, true);

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 0);
    assert.equal(hydra.isDead, true);

  });

  it.skip('should not be poisonous when it is dead', function () {

    var headNames = ['Louisa', 'David', 'Travis'];
    var hydra = new Hydra(headNames, 'Turing Lake');
    var heroine1 = new Heroine('Sara', 'Turing Lake');
    var heroine2 = new Heroine('Jessica', 'Turing Lake');

    assert.equal(heroine1.name, 'Sara');
    assert.equal(heroine1.location, 'Turing Lake');
    assert.equal(heroine2.name, 'Jessica');
    assert.equal(heroine2.location, 'Turing Lake');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Turing Lake');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(hydra.isDead, false);
    assert.equal(heroine1.isAlive, true);
    assert.equal(heroine2.isAlive, true);
    assert.equal(heroine1.hasRespirator, false);
    assert.equal(heroine2.hasRespirator, false);
    assert.equal(heroine1.hasWeapon, false);
    assert.equal(heroine2.hasWeapon, false);
    assert.equal(heroine1.hasTorch, false);
    assert.equal(heroine2.hasTorch, false);

    heroine1.getRespirator();

    assert.equal(heroine1.hasRespirator, true);
    assert.equal(heroine2.hasRespirator, false);

    heroine1.getWeapon();

    assert.equal(heroine1.hasWeapon, true);
    assert.equal(heroine2.hasWeapon, false);

    heroine1.enterLair(hydra);

    assert.equal(heroine1.isAlive, true);
    assert.equal(heroine2.isAlive, true);

    heroine1.getTorch();

    assert.equal(heroine1.hasTorch, true);
    assert.equal(heroine2.hasTorch, false);

    heroine1.strike(hydra);

    assert.equal(hydra.heads.length, 2);
    assert.equal(heroine1.hasTorch, false);
    assert.equal(heroine2.hasTorch, false);

    heroine1.getTorch();

    assert.equal(heroine1.hasTorch, true);
    assert.equal(heroine2.hasTorch, false);

    heroine1.strike(hydra);

    assert.equal(hydra.heads.length, 1);
    assert.equal(heroine1.hasTorch, false);
    assert.equal(heroine2.hasTorch, false);

    heroine1.getTorch();

    assert.equal(heroine1.hasTorch, true);
    assert.equal(heroine2.hasTorch, false);

    heroine1.strike(hydra);

    assert.equal(hydra.heads.length, 0);
    assert.equal(hydra.isDead, true);
    assert.equal(hydra.isPoisonous, false);
    assert.equal(heroine1.hasTorch, false);
    assert.equal(heroine2.hasTorch, false);

    heroine2.enterLair(hydra);

    assert.equal(heroine2.isAlive, true);

  });

  it.skip('should be able to start with however many heads we have names for', function () {

    var headNames = ['Maia', 'Electra', 'Taygete', 'Alcyone', 'Celaeno', 'Sterope', 'Merope'];
    var hydra = new Hydra(headNames, 'Limni Pleiades');

    assert.equal(hydra.heads[0].name, 'Maia');
    assert.equal(hydra.heads[1].name, 'Electra');
    assert.equal(hydra.heads[2].name, 'Taygete');
    assert.equal(hydra.heads[3].name, 'Alcyone');
    assert.equal(hydra.heads[4].name, 'Celaeno');
    assert.equal(hydra.heads[5].name, 'Sterope');
    assert.equal(hydra.heads[6].name, 'Merope');
    assert.equal(hydra.heads.length, 7);
    assert.equal(hydra.lair, 'Limni Pleiades');

  });

});

describe('Heroine', function () {
  it.skip('should be a function', function () {

    assert.isFunction(Heroine);

  });

  it.skip('should instantiate our good friend, Heroine', function () {

    var heroine = new Heroine();

    assert.isObject(heroine);

  });

  it.skip('should have a name', function () {

    var heroine = new Heroine('Dina');

    assert.equal(heroine.name, 'Dina');

  });

  it.skip('should have a location', function () {

    var heroine = new Heroine('Casey', 'Horsetooth Reservoir');

    assert.equal(heroine.name, 'Casey');
    assert.equal(heroine.location, 'Horsetooth Reservoir');

  });

  function hydraCheck (hydra, headNames) {
    headNames.forEach(function(name, index) {
      assert.equal(hydra.heads[index].name, name);
    });
    assert.equal(hydra.heads.length, headNames.length);
  }

  it.skip('should not be able to enter the hydra lair if she isn\'t there', function () {

    var headNames = ['Douady', 'Vicsek', 'Weierstrass'];
    var hydra = new Hydra(headNames);
    var heroine = new Heroine('Lindsey', 'Loch Ness');

    assert.equal(heroine.name, 'Lindsey');
    assert.equal(heroine.location, 'Loch Ness');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lerna');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);

    assert.equal(heroine.enterLair(hydra), 'I can\'t do that right now.');

    heroine.enterLair(hydra);

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);

  });

  it.skip('should not be able to strike the hydra if she\'s dead', function () {

    var headNames = ['Levy', 'Mandelbrot', 'Hilbert'];
    var hydra = new Hydra(headNames);
    var heroine = new Heroine('Sabrin', 'Lake Lerna');

    assert.equal(heroine.name, 'Sabrin');
    assert.equal(heroine.location, 'Lake Lerna');

    hydraCheck(hydra, headNames);

    assert.equal(hydra.lair, 'Lake Lerna');

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, true);
    assert.equal(heroine.hasRespirator, false);

    heroine.enterLair(hydra);

    assert.equal(hydra.isPoisonous, true);
    assert.equal(heroine.isAlive, false);
    assert.equal(heroine.hasRespirator, false);

    assert.equal(hydra.heads.length, 3);

    assert.equal(heroine.strike(hydra), 'I can\'t do that right now.');

    heroine.strike(hydra);

    assert.equal(hydra.heads.length, 3);

  });

// ********** __________ go to line 124 __________ ********** //

});