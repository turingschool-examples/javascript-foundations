var assert = require('chai').assert;
var {createHobbit, celebrateBirthday, getRing, meetPeople, findFriends} = require('../exercises/hobbit');

describe('Hobbit', function() {

  it('should make a hobbit with a name and age', function() {
    var bilbo = createHobbit('Bilbo', 0);
    var mark = createHobbit('Mark', 5);

    assert.equal(bilbo.name, 'Bilbo');
    assert.equal(mark.name, 'Mark');

    assert.equal(bilbo.age, 0);
    assert.equal(mark.age, 5);
  });

  it('should start out 0 years old if not specified', function() {
    var bilbo = createHobbit('Bilbo');

    assert.equal(bilbo.age, 0);
  });

  it('should return an object with defaults if nothing passed', function() {
    var hobbit = createHobbit();

    assert.equal(hobbit.name, 'unknown');
    assert.equal(hobbit.age, 0);
  });

  it('should gain 1 year after every birthday', function() {
    var hobbit = createHobbit('Meriadoc');

    var olderHobbit = celebrateBirthday(hobbit);
    var evenOlderHobbit = celebrateBirthday(olderHobbit);
    var evenOlderStillHobbit = celebrateBirthday(evenOlderHobbit);

    assert.equal(evenOlderStillHobbit.age, 3);
  });

  it('should be considered a child at the age of 32', function() {
    var taylor = createHobbit('Taylor', 31);

    assert.equal(taylor.age, 31);
    assert.equal(taylor.isAdult, false);

    var olderTaylor = celebrateBirthday(taylor)

    assert.equal(olderTaylor.age, 32);
    assert.equal(olderTaylor.isAdult, false);
  });

  it('should be considered an adult at 33', function() {
    var ryan = createHobbit('Ryan', 32);

    var olderRyan = celebrateBirthday(ryan);

    assert.equal(olderRyan.age, 33);
    assert.equal(olderRyan.isAdult, true);
  });

  it('should be considered old at the age of 101', function() {
    var samwise = createHobbit('Samwise', 99);

    assert.equal(samwise.age, 99)
    assert.equal(samwise.isOld, false)

    var hundredYearOldSamwise = celebrateBirthday(samwise);

    assert.equal(hundredYearOldSamwise.age, 100)
    assert.equal(hundredYearOldSamwise.isOld, false)

    var hundredAndOneSamwise = celebrateBirthday(hundredYearOldSamwise);

    assert.equal(hundredAndOneSamwise.age, 101);
    assert.equal(hundredAndOneSamwise.isOld, true)
  });

  it('should be able to get the ring if its name is Frodo', function() {
    var hobbit1 = createHobbit('Frodo');
    var hobbit2 = createHobbit('Samwise');

    assert.equal(getRing(hobbit1), 'Here is the ring!');
    assert.equal(getRing(hobbit2), 'You can\'t have it!');
  });

  it('should start with no acquaintances', function() {
    var bilbo = createHobbit('Bilbo');

    assert.equal(bilbo.name, 'Bilbo');
    assert.equal(bilbo.acquaintances.length, 0);
    assert.deepEqual(bilbo.acquaintances, []);
  });

   //Spicy
  it('should be able to meet people', function() {
    var people = [ {name: 'Nick', relationship: 'friend'} ];
    var bilbo = createHobbit('Bilbo');

    var socialBilbo = meetPeople(bilbo, people)

    assert.equal(socialBilbo.name, 'Bilbo');
    assert.equal(socialBilbo.acquaintances.length, 1);
    assert.equal(socialBilbo.acquaintances[0].name, 'Nick');
    assert.equal(socialBilbo.acquaintances[0].relationship, 'friend');
  });

  it('should be able to meet several people at once', function() {
    var people = [ {name: 'Nick', relationship: 'friend'}, {name: 'Ben', relationship: 'enemy'} ];
    var bilbo = createHobbit('Bilbo');

    var socialBilbo = meetPeople(bilbo, people)

    assert.equal(socialBilbo.name, 'Bilbo');
    assert.equal(socialBilbo.acquaintances.length, 2);
    assert.deepEqual(socialBilbo.acquaintances[0], {name: 'Nick', relationship: 'friend'});
    assert.deepEqual(socialBilbo.acquaintances[1], {name: 'Ben', relationship: 'enemy'});
    assert.deepEqual(socialBilbo.acquaintances, people);
  });

  it('should be able to meet people on multiple occasions', function() {
    var nick = {name: 'Nick', relationship: 'friend'};
    var ben = {name: 'Ben', relationship: 'enemy'};
    var people = [ nick, ben ];
    var bilbo = createHobbit('Bilbo');

    var socialBilbo = meetPeople(bilbo, people)

    assert.equal(socialBilbo.acquaintances.length, 2);
    assert.deepEqual(socialBilbo.acquaintances, people);

    var trisha = {name: 'Trisha', relationship: 'enemy'};
    var dustin = {name: 'Dustin', relationship: 'friend'};
    var morePeople = [ trisha, dustin ];

    var moreSocialBilbo = meetPeople(socialBilbo, morePeople);

    assert.equal(moreSocialBilbo.acquaintances.length, 4);
    assert.deepEqual(moreSocialBilbo.acquaintances, [nick, ben, trisha, dustin]);
  });

  it('should be able to identify which acquaintances are friends ', function() {
    var foster = {name: 'Foster', relationship: 'friend'};
    var allie = {name: 'Allie', relationship: 'enemy'};
    var garrett = {name: 'Garrett', relationship: 'enemy'};
    var dustin = {name: 'Dustin', relationship: 'friend'};
    
    var bilbo = createHobbit('Bilbo');
    var socialBilbo = meetPeople(bilbo, [foster, allie, garrett, dustin])

    var friends = findFriends(socialBilbo)

    assert.equal(friends.length, 2);
    assert.equal(friends[0], "Foster");
    assert.equal(friends[1], "Dustin");
    assert.deepEqual(friends, ["Foster", "Dustin"]);
  });
});
