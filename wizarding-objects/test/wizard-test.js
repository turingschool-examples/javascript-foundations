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
    const hermyown = new Wizard('Hermione');
    const wonwon = new Wizard('Ron');

    assert.equal(hermyown.name, 'Hermione');
    assert.equal(wonwon.name, 'Ron');
  });

  it.skip('should have a pet', () => {
    const wizard = new Wizard('Hermione');
    const pet = new Pet('Crookshanks', 'cat');

    wizard.adoptPet(pet);

    assert.equal(wizard.petsCount, 1);
    assert.equal(wizard.pets[0], pet);
  });

  it.skip('should be able to have many pets', () => {
    const wizard = new Wizard('Hermione');
 
    const pet1 = new Pet('Crookshanks', 'cat');
    const pet2 = new Pet('Hedwig', 'owl');
   
    wizard.adoptPet(pet1);
    wizard.adoptPet(pet2);

    assert.equal(wizard.petsCount, 2);
    assert.equal(wizard.pets[0], pet1);
    assert.equal(wizard.pets[1], pet2);
  });

  it.skip('should list pets as a string', () => {
    const wizard = new Wizard('Hermione');
    
    const pet1 = new Pet('Crookshanks', 'cat');
    const pet2 = new Pet('Hedwig', 'owl');
    
    wizard.adoptPet(pet1);
    wizard.adoptPet(pet2);

    var hermionesPets = wizard.petList();

    assert.equal(hermionesPets, "A cat named Crookshanks; an owl named Hedwig.");
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
