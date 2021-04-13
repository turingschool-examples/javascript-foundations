class GolfCourse {
  constructor(course, difficulty, openings, features) {
    this.name = course;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  }
    checkInGroup(group) {
      if (this.openings >= group.length) {
        this.openings = this.openings - group.length;
        for (var i = 0; i < group.length; i++) {
          var golferName = group[i].name;
          this.currentlyPlaying.unshift(golferName)
        }
        return "You\'re checked in. Have fun!"
        } else {
          return "Sorry, we are currently booked! Please come back later."
      }
    }
  }


// only check in new players if course is not full
// 8 openings is full
// if (this.currentlyPlaying.length < 8 + checkInGroup.length) {




module.exports = GolfCourse;

// npm test golf-course/golf-course-test.js
