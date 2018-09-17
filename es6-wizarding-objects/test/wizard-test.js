const assert = require('chai').assert;
const Pet = require('../lib/pet')
const Wand = require('../lib/wand')
const Wizard = require('../lib/wizard')

describe('Wizard', () => {

  it.skip('should be a function', () => {
    const wizard = new Wizard();

    assert.isFunction(wizard);
  });

  it.skip('should have a name', () => {
    const wizard = new Wizard('Hermione'); // yes we know Hermione is not a wizard

    assert.equal(wizard.name, 'Hermione');
  });

  it.skip('could have a different name', () => {
    const wizard = new Wizard('Ron');

    assert.equal(wizard.name, 'Ron');
  });

  it.skip('should have a pet', () => {
    const wizard = new Wizard('Hermione');
    const pet = new Pet('Crookshanks', 'cat');
    wizard.givePet(pet);

    assert.equal(wizard.petsCount, 1);
    assert.equal(wizard.pets[0], pet);
  });

  it.skip('should be able to have many pets', () => {
    const wizard = new Wizard('Hermione');
 
    const pet = new Pet('Crookshanks', 'cat');
    const pet2 = new Pet('Hedwig', 'owl');
   
    wizard.givePet(pet);
    wizard.givePet(pet2);

    assert.equal(wizard.petsCount, 2);
    assert.equal(wizard.pets[0], pet);
    assert.equal(wizard.pets[1], pet2);
  });

  it.skip('should list pets as a string', () => {
    const wizard = new Wizard('Hermione');
    
    const pet = new Pet('Crookshanks', 'cat');
    const pet2 = new Pet('Hedwig', 'owl');
    
    wizard.givePet(pet);
    wizard.givePet(pet2);

    assert.equal(wizard.petList(), "Crookshanks, a cat, Hedwig, an owl.");
  });

  it.skip('should have a wand', () => {
    const wizard = new Wizard('Hermione');
    const wand = new Wand("Cherry", 12, "Unicorn Hair");
 
    wizard.giveWand(wand);

    assert.equal(wizard.wand, wand);
  });

  it.skip('should cast a spell', () => {
    const wizard = new Wizard('Hermione');
    const wand = new Wand("Cherry", 12, "Unicorn Hair");
   
    wizard.giveWand(wand);

    assert.equal(wizard.wand, wand);
    assert.equal(wizard.castSpell('Expecto Patromun'), 'Casting Expecto Patromun!');
    assert.equal(wizard.castSpell('Accio'), 'Casting Accio!');
  });
});
