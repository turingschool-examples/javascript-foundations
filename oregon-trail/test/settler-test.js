var assert = require('chai').assert;
var Settler = require('../src/settler.js');

describe('Settler', function() {
  it.skip('should have a name', function() {
    var traveler = new Settler({name: 'Will'});

    assert.equal(traveler.name, 'Will');
  })

  it.skip('should be able to have a different name', function() {
    var traveler = new Settler({name: 'Leta'});

    assert.equal(traveler.name, 'Leta');
  })

  it.skip('should have an age', function() {
    var traveler = new Settler({name: 'Will', age: 33});

    assert.equal(traveler.age, 33);
  })

  it.skip('should be able to have a different age', function() {
    var traveler = new Settler({name: 'Will', age: 21});

    assert.equal(traveler.age, 21);
  })

  it.skip('should have an unknown nationality by default', function() {
    var traveler = new Settler({name: 'Will', age: 21});

    assert.equal(traveler.nationality, 'unknown');
  })

  it.skip('should be able to have a nationality', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    assert.equal(traveler.nationality, 'English');
  })

  it.skip('should be healthy by default', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    assert.equal(traveler.status, 'healthy');
  })

  it.skip('should have no ailments by default', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    assert.deepEqual(traveler.ailments, []);
  })

  it.skip('should be able to experience distress', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm')

    assert.deepEqual(traveler.ailments, ['broken arm']);
    assert.equal(traveler.status, 'fair');
  })

  it.skip('should be able to become more distressed', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm')
    traveler.experienceDistress('dysentery')

    assert.deepEqual(traveler.ailments, ['broken arm', 'dysentery']);
    assert.equal(traveler.status, 'poor');
  })

  it.skip('should be able to be killed', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm')
    traveler.experienceDistress('snake bite')
    traveler.experienceDistress('dysentery')

    assert.deepEqual(traveler.ailments, ['broken arm', 'snake bite', 'dysentery']);
    assert.equal(traveler.status, 'dead');
  })

  it.skip('should not be able to experience distress after death', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm')
    traveler.experienceDistress('snake bite')
    traveler.experienceDistress('dysentery')
    traveler.experienceDistress('bear attack')

    assert.deepEqual(traveler.ailments, ['broken arm', 'snake bite', 'dysentery']);
    assert.equal(traveler.status, 'dead');
  })

  it.skip('should be able to be healed', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm')
    traveler.experienceDistress('snake bite')
    traveler.heal()

    assert.deepEqual(traveler.ailments, []);
    assert.equal(traveler.status, 'healthy');
  })

  it.skip('should not be able to be healed if dead', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm')
    traveler.experienceDistress('snake bite')
    traveler.experienceDistress('dysentery')
    traveler.heal()

    assert.deepEqual(traveler.ailments, ['broken arm', 'snake bite', 'dysentery']);
    assert.equal(traveler.status, 'dead');
  })
})
