var assert = require("chai").assert;
var Skier = require("../src/Skier");
var Lift = require("../src/Lift");

describe("Ski Lift", function () {
  it('should instantiate a ski-lift object', function () {
    var lift = new Lift();

    assert.instanceOf(lift, Lift);
  });

  it('should be in service', function () {
    var lift = new Lift();

    assert.equal(lift.inService, true);
  });

  it('should have an amount of people it can take per chair', function() {
    var lift = new Lift(3);

    assert.equal(lift.limit, 3);
  });

  it('should start out without any skiiers', function () {
    var lift = new Lift(3);

    assert.deepEqual(lift.skiers, []);
  });

  it('should have the bar lifted up by default', function() {
    var lift = new Lift(2);

    assert.deepEqual(lift.safetyBar, 'up');
  })

  it('should seat skiers', function() {
    var lift = new Lift(3);

    lift.admitSkier('Pam', true);
    lift.admitSkier('Jeff', true);

    assert.deepEqual(lift.skiers.length, 2);
    assert.deepEqual(lift.skiers[1].name, 'Jeff');
    assert.instanceOf(lift.skiers[1], Skier);
  });

  it('should only seat skiers if there are enough spots', function() {
    var lift = new Lift(2);

    lift.admitSkier('Hannah', true);
    lift.admitSkier('Scott', true);
    var admit = lift.admitSkier('Kayla', true);

    assert.deepEqual(lift.skiers.length, 2);
    assert.deepEqual(lift.skiers[1].name, 'Scott');
    assert.instanceOf(lift.skiers[1], Skier);

    assert.equal(admit, 'Sorry, Kayla. Please wait for the next lift!')
  });

  it('should only seat skiers that have lift tickets', function () {
    var lift = new Lift(1);

    var admit = lift.admitSkier('Hannah', false);
    lift.admitSkier('Scott', true);

    assert.deepEqual(lift.skiers.length, 1);
    assert.deepEqual(lift.skiers[0].name, 'Scott');
    assert.instanceOf(lift.skiers[0], Skier);

    assert.equal(admit, 'Sorry, Hannah. You need a lift ticket!')
  });

  it('should lower the safety bar once all skier positions are filled', function() {
    var lift = new Lift(4);

    lift.admitSkier('Hannah', false);
    lift.admitSkier('Scott', true);
    lift.admitSkier('Will', true);
    lift.admitSkier('Eric', true);
    lift.admitSkier('Leta', true);

    lift.startLift();

    assert.deepEqual(lift.skiers.length, 4);
    assert.equal(lift.safetyBar, 'down');
  });

  it('should not lower the safety bar until all skier positions are filled', function () {
    var lift1 = new Lift(4);
    var lift2 = new Lift(3)

    lift1.admitSkier('Hannah', false);
    lift1.admitSkier('Scott', false);
    lift1.admitSkier('Will', true);
    lift1.admitSkier('Eric', true);
    lift1.admitSkier('Leta', true);

    lift2.admitSkier('Hannah', true);
    lift2.admitSkier('Kayla', false);

    lift1.startLift();
    lift2.startLift();

    assert.deepEqual(lift1.skiers.length, 3);
    assert.deepEqual(lift2.skiers.length, 1);

    assert.equal(lift1.safetyBar, 'up');
    assert.equal(lift2.safetyBar, 'up');
  });

  it('should know how many skiers are needed before starting', function () {
    var lift1 = new Lift(4);
    var lift2 = new Lift(3);

    lift1.admitSkier('Hannah', false);
    lift1.admitSkier('Scott', false);
    lift1.admitSkier('Will', true);
    lift1.admitSkier('Eric', true);
    lift1.admitSkier('Leta', true);

    lift2.admitSkier('Hannah', true);
    lift2.admitSkier('Kayla', false);

    var start1 = lift1.startLift();
    var start2 = lift2.startLift();

    assert.deepEqual(lift1.skiers.length, 3);
    assert.deepEqual(lift2.skiers.length, 1);

    assert.equal(lift1.safetyBar, 'up');
    assert.equal(lift2.safetyBar, 'up');

    assert.equal(start1, 'We still need 1 more skier!');
    assert.equal(start2, 'We still need 2 more skiers!');
  });
});
