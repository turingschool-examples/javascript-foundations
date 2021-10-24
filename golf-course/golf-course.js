class GolfCourse {
  constructor(name, difficulty, numberOfOpenings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = numberOfOpenings;
    this.features = features;
    this.currentlyPlaying = [];
  }
  checkInGroup(group) {
    if (group.length <= this.openings) {
      for (let i = 0; i < group.length; i++) {
        this.currentlyPlaying.unshift(group[i].name);
      }
      this.openings -= group.length;
      return `You're checked in. Have fun!`;
    }
    return 'Sorry, we are currently booked! Please come back later.';
  }
}

module.exports = GolfCourse;
