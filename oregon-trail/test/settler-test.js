var assert = require('chai').assert;
var Settler = require('../src/settler.js');

describe('Settler', function() {
  it.skip('should have a name', function() {
    var will = new Settler({ name: 'Will' });
    var hannah = new Settler({ name: 'Hannah' });

    assert.equal(will.name, 'Will');
    assert.equal(hannah.name, 'Hannah');
  });

  it.skip('should have an age', function() {
    var will = new Settler({ name: 'Will', age: 33 });
    var hannah = new Settler({ name: 'Hannah', age: 30 });

    assert.equal(will.age, 33);
    assert.equal(hannah.age, 30);
  });

  it.skip('should have an unknown nationality by default', function() {
    var traveler = new Settler({ name: 'Will', age: 21 });

    assert.equal(traveler.nationality, 'unknown');
  });

  it.skip('should be able to have a nationality', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    assert.equal(traveler.nationality, 'English');
  });

  it.skip('should be healthy by default', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    assert.equal(traveler.status, 'healthy');
  });

  it.skip('should have no ailments by default', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    assert.deepEqual(traveler.ailments, []);
  });

  it.skip('should be able to experience distress', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    traveler.experienceDistress('broken arm');

    assert.deepEqual(traveler.ailments, ['broken arm']);
    assert.equal(traveler.status, 'fair');
  });

  it.skip('should be able to become more distressed', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    traveler.experienceDistress('broken arm');
    traveler.experienceDistress('dysentery');

    assert.deepEqual(traveler.ailments, ['broken arm', 'dysentery']);
    assert.equal(traveler.status, 'poor');
  });

  it.skip('should be able to die from too many ailments', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    traveler.experienceDistress('broken arm');
    traveler.experienceDistress('snake bite');
    traveler.experienceDistress('dysentery');

    assert.deepEqual(traveler.ailments, ['broken arm', 'snake bite', 'dysentery']);
    assert.equal(traveler.status, 'dead');
  });

  it.skip('should not be able to experience distress after death', function() {
    var traveler = new Settler({name: 'Will', age: 21, nationality: 'English'});

    traveler.experienceDistress('broken arm');
    traveler.experienceDistress('snake bite');
    traveler.experienceDistress('dysentery');
    traveler.experienceDistress('bear attack');

    assert.deepEqual(traveler.ailments, ['broken arm', 'snake bite', 'dysentery']);
    assert.equal(traveler.status, 'dead');
  });

  it.skip('should be able to be healed', function() {
    var will = new Settler({ name: 'Will', age: 21, nationality: 'English' });
    var hannah = new Settler({ name: 'Hannah', age: 30, nationality: 'English' });

    will.experienceDistress('broken arm');
    will.experienceDistress('snake bite');
    will.heal();

    hannah.experienceDistress('scurvy');
    hannah.experienceDistress('flu');
    hannah.heal();

    assert.deepEqual(will.ailments, []);
    assert.equal(will.status, 'healthy');
    assert.deepEqual(hannah.ailments, []);
    assert.equal(hannah.status, 'healthy');
  });

  it.skip('should not be able to be healed if dead', function() {
    var traveler = new Settler({ name: 'Will', age: 21, nationality: 'English' });

    traveler.experienceDistress('broken arm');
    traveler.experienceDistress('snake bite');
    traveler.experienceDistress('dysentery');
    traveler.heal();

    assert.deepEqual(traveler.ailments, ['broken arm', 'snake bite', 'dysentery']);
    assert.equal(traveler.status, 'dead');
    assert.equal(traveler.heal(), 'Sorry, we can\'t heal a corpse. Will needs a proper burial!');
  });
})
