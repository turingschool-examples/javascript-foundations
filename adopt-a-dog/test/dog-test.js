var Dog = require("../src/dog.js");
var assert = require('chai').assert;

describe("Dog", function() {

  it.skip('should have a name and age', function() {
    var luna = new Dog({ name: 'Luna', age: 3});
    var toph = new Dog({ name: 'Toph', age: 2.5});

    assert.equal(luna.name, 'Luna');
    assert.equal(luna.age, 3);

    assert.equal(toph.name, 'Toph');
    assert.equal(toph.age, 2.5);
  })

  it.skip('should start off hungry, with some energy, and no friends', function() {
    var cap = new Dog({ name: 'Cap', age: 0.5});

    assert.equal(cap.energyLevel, 5);
    assert.equal(cap.hungry, true);
    assert.deepEqual(cap.friends, []);
  })

  it.skip('should no longer be hungry after eating', function() {
    var goose = new Dog({ name: 'Goose', age: 1.5});

    assert.equal(goose.hungry, true);

    var happyGoose = goose.eat();

    assert.equal(goose.hungry, false);
    assert.equal(happyGoose, 'Yum!');
  })

  it.skip('should not eat if they\'re not hungry', function() {
    var wren = new Dog({ name: 'Wren', age: 5});

    var firstMeal = wren.eat();
    var secondMeal = wren.eat();

    assert.equal(secondMeal, 'I refuse to eat.');
  })

  it.skip('should burn energy when playing', function() {
    var connie = new Dog({ name: 'Conrad', age: 4 });

    assert.equal(connie.energyLevel, 5);

    var fetchingPup = connie.fetchBall();

    assert.equal(connie.energyLevel, 4);
    assert.equal(fetchingPup, 'This is fun!');
  })

  it.skip('should not fetch the ball if they\'re too tired', function() {
    //note: they should only fetch with an energy level of more than 3
    var connie = new Dog({ name: 'Conrad', age: 4 });

    assert.equal(connie.energyLevel, 5);

    var firstFetch = connie.fetchBall();
    var secondFetch = connie.fetchBall();

    assert.equal(connie.energyLevel, 3);

    var thirdFetch = connie.fetchBall();

    assert.equal(connie.energyLevel, 3);
    assert.equal(thirdFetch, 'Nah, I\'m going to sleep instead.');
  })

  it.skip('should rest to get more energy', function() {
    var goose = new Dog({ name: 'Goose', age: 1.5});

    assert.equal(goose.energyLevel, 5);

    goose.sleep();

    assert.equal(goose.energyLevel, 6);
  })

  it.skip('should not be able to get an energy level higher than 10', function() {
    var cap = new Dog({ name: 'Cap', age: 0.5});

    assert.equal(cap.energyLevel, 5);

    for (var i = 0; i < 5; i++) {
      cap.sleep();
    }

    assert.equal(cap.energyLevel, 10);
    assert.equal(cap.sleep(), 'I have too much energy to rest. I\'m going to chew something instead.');
    assert.equal(cap.energyLevel, 10);
  })

  it.skip('should be able to gain new friends', function() {
    var cap = new Dog({ name: 'Cap', age: 2});
    var psi = new Dog({ name: 'Psi', age: 3});

    cap.makeNewFriend(psi);

    assert.equal(cap.friends[0], 'Psi');
  })

});
