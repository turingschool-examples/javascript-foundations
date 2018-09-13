var assert = require('chai').assert;
var Alien = require('../exercises/alien');
var Citizen = require('../exercises/citizen');


describe('Alien', function () {

  it('should be a function', function () {
    assert.isFunction(Alien);
  });

  it('should have a name', function(){
    var alien = new Alien("Jamie");
    assert.equal(alien.name, "Jamie")
  })

  it('should have a ship capacity', function(){
    var alien = new Alien("Jamie", 5);
    assert.equal(alien.shipCapacity, 5)
  })

  /////COMPLETE CITIZEN TESTS BELOW BEFORE MOVING ON

  it('should be able to abduct citizens', function() {
    var alien = new Alien("Mark", 7);
    var citizen = new Citizen("John", 25, 96);
    alien.abduct(citizen);
    assert.equal(citizen.abducted, true);
    assert.deepEqual(alien.abductees, [citizen])
  })

  it('should be able to abduct multiple citizens at a time', function(){
    var alien = new Alien("Sarah", 8);
    var citizen1 = new Citizen("John", 25, 96);
    var citizen2 = new Citizen("Mary", 45, 116);
    var citizen3 = new Citizen("Freddy", 55, 106);
    var citizens = [citizen1, citizen2, citizen3];
    alien.abduct(citizens);
    assert.deepEqual(alien.abductees, [citizen1, citizen2, citizen3]);
    assert.equal(citizen1.abducted, true);
    assert.equal(citizen2.abducted, true);
    assert.equal(citizen3.abducted, true);
  })

  it('should not abduct any more citizens once ship is full.', function(){
    var alien = new Alien("Aaron", 3);
    var citizen1 = new Citizen("John", 25, 96);
    var citizen2 = new Citizen("Mary", 45, 116);
    var citizen3 = new Citizen("Freddy", 55, 106);
    var citizen4 = new Citizen("Bob", 56, 56);
    var citizens = [citizen1, citizen2, citizen3, citizen4];
    alien.abduct(citizens);
    assert.deepEqual(alien.abductees, [citizen1, citizen2, citizen3]);
    assert.equal(citizen1.abducted, true);
    assert.equal(citizen2.abducted, true);
    assert.equal(citizen3.abducted, true);
    assert.equal(citizen4.abducted, false);
  })

  it('should be able to harvest organs of abducted citizens', function(){
    var alien = new Alien("Tron", 3);
    var citizen1 = new Citizen("John", 18, 134);
    var citizen2 = new Citizen("Mary", 25, 119);
    var citizens = [citizen1, citizen2];
    alien.abduct(citizens);
    alien.harvestOrgans();
    assert.deepEqual(alien.abductees, []);
    assert.deepEqual(alien.organs, [citizen1, citizen2])
    assert.equal(citizen1.dead, true)
    assert.equal(citizen2.dead, true)
  })

  it('should only harvest organs of citizens with iqs over 100. It should release other citizens', function(){
    var alien = new Alien("Troy", 3);
    var citizen1 = new Citizen("James", 18, 134);
    var citizen2 = new Citizen("Steven", 25, 99);
    var citizens = [citizen1, citizen2];

    alien.abduct(citizens);
    alien.harvestOrgans(alien.abductees);

    assert.deepEqual(alien.abductees, []);
    assert.deepEqual(alien.organs, [citizen1])
    assert.equal(citizen1.dead, true)
    assert.equal(citizen2.dead, false)
    assert.equal(citizen2.abducted, false)
  })

  it('should only harvest the organs of citizens between the ages of 15-45. It should release other citizens', function(){
    var alien = new Alien("Barney", 3);
    var citizen1 = new Citizen("Svetlana", 18, 76);
    var citizen2 = new Citizen("Erin", 25, 102);
    var citizen3 = new Citizen("Maria", 20, 137);
    var citizen4 = new Citizen("Tom", 55, 102);
    var citizens = [citizen1, citizen2, citizen3, citizen4];

    alien.abduct(citizens);
    alien.harvestOrgans(alien.abductees);

    assert.deepEqual(alien.abductees, []);
    assert.deepEqual(alien.organs, [citizen2, citizen3])
    assert.equal(citizen1.dead, false)
    assert.equal(citizen2.dead, true)
    assert.equal(citizen3.dead, true)
    assert.equal(citizen4.dead, false)
    assert.equal(citizen1.abducted, false)
    assert.equal(citizen2.abducted, true)
    assert.equal(citizen3.abducted, true)
    assert.equal(citizen4.abducted, false)
  })

  it('citizens with iqs greater than 150 should be able to free themselves and other abductees upon harvest', function(){
    var alien = new Alien("Barney", 3);
    var citizen1 = new Citizen("Svetlana", 18, 76);
    var citizen2 = new Citizen("Erin", 25, 156);
    var citizen3 = new Citizen("Maria", 20, 137);
    var citizens = [citizen1, citizen2, citizen3];

    alien.abduct(citizens);
    alien.harvestOrgans(alien.abductees);
    assert.deepEqual(alien.abductees, []);
    assert.deepEqual(alien.organs, []);
    assert.equal(citizen1.dead, false);
    assert.equal(citizen2.dead, false);
    assert.equal(citizen3.dead, false);
    assert.equal(citizen1.abducted, false);
    assert.equal(citizen2.abducted, false);
    assert.equal(citizen3.abducted, false);
  })

});

describe('Citizen', function () {

  it('should be a function', function() {
    assert.isFunction(Citizen);
  });

  it('should have a name', function() {
    var citizen = new Citizen("Johnny");
    assert.equal(citizen.name, "Johnny")
  });

  it('should have an age and iq', function() {
    var citizen = new Citizen("Josie", 26, 112);
    assert.equal(citizen.age, 26);
    assert.equal(citizen.iq, 112);
  })

  it('should not be abducted or dead by default', function() {
    var citizen = new Citizen("Jorge", 26, 112);
    assert.equal(citizen.abducted, false);
    assert.equal(citizen.dead, false);
  })
});
