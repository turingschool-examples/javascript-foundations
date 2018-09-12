var assert = require('chai').assert;
var Monster = require('../exercises/monster.js');
var Child = require('../exercises/child.js');

describe('Monster', function(){
  it('should be a function', function () {
    assert.isFunction(Monster);
  });

  it('should have a name', function() {
    var monster = new Monster("Sully");
    assert.equal(monster.name, "Sully")
  })

  it('should default to a scariness of 0', function() {
    var monster = new Monster("Mike");
    assert.equal(monster.scariness, 0)
  })

  it('should be able to have a higher scariness', function() {
    var monster = new Monster("George", 2);
    assert.equal(monster.scariness, 2)
  })

  it('should default to not being contaminated', function() {
    var monster = new Monster("Sully");
    assert.equal(monster.contaminated, false)
  })

  //////////COMPLETE CHILD TESTS BELOW BEFORE MOVING ON

  it('Monsters should be able to scare children', function(){
    var monster = new Monster("Randall", 2);
    var child = new Child("Thomas");
    assert.equal(monster.scare(child), "RAWR");
  })

  it('Children should scream when scared', function() {
    var monster = new Monster("Randall", 2);
    var child = new Child("Thomas");
    monster.scare(child);
    assert.equal(child.scared, true);
  })

  it('Only monsters with a scariness 2 or greater should be able to scare chilren', function(){
    var monster1 = new Monster("Randall", 2);
    var monster2 = new Monster("Mike")
    var child1 = new Child("Thomas");
    var child2 = new Child("Tim")
    assert.equal(monster1.scare(child1), "RAWR");
    assert.equal(child1.scared, true);
    monster2.scare(child1)
    assert.equal(child2.scared, false);
  })

  it('Monsters with a scariness less than 2 should get contaminated if they try to scare a child', function(){
    var monster = new Monster("George");
    var child = new Child("Timmy");
    monster.scare(child);
    assert.equal(monster.contaminated, true);
    assert.equal(child.scared, false);
  })

  it('When children scream, they should produce scream-energy equal to the scariness of the monster minus the number of times they have screamed', function(){
    var monster1 = new Monster("George", 3);
    var monster2 = new Monster("Sully", 6);
    var child = new Child("Timmy");
    assert.equal(child.scream(monster1), 2)
    assert.equal(child.scream(monster2), 4)
  })

  it('Monsters should collect the scream-energy in a container', function(){
    var monster = new Monster("Sully", 5);
    var child = new Child("Timmy")
    assert.deepEqual(monster.screamContainer, [])
    monster.scare(child);
    assert.deepEqual(monster.screamContainer, [4]);
    monster.scare(child);
    assert.deepEqual(monster.screamContainer, [4, 3])
    monster.scare(child);
    assert.deepEqual(monster.screamContainer, [4, 3, 2])
  })

  it('If returned scream-energy is zero, child is not scared and monster is contaminated', function(){
    var monster = new Monster("George", 2);
    var child = new Child("Timmy")
    monster.scare(child);
    assert.deepEqual(monster.screamContainer, [1]);
    monster.scare(child);
    assert.equal(monster.contaminated, true);
    assert.equal(child.scared, false)
  }) 
  
  it('Monsters should be able to turn-in total scream-energy at the end of the day', function(){
    var monster = new Monster("Randall", 4);
    var child = new Child("Timmy")
    var child2 = new Child("Susie")
    monster.scare(child);
    assert.deepEqual(monster.screamContainer, [3]);
    monster.scare(child);
    assert.deepEqual(monster.screamContainer, [3, 2])
    monster.scare(child2);
    assert.deepEqual(monster.screamContainer, [3, 2, 3])
    assert.equal(monster.turnInEnergy(), 8)
    assert.deepEqual(monster.screamContainer, [])
  })

})

describe('Child', function(){
  it('should be a function', function () {
    assert.isFunction(Child);
  });

  it('should have a name', function() {
    var child = new Child("Thomas");
    assert.equal(child.name, "Thomas")
  })

  it('should not be scared by default', function() {
    var child = new Child("George");
    assert.equal(child.scared, false);
  });

  it("should be scared after screaming", function() {
    var monster = new Monster ("Fred", 4)
    var child = new Child("David");
    child.scream(monster);
    assert.equal(child.scared, true);
  });

  it("should keep track of how many times it has screamed", function(){
    var monster = new Monster ("Fred", 4)
    var child = new Child("David");
    child.scream(monster);
    child.scream(monster);
    assert.equal(child.screams, 2)
  })
})
