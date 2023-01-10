var Person = require("../src/person.js");
var Dog = require("../src/dog.js");
var assert = require('chai').assert;

describe("Person", function() {

  it('should have a name and a dog', function() {
    var luna = new Dog({ name: 'Luna', age: 3 });
    var trisha = new Person('Trisha', luna);

    assert.equal(trisha.name, 'Trisha');
    assert.instanceOf(trisha.dog, Dog);
    assert.equal(trisha.dog.name, 'Luna');
  })

  it('should be able to have no dog', function() {
    var dawn = new Person('Dawn');

    assert.equal(dawn.dog, undefined);
  })

  it('should feed dog', function() {
    var toph = new Dog({ name: 'Toph', age: 2.5});
    var nick = new Person('Nick', toph);

    assert.equal(toph.hungry, true);

    nick.fillFoodBowl();

    assert.equal(toph.hungry, false);
  })

  it('should play with dog', function() {
    var wren = new Dog({ name: 'Wren', age: 5});
    var leah = new Person('Leah', wren);
    var toph = new Dog({ name: 'Toph', age: 2.5});
    var nick = new Person('Nick', toph);

    var wrenPlayTime = leah.throwBall();

    assert.equal(wrenPlayTime, 'Wren loves playing fetch!');
    assert.equal(wren.energyLevel, 4);

    var tophPlayTime1 = nick.throwBall();
    var tophPlayTime2 = nick.throwBall();

    assert.equal(tophPlayTime1, 'Toph loves playing fetch!');
    assert.equal(toph.energyLevel, 3);
  })

  it('should not be able to play fetch if the dog is too tired', function() {
    var luna = new Dog({ name: 'Luna', age: 3 });
    var trisha = new Person('Trisha', luna);

    assert.equal(luna.energyLevel, 5);

    trisha.throwBall();
    trisha.throwBall();

    assert.equal(luna.energyLevel, 3);

    trisha.throwBall();
    trisha.throwBall();

    assert.equal(luna.energyLevel, 3);

  })

  it('should be able to introduce your dog to a new dog friend', function() {
    var wren = new Dog({ name: 'Wren', age: 5});
    var toph = new Dog({ name: 'Toph', age: 2.5});
    var nick = new Person('Nick', toph);

    nick.introduceNewFriends(wren);

    assert.equal(toph.friends[0], 'Wren');
  })

  it('should be able to adopt a dog if they don\'t already have one', function() {
    var dawn = new Person('Dawn');

    dawn.adoptAPup('Rocky', 2);

    assert.instanceOf(dawn.dog, Dog);
    assert.equal(dawn.dog.name, 'Rocky');
    assert.equal(dawn.dog.age, 2);
  })

  it('should not be able to adopt a dog if they already have one', function() {
    var cap = new Dog({ name: 'Cap', age: 0.5});
    var kayla = new Person('Kayla', cap);

    var adoptionAttempt = kayla.adoptAPup('Chloe', 1);

    assert.equal(kayla.dog.name, 'Cap');
    assert.equal(adoptionAttempt, 'You can\'t adopt Chloe. You already have Cap!');
  })

})
