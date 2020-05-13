var assert = require('chai').assert;
var Magician = require('../exercises/magician');

describe('Magician', function() {

  it.skip('should be a function that instantiates a class', function() {
    assert.isFunction(Magician);
    assert.instanceOf(new Magician(), Magician());
  });

  it.skip('should have a name', function() {
    var magician1 = new Magician({ name: 'Scott' });
    var magician2 = new Magician({ name: 'Casey' });

    assert.equal(magician1.name, 'Scott');
    assert.equal(magician2.name, 'Casey');
  });

  it.skip('should have a top hat by default', function() {
    var magician = new Magician({ name: 'Scott' });

    assert.equal(magician.topHat, true);
  });

  it.skip('should not always have a hat', function() {
    var magician = new Magician({ name: 'Casey', topHat: false });

    assert.equal(magician.topHat, false)
  });

  it.skip('should be able to cast a spell', function() {
    var magician = new Magician({ name: 'Scott', topHat: false });
    
    var spell = magician.incantation('abracadabra');
    var charm = magician.incantation('allakazaam')
    
    assert.equal(spell, 'ABRACADABRA!');
    assert.equal(charm, 'ALLAKAZAAM!');
  });
  
  it.skip('should be able to pull a rabbit from the hat, if the magician has a top hat', function() {
    var magician = new Magician({ name: 'Casey' });
    
    var spell = magician.cast();
    
    assert.equal(spell, 'PULL RABBIT FROM TOP HAT');
  });
  
  it.skip('should be able to pull a dove from the sleeve, if the magician does not have a top hat', function() {
    var magician = new Magician({ name: 'Leta', topHat: false });
    
    var spell = magician.cast();
    
    assert.equal(spell, 'PULL DOVE FROM SLEEVE');
  });
  
  it.skip('should start not confident', function() {
    var magician = new Magician({ name: 'Leta', topHat: false });
    
    assert.equal(magician.confident, false);
  });
  
  it.skip('should become confident after casting three spells', function() {
    var magician = new Magician({ name: 'Leta', topHat: false });

    magician.cast();
    magician.cast();
    magician.cast();

    assert.equal(magician.confident, true);
  });

  it.skip('should not be able to saw someone in half unless they\'re confident', function() {
    var magician = new Magician({ name: 'Scott', topHat: false });

    assert.equal(magician.performShowStopper(), 'Oh no! Practice more before attempting this trick!');

    magician.cast();
    magician.cast();
    magician.cast();

    assert.equal(magician.performShowStopper(), 'WOW! The magician totally just sawed that person in half!');
  });
});
