var assert = require('chai').assert;
var Robe = require('../lib/robe');

describe('A wizard\'s robe', () => {

  it.skip('has a lot of pockets and initially all are empty', function () {
    var robe = new Robe();

    assert.equal(robe.pockets.length, 10);

    for (var i = 0; i < 10; i++) {
      assert.equal(robe.pockets[i].length, 0);
    }
  });

  it.skip('can put things in the pockets', function () {
    var robe = new Robe();

    robe.addToPocket('youth elixir potion');

    assert.equal(robe.pockets[0][0], 'youth elixir potion');
  });

  it.skip('can not have two things in one pocket', function () {
    var robe = new Robe();

    robe.addToPocket('youth elixir potion');
    assert.equal(robe.pockets[0][0], 'youth elixir potion');

    robe.addToPocket('magic wand');
    assert.equal(robe.pockets[1][0], 'magic wand');
  });

  it.skip('can fill up all the pockets', function () {
    var robe = new Robe();

    var cats = ['1 cat', '2 cat', '3 cat', '4 cat', '5 cat', '6 cat', '7 cat', '8 cat', '9 cat', '10 cat'];

    for (var i = 0; i < cats.length; i++) {
      robe.addToPocket(cats[i]);

      assert.equal(robe.pockets[i][0], cats[i]);
    }

    for (var i = 0; i < robe.pockets.length; i++) {
      assert.equal(robe.pockets[0].length, 1);
    }
  });

  it.skip('can retrieve things from pockets by name', function () {
    var robe = new Robe();
    robe.addToPocket('magic wand');

    var retrievedItem = robe.retrieve('magic wand');

    assert.equal(retrievedItem, 'magic wand');

    assert.equal(robe.pockets.length, 10);
    assert.deepEqual(robe.pockets[0], []);
  });

  it.skip('can empty all pockets', function () {
    var robe = new Robe();
    var cats = ['1 cat', '2 cat', '3 cat', '4 cat', '5 cat', '6 cat', '7 cat', '8 cat', '9 cat', '10 cat'];

    for (var i = 0; i < cats.length; i++) {
      robe.addToPocket(cats[i]);
    }

    robe.emptyAllPockets();

    assert.equal(robe.pockets.length, 10);

    for (var i = 0; i < 10; i++) {
      assert.equal(robe.pockets[i].length, 0);
    }
  });
});
