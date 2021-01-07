var assert = require('chai').assert;
var GolfCourse = require('./golf-course.js');
var Golfer = require('./golfer.js')

describe('Golf Course', function () {
  it.skip('should have a name and difficulty', function () {
    var golfCourse = new GolfCourse('Overland GC', 'moderate');
    assert.equal(golfCourse.name, 'Overland GC');
    assert.equal(golfCourse.difficulty, 'moderate');
  });

  it.skip('should have a total number of openings for the day', function () {
    var golfCourse1 = new GolfCourse('Harvard Gulch', 'moderate', 25);
    var golfCourse2 = new GolfCourse('Todd Crick', 'hard', 11);
    assert.equal(golfCourse1.openings, 25);
    assert.equal(golfCourse2.openings, 11);
  });

  it.skip('should have some unique features', function () {
    var golfCourse1 = new GolfCourse('Arrowhead', 'hard', 42, ['great views', 'wildlife']);
    var golfCourse2 = new GolfCourse('Bay Hill', 'hard', 11, ['water', 'Arnies Place']);
    assert.deepEqual(golfCourse1.features, ['great views', 'wildlife']);
    assert.deepEqual(golfCourse2.features, ['water', 'Arnies Place']);
  });

  // PASS GOLFER TESTS BELOW BEFORE FINISHING REMAINING GOLF COURSE TESTS

  it.skip('should accept golfers if there is room available', function () {
    var golfCourse = new GolfCourse('Bear Dance', 'hard', 8, ['bear shaped green, views']);
    var golfer1 = new Golfer({ name: 'Pat', handicap: 11 });
    var golfer2 = new Golfer({ name: 'Ted', handicap: 13 });
    var golfer3 = new Golfer({ name: 'Kevin', handicap: 15 });
    var golfer4 = new Golfer({ name: 'Joanna', handicap: 7 });
    var golfer5 = new Golfer({ name: 'Bridget', handicap: 25 });
    var golfer6 = new Golfer({ name: 'Brad', handicap: 12 });
    var golfer7 = new Golfer({ name: 'Pritchard', handicap: 24 });
    var golfer8 = new Golfer({ name: 'Colin', handicap: 30 });
    var golfer9 = new Golfer({ name: 'Nancy', handicap: 11 });

    var group1 = [golfer1, golfer2, golfer3];
    var group2 = [golfer4, golfer5];
    var group3 = [golfer6, golfer7, golfer8, golfer9]

    assert.equal(golfCourse.openings, 8);
    assert.deepEqual(golfCourse.currentlyPlaying, []);
    golfCourse.checkInGroup(group1);
    assert.equal(golfCourse.openings, 5);
    assert.deepEqual(golfCourse.currentlyPlaying, ['Kevin', 'Ted', 'Pat']);

    golfCourse.checkInGroup(group2);
    assert.equal(golfCourse.openings, 3);
    assert.deepEqual(golfCourse.currentlyPlaying, ['Bridget', 'Joanna', 'Kevin', 'Ted', 'Pat']);

    golfCourse.checkInGroup(group3);
    assert.equal(golfCourse.openings, 3);
    assert.deepEqual(golfCourse.currentlyPlaying, ['Bridget', 'Joanna', 'Kevin', 'Ted', 'Pat']);
  });

  it.skip('should recommend which tees to play from based on handicap', function () {
    var golfCourse = new GolfCourse('Fossil Trace', 'hard', 5, ['artifacts on course', 'layout']);
    var golfer1 = new Golfer({ name: 'Ruth', handicap: 10 });
    var golfer2 = new Golfer({ name: 'Irwin', handicap: 11 });
    var golfer3 = new Golfer({ name: 'Nancy', handicap: 14 });
    var golfer4 = new Golfer({ name: 'Terry', handicap: 15 });

    assert.equal(golfCourse.recommendTees(golfer1), 'You should play from the Difficult Tees.');
    assert.equal(golfCourse.recommendTees(golfer2), 'You should play from the Middle Tees.');
    assert.equal(golfCourse.recommendTees(golfer3), 'You should play from the Middle Tees.');
    assert.equal(golfCourse.recommendTees(golfer4), 'You should play from the Forward Tees.');
  });
});

