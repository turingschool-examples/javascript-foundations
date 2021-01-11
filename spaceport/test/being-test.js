var assert = require('chai').assert;
var Being = require('../src/being');

describe('Being', function() {
  it.skip('is alive by default', function() {
    var alien = new Being('Walter')

    assert.isTrue(alien.isAlive)
  })

  it.skip('should have a name', function() {
    var alien = new Being('Walter')

    assert.equal(alien.name, 'Walter')
  })

  it.skip('can have a different name', function() {
    var alien = new Being('Ed')

    assert.equal(alien.name, 'Ed')
  })

  it.skip('has a species', function() {
    var alien = new Being('Ed', 'human')

    assert.equal(alien.species, 'human')
  })

  it.skip('has a different species', function() {
    var alien = new Being('Ed', 'krill')

    assert.equal(alien.species, 'krill')
  })

  it.skip('has no credits by default', function() {
    var alien = new Being('Ed', 'krill')

    assert.equal(alien.credits, 0)
  })

  it.skip('can update credits', function() {
    var alien = new Being('Ed', 'krill')

    alien.updateCredits(2000)

    assert.equal(alien.credits, 2000)
  })

  it.skip('can update credits if it alread has some', function() {
    var alien = new Being('Ed', 'krill')

    alien.updateCredits(2000)
    alien.updateCredits(1000)

    assert.equal(alien.credits, 3000)
  })

  it.skip('can reduce credits as well', function() {
    var alien = new Being('Ed', 'krill')

    alien.updateCredits(2000)
    alien.updateCredits(-1000)

    assert.equal(alien.credits, 1000)
  })
})
