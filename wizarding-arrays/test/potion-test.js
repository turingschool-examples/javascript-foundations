const assert = require('chai').assert;
const Cabinet = require('../lib/cabinet');
const Potion = require('../lib/potion');

describe('A wizard\'s potions cabinet and potions', () => {

  describe('A potion', () => {
    it('has a name', () => {
      const potion = new Potion('truth serum');

      assert.equal(potion.name, 'truth serum');
    });

    it.skip('indicates rareness by integers, 0 being not rare', () => {
      const potion = new Potion('truth serum', 5);

      assert.equal(potion.rareness, 5);
    });

    it.skip('is not rare by default', () => {
      const potion = new Potion('truth serum');

      assert.equal(potion.rareness, 0);
    });

    it.skip('indicates whether or not it is rare', () => {
      // note: potions with a `rareness` score above 7 count as rare potions.
      const potion1 = new Potion('truth serum', 0);
      assert.equal(potion1.isRare(), false);

      const potion2 = new Potion('truth serum', 7);
      assert.equal(potion2.isRare(), false);

      const potion3 = new Potion('truth serum', 8);
      assert.equal(potion3.isRare(), true);

      const potion4 = new Potion('truth serum', 12);
      assert.equal(potion4.isRare(), true);
    });
  });

  describe('A potion cabinet', () => {

    it.skip('keeps all potions', () => {
      const cabinet = new Cabinet();
      assert.deepEqual(cabinet.potions, []);
    });

    it.skip('is empty if nothing is put in it', () => {
      const cabinet = new Cabinet();
      assert.equal(cabinet.isEmpty(), true);
    });

    it.skip('is possible to put things in the cabinet', () => {
      const cabinet = new Cabinet();
      const potion = new Potion('truth serum', 12);

      cabinet.add(potion);

      assert.equal(cabinet.isEmpty(), false);
      assert.equal(cabinet.potions[0], potion);
    });

    it.skip('is possible to take things out of the cabinet', () => {
      const cabinet = new Cabinet();

      const potion1 = new Potion('truth serum', 12);
      const potion2 = new Potion('youth elixir');
      const potion3 = new Potion('rogaine');
      const potions = [potion1, potion2, potion3];

      cabinet.add(potions);

      assert.equal(cabinet.isEmpty(), false);
      assert.equal(cabinet.potions.length, potions.length);

      const retrievedPotion = cabinet.takeFirstPotion();

      assert.equal(cabinet.potions.length, potions.length - 1);
      assert.equal(retrievedPotion, potion1);
    });

    it.skip('is possible to take potions out by name', () => {
      const cabinet = new Cabinet();

      const potion1 = new Potion('truth serum', 12);
      const potion2 = new Potion('youth elixir');
      const potion3 = new Potion('rogaine');
      const potion4 = new Potion('sleeping pills');
      const potion5 = new Potion('ibuprofen');

      const potions = [potion1, potion2, potion3, potion4, potion5];

      cabinet.add(potions);

      const retrievedPotion1 = cabinet.takePotionWithName('rogaine');
      assert.equal(retrievedPotion1, potion3);

      const retrievedPotion2 = cabinet.takePotionWithName('youth elixir');
      assert.equal(retrievedPotion2, potion2);

      assert.equal(cabinet.potions.length, 3);
    });

    it.skip('is possible to have duplicate potions in the cabinet', () => {
      const cabinet = new Cabinet();

      const potion1 = new Potion('truth serum', 12);
      const potion2 = new Potion('youth elixir');
      const potion3 = new Potion('youth elixir');
      const potion4 = new Potion('sleeping pills');
      const potion5 = new Potion('ibuprofen');

      const potions = [potion1, potion2, potion3, potion4, potion5];

      cabinet.add(potions);

      assert.equal(cabinet.count('youth elixir'), 2);
      assert.equal(cabinet.count('sleeping pills'), 1);
    });

  });
});
