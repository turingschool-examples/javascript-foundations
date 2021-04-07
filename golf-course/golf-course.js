class GolfCourse {
  constructor(course, difficulty, openings, features) {
    this.name = course;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    this.openings = this.openings - group.length;
    for (var i = 0; i < group.length; i++) {
      if (this.openings > 0) {
        this.currentlyPlaying.unshift(group[i].name)
      }
    }
    return "You\'re checked in. Have fun!"
  }
}

module.exports = GolfCourse;

// npm test golf-course/golf-course-test.js
