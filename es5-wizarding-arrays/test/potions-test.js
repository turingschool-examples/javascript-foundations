var assert = require('chai').assert;
var Cabinet = require('../lib/cabinet');
var Potion = require('../lib/potion');

describe('A wizard\'s potions cabinet and potions', () => {

  describe('A potion', function () {
    it('has a name', function () {
      var potion = new Potion('truth serum');

      assert.equal(potion.name, 'truth serum');
    });

    it.skip('indicates rareness by integers, 0 being not rare', function () {
      var potion = new Potion('truth serum', 5);

      assert.equal(potion.rareness, 5);
    });

    it.skip('is not rare by default', function () {
      var potion = new Potion('truth serum');

      assert.equal(potion.rareness, 0);
    });

    it.skip('indicates whether or not it is rare', function () {
      // note: potions with a `rareness` score above 7 count as rare potions.
      var potion = new Potion('truth serum', 0);
      assert.equal(potion.isRare(), false);

      var potion = new Potion('truth serum', 7);
      assert.equal(potion.isRare(), false);

      var potion = new Potion('truth serum', 8);
      assert.equal(potion.isRare(), true);

      var potion = new Potion('truth serum', 12);
      assert.equal(potion.isRare(), true);
    });
  });

  describe('A potion cabinet', function () {

    it.skip('keeps all potions', () => {
      var cabinet = new Cabinet();
      assert.deepEqual(cabinet.potions, []);
    });

    it.skip('is empty if nothing is put in it', function () {
      var cabinet = new Cabinet();
      assert.equal(cabinet.isEmpty(), true);
    });

    it.skip('is possible to put things in the cabinet', function () {
      var cabinet = new Cabinet();
      var potion = new Potion('truth serum', 12);

      cabinet.add(potion);

      assert.equal(cabinet.isEmpty(), false);
      assert.equal(cabinet.potions[0], potion);
    });

    it.skip('is possible to take things out of the cabinet', function () {
      var cabinet = new Cabinet();

      var potion1 = new Potion('truth serum', 12);
      var potion2 = new Potion('youth elixir');
      var potion3 = new Potion('rogaine');
      var potions = [potion1, potion2, potion3];

      cabinet.add(potions);

      assert.equal(cabinet.isEmpty(), false);
      assert.equal(cabinet.potions.length, potions.length);

      // note: this function takes the first potion in the cabinet
      var retrievedPotion = cabinet.takeFirstPotion();

      assert.equal(cabinet.potions.length, potions.length - 1);
      assert.equal(retrievedPotion, potion1);
    });

    it.skip('is possible to take potions out by name', function () {
      var cabinet = new Cabinet();

      var potion1 = new Potion('truth serum', 12);
      var potion2 = new Potion('youth elixir');
      var potion3 = new Potion('rogaine');
      var potion4 = new Potion('sleeping pills');
      var potion5 = new Potion('ibuprofen');

      var potions = [potion1, potion2, potion3, potion4, potion5];

      cabinet.add(potions);

      var retrievedPotion = cabinet.takePotionWithName('rogaine');
      assert.equal(retrievedPotion, potion3);

      var retrievedPotion = cabinet.takePotionWithName('youth elixir');
      assert.equal(retrievedPotion, potion2);

      assert.equal(cabinet.potions.length, 3);
    });

    it.skip('is possible to have duplicate potions in the cabinet', function () {
      var cabinet = new Cabinet();

      var potion1 = new Potion('truth serum', 12);
      var potion2 = new Potion('youth elixir');
      var potion3 = new Potion('youth elixir');
      var potion4 = new Potion('sleeping pills');
      var potion5 = new Potion('ibuprofen');

      var potions = [potion1, potion2, potion3, potion4, potion5];

      cabinet.add(potions);

      assert.equal(cabinet.count('youth elixir'), 2);
      assert.equal(cabinet.count('sleeping pills'), 1);
    });

    it.skip('when removing a potion with a duplicate, only one is removed', function () {
      var cabinet = new Cabinet();

      var potion1 = new Potion('truth serum', 12);
      var potion2 = new Potion('youth elixir');
      var potion3 = new Potion('youth elixir');
      var potion4 = new Potion('sleeping pills');
      var potion5 = new Potion('ibuprofen');

      var potions = [potion1, potion2, potion3, potion4, potion5];

      cabinet.add(potions);
      assert.equal(cabinet.count('youth elixir'), 2);

      cabinet.takePotionWithName('youth elixir');

      assert.equal(cabinet.count('youth elixir'), 1);
    });
  });
});
