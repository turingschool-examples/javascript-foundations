var assert = require('chai').assert;
var Pet = require('../lib/pet')
var Wand = require('../lib/wand')
var Wizard = require('../lib/wizard')

describe('Wizard', function () {

  it('should be a function', function () {
    var wizard = new Wizard();

    assert.isFunction(Wizard);
  });

  it('should have a name', function () {
    var wizard = new Wizard('Hermione'); // yes we know Hermione is not a wizard

    assert.equal(wizard.name, 'Hermione');
  });

  it('should have a different name', function () {
    var wizard = new Wizard('Ron');

    assert.equal(wizard.name, 'Ron');
  });

  it('should have a pet', function () {
    var wizard = new Wizard('Hermione');
    var pet = new Pet('Crookshanks', 'cat');
    wizard.givePet(pet);

    assert.equal(wizard.petsCount, 1);
    assert.equal(wizard.pets[0], pet);
  });

  it('should be able to have many pets', function (){
    var wizard = new Wizard('Hermione');
    var pet = new Pet('Crookshanks', 'cat');
    var pet2 = new Pet('Hedwig', 'owl');
    wizard.givePet(pet);
    wizard.givePet(pet2);

    assert.equal(wizard.petsCount, 2);
    assert.equal(wizard.pets[0], pet);
    assert.equal(wizard.pets[1], pet2);
  });

  it('should list pets as a string', function () {
    var wizard = new Wizard('Hermione');
    var pet = new Pet('Crookshanks', 'cat');
    var pet2 = new Pet('Hedwig', 'owl');
    wizard.givePet(pet);
    wizard.givePet(pet2);

    assert.equal(wizard.petList(), "Crookshanks, a cat, Hedwig, an owl.");
  });

  it('should have a wand', function () {
    var wizard = new Wizard('Hermione');
    var wand = new Wand("Cherry", 12, "Unicorn Hair");
    wizard.giveWand(wand);

    assert.equal(wizard.wand, wand);
  });

  it('should cast a spell', function () {
    var wizard = new Wizard('Hermione');
    var wand = new Wand("Cherry", 12, "Unicorn Hair");
    wizard.giveWand(wand);

    assert.equal(wizard.wand, wand);
    assert.equal(wizard.castSpell('Expecto Patromun'), 'Casting Expecto Patromun!');
  });
});
