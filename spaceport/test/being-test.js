var assert = require('chai').assert;
var Being = require('../src/being');

describe('Being', function() {
  it('should be alive by default', function() {
    var scott = new Being('Scott');

    assert.isTrue(scott.isAlive);
  });

  it('should have a name', function() {
    var kayla = new Being('Kayla');
    var hannah = new Being('Hannah');

    assert.equal(kayla.name, 'Kayla');
    assert.equal(hannah.name, 'Hannah');
  });

  it('should have a species', function() {
    var clementine = new Being('Clem', 'feline');
    var captain = new Being('Cap', 'canine');

    assert.equal(clementine.species, 'feline');
    assert.equal(captain.species, 'canine');
  });

  it('should have 0 credits by default', function() {
    var krill = new Being('Scott', 'krill');

    assert.equal(krill.credits, 0);
  });

  it('should be able to add credits', function() {
    var baby = new Being('Baby', 'feline');

    baby.updateCredits(2000);

    assert.equal(baby.credits, 2000);
  });

  it('should be able to add even more credits', function() {
    var krill = new Being('Scott', 'krill');

    krill.updateCredits(2000);
    krill.updateCredits(1000);

    assert.equal(krill.credits, 3000);
  });

  it('should be able to reduce credits', function() {
    var alien = new Being('Kayla', 'alien');

    alien.updateCredits(2000);
    alien.updateCredits(-1000);

    assert.equal(alien.credits, 1000);
  });
})
