var assert = require('chai').assert;
var Magician = require('../exercises/magician');

describe('Magician', function() {
// Oh no! It looks like there's no text in the `it` blocks! I guess you'll have to read the tests SUPER carefully to know what the test is expecting!

it('Should be a function', function() {
    assert.isFunction(Magician);
    assert.instanceOf(new Magician({}), Magician);
  });

it('Should have name', function() {
    var magician1 = new Magician({ name: 'Scott' });
    var magician2 = new Magician({ name: 'Casey' });

    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician2.name, 'The Great Casey');
  });

it('Should have assistant in boolean', function() {
    var magician1 = new Magician({ name: 'Scott', assistant: true });
    var magician2 = new Magician({ name: 'Casey', assistant: false });

    assert.equal(magician1.name, 'The Great Scott');
    assert.equal(magician1.assistant, true);

    assert.equal(magician2.name, 'The Great Casey');
    assert.equal(magician2.assistant, false);
  });

it('Should have favorite accessory default to top hat', function() {
    var magician = new Magician({ name: 'Scott' });

    assert.equal(magician.favoriteAccessory, 'top hat');
  });

it('Should be able to have different colthing', function() {
    var magician = new Magician({ name: 'Casey', clothing: 'cape' });

    assert.equal(magician.favoriteAccessory, 'cape')
  });

it('Should ablt to perform incantation in uppercase', function() {
    var magician = new Magician({ name: 'Scott' });

    var spell = magician.performIncantation('abracadabra');
    var charm = magician.performIncantation('allakazaam')

    assert.equal(spell, 'ABRACADABRA!');
    assert.equal(charm, 'ALLAKAZAAM!');
  });

it('Should ba able to perform a trick', function() {
    var magician1 = new Magician({ name: 'Hannah' });
    var magician2 = new Magician({ name: 'Kayla', clothing: 'top hat' });

    var spell1 = magician1.performTrick();
    var spell2 = magician2.performTrick();

    assert.equal(spell1, 'PULL RABBIT FROM TOP HAT');
    assert.equal(spell2, 'PULL RABBIT FROM TOP HAT');
  });

it('Should be able to perform trick with different spell', function() {
    var magician = new Magician({ name: 'Leta', clothing: 'cape' });

    var spell = magician.performTrick();

    assert.equal(spell, 'PULL DOVE FROM SLEEVE');
  });

it('Should have confidence percentage default to 10', function() {
    var magician = new Magician({ name: 'Leta' });

    assert.equal(magician.confidencePercentage, 10);
  });

it('Should add 10 percent to confidence percentage everytime performTrick is called', function() {
    var magician = new Magician({ name: 'Leta' });

    magician.performTrick();
    magician.performTrick();
    magician.performTrick();

    assert.equal(magician.confidencePercentage, 40);

    magician.performTrick();

    assert.equal(magician.confidencePercentage, 50);
  });

it('Should be able to perform show stopper base on number of time the trick had performed', function() {
    var magician = new Magician({ name: 'Scott', assistant: true });

    assert.equal(magician.performShowStopper(), 'Oh no, this trick is not ready!');

    for (var i = 0; i < 10; i++) {
      magician.performTrick();
    }

    assert.equal(magician.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });

it('Should not able to perform a show stopper without an assistant', function() {
    var magician1 = new Magician({ name: 'Scott', assistant: false });
    var magician2 = new Magician({ name: 'Hannah', assistant: true });

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'Oh no, this trick is not ready!');

    for (var i = 0; i < 10; i++) {
      magician1.performTrick();
      magician2.performTrick();
    }

    assert.equal(magician1.performShowStopper(), 'Oh no, this trick is not ready!');
    assert.equal(magician2.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });
});