describe('Golfer', function () {
  it.skip('should have a name and handicap', function () {
    var golfer = new Golfer({ name: 'Will', handicap: 21 });
    assert.equal(golfer.name, 'Will');
    assert.equal(golfer.handicap, 21);
  });

  it.skip('should start out minimally frustrated', function () {
    var golfer = new Golfer({ name: 'Ryan', handicap: 19 });
    assert.equal(golfer.name, 'Ryan');
    assert.equal(golfer.frustration, 0);
  });

  it.skip('should be able to calculate their average score based on par 72', function () {
    var golfer1 = new Golfer({ name: 'Kyle', handicap: 4 });
    var golfer2 = new Golfer({ name: 'Michelle', handicap: 10 });
    assert.equal(golfer1.calculateAvg(), 'I usually shoot a 76 on average.');
    assert.equal(golfer2.calculateAvg(), 'I usually shoot a 82 on average.');
  });

  it.skip('should become frustrated based on the course difficulty (HARD or MODERATE - golf is never easy)', function () {
    var golfer1 = new Golfer({ name: 'Thomas', handicap: 15 });
    var golfer2 = new Golfer({ name: 'Margit', handicap: 4 });
    var golfCourse1 = new GolfCourse('Bear Dance', 'hard', 44, ['elevation', 'views']);
    var golfCourse2 = new GolfCourse('Willis Case', 'moderate', 31, ['proximity to Denver', 'layout']);

    golfer1.playRound(golfCourse1);
    assert.equal(golfer1.frustration, 500);

    golfer2.playRound(golfCourse2);
    assert.equal(golfer2.frustration, 100);
  });

  function simulatePractice(num, golfer) {
    for (var i = 0; i < num; i++) {
      golfer.hitTheRange();
    }
  }

  it.skip('should gain confidence after more practice', function () {
    var golfer1 = new Golfer({ name: 'Mark', handicap: 10 });
    assert.equal(golfer1.confidence, 0);
    simulatePractice(1, golfer1);
    assert.equal(golfer1.confidence, 10);
    simulatePractice(5, golfer1);
    assert.equal(golfer1.confidence, 60);
    golfer1.hitTheRange();
    assert.equal(golfer1.confidence, 70);
  });

  it.skip('should be able to make marvel at the features of a golf course', function () {
    var golfer4 = new Golfer({ name: 'Khalid', handicap: 6 });
    var golfCourse1 = new GolfCourse('Arrowhead', 'hard', 42, ['great views', 'wildlife'])
    var golfer5 = new Golfer({ name: 'Amy', handicap: 3 });
    var golfCourse2 = new GolfCourse('Arrowhead', 'hard', 42, ['undulating greens', 'creative layout'])

    assert.deepEqual(golfCourse1.features, ['great views', 'wildlife']);
    assert.deepEqual(golfCourse2.features, ['undulating greens', 'creative layout']);
    assert.equal(golfer4.marvel(golfCourse1), 'I love the great views and wildlife on this course!');
    assert.equal(golfer5.marvel(golfCourse2), 'I love the undulating greens and creative layout on this course!')
  });

  it.skip('should have their performance on a hole affect their frustration **NOTE: Scores below 0 are considered excellent, scores of even par (0) are good, scores above 0 are considered bad**"', function () {
    var golfer1 = new Golfer({ name: 'Zach', handicap: 18 });
   

    assert.equal(golfer1.frustration, 0);

    var shot1 = golfer1.whatYaShoot(4);
    assert.equal(golfer1.frustration, 20);
    assert.equal(shot1, 'Doh!');

    var shot2 = golfer1.whatYaShoot(0);
    assert.equal(golfer1.frustration, 10);
    assert.equal(shot2, 'Booyah!');

    var shot3 = golfer1.whatYaShoot(2);
    assert.equal(golfer1.frustration, 30);
    assert.equal(shot3, 'Doh!');

    var shot4 = golfer1.whatYaShoot(-2);
    assert.equal(golfer1.frustration, 0);
    assert.equal(shot4, 'I AM THE GREATEST GOLFER ALIVE!');

    var shot5 = golfer1.whatYaShoot(3);
    assert.equal(golfer1.frustration, 20);
    assert.equal(shot5, 'Doh!');

    var shot6 = golfer1.whatYaShoot(-1);
    assert.equal(golfer1.frustration, 0);
    assert.equal(shot6, 'I AM THE GREATEST GOLFER ALIVE!');
  });
});

