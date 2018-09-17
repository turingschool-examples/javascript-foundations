const assert = require('chai').assert;
const Ogre = require('../exercises/ogre');
const Human = require('../exercises/human');

describe('Ogre', () => {

  it.skip('should be a function', () => {
    assert.isFunction(Ogre);
  });

  it.skip('should instantiate our good friend, Ogre', () => {
    const ogre = new Ogre();
    assert.isObject(ogre);
  });

  it.skip('should have a name', () => {
    const ogre = new Ogre('Brak');
    assert.equal(ogre.name, 'Brak');
  });

  it.skip('should live in a Swamp by default', () => {
    const ogre = new Ogre('Brak');
    assert.equal(ogre.home, 'Swamp');
  });

  it.skip('does not have to live in a swamp', () => {
    const ogre = new Ogre('Brak', 'The Ritz');
    assert.equal(ogre.home, 'The Ritz');
  });

  it.skip('it can meet humans', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    assert.equal(human.name, 'Jane');

    ogre.encounter(human);
    assert.equal(human.encounterCounter, 1);
  });

  it.skip('humans should only notice an ogre every third encounter', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it.skip('human notices ogre on the sixth encounter', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);

    ogre.encounter(human);
    ogre.encounter(human);
    assert.equal(human.noticesOgre(), false);

    ogre.encounter(human);
    assert.equal(human.noticesOgre(), true);
  });

  it.skip('can swing a club', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    ogre.swingAt(human);

    assert.equal(ogre.swings, 1);
  });

  it.skip('ogre swings the club when a human notices it', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    ogre.encounter(human);
    assert.equal(ogre.swings, 0);

    ogre.encounter(human);
    ogre.encounter(human);

    assert.equal(human.noticesOgre(), true);
    assert.equal(ogre.swings, 1);
  });

  it.skip('ogre hits human every second time it swings', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);
    ogre.encounter(human);

    assert.equal(human.encounterCounter, 6);
    assert.equal(ogre.swings, 2);
    assert.equal(human.knockedOut, true);
  });

  it.skip('human wakes up when ogre apologizes', () => {
    const ogre = new Ogre('Brak');
    const human = new Human('Jane');

    ogre.apologize(human);
    assert.equal(human.knockedOut, false);
  });
});